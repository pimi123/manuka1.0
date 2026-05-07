<template>
  <section class="hero">
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <img src="../assets/Logo/Logo_symbol.png" alt="Manuka" class="hero__logo" />

      <p class="hero__subtitle">
        INSPIRED BY NATURE
      </p>

      <p class="hero__title">
        DEFINED BY TASTE AND ATMOSPHERE
      </p>
    </div>
  </section>
  <!-- <OurStory /> -->
    <MainMenu />
</template>

<script setup>
import MainMenu from '~/components/MainMenu.vue'
import OurStory from '~/components/OurStory.vue'

useHead({
  title: 'Home - Manuka'
})
</script>

<style scoped lang="scss">
.hero {
// background-color: pink;
    position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('../assets/images/hero-banner-img.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* DARK + WARM overlay (like your design) */
.hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;

  background:
    linear-gradient(
      to bottom,
      rgba(184, 139, 111, 0.42) 0%,
      rgba(184, 139, 111, 0.28) 30%,
      rgba(184, 139, 111, 0.14) 58%,
      rgba(0, 0, 0, 0.10) 78%,
      rgba(0, 0, 0, 0.22) 100%
    );

  box-shadow:
    inset 0 -80px 110px rgba(0, 0, 0, 0.18),
    inset 0 60px 80px rgba(184, 139, 111, 0.08);
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 800px;
  padding: 0 20px;
}

.hero__logo {
  width: 110px;
  margin: 0 auto 20px;
}

.hero__subtitle {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
}

.hero__title {
  font-size: 1rem;
  letter-spacing: 0.12em;
}

/* MOBILE */
@media (max-width: 768px) {
  .hero__logo {
    width: 80px;
  }

  .hero__title {
    font-size: 0.9rem;
  }
}
</style>