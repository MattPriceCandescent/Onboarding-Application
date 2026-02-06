<template>
  <div :id="'block-' + blockId" class="form-block-scroll-target layout-surface bg-surface rounded-lg border-x border-b border-border mb-6 shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]">
    <div class="sticky top-16 z-40 flex flex-col bg-page rounded-t-lg -mt-px">
      <div class="form-block-gap h-4 flex-shrink-0 bg-page rounded-t-lg" aria-hidden="true" />
      <div class="form-block-header flex items-center justify-between px-8 py-4 layout-surface border-b border-border">
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
            isBlockComplete ? 'text-answered' : 'text-text-primary'
          ]"
        >
          {{ title }}
        </h3>
      </div>
      <button
        @click="toggleExpanded"
        class="flex-shrink-0 text-text-secondary hover:text-text-primary transition-colors"
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
    </div>
    <div v-if="isExpanded" class="border-t border-border mb-6">
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
  return props.questions.every(question =>
    store.isAnswerFilled(store.getAnswer(props.step, props.page, props.blockId, question.id))
  )
})
</script>

<style scoped>
.form-block-scroll-target {
  scroll-margin-top: 5rem; /* leave room for sticky header when scrolling from progress sidebar */
}
.form-block-gap {
  background-color: var(--color-bg-page);
  position: relative;
  z-index: 1;
}
.form-block-header {
  background-color: var(--color-bg-surface);
  min-height: 3.75rem;
  position: relative;
  z-index: 1;
}
</style>

