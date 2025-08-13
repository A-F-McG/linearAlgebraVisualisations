import * as THREE from "three";

export function Line({
  start,
  end,
  colour = 0x00ff00,
  opacity = 1,
}: {
  start: [number, number, number];
  end: [number, number, number];
  colour?: number;
  opacity?: number;
}) {
  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(start[0], start[1], start[2]),
    new THREE.Vector3(end[0], end[1], end[2]),
  ]);
  const material = new THREE.LineBasicMaterial({
    color: colour,
    transparent: true,
    opacity: opacity,
  });
  const line = new THREE.Line(geometry, material);

  return (
    <>
      <primitive object={line} />
    </>
  );
}
