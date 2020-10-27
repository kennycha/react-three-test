import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxBufferGeometry, EdgesGeometry } from "three";

function Edges(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const width = 2;
  const height = 2;
  const depth = 2;
  const thresholdAngle = 30;

  const edges = new EdgesGeometry(
    new BoxBufferGeometry(width, height, depth),
    thresholdAngle
  );

  return (
    <lineSegments
      {...props}
      ref={mesh}
      scale={[0.7, 0.7, 0.7]}
      geometry={edges}
    >
      <lineBasicMaterial color="#000000" />
    </lineSegments>
  );
}

export default Edges;
