import { Canvas } from "@react-three/fiber";
import { OrbitControlsManual } from "./OrbitControlsManual";
import { GridLines } from "./graphGeometry/gridlines";
import { BasisVectors } from "./graphGeometry/basisVectors";
import { Vector } from "./basicGraphShapes/vector";

type BasisVectors = {
  i: [number, number, number];
  j: [number, number, number];
  k: [number, number, number];
};

export default function SceneCanvas({
  maxAxisValue,
  basisVectors,
}: {
  maxAxisValue: number;
  basisVectors: BasisVectors;
}) {
  return (
    <Canvas
      style={{ background: "#0a0a0a" }}
      camera={{ position: [15, 15, 15], fov: 60 }}
    >
      <OrbitControlsManual />

      <group>
        <GridLines maxAxisValue={maxAxisValue} />
        <BasisVectors basisVectors={basisVectors} />
        {/* <Arrow start={[0, 0, 0]} end={[1, 1, 1]}  /> */}
      </group>
    </Canvas>
  );
}
