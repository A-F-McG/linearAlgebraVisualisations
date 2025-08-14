import * as THREE from "three";

export function Arrow({
  start,
  end,
  colour,
  thickness = 0.05,
}: {
  start: [number, number, number];
  end: [number, number, number];
  colour: number;
  thickness?: number;
}) {
  // Calculate direction and length
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  const dir = new THREE.Vector3().subVectors(endVec, startVec);
  const length = dir.length();
  const unitDir = dir.clone().normalize();

  // Parameters
  const coneLength = 0.3;
  const coneRadius = 0.1;
  const shaftLength = length - coneLength;

  // Shaft position (halfway along shaft)
  const shaftPosition = startVec
    .clone()
    .add(unitDir.clone().multiplyScalar(shaftLength / 2));

  // Cone position (at the end, moved backward by half cone length)
  const conePosition = startVec
    .clone()
    .add(unitDir.clone().multiplyScalar(shaftLength + coneLength / 2));

  // Compute rotation quaternion to align +Y with direction vector
  const axis = new THREE.Vector3(0, 1, 0);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, unitDir);

  return (
    <group>
      {/* Shaft: CylinderGeometry aligned along Y */}
      <mesh position={shaftPosition} quaternion={quaternion}>
        <cylinderGeometry
          args={[thickness / 2, thickness / 2, shaftLength, 16]}
        />
        <meshBasicMaterial color={colour} />
      </mesh>

      {/* Hollow Cone: ConeGeometry with openEnded true */}
      <mesh position={conePosition} quaternion={quaternion}>
        <coneGeometry args={[coneRadius, coneLength, 32, 1, true]} />
        <meshBasicMaterial color={colour} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
