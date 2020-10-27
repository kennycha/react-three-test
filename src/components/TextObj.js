import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { DoubleSide, FontLoader, TextBufferGeometry } from "three";
import getRandomColor from "../lib/getRandomColor";

function TextObj(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const loader = new FontLoader();

  function loadFont(url) {
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
  }
  loader.load(
    "https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json",
    function (font) {
      return (
        <mesh
          {...props}
          ref={mesh}
          scale={[0.15, 0.15, 0.15]}
          geometry={
            new TextBufferGeometry("three.js", {
              font: font,
              size: 3.0,
              height: 0.2,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.15,
              bevelSize: 0.3,
              bevelSegments: 5,
            })
          }
        >
          <meshPhongMaterial color={getRandomColor()} />
        </mesh>
      );
    }
  );
}

export default TextObj;
