import type { JSX } from "react";
import { Line } from "./line";

export function GridLines({ maxAxisValue }: { maxAxisValue: number }) {
  const range = Array.from(
    { length: 2 * maxAxisValue + 1 },
    (_, i) => i - maxAxisValue
  );

  const lines: JSX.Element[] = [];

  //   xAxisParallelLines
  for (var y of range) {
    for (var z of range) {
      lines.push(
        <Line start={[-maxAxisValue, y, z]} end={[maxAxisValue, y, z]} />
      );
    }
  }

  //   yAxisParallelLines
  for (var x of range) {
    for (var z of range) {
      lines.push(
        <Line start={[x, -maxAxisValue, z]} end={[x, maxAxisValue, z]} />
      );
    }
  }

  //   zAxisParallelLines
  for (var x of range) {
    for (var y of range) {
      lines.push(
        <Line start={[x, y, -maxAxisValue]} end={[x, y, maxAxisValue]} />
      );
    }
  }

  return (
    <group>
      {lines}
    </group>
  );
}
