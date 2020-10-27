import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide, LatheBufferGeometry, Vector2 } from "three";
import getRandomColor from "../lib/getRandomColor";

function Lathe(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const points = [];
  for (let i = 0; i < 10; ++i) {
    points.push(new Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.15, 0.15, 0.15]}
      geometry={new LatheBufferGeometry(points)}
    >
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Lathe;
