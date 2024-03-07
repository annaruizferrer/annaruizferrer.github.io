<template>
  <div class="post">
    <section class="post-header">
      <div class="side">
        <img class="profile-pic" src="/profile.jpg" alt="Profile Picture" />
        <span class="username">xelc392</span>
      </div>
      <SaveIcon  class="icons"/>
    </section>
    <div class="reel-container">
    <div class="dots-container">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="dot"
        :class="{ active: activeIndex === index }"
        @click="goToImage(index)"
      ></span>
    </div>
    <div class="reel" id="reel" @scroll="handleScroll">
      <div class="dots-container">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="dot"
        :class="{ active: activeIndex === index }"
        @click="goToImage(index)"
      ></span>
    </div>
      <div class="post-image" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="'Image ' + (index + 1)" />
      </div>
    </div>
  </div>
    <section class="post-footer">
      <div class="side">
          <LikeIcon class="icons"/>
          <CommentIcon class="icons" />
          <span class="info-text"> <b>101</b>  likes and  <b>11</b> comments</span>
        </div>
        <ShareIcon class="icons"/>
    </section>
  </div>
  <div class="post">
    <section class="post-header">
      <div class="side">
        <img class="profile-pic" src="/profile.jpg" alt="Profile Picture" />
        <span class="username">xelc392</span>
      </div>
      <SaveIcon  class="icons"/>
      
    </section>
    <div class="reel" id="reel">
      <div class="post-image" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="'Image ' + (index + 1)" />
      </div>
    </div>
    <section class="post-footer">
      <div class="side">
          <LikeIcon class="icons"/>
          <CommentIcon class="icons" />
          <span class="info-text"> <b>101</b>  likes and  <b>11</b> comments</span>
        </div>
        <ShareIcon class="icons"/>
    </section>
  </div>
</template>

<script setup>
import ShareIcon from './icons/ShareIcon.vue';
import LikeIcon from './icons/LikeIcon.vue';
import CommentIcon from './icons/CommentIcon.vue';
import SaveIcon from './icons/SaveIcon.vue';
import { ref } from 'vue';
// import { FaFlag } from 'oh-vue-icons/icons/fa';
// 
// const IconI = FaFlag
// const CoffeIcon = FaCoffee
// Define reactive properties
// import OhVueIcon from 'oh-vue-icons';

// Register the OhVueIcon component globally
// const VIcon = OhVueIcon;
const images = [
    { src: "/image1.jpg" },
    { src: "/image2.jpg" },
    { src: "/image3.jpg" },
  ];
const activeIndex = ref(0);

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
    padding: 10px;
    justify-content: space-between;
    top: 0;
    left: 0;
}


svg {
    fill: rgba(54, 69, 79, 1);
    display: block;
}


      .post {
          max-width: 600px;
          margin: 20px auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
          margin: 6px;
      }

      .profile {
          display: flex;
          align-items: center;
      }

      .side {
          display: flex;
          align-items: center;
      }

      .icons {
          width: 25px;
          height: 25px;
          /* padding: 5px; */
          margin: 5px;
          box-sizing: border-box;
      }

      .profile-pic {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
          border: 0.8px solid rgba(54, 69, 79, 1);
      }

      .username {
          font-weight: bold;
          float: left;
          color: rgba(54, 69, 79, 1);
      }

      .info-text {
          font-size: 14px;
          float: left;
          color: rgba(54, 69, 79, 1);
          padding:  0 5px;
          font-weight: 500;
      }

      .reel-container {
       position: relative;
      }

      .reel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          /* -webkit-overflow-scrolling: touch; */
          /* Enables smooth scrolling on iOS */
          /* touch-action: pinch-zoom;
          transform-origin: center center;
          transition: transform 0.5s;
      }
      .reel.scalable {
          transform: scale(1.2); */
      }

      .post-image {
          flex: 0 0 auto;
          scroll-snap-align: start;
          overflow: hidden;
          max-width: 100%;
          touch-action: manipulation;
          /* Enable touch event manipulation */
      }

      .post-image img {
          width: 100%;
          height: auto;
          cursor: pointer;
          transition: transform 0.2s ease;
      }

      .post-zoom {
          flex: 0 0 auto;
          scroll-snap-align: start;
          overflow: hidden;
          max-width: 100%;
          touch-action: manipulation;
          /* Enable touch event manipulation */
      }

      .post-zoom img {
          width: 100%;
          height: auto;
          cursor: pointer;
          transition: transform 0.2s ease;
      }
      
      .dots-container {
      display: flex; 
      justify-content: center;
      z-index: 1000;
      top:-60%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      margin-top: 20px;
      z-index: 2; 

    }

  .dot {
    width: 10px;
    height: 10px;
    background-color: #bbb;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .dot.active {
    background-color: rgba(54, 69, 79, 1);
  }
</style>
