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
        <Line
          start={[-maxAxisValue, y, z]}
          end={[maxAxisValue, y, z]}
          opacity={getOpacity(y, z)}
        />
      );
    }
  }

  //   yAxisParallelLines
  for (var x of range) {
    for (var z of range) {
      lines.push(
        <Line
          start={[x, -maxAxisValue, z]}
          end={[x, maxAxisValue, z]}
          opacity={getOpacity(x, z)}
        />
      );
    }
  }

  //   zAxisParallelLines
  for (var x of range) {
    for (var y of range) {
      lines.push(
        <Line
          start={[x, y, -maxAxisValue]}
          end={[x, y, maxAxisValue]}
          opacity={getOpacity(x, y)}
        />
      );
    }
  }

  return <group>{lines}</group>;
}

function getOpacity(a: number, b: number) {
  return a == 0 && b == 0 ? 1 : 0.2;
}
