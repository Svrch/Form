<script setup>
import { computed, defineProps, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(["update:modelValue"])

const { modelValue } = defineProps({
    modelValue: String,
    label: String
})

const value = ref(modelValue)

watch(value, () => {
    emits('update:modelValue', value.value)
})

const uploadFile = (e) => {
    const file = e.target.files[0]
    value.value = file
}

const previewFilePath = computed(() => {
    if (value.value) {
        return URL.createObjectURL(value.value)
    }
    return '#'
})

</script>

<template>
    <div class="mb-3 mt-3">
        <label class="form-label"> {{ label }}</label>
        <input
            class="form-control"
            type="file"
            @change="uploadFile"
        />
        <img
            :src="previewFilePath"
            alt=""
            class="w-100 mt-2"
        />
    </div>
</template>