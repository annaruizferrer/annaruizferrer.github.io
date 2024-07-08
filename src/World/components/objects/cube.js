import {
  BoxGeometry,
    MeshStandardMaterial,
    Mesh,
    Color
} from "three";

function createCube(color) {
  const geometry = new BoxGeometry();
  const material = new MeshStandardMaterial({ color: new Color(color) });
  const cube = new Mesh(geometry, material);
  cube.position.set(0, 0, 0);

  cube.tick = () => {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
  };
  return cube;
}



export { createCube }