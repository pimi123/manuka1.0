<template>
  <nav ref="navRef" class="nav" :class="{ 'nav-blur': isOpen }">
    <div class="nav__overlay"></div>

    <div class="nav__container">
      <!-- Left links desktop -->
      <div class="nav__left nav__desktop">
        <NuxtLink to="/" class="nav__link">HOME</NuxtLink>
        <NuxtLink to="/about" class="nav__link">ABOUT</NuxtLink>
      </div>

      <!-- Brand center -->
      <NuxtLink to="/" class="nav__brand">
        <span class="nav__brand-title">MANUKA</span>
        <span class="nav__brand-subtitle">RESTAURANT</span>
      </NuxtLink>

      <!-- Right links desktop -->
      <div class="nav__right nav__desktop">
        <NuxtLink to="/menu" class="nav__link">MENU</NuxtLink>
        <NuxtLink to="/contact" class="nav__link">CONTACT</NuxtLink>
      </div>

      <!-- Hamburger mobile -->
      <button
        class="nav__toggle"
        type="button"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="mobile-menu">
      <div v-if="isOpen" class="mobile-menu">
        <NuxtLink to="/" class="mobile-menu__link" @click="closeMenu">HOME</NuxtLink>
        <NuxtLink to="/about" class="mobile-menu__link" @click="closeMenu">ABOUT</NuxtLink>
        <NuxtLink to="/menu" class="mobile-menu__link" @click="closeMenu">MENU</NuxtLink>
        <NuxtLink to="/contact" class="mobile-menu__link" @click="closeMenu">CONTACT</NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const navRef = ref(null)

const closeMenu = () => {
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (!navRef.value) return
  if (isOpen.value && !navRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">
.nav {
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 18px 0;
}

.nav__overlay {
  position: absolute;
  inset: 0;
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.nav-blur .nav__overlay {
  backdrop-filter: blur(8px);
  opacity: 1;
}

.nav__container {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 32px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 54px;
}

.nav__left,
.nav__right {
  display: flex;
  align-items: center;
  gap: 60px;
}

.nav__left {
  justify-content: flex-start;
}

.nav__right {
  justify-content: flex-end;
}

.nav__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #fff;
  line-height: 1;
}

.nav__brand-title {
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.nav__brand-subtitle {
  margin-top: 4px;
  font-size: 0.5rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.nav__link {
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: opacity 0.25s ease;
}

.nav__link:hover,
.mobile-menu__link:hover {
  opacity: 0.75;
}

.nav__toggle {
  display: none;
  justify-self: end;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  z-index: 2;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: #fff;
    margin: 5px 0;
    transition: 0.3s ease;
  }
}

.mobile-menu {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 24px 28px;
  gap: 18px;
}

.mobile-menu__link {
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 900px) {
  .nav {
    padding: 14px 0;
  }

  .nav__container {
    // grid-template-columns: 1fr auto 1fr;
    // padding: 0 20px;

    display: flex;
    justify-content: space-between;
  }

  .nav__desktop {
    display: none;
  }

  .nav__brand {
    justify-self: center;
  }

  .nav__brand-title {
    font-size: 1.5rem;
  }

  .nav__brand-subtitle {
    font-size: 0.45rem;
  }

  .nav__toggle {
    display: block;
  }
}
</style>