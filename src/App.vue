<template>
    <div class="post">
      <section class="post-header">
        <div class="side">
          <img class="profile-pic" src="/profile.jpg" alt="Profile Picture" />
          <span class="username">xelc392</span>
        </div>
        <ShareIcon class="icons"/>
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
          <span class="info-text">{{ 101 }} likes {{ 11 }} comments</span>
        </div>
          <SaveIcon  class="icons"/>
      </section>
    </div>
  </template>
  
  <script setup>
import ShareIcon from './icons/ShareIcon.vue';
import LikeIcon from './icons/LikeIcon.vue';
import CommentIcon from './icons/CommentIcon.vue';
import SaveIcon from './icons/SaveIcon.vue';

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
  
</script>

  
<style scoped>
  
        /* Basic styling */
  :global(body)  {
      font-family: Arial, sans-serif;
      /* font-family: Inter, sans-serif; */
      margin: 0;
      padding: 0;
      background-color: #fafafa;
  }

        section {
            display: flex;
            align-items: center;
            padding: 10px;
            justify-content: space-between;
        }

        svg {
            fill: #36454F;
            display: block;
        }

        .post {
            max-width: 600px;
            margin: 20px auto;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
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
            width: 40px;
            height: 40px;
            padding: 10px;
            box-sizing: border-box;
        }

        .profile-pic {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .username {
            font-weight: bold;
            float: left;
            color: #36454F;
        }

        .info-text {
            font-weight: bold;
            float: left;
            color: #36454F;
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
  </style>
  