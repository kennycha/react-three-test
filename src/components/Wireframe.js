import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxBufferGeometry, WireframeGeometry } from "three";

function Wireframe(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const width = 2;
  const height = 2;
  const depth = 2;

  const wireframe = new WireframeGeometry(
    new BoxBufferGeometry(width, height, depth)
  );

  return (
    <lineSegments
      {...props}
      ref={mesh}
      scale={[0.7, 0.7, 0.7]}
      geometry={wireframe}
    >
      <lineBasicMaterial color="#000000" />
    </lineSegments>
  );
}

export default Wireframe;
