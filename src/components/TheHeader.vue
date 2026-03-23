<template>
  <header :class="{ 'header-home': isHomePage }">
    <nav>
      <RouterLink to="/">
        <LogoIcon :size="20" />
      </RouterLink>
      <RouterLink to="/catalog">Каталог</RouterLink>
      <span class="separator">|</span>
      <RouterLink to="/news">Новости</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LogoIcon from './LogoIcon.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
  color: black;
}

.header-home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  margin: 0 16px;
  text-decoration: none;
  color: black;
  font-size: 16px;
}

.separator {
  color: black;
}
</style>
