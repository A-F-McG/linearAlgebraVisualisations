export function ChoosingBasisVectors({
  maxAxisValue,
}: {
  maxAxisValue: number;
}) {
  return (
    <>
      <fieldset>
        <legend>Transform i to</legend>

        <div className="flex flex-col">
          <div>
            <label htmlFor="ix">
              i <sub>x</sub>
            </label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="ix"
            />
          </div>

          <label htmlFor="iy">
            i <sub>y</sub>
          </label>
          <input id="iy" />

          <label htmlFor="iz">
            i <sub>z</sub>
          </label>
          <input id="iz" />
        </div>
      </fieldset>
    </>
  );
}
