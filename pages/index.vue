<template>
  <main>
    <Hero />
    <About />
    <Events />
    <Contact />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'DJ Booze',
  meta: [
    { name: 'description', content: 'DJ Booze legt in Pirmasens und Umgebung auf. Egal ob Club, Hochzeit oder Event, DJ Booze hat immer die richtigen Tracks dabei.' }
  ],
})

useSeoMeta({
  title: 'DJ Booze',
  ogTitle: 'DJ Booze',
  description: 'DJ Booze legt in Pirmasens und Umgebung auf. Egal ob Club, Hochzeit oder Event, DJ Booze hat immer die richtigen Tracks dabei.',
  ogDescription: 'DJ Booze legt in Pirmasens und Umgebung auf. Egal ob Club, Hochzeit oder Event, DJ Booze hat immer die richtigen Tracks dabei.',
  ogImage: 'https://www.djbooze.de/_vercel/image?url=/djbooze-dark.png&w=1536&q=100',
})
</script>