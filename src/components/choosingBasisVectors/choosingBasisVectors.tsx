import './choosingBasisVectors.css';

type BasisVectors = {
  i: [number, number, number];
  j: [number, number, number];
  k: [number, number, number];
};

export function ChoosingBasisVectors({
  maxAxisValue,
  basisVectors,
  setBasisVectors,
}: {
  maxAxisValue: number;
  basisVectors: BasisVectors;
  setBasisVectors: (vectors: BasisVectors) => void;
}) {
  const handleVectorChange = (vector: 'i' | 'j' | 'k', component: 0 | 1 | 2, value: string) => {
    const numValue = parseFloat(value) || 0;
    setBasisVectors({
      ...basisVectors,
      [vector]: basisVectors[vector].map((v, i) => i === component ? numValue : v) as [number, number, number]
    });
  };
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
              id="ix"
              step="0.1"
              value={basisVectors.i[0]}
              onChange={(e) => handleVectorChange('i', 0, e.target.value)}
              aria-label="i hat x component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="iy">î<sub>y</sub></label>
            <input
              type="number"
              id="iy"
              step="0.1"
              value={basisVectors.i[1]}
              onChange={(e) => handleVectorChange('i', 1, e.target.value)}
              aria-label="i hat y component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="iz">î<sub>z</sub></label>
            <input
              type="number"
              id="iz"
              step="0.1"
              value={basisVectors.i[2]}
              onChange={(e) => handleVectorChange('i', 2, e.target.value)}
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
              id="jx"
              step="0.1"
              value={basisVectors.j[0]}
              onChange={(e) => handleVectorChange('j', 0, e.target.value)}
              aria-label="j hat x component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="jy">ĵ<sub>y</sub></label>
            <input
              type="number"
              id="jy"
              step="0.1"
              value={basisVectors.j[1]}
              onChange={(e) => handleVectorChange('j', 1, e.target.value)}
              aria-label="j hat y component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="jz">ĵ<sub>z</sub></label>
            <input
              type="number"
              id="jz"
              step="0.1"
              value={basisVectors.j[2]}
              onChange={(e) => handleVectorChange('j', 2, e.target.value)}
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
              id="kx"
              step="0.1"
              value={basisVectors.k[0]}
              onChange={(e) => handleVectorChange('k', 0, e.target.value)}
              aria-label="k hat x component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="ky">k̂<sub>y</sub></label>
            <input
              type="number"
              id="ky"
              step="0.1"
              value={basisVectors.k[1]}
              onChange={(e) => handleVectorChange('k', 1, e.target.value)}
              aria-label="k hat y component"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="kz">k̂<sub>z</sub></label>
            <input
              type="number"
              id="kz"
              step="0.1"
              value={basisVectors.k[2]}
              onChange={(e) => handleVectorChange('k', 2, e.target.value)}
              aria-label="k hat z component"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
