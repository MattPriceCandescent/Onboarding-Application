<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
    <div class="flex items-center justify-between px-8 py-4">
      <div class="flex items-center gap-2">
        <svg
          v-if="isBlockComplete"
          class="w-5 h-5 text-green-600 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3
          :class="[
            'text-lg font-bold',
            isBlockComplete ? 'text-answered' : 'text-gray-800'
          ]"
        >
          {{ title }}
        </h3>
      </div>
      <button
        @click="toggleExpanded"
        class="flex-shrink-0 text-gray-600 hover:text-gray-800 transition-colors"
        aria-label="Toggle expand/collapse"
      >
        <svg
          v-if="isExpanded"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
    <div v-if="isExpanded" class="border-t border-gray-200 mb-6">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useOnboardingStore } from '../../stores/onboardingStore'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  blockId: {
    type: String,
    required: true
  },
  step: {
    type: String,
    required: true
  },
  page: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true
  }
})

const store = useOnboardingStore()
const isExpanded = ref(true)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const isBlockComplete = computed(() => {
  if (!props.questions || props.questions.length === 0) return false
  
  return props.questions.every(question => {
    const answer = store.getAnswer(props.step, props.page, props.blockId, question.id)
    
    // Check if answer exists
    if (answer === null || answer === undefined || answer === '') return false
    
    // For file uploads, check if file or explanation exists
    if (typeof answer === 'object' && answer !== null) {
      if (question.type === 'file') {
        return answer.file || answer.explanation
      }
      return Object.keys(answer).length > 0
    }
    
    return true
  })
})
</script>

<style scoped>
.text-answered {
  color: #656565;
}
</style>
