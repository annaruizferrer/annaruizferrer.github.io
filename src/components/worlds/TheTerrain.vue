<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Loop } from "@/World/systems/Loop.js";
import { createScene } from "@/World/components/scene.js";
import { createCamera } from "@/World/components/camera.js";
import { createLights } from "@/World/components/lights.js";
import { createTerrain } from "@/World/components/objects/terrain.js";
import { createRenderer } from "@/World/systems/renderer.js";
import { createControls } from "@/World/systems/controls.js";
import { Resizer } from "@/World/systems/Resizer.js";


const threeContainer = ref(null);

const camera = createCamera();
const renderer = createRenderer();


const scene = createScene("white");
const { light, lightHelper } = createLights("white");
const loop = new Loop(camera, scene, renderer);

const randomVals = [];
for (let i = 0; i < 12675; i++) {
  randomVals.push(Math.random() - 0.5);
}
const terrain = createTerrain({
  color: "orange",
  randVertexArr: randomVals,
});

scene.add(light, terrain);
const controls = createControls(camera, renderer.domElement);

loop.updatables.push(light);
loop.updatables.push(terrain);
loop.updatables.push(controls);


onMounted(() => {
  const container = threeContainer.value;
  container.append(renderer.domElement);
  const resizer = new Resizer(container, camera, renderer);
  resizer.onResize = () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  // Animation loop
  // TODO: I think we do not need both the loop and the animationframe
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  loop.start();
  animate();
});
onUnmounted(() => {
  loop.stop();
});

</script>

<style>
.three-container {
  width: 100%;
  height: 100%;
} 
</style>