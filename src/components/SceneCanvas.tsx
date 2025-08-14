import { Canvas } from "@react-three/fiber";
import { OrbitControlsManual } from "./OrbitControlsManual";
import { GridLines } from "./graphGeometry/gridlines";
import { BasisVectors } from "./graphGeometry/basisVectors";
import { Arrow } from "./basicGraphShapes.tsx/arrow";

export default function SceneCanvas({
  maxAxisValue,
}: {
  maxAxisValue: number;
}) {
  return (
    <Canvas
      style={{ background: "#0a0a0a" }}
      camera={{ position: [15, 15, 15], fov: 60 }}
    >
      <OrbitControlsManual />

      <group>
        <GridLines maxAxisValue={maxAxisValue} />
        <BasisVectors />
        {/* <Arrow start={[0, 0, 0]} end={[1, 1, 1]}  /> */}
      </group>
    </Canvas>
  );
}
