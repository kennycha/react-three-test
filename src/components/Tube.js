import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Curve, DoubleSide, TubeBufferGeometry, Vector3 } from "three";
import getRandomColor from "../lib/getRandomColor";

function Tube(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  class CustomSinCurve extends Curve {
    constructor(scale) {
      super();
      this.scale = scale;
    }
    getPoint(t) {
      const tx = t * 3 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;
      return new Vector3(tx, ty, tz).multiplyScalar(this.scale);
    }
  }

  const path = new CustomSinCurve(4);
  const tubularSegments = 20;
  const radius = 1;
  const radialSegments = 8;
  const closed = false;

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.2, 0.2, 0.2]}
      geometry={
        new TubeBufferGeometry(
          path,
          tubularSegments,
          radius,
          radialSegments,
          closed
        )
      }
    >
      <meshPhongMaterial color={getRandomColor()} side={DoubleSide} />
    </mesh>
  );
}

export default Tube;
