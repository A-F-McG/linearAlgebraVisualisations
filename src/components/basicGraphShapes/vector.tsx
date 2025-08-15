import { useRef, type RefObject } from "react";
import * as THREE from "three";

export function Vector({
  start,
  end,
  colour,
  ref,
  thickness = 0.05,
}: {
  start: [number, number, number];
  end: [number, number, number];
  colour: number;
  ref?: RefObject<THREE.Group>;
  thickness?: number;
}) {  
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  const dir = new THREE.Vector3().subVectors(endVec, startVec);
  const length = dir.length();
  const unitDir = dir.clone().normalize();

  const coneLength = 0.3;
  const coneRadius = 0.1;
  const shaftLength = length - coneLength;

  const shaftPosition = startVec
    .clone()
    .add(unitDir.clone().multiplyScalar(shaftLength / 2));

  const conePosition = startVec
    .clone()
    .add(unitDir.clone().multiplyScalar(shaftLength + coneLength / 2));

  const axis = new THREE.Vector3(0, 1, 0);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, unitDir);

  return (
    <group ref={ref}> 
      <mesh position={shaftPosition} quaternion={quaternion}>
        <cylinderGeometry
          args={[thickness / 2, thickness / 2, shaftLength, 16]}
        />
        <meshBasicMaterial color={colour} />
      </mesh>

      <mesh position={conePosition} quaternion={quaternion}>
        <coneGeometry args={[coneRadius, coneLength, 32, 1, true]} />
        <meshBasicMaterial color={colour} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
