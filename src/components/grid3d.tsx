import React, { useMemo } from "react";
import * as THREE from "three";
import { Line } from "./basicGraphShapes.tsx/line";

export function Grid3d() {
  const start = useMemo(() => new THREE.Vector3(0, 0, 5), []);
  const end = useMemo(() => new THREE.Vector3(0, 0, -5), []);

  return (
    <group>
      <Line start={start} end={end} />
    </group>
  );
}
