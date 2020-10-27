import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide, PolyhedronBufferGeometry } from "three";
import getRandomColor from "../lib/getRandomColor";

function Cube(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const verticesOfCube = [
    -1,
    -1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    -1,
    -1,
    1,
    1,
    -1,
    1,
    1,
    1,
    1,
    -1,
    1,
    1,
  ];
  const indicesOfFaces = [
    2,
    1,
    0,
    0,
    3,
    2,
    0,
    4,
    7,
    7,
    3,
    0,
    0,
    1,
    5,
    5,
    4,
    0,
    1,
    2,
    6,
    6,
    5,
    1,
    2,
    3,
    7,
    7,
    6,
    2,
    4,
    5,
    6,
    6,
    7,
    4,
  ];
  const radius = 7;
  const detail = 2;
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.15, 0.15, 0.15]}
      geometry={
        new PolyhedronBufferGeometry(
          verticesOfCube,
          indicesOfFaces,
          radius,
          detail
        )
      }
    >
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Cube;
