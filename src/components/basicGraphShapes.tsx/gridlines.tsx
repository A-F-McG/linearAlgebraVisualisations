import type { JSX } from "react";
import { Line } from "./line";
import { Arrow } from "./arrow";
import { Text } from "./text";

export function GridLines({ maxAxisValue }: { maxAxisValue: number }) {
  const range = Array.from(
    { length: 2 * maxAxisValue + 1 },
    (_, i) => i - maxAxisValue
  );

  const lines: JSX.Element[] = [];
  const xAxisColour = 0xf54290;
  const yAxisColour = 0x42f5d7;
  const zAxisColour = 0xf59642;

  //   xAxisParallelLines
  for (var y of range) {
    for (var z of range) {
      lines.push(
        y == 0 && z == 0 ? (
          <Arrow
            start={[-maxAxisValue, 0, 0]}
            end={[maxAxisValue, 0, 0]}
            colour={xAxisColour}
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
          <Arrow start={[0, -maxAxisValue, 0]} end={[0, maxAxisValue, 0]} />
        ) : (
          <Line
            start={[x, -maxAxisValue, z]}
            end={[x, maxAxisValue, z]}
            opacity={getOpacity(x, z)}
            colour={yAxisColour}
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
          <Arrow
            start={[x, y, -maxAxisValue]}
            end={[x, y, maxAxisValue]}
            colour={zAxisColour}
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
      <Text text="x" position={[maxAxisValue, 0, 0]} colour={xAxisColour} />
      <Text text="y" position={[0, maxAxisValue, 0]} colour={yAxisColour} />
      <Text text="z" position={[0, 0, maxAxisValue]} colour={zAxisColour}/>
    </group>
  );
}

function getOpacity(a: number, b: number) {
  return a == 0 && b == 0 ? 1 : 0.2;
}
