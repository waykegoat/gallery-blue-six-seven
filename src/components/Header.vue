<template>
  <header :class="{ 'header-home': isHomePage }">
    <nav>
      <RouterLink to="/">
        <img src="/images/logo.png" alt="Artium Logo" class="logo-image" />
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

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  color: black;
}

.header-home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; 
}

.logo-image {
  height: 20px; 
  width: auto;
  display: block;
  margin-right: -2rem; 
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: black;
  font-size: 1rem;
}

.separator {
  color: black;
}
</style>
