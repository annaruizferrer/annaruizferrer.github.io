<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Loop } from "@/World/systems/Loop.js";
import { createScene } from "@/World/components/scene.js";
import { createCamera } from "@/World/components/camera.js";
import { createLights } from "@/World/components/lights.js";
import { createFractalGroup } from "@/World/components/objects/fractal.js";
import { createRenderer } from "@/World/systems/renderer.js";
import { Resizer } from "@/World/systems/Resizer.js";


const threeContainer = ref(null);

const camera = createCamera();
// camera.position.z = 5;
// camera.lookAt( 0, 0, 0 );
const renderer = createRenderer();


const scene = createScene("white");
const { light } = createLights("white");
const loop = new Loop(camera, scene, renderer);

const randomVals = [];
for (let i = 0; i < 12675; i++) {
  randomVals.push(Math.random() - 0.5);
}
const fractalGroup = createFractalGroup();

scene.add(light, fractalGroup);

loop.updatables.push(light);
loop.updatables.push(fractalGroup);


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