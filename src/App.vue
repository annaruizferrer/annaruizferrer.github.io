<template>
  <section class="top-bar">
    <div class="header-text">What's new?</div>
    <ArrowIcon  class="arrow"/>
  </section>
  <Post :images="images1" :profile-pic="'https://annaruizferrer.github.io/profile.jpg'" :username="'xelc392'" :zoomLevel="zoomLevel" :zoomIn="zoomIn" />
  <Post :images="images2" :profile-pic="'https://annaruizferrer.github.io/profile2.jpg'" :username="'piri89'" :zoomLevel="zoomLevel" :zoomIn="zoomIn" />
</template>

<script setup>
import { ref } from 'vue';
import Post from './Post.vue'

import ArrowIcon from './icons/ArrowIcon.vue';
const images1 = [
    { src: "https://annaruizferrer.github.io/image1.jpg" },
    { src: "https://annaruizferrer.github.io/image2.jpg" },
    { src: "https://annaruizferrer.github.io/image3.jpg" },
  ];
const images2 = [
    { src: "https://annaruizferrer.github.io/image.jpg" },
  ];
const activeIndex = ref(0);
// const zoomLevel = ref(1);
// function zoomIn() {
//   zoomLevel.value += 0.2; // Increase the zoom level by 0.2 (adjust as needed)
// }
function handleScroll() {
  const reel = document.getElementById('reel');
  const scrollPosition = reel.scrollLeft;
  const imageWidth = reel.offsetWidth;
  const newIndex = Math.round(scrollPosition / imageWidth);
  activeIndex.value = newIndex;
  console.log('activeIndex', activeIndex.value)
} 

function goToImage(index) {
  const reel = document.getElementById('reel');
  const imageWidth = reel.offsetWidth;
  reel.scrollTo({ left: imageWidth * index, behavior: 'smooth' });
}
</script>


<style scoped>

:global(body)  {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
}

section { 
    display: flex;
    align-items: center;
    padding: 0px 10px;
    justify-content: space-between;
} 

.top-bar {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  
  display: flex;
  align-items: end;
  /* max-width: 600px; */
  /* overflow: hidden; */
  padding: 10px;
  height: 40px;
}
.header-text {
  font-weight: bold;
  font-size: 24px;
  color: rgba(54, 69, 79, 1);
  margin: 2px
}
.arrow {          
  width: 25px;
  height: 25px;
  /* padding: 5px; */
  /* margin: 5px; */
  box-sizing: border-box;
}

</style>
