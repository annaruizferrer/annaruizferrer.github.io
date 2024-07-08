<template>

  <div class="project-wrapper">
    <div class="project-container">
      <component :is="projects[route.params.id]" />
    </div>
    <div class="navigation-arrows">
      <div><button v-if="!isFirstProject" @click="previousProject"> < </button></div>
      <div><button v-if="!isLastProject" @click="nextProject"> > </button></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TheCube from '@/components/worlds/TheCube.vue';
import TheTerrain from '@/components/worlds/TheTerrain.vue';
import TheFractals from '@/components/worlds/TheFractals.vue';

const projects = {
  'the-fractals': TheFractals,
  'the-terrain': TheTerrain,
  'the-cube': TheCube,
}

const route = useRoute()
const router = useRouter()

const projectKeys = Object.keys(projects);
const currentIndex = computed(() => projectKeys.indexOf(route.params.id));

const isFirstProject = computed(() => currentIndex.value === 0);
const isLastProject = computed(() => currentIndex.value === projectKeys.length - 1);


const previousProject = () => {
  if (currentIndex.value > 0) {
    const pewviousProjectId = projectKeys[currentIndex.value - 1];
    router.push(`/${pewviousProjectId}`)
  }
}

const nextProject = () => {
  if (currentIndex.value < projectKeys.length - 1) {
    const nextProjectId = projectKeys[currentIndex.value + 1];
    router.push(`/${nextProjectId}`)
  }
}
</script>

<style scoped>

.project-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation-arrows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
.navigation-arrows button {
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}
</style>
