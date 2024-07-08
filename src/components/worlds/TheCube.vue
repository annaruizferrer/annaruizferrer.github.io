<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted,ref } from 'vue';
import { Resizer } from "@/World/systems/Resizer.js";
import { createLights } from "@/World/components/lights.js";
import { createCamera } from "@/World/components/camera.js";
import { createRenderer } from "@/World/systems/renderer.js";
import { createScene } from "@/World/components/scene.js";
import { createCube } from "@/World/components/objects/cube.js";
import { Loop } from "@/World/systems/Loop.js";

const threeContainer = ref(null);


const renderer = createRenderer()
const camera = createCamera();
const { light } = createLights("white");
const scene = createScene("white");
const loop = new Loop(camera, scene, renderer);


// Compose Scene
const cube = createCube("green")
loop.updatables.push(light);
loop.updatables.push(cube);
scene.add(light, cube);

onMounted(() => {
  const container = threeContainer.value;
  container.append(renderer.domElement);
  
  renderer.setSize(container.clientWidth, container.clientHeight);

  const resizer = new Resizer(container, camera, renderer);
      resizer.onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
     };

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