<script setup>
import { defineProps, defineEmits, watch, ref } from "vue";

const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: String,
});

const emits = defineEmits(["update:modelValue"]);
const value = ref(props.modelValue);

watch(value, () => {
  emits("update:modelValue", value);
});

// другой вариант
// const model = defineModel({ type: String })
// v-model="model" (в input)

</script>



<template>
  <div>
    <input
      v-if="type === 'text'"
      :type="type"
      :placeholder="placeholder"
      class="form-control mb-3"
      v-model="value"
    />
    <textarea
      v-if="type === 'textarea'"
      :type="type"
      rows="3"
      class="form-control"
      :placeholder="placeholder"
      v-model="value"
    ></textarea>
  </div>
</template>
