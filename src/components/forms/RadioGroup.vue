<template>
  <div class="flex items-center justify-between">
    <label class="text-gray-800 font-medium flex-1">{{ label }}</label>
    <div class="flex items-center gap-4">
      <label
        v-for="option in options"
        :key="option"
        :class="[
          'flex items-center gap-2 cursor-pointer',
          modelValue === option ? 'text-blue-600' : 'text-gray-600'
        ]"
      >
        <input
          type="radio"
          :name="name"
          :value="option"
          :checked="modelValue === option"
          @change="$emit('update:modelValue', option)"
          class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <span>{{ option }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: null
  },
  name: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>
