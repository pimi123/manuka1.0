<template>
  <div>
    <Nav />
    <main class="container">
      <slot />
    </main>
    <footer>
      <div class="container">
        <p>&copy; 2026 Manuka. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Nav from '~/components/Nav.vue'
</script>

<style scoped>
/* Additional styles if needed */
</style>