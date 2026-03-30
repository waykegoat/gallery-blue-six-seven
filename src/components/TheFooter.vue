<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">ARTIUM</h3>
        <p class="footer-text">Коллекция из {{ paintings.length }} произведений искусства</p>
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
        <p class="footer-text">
          <a href="mailto:info@artium-gallery.ru" class="footer-link">info@artium-gallery.ru</a>
        </p>
        <p class="footer-text">
          <a href="tel:+79991234567" class="footer-link">+7 (999) 123-45-67</a>
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">© 2026 Artium Gallery. Все права защищены.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { paintings } from '@/data/paintings'
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 48px 32px 24px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 32px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-family: var(--serif-font);
  font-size: 24px;
  margin: 0 0 8px;
  letter-spacing: 1px;
}

.footer-subtitle {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 16px;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-text {
  font-size: 14px;
  color: #cccccc;
  margin: 0 0 4px;
  line-height: 26px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 200ms;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-bottom {
  max-width: 1200px;
  margin: 32px auto 0;
  padding-top: 24px;
  border-top: 1px solid #333333;
  text-align: center;
}

.footer-copyright {
  font-size: 14px;
  color: #666666;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-nav {
    align-items: center;
  }
}
</style>
