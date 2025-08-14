import { Arrow } from "../basicGraphShapes.tsx/arrow";
import { Text } from "../basicGraphShapes.tsx/text";

export function BasisVectors() {
  const vectorThickness = 0.06;

  return (
    <>
      <Arrow
        start={[0, 0, 0]}
        end={[1, 0, 0]}
        colour={0x42f5f5}
        thickness={vectorThickness}
      />
      <Text text="i" position={[1, 0, 0]} colour={0x42f5f5} />

      <Arrow
        start={[0, 0, 0]}
        end={[0, 1, 0]}
        colour={0x42f5f5}
        thickness={vectorThickness}
      />
      <Text text="j" position={[0, 1, 0]} colour={0x42f5f5} />

      <Arrow
        start={[0, 0, 0]}
        end={[0, 0, 1]}
        colour={0x42f5f5}
        thickness={vectorThickness}
      />
      <Text text="k" position={[0, 0, 1]} colour={0x42f5f5} />
    </>
  );
}
