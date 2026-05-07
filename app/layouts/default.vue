<template>
  <div>
    <Nav />
    <main class="container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import Nav from '~/components/Nav.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<style scoped>
/* Additional styles if needed */
</style>