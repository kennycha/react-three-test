import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide, Shape, ShapeBufferGeometry } from "three";
import getRandomColor from "../lib/getRandomColor";

function ShapeLine(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const x = 0,
    y = 0;

  const heartShape = new Shape();

  heartShape.moveTo(x + 5, y + 5);
  heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
  heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
  heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
  heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.1, 0.1, 0.1]}
      geometry={new ShapeBufferGeometry(heartShape)}
    >
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default ShapeLine;
