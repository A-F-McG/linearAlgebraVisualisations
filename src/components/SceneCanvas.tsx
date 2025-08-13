import { Canvas } from "@react-three/fiber";
import { OrbitControlsManual } from "./OrbitControlsManual";
import { GridLines } from "./basicGraphShapes.tsx/gridlines";

export default function SceneCanvas() {
  return (
    <Canvas
      style={{ background: "#0a0a0a" }}
      camera={{ position: [15, 15, 15], fov: 60 }}
    >
      <OrbitControlsManual />

      <group>
        <GridLines maxAxisValue={3} />
      </group>
    </Canvas>
  );
}
