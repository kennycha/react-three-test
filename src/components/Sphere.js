import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide } from "three";
import getRandomColor from "../lib/getRandomColor";

function Sphere(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <sphereBufferGeometry args={[1, 18]} />
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Sphere;
