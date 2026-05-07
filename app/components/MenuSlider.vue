<template>
  <div class="menu-slider">
    <div class="menu-slider__container">
      <article class="menu-card" v-for="(menu, index) in menus" :key="index">
        <div class="menu-card-shape">
          <img :src="menu.img" :alt="menu.title" />
        </div>
        <h3>{{ menu.title }}</h3>
      </article>
    </div>
  </div>
</template>

<script setup>
import sushiImg from '@/assets/images/A7402143.jpg'
import dessertImg from '@/assets/images/DSC03737.jpg'
import drinksImg from '@/assets/images/A7402178.jpg'

const menus = [
  { img: sushiImg, title: 'SUSHI MENU'},
  { img: dessertImg, title: 'DESSERT MENU'},
  { img: drinksImg, title: 'DRINKS MENU'}
  
]
</script>

<style scoped lang="scss">
.menu-slider {
  margin-bottom: 36px;
}

.menu-slider__container {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 20px;
}

.menu-card {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  scroll-snap-align: start;
}

.menu-card-shape {
  width: 200px;
  height: 400px;
  overflow: hidden;
  border-radius: 999px;
}

.menu-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.menu-card h3 {
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #3a332f;
}

@media (min-width: 680px) {
  .menu-card {
    flex: 0 0 280px;
  }

  .menu-slider__container{
    justify-content: center;
  }

  .menu-card-shape {
    width: 260px;
    height: 440px;
  }
}
</style>