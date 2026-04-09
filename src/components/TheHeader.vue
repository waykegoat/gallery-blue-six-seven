<template>
  <header :class="{ 'header-home': isHomePage }">
    <nav>
      <RouterLink to="/" class="logo-link">
        <img src="@/assets/logo.svg" alt="ARTIUM" class="logo" />
      </RouterLink>
      <RouterLink to="/catalog" class="nav-link">Каталог</RouterLink>
      <span class="separator">|</span>
      <RouterLink to="/news" class="nav-link">Новости</RouterLink>
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
  padding: 32px;
  width: 100%;
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
  gap: 16px;
}

.logo {
  width: 20px;
  height: 20px;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text);
  transition: color 200ms;
}

.nav-link:hover {
  color: var(--color-primary);
}

.separator {
  color: var(--color-text);
}
</style>
