<template>
  <div class="home-container">
    <div class="background-parallax" :style="{ backgroundPosition: backgroundPosition }"></div>
    <main class="home-content">
      <h1 class="title">ARTIUM</h1>
      <p class="subtitle">8,436 artworks</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const backgroundPosition = ref('center center')

const handleMouseMove = (event: MouseEvent) => {
  const { clientX, clientY } = event
  const { innerWidth, innerHeight } = window

  const xOffset = (clientX / innerWidth - 0.5) * 30 
  const yOffset = (clientY / innerHeight - 0.5) * 30

  backgroundPosition.value = `calc(50% + ${xOffset}px) calc(50% + ${yOffset}px)`
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.home-container {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-parallax {
  position: absolute;
  top: -5%; 
  left: -5%;
  width: 110%;
  height: 110%;
  background-image: url('/images/background.png');
  background-size: cover;
  z-index: -1;
  transition: background-position 0.1s ease-out;
}

.home-content {
  text-align: center;
  color: #333;
}

.title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 6rem;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.1em;
}

.subtitle {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  margin-top: 1rem;
  color: #666;
}
</style>
