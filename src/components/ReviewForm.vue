<template>
  <form @submit.prevent="submitReview" class="review-form">
    <h3 class="form-title">Оставить рецензию</h3>
    <div class="form-group">
      <label for="name" class="form-label">Ваше имя</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        class="form-input"
        required
      />
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="form-input"
        required
      />
    </div>
    <div class="form-group">
      <label for="rating" class="form-label">Оценка</label>
      <select id="rating" v-model="form.rating" class="form-select" required>
        <option value="">Выберите оценку</option>
        <option value="5">5 - Отлично</option>
        <option value="4">4 - Хорошо</option>
        <option value="3">3 - Средне</option>
        <option value="2">2 - Плохо</option>
        <option value="1">1 - Ужасно</option>
      </select>
    </div>
    <div class="form-group">
      <label for="review" class="form-label">Ваша рецензия</label>
      <textarea
        id="review"
        v-model="form.review"
        class="form-textarea"
        rows="4"
        required
      ></textarea>
    </div>
    <button type="submit" class="form-button">Отправить</button>
  </form>
</template>

<script setup lang="ts">
import type { ReviewForm } from '@/types'
import { ref } from 'vue'

const form = ref<ReviewForm>({
  name: '',
  email: '',
  rating: '',
  review: ''
})

const emit = defineEmits<{
  submit: [review: typeof form.value]
}>()

const submitReview = () => {
  emit('submit', form.value)
  form.value = {
    name: '',
    email: '',
    rating: '',
    review: ''
  }
}
</script>

<style scoped>
.review-form {
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 32px;
  margin-top: 48px;
}

.form-title {
  font-family: var(--serif-font);
  font-size: 24px;
  margin: 0 0 24px;
  color: var(--text-color);
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  background: var(--background-color);
  color: var(--text-color);
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-button {
  background: var(--primary-color);
  color: var(--background-color);
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 200ms;
}

.form-button:hover:not(:disabled) {
  background: var(--text-color);
}

.form-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
