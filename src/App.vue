<template>
  <section class="top-bar">
    <div class="header-text">What's new?</div>
    <ArrowIcon  class="arrow"/>
  </section>
  <div class="post">
	    <section class="post-header">
	      <div class="side">
	        <div class="profile-pic">
				<img :src="'/profile.jpg'" alt="Profile Picture" />
			</div>
	        <span class="username">{{ username }}</span>
	      </div>
	      <SaveIcon  class="icons star"/>
	    </section>
	    <div class="reel-container">
	    <div v-if="images1.length > 1" class="dots-container">
	      <span
	        v-for="(image, index) in images1"
	        :key="index"
	        class="dot"
	        :class="{ active: activeIndex === index }"
	        @click="goToImage(index)"
	      ></span>
	    </div>
	    <div class="reel" id="reel" @scroll="handleScroll">
	      <div v-if="images1.length > 1" class="dots-container">
	      <span
		  	v-if="images1.length > 1"
	        v-for="(image, index) in images1"
	        :key="index"
	        class="dot"
	        :class="{ active: activeIndex === index }"
	        @click="goToImage(index)"º
	      ></span>
	    </div>
	      <div class="post-image" v-for="(image, index) in images1" :key="index">
	        <img :src="image.src" :alt="'Image ' + (index + 1)" :style="{ transform: `scale(${zoomLevel})` }"
	            @click="zoomIn"/>
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
          width: 20px;
          height: 20px;
          /* padding: 5px; */
          margin: 5px;
          box-sizing: border-box;
      }
      .star {
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
		  overflow: hidden;
  		  position: relative;
			border-radius: 50%;
  			overflow: hidden;
  			position: relative;
          /* border: 0.8px solid rgba(54, 69, 79, 1); */
      }
	  .profile-pic img {
		width: 100%; /* Make the image fill the container */
  		height: 100%; /* Make the image fill the container */
  		object-fit: cover; /* Clip the image to cover the entire container */
  		border-radius: 50%;
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
          height: 484px;
          background-color:#1C2429;
          display:flex
          /* Enable touch event manipulation */
      }

      .post-image img {
          width: 100%;
          height: auto;
          cursor: pointer;
          transition: transform 0.2s ease;
          vertical-align: middle;
          align-self: center;
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
    background-color: #d6d9db;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 0.2px solid #d6d9db;
  }
  .dot.active {
    background-color: rgba(54, 69, 79, 1);
  }

</style>
