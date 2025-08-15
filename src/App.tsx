import "./App.css";
import { ChoosingBasisVectors } from "./components/choosingBasisVectors/choosingBasisVectors";
import SceneCanvas from "./components/SceneCanvas";
import { useState } from "react";

type BasisVectors = {
  i: [number, number, number];
  j: [number, number, number];
  k: [number, number, number];
};

function App() {
  const maxAxisValue = 3;
  
  const [basisVectors, setBasisVectors] = useState<BasisVectors>({
    i: [1, 0, 0],
    j: [0, 1, 0],
    k: [0, 0, 1],
  });

  return (
    <>
      <ChoosingBasisVectors 
        maxAxisValue={maxAxisValue} 
        basisVectors={basisVectors}
        setBasisVectors={setBasisVectors}
      />
      <SceneCanvas 
        maxAxisValue={maxAxisValue} 
        basisVectors={basisVectors}
      />
    </>
  );
}

export default App;
