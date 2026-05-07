<template>
  <section class="our-story">
    <h2 class="title">{{ title }}</h2>

    <div class="story-content">
      <div class="story-window">
        <img :src="storyImg" :alt="title" />

        <div class="line vertical"></div>
        <div class="line horizontal"></div>
        <div class="line diagonal-left"></div>
        <div class="line diagonal-right"></div>
        <div class="line arc"></div>

      </div>

      <p class="text">
        <slot>{{ description }}</slot>
      </p>

      <button v-if="buttonText" class="btn" @click="$emit('click')">
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script setup>
import storyImg from "@/assets/images/chears-img.jpg"

defineProps({
  title: {
    type: String,
    default: "THIS IS OUR STORY"
  },
  description: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
  },
  buttonText: {
    type: String,
    default: "CLICK FOR MORE"
  }
})

defineEmits(["click"])
</script>

<style scoped>
.our-story {
  text-align: center;
  font-family: Georgia, "Times New Roman", serif;
  background: #fff;
  padding-top: 48px;
}

.title {
  margin: 0 0 28px;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #3a332f;
}

.story-content {
    max-height:50% ;
  background: #b8896f;
  padding-bottom: 28px;
}

.story-window {
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(490px, 90vw);
  height: 80vh;
  /* margin: 0 auto; */
  overflow: hidden;
  border-radius: 50% 50% 0 0;
  transform: translateY(-1px);
}

.story-window img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.line {
  position: absolute;
  z-index: 2;
  background: white;
  pointer-events: none;
}

.vertical {
  width: 9px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.horizontal {
  height: 9px;
  width: 100%;
  left: 0;
  top: 58%;
}

.diagonal-left {
  width: 9px;
  height: 310px;
  left: 18%;
  top: 20%;
  transform: rotate(-42deg);
  transform-origin: top center;
}

.diagonal-right {
  width: 9px;
  height: 310px;
  right: 18%;
  top: 20%;
  transform: rotate(42deg);
  transform-origin: top center;
}

.arc {
  width: 210px;
  height: 210px;
  left: 50%;
  top: 50%;
  background: transparent;
  border: 9px solid white;
  border-bottom: 0;
  border-radius: 50% 50% 0 0;
  transform: translate(-50%, -18%);
}

.ornament {
  position: absolute;
  z-index: 4;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 54px;
  line-height: 1;
  font-weight: 300;
}

.text {
  max-width: 500px;
  margin: 14px auto 28px;
  padding: 0 20px;
  color: white;
  font-size: 15px;
  line-height: 1.25;
}

.btn {
  background: transparent;
  border: 0;
  color: #3a332f;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 15px;
  letter-spacing: 0.5px;
  cursor: pointer;
}
</style>