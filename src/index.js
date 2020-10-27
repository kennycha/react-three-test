import ReactDOM from "react-dom";
import React from "react";
import { Canvas } from "react-three-fiber";
import "./index.css";
import Box from "./components/Box";
import Circle from "./components/Circle";
import Cone from "./components/Cone";
import Cylinder from "./components/Cylinder";
import Dodecahedron from "./components/Dodecahedron";
import Heart from "./components/Heart";
import Icosahedron from "./components/Icosahedron";
import Lathe from "./components/Lathe";
import Octahedron from "./components/Octahedron";
import Parametric from "./components/Parametric";
import Plane from "./components/Plane";
import Cube from "./components/Cube";
import Ring from "./components/Ring";
import ShapeLine from "./components/ShapeLine";
import Sphere from "./components/Sphere";
import Tetrahedron from "./components/Tetrahedron";
import Torus from "./components/Torus";
import TorusKnot from "./components/TorusKnot";
import Tube from "./components/Tube";
import Edges from "./components/Edges";
import Wireframe from "./components/Wireframe";

ReactDOM.render(
  <Canvas>
    <ambientLight />
    <pointLight position={[-1, 2, 4]} />
    <pointLight position={[1, -2, -4]} />
    <Box position={[-6, 5, -4]} />
    <Circle position={[-3, 5, -4]} />
    <Cone position={[0, 5, -4]} />
    <Cylinder position={[3, 5, -4]} />
    <Dodecahedron position={[6, 5, -4]} />
    <Heart position={[-6, 2.5, -4]} />
    <Icosahedron position={[-3, 2.5, -4]} />
    <Lathe position={[0, 2.5, -4]} />
    <Octahedron position={[3, 2.5, -4]} />
    <Parametric position={[6, 2.5, -4]} />
    <Plane position={[-6, 0, -4]} />
    <Cube position={[-3, 0, -4]} />
    <Ring position={[0, 0, -4]} />
    <ShapeLine position={[3, 0, -4]} />
    <Sphere position={[6, 0, -4]} />
    <Tetrahedron position={[-6, -2.5, -4]} />
    <Torus position={[0, -2.5, -4]} />
    <TorusKnot position={[3, -2.5, -4]} />
    <Tube position={[6, -2.5, -4]} />
    <Edges position={[-2, -5, -4]} />
    <Wireframe position={[2, -5, -4]} />
  </Canvas>,
  document.getElementById("root")
);
