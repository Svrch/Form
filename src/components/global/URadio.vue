<script setup>
import { defineProps, ref, watch } from "vue";


const props = defineProps({
  label: String,
  options: [String, Boolean]
})

const model = defineModel()

</script>
<template>
  <div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="adv1"
        :value="props.options"
        v-model="model"
      />
      <label
        class="form-check-label"
        for="adv1"
      >
        {{ props.label }}
      </label>
    </div>
  </div>
</template>
