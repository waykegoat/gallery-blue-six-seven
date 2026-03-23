<template>
  <div class="catalog-page">
    <h1 class="catalog-title">Каталог</h1>
    <p class="catalog-subtitle">Все произведения из нашей коллекции</p>
    <div class="catalog-list">
      <div
        v-for="painting in paintings"
        :key="painting.id"
        class="catalog-item"
      >
        <RouterLink :to="`/painting/${painting.id}`" class="item-link">
          <div class="item-image-wrapper">
            <img :src="painting.image" :alt="painting.title" class="item-image" />
          </div>
          <div class="item-info">
            <h3 class="item-title">{{ painting.title }}</h3>
            <p class="item-author">{{ painting.author }}</p>
            <p class="item-year">{{ painting.year }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { paintings } from '../data/paintings'
</script>

<style scoped>
.catalog-page {
  padding: 96px 32px 64px;
  max-width: 1200px;
  margin: 0 auto;
}

.catalog-title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 16px;
  color: #333333;
}

.catalog-subtitle {
  font-size: 16px;
  text-align: center;
  color: #666666;
  margin: 0 0 48px;
}

.catalog-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.catalog-item {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 32px;
}

.item-link {
  display: flex;
  gap: 24px;
  text-decoration: none;
  color: inherit;
  align-items: center;
}

.item-image-wrapper {
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 4px;
  flex-shrink: 0;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms;
}

.item-link:hover .item-image {
  transform: scale(1.05);
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item-title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  color: #333333;
}

.item-author {
  font-size: 16px;
  color: #666666;
  margin: 0;
}

.item-year {
  font-size: 14px;
  color: #999999;
  margin: 0;
}

@media (max-width: 768px) {
  .item-link {
    flex-direction: column;
    align-items: flex-start;
  }

  .item-image-wrapper {
    width: 100%;
    height: 200px;
  }
}
</style>
