import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide } from "three";
import getRandomColor from "../lib/getRandomColor";

function Plane(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <planeBufferGeometry args={[1.5, 1.5, 2, 2]} />
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Plane;
