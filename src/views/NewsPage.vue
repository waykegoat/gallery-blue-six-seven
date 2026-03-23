<template>
  <div class="news-page">
    <h1 class="news-title">Новости</h1>
    <p class="news-subtitle">Последние события из жизни галереи</p>
    <div class="news-list">
      <article class="news-item">
        <div class="news-date">15 марта 2026</div>
        <h2 class="news-item-title">Открытие новой выставки</h2>
        <p class="news-text">В эту субботу в галерее Artium открывается новая выставка «Весенние мотивы». Будут представлены работы известных художников начала XX века.</p>
      </article>
      <article class="news-item">
        <div class="news-date">10 марта 2026</div>
        <h2 class="news-item-title">Пополнение коллекции</h2>
        <p class="news-text">Галерея пополнилась четырьмя уникальными произведениями искусства. Теперь в нашей коллекции 8,436 работ.</p>
      </article>
      <article class="news-item">
        <div class="news-date">1 марта 2026</div>
        <h2 class="news-item-title">Мастер-класс для начинающих</h2>
        <p class="news-text">Приглашаем всех желающих на бесплатный мастер-класс по акварельной живописи. Начало в 14:00.</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.news-page {
  padding: 96px 32px 64px;
  max-width: 800px;
  margin: 0 auto;
}

.news-title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 16px;
  color: #333333;
}

.news-subtitle {
  font-size: 16px;
  text-align: center;
  color: #666666;
  margin: 0 0 48px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.news-item {
  border-left: 3px solid #4a6178;
  padding-left: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;
}

.news-date {
  font-size: 14px;
  color: #999999;
  margin-bottom: 8px;
}

.news-item-title {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 12px;
  color: #333333;
}

.news-text {
  font-size: 16px;
  line-height: 24px;
  color: #555555;
  margin: 0;
}
</style>
