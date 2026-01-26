<template>
  <div class="fixed bottom-0 left-64 right-80 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between z-40">
    <div class="flex items-center gap-4">
      <!-- Save & Exit -->
      <button
        @click="handleSaveAndExit"
        class="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
      >
        Save & exit
      </button>

      <!-- Previous Button -->
      <button
        @click="handlePrevious"
        :disabled="!canGoPrevious"
        :class="[
          'px-4 py-2 rounded-lg transition-colors',
          canGoPrevious
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'bg-gray-50 text-gray-400 cursor-not-allowed'
        ]"
      >
        Previous
      </button>
    </div>

    <!-- Primary Button -->
    <button
      @click="handlePrimary"
      class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
    >
      <span>{{ primaryButtonText }}</span>
      <svg v-if="primaryButtonText !== 'Submit'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useOnboardingStore } from '../../stores/onboardingStore'

const router = useRouter()
const route = useRoute()
const store = useOnboardingStore()

const currentPage = computed(() => {
  if (route.path.includes('/step1/page1')) return 1
  if (route.path.includes('/step1/page2')) return 2
  if (route.path.includes('/step1/page3')) return 3
  return 0
})

const canGoPrevious = computed(() => {
  return currentPage.value > 1
})

const primaryButtonText = computed(() => {
  if (currentPage.value === 3) return 'Submit'
  return 'Continue'
})

const handleSaveAndExit = () => {
  router.push('/')
}

const handlePrevious = () => {
  if (!canGoPrevious.value) return
  
  if (currentPage.value === 2) {
    router.push('/step1/page1')
  } else if (currentPage.value === 3) {
    router.push('/step1/page2')
  }
}

const handlePrimary = () => {
  if (currentPage.value === 1) {
    store.markPageComplete('step1', 'page1')
    router.push('/step1/page2')
  } else if (currentPage.value === 2) {
    store.markPageComplete('step1', 'page2')
    router.push('/step1/page3')
  } else if (currentPage.value === 3) {
    store.markPageComplete('step1', 'page3')
    store.markStepComplete('step1')
    router.push('/')
  }
}
</script>
