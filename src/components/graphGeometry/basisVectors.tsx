import { Vector } from "../basicGraphShapes/vector";
import { Text } from "../basicGraphShapes/text";

type BasisVectorsType = {
  i: [number, number, number];
  j: [number, number, number];
  k: [number, number, number];
};

export function BasisVectors({
  basisVectors,
}: {
  basisVectors: BasisVectorsType;
}) {
  const vectorThickness = 0.06;

  return (
    <>
      <Vector
        start={[0, 0, 0]}
        end={basisVectors.i}
        colour={0xff7f00}
        thickness={vectorThickness}
      />
      <Text text="i" position={basisVectors.i} colour={0xff7f00} />

      <Vector
        start={[0, 0, 0]}
        end={basisVectors.j}
        colour={0x00ff7f}
        thickness={vectorThickness}
      />
      <Text text="j" position={basisVectors.j} colour={0x00ff7f} />

      <Vector
        start={[0, 0, 0]}
        end={basisVectors.k}
        colour={0x007fff}
        thickness={vectorThickness}
      />
      <Text text="k" position={basisVectors.k} colour={0x007fff} />
    </>
  );
}
