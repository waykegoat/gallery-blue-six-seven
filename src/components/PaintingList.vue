<template>
  <div class="painting-list">
    <PaintingCard
      v-for="painting in paintings"
      :key="painting.id"
      :painting="painting"
    />
  </div>
</template>

<script setup lang="ts">
import PaintingCard from './PaintingCard.vue'
import { paintings } from '@/data/paintings'
</script>

<style scoped>
.painting-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.painting-list > * {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 32px;
}
</style>
