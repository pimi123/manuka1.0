<template>

  <section class="main-menu">
    <div class="main-menu_top__container">
    <div class="main-menu__top">
      <h1 class="main-menu__heading">MAIN MENU</h1>

      <div class="main-menu__hero">
        <img :src="heroImg" alt="Main menu dish" />
      </div>

      <span class="main-menu__top-label">VIEW THE MENU HERE</span>
    </div>
    </div>

    <div class="main-menu__bottom">
      <h2 class="main-menu__title">Lorem ipsum dolor sit amet, consectetur</h2>
      <p class="main-menu__text">
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <MenuSlider />

    <NuxtLink to="/menu" class="main-menu__button">View full menu</NuxtLink>
  </section>
</template>

<script setup>
import MenuSlider from '~/components/MenuSlider.vue'
import heroImg from '@/assets/images/DSC08902.jpg'
</script>

<style scoped lang="scss">
.main-menu {
  text-align: center;
  padding: 64px 20px 48px;
  color: #3a332f;
  background: #fff;
}

.main-menu__bottom {
  max-width: 720px;
  margin: 0 auto 42px;
}

.main-menu_top__container {
display: flex;
justify-content: center;
}

.main-menu__eyebrow {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #8f6954;
  margin-bottom: 16px;
}

.main-menu__title {
  margin: 0 auto 18px;
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  font-weight: 600;
  line-height: 1.1;
  max-width: 640px;
  font-size: 20px;
   color: #b8896f;
}

.main-menu__text {
  margin: 0 auto;
  max-width: 640px;
  color: #5d524b;
  line-height: 1.7;
  font-size: 0.98rem;
}

.main-menu__top {
  max-width: 820px;
  margin-bottom: 50px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}

.main-menu__heading {
  margin: 0 0 24px;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a6795c;
}

.main-menu__hero {
  width: min(620px, 100%);
  height: min(500px, 85vw);
  margin: 0 auto;
  overflow: hidden;
  border-radius:0 0 50% 50%;
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.16);
}

.main-menu__hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.main-menu__top-label {
  display: inline-block;
  margin-top: 26px;
  font-size: 14px;
  text-transform: uppercase;
  color: #5d524b;
}

.main-menu__button {
  text-decoration: none;
  padding: 14px 32px;
  border: 1px solid #b8896f;
  color: #3a332f;
  border-radius: 999px;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.25s ease, color 0.25s ease;
}

.main-menu__button:hover {
  background: #b8896f;
  color: #fff;
}

@media (min-width: 680px) {
  .main-menu {
    padding: 48px 16px 32px;
  }

  .main-menu__button {
    width: 100%;
  }
}
</style>
