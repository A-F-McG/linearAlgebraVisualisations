import './choosingBasisVectors.css';

export function ChoosingBasisVectors({
  maxAxisValue,
}: {
  maxAxisValue: number;
}) {
  return (
    <div className="basis-vectors-container">
      <h2>Choose where to move the vectors i, j and k and apply a linear transformation</h2>
      <div className="matrix-grid">
        {/* i hat column */}
        <div className="vector-column">
          <h3>î</h3>
          <div className="input-wrapper">
            <label htmlFor="ix">î<sub>x</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="ix"
              step="0.1"
              defaultValue="1"
              aria-label="i hat x component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="iy">î<sub>y</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="iy"
              step="0.1"
              defaultValue="0"
              aria-label="i hat y component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="iz">î<sub>z</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="iz"
              step="0.1"
              defaultValue="0"
              aria-label="i hat z component"
            />
          </div>
        </div>

        {/* j hat column */}
        <div className="vector-column">
          <h3>ĵ</h3>
          <div className="input-wrapper">
            <label htmlFor="jx">ĵ<sub>x</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="jx"
              step="0.1"
              defaultValue="0"
              aria-label="j hat x component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="jy">ĵ<sub>y</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="jy"
              step="0.1"
              defaultValue="1"
              aria-label="j hat y component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="jz">ĵ<sub>z</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="jz"
              step="0.1"
              defaultValue="0"
              aria-label="j hat z component"
            />
          </div>
        </div>

        {/* k hat column */}
        <div className="vector-column">
          <h3>k̂</h3>
          <div className="input-wrapper">
            <label htmlFor="kx">k̂<sub>x</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="kx"
              step="0.1"
              defaultValue="0"
              aria-label="k hat x component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="ky">k̂<sub>y</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="ky"
              step="0.1"
              defaultValue="0"
              aria-label="k hat y component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="kz">k̂<sub>z</sub></label>
            <input
              type="number"
              min={-maxAxisValue}
              max={maxAxisValue}
              id="kz"
              step="0.1"
              defaultValue="1"
              aria-label="k hat z component"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
