import type { JSX } from "react";
import { Line } from "../basicGraphShapes.tsx/line";
import { Text } from "../basicGraphShapes.tsx/text";
import { Vector } from "../basicGraphShapes.tsx/vector";

export function GridLines({ maxAxisValue }: { maxAxisValue: number }) {
  const range = Array.from(
    { length: 2 * maxAxisValue + 1 },
    (_, i) => i - maxAxisValue
  );

  const lines: JSX.Element[] = [];
  const mainAxesColour = 0xf542a1;
  const axesThickness = 0.04;

  //   xAxisParallelLines
  for (var y of range) {
    for (var z of range) {
      lines.push(
        y == 0 && z == 0 ? (
          <Vector
            start={[-maxAxisValue, 0, 0]}
            end={[maxAxisValue, 0, 0]}
            colour={mainAxesColour}
            thickness={axesThickness}
          />
        ) : (
          <Line
            start={[-maxAxisValue, y, z]}
            end={[maxAxisValue, y, z]}
            opacity={getOpacity(y, z)}
          />
        )
      );
    }
  }

  //   yAxisParallelLines
  for (var x of range) {
    for (var z of range) {
      lines.push(
        x == 0 && z == 0 ? (
          <Vector
            start={[0, -maxAxisValue, 0]}
            end={[0, maxAxisValue, 0]}
            colour={mainAxesColour}
            thickness={axesThickness}
          />
        ) : (
          <Line
            start={[x, -maxAxisValue, z]}
            end={[x, maxAxisValue, z]}
            opacity={getOpacity(x, z)}
          />
        )
      );
    }
  }

  //   zAxisParallelLines
  for (var x of range) {
    for (var y of range) {
      lines.push(
        x == 0 && y == 0 ? (
          <Vector
            start={[x, y, -maxAxisValue]}
            end={[x, y, maxAxisValue]}
            colour={mainAxesColour}
            thickness={axesThickness}
          />
        ) : (
          <Line
            start={[x, y, -maxAxisValue]}
            end={[x, y, maxAxisValue]}
            opacity={getOpacity(x, y)}
          />
        )
      );
    }
  }

  return (
    <group>
      {lines}
      <Text text="x" position={[maxAxisValue, 0, 0]} colour={mainAxesColour} />
      <Text text="y" position={[0, maxAxisValue, 0]} colour={mainAxesColour} />
      <Text text="z" position={[0, 0, maxAxisValue]} colour={mainAxesColour} />
    </group>
  );
}

function getOpacity(a: number, b: number) {
  return a == 0 && b == 0 ? 1 : 0.2;
}
