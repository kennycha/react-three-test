import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide } from "three";
import getRandomColor from "../lib/getRandomColor";

function Circle(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <circleBufferGeometry args={[1, 32]} />
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Circle;
