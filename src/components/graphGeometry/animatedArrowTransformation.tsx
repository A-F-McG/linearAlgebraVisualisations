import * as THREE from "three";
import { Vector } from "../basicGraphShapes.tsx/vector";
import { useRef, useState } from "react";

export function AnimatedVectorTransformation({
  start,
  end,
  colour,
  thickness = 0.05,
}: {
  start: [number, number, number];
  end: [number, number, number];
  colour: number;
  thickness?: number;
}) {
  const [endPoint, setEndPoint] = useState(end);

  const vectorRef = useRef<THREE.Group>(null!);

  return (
    <>
      <Vector
        start={start}
        end={endPoint}
        colour={colour}
        thickness={thickness}
        ref={vectorRef}
      />
    </>
  );
}
