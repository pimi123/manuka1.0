<template>
  <div>
    <h1>Welcome to Manuka</h1>
    <p>This is the home page. A professional and minimal website structure.</p>
    <p>Explore our <NuxtLink to="/about">About</NuxtLink> page.</p>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'Home - Manuka',
  meta: [
    { name: 'description', content: 'Welcome to Manuka, a professional web experience.' }
  ]
})
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}
</style>