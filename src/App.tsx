import "./App.css";
import { ChoosingBasisVectors } from "./components/choosingBasisVectors/choosingBasisVectors";
import SceneCanvas from "./components/SceneCanvas";

function App() {
  const maxAxisValue = 3;

  return (
    <>
      <ChoosingBasisVectors maxAxisValue={maxAxisValue} />
      <SceneCanvas maxAxisValue={maxAxisValue} />
    </>
  );
}

export default App;
