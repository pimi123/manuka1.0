<template>
  <div>
    <h1>About Us</h1>
    <p>Manuka is a professional web development company focused on minimal and effective solutions.</p>
    <p>Go back to <NuxtLink to="/">Home</NuxtLink>.</p>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'About - Manuka',
  meta: [
    { name: 'description', content: 'Learn more about Manuka and our mission.' }
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