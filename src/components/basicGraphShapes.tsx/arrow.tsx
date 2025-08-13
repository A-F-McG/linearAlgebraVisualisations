import * as THREE from "three";

export function Arrow({
  start,
  end,
  colour = 0x00ff00,
}: {
  start: [number, number, number];
  end: [number, number, number];
  colour?: number;
}) {
  const direction = new THREE.Vector3()
    .subVectors(
      new THREE.Vector3(end[0], end[1], end[2]),
      new THREE.Vector3(start[0], start[1], start[2])
    )
    .normalize();
  const length = new THREE.Vector3(start[0], start[1], start[2]).distanceTo(
    new THREE.Vector3(end[0], end[1], end[2])
  );

  const arrowHelper = new THREE.ArrowHelper(
    direction,
    new THREE.Vector3(start[0], start[1], start[2]),
    length,
    colour,
    1
  );

  return (
    <>
      <primitive object={arrowHelper} />
    </>
  );
}
