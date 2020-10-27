import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide, ParametricBufferGeometry } from "three";
import getRandomColor from "../lib/getRandomColor";

function Parametric(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  function klein(v, u, target) {
    u *= Math.PI;
    v *= 2 * Math.PI;
    u = u * 2;

    let x;
    let z;

    if (u < Math.PI) {
      x =
        3 * Math.cos(u) * (1 + Math.sin(u)) +
        2 * (1 - Math.cos(u) / 2) * Math.cos(u) * Math.cos(v);
      z =
        -8 * Math.sin(u) -
        2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
    } else {
      x =
        3 * Math.cos(u) * (1 + Math.sin(u)) +
        2 * (1 - Math.cos(u) / 2) * Math.cos(v + Math.PI);
      z = -8 * Math.sin(u);
    }

    const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);

    target.set(x, y, z).multiplyScalar(0.75);
  }
  const slices = 25;
  const stacks = 25;

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.15, 0.15, 0.15]}
      geometry={new ParametricBufferGeometry(klein, slices, stacks)}
    >
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Parametric;
