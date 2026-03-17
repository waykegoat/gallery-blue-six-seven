<template>
  <div>
    <section class="hero-section">
      <div class="background-parallax" :style="{ backgroundPosition: backgroundPosition }"></div>
      <main class="home-content">
        <h1 class="title">ARTIUM</h1>
        <p class="subtitle">8,436 artworks</p>
      </main>
      <div class="hero-fade"></div>
    </section>

    <section class="gallery-section">
      <h2 class="gallery-title">Избранные работы</h2>
      <div class="gallery-grid">
        <RouterLink
          v-for="painting in paintings"
          :key="painting.id"
          :to="`/painting/${painting.id}`"
          class="gallery-card"
        >
          <div class="card-image-wrapper">
            <img :src="painting.image" :alt="painting.title" class="card-image" />
          </div>
          <div class="card-info">
            <h3 class="card-title">{{ painting.title }}</h3>
            <p class="card-author">{{ painting.author }}</p>
            <p class="card-year">{{ painting.year }}</p>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useParallax } from '../composables/useParallax'
import { paintings } from '../data/paintings'

const { backgroundPosition } = useParallax(30)
</script>

<style scoped>
.hero-section {
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

.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to bottom, transparent, #ffffff);
  z-index: 1;
  pointer-events: none;
}

.gallery-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.gallery-card {
  text-decoration: none;
  color: inherit;
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.card-image-wrapper:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-card:hover .card-image {
  transform: scale(1.03);
}

.card-info {
  padding: 1rem 0;
}

.card-title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 0.25rem;
  color: #333;
}

.card-author {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.15rem;
}

.card-year {
  font-size: 0.85rem;
  color: #999;
  margin: 0;
}
</style>
