import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export function Text({
  text,
  position,
  colour = 0xffffff,
  size = 0.3,
}: {
  text: string;
  position: [number, number, number];
  colour?: number;
  size?: number;
}) {
  const font = useLoader(
    FontLoader,
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
  );

  const geometry = new TextGeometry(text, {
    font: font,
    size: size,
    depth: 0.05,
    curveSegments: 4,
  });

  const material = new THREE.MeshBasicMaterial({ color: colour });

  return <primitive object={new THREE.Mesh(geometry, material)} position={position} />;
}
