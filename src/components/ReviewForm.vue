<script setup>
import { reactive, computed, ref } from 'vue'
import axios from 'axios'
import UBtn from './global/UBtn.vue'
import UInput from './global/UInput.vue'
import URadio from './global/URadio.vue'
import UFile from './global/UFile.vue'

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecommended: '',
})

const submit = () => {
  console.log('submit')
  axios
    .post('/api/review', review, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      console.log('Конец')
    })
}

const stars = [1, 2, 3, 4, 5]

const test = ref('')
</script>

<template>
  <form
    class="container pt-5 pb-5"
    @submit.prevent.stop="submit"
  >
    <UInput
      v-model="review.author"
      placeholder="Как вас зовут?"
      type="text"
    />

    <UInput
      v-model="review.text"
      placeholder="Что понравилось, что нет??"
      type="textarea"
    />

    <h4>Оценка</h4>
    <div
      v-for="star in stars"
      :key="star"
      class="form-check"
    >
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        v-model="review.stars"
        :id="`star${star}`"
        :true-value="star"
        :false-value="null"
      />
      <label
        class="form-check-label"
        :for="`star${star}`"
      >
        {{ star }}
      </label>
    </div>
    <UFile
      v-model="review.photo"
      label="Файл"
    />
    <URadio
      v-model="review.isRecommended"
      :options="true"
      label="Советую"
    />
    <URadio
      v-model="review.isRecommended"
      :options="false"
      label="Не советую"
    />
    <URadio
      v-model="review.isRecommended"
      options="не знаю"
      label="Не знаю"
    />
    <UBtn color="warning" />

  </form>
</template>

<style lang="scss" scoped></style>
