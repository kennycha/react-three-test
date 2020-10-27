import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide, ExtrudeBufferGeometry, Shape } from "three";
import getRandomColor from "../lib/getRandomColor";

function Heart(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const shape = new Shape();
  const x = -2.5;
  const y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extrudeSettings = {
    steps: 2,
    depth: 2,
    // 사각(bevel)을 주어 깎아냄
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 2,
  };
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.15, 0.15, 0.15]}
      geometry={new ExtrudeBufferGeometry(shape, extrudeSettings)}
    >
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Heart;
