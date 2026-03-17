<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">ARTIUM</h3>
        <p class="footer-text">Коллекция из 8,436 произведений искусства</p>
      </div>
      <div class="footer-section">
        <h4 class="footer-subtitle">Навигация</h4>
        <nav class="footer-nav">
          <RouterLink to="/" class="footer-link">Главная</RouterLink>
          <RouterLink to="/catalog" class="footer-link">Каталог</RouterLink>
          <RouterLink to="/news" class="footer-link">Новости</RouterLink>
        </nav>
      </div>
      <div class="footer-section">
        <h4 class="footer-subtitle">Контакты</h4>
        <p class="footer-text">info@artium-gallery.ru</p>
        <p class="footer-text">+7 (999) 123-45-67</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">© 2026 Artium Gallery. Все права защищены.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 3rem 2rem 1.5rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 0.5rem;
  letter-spacing: 0.1em;
}

.footer-subtitle {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 1rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-text {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0 0 0.25rem;
  line-height: 1.6;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #fff;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid #333;
  text-align: center;
}

.footer-copyright {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-nav {
    align-items: center;
  }
}
</style>
