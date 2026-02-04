<template>
  <aside class="layout-paper fixed right-0 top-16 bottom-0 w-80 bg-paper border-l border-border overflow-y-auto">
    <div class="p-6">
      <h2 class="text-lg font-bold text-text-primary mb-6">Your progress</h2>

      <!-- Page-level Progress with nested form blocks -->
      <div class="relative">
        <!-- Connecting line -->
        <div class="absolute left-4 top-8 bottom-0 w-0.5 bg-progress-bg"></div>
        
        <div
          v-for="(page, index) in pages"
          :key="page.id"
          class="relative mb-6"
        >
          <!-- Page indicator -->
          <div
            :class="[
              'flex items-center gap-3 mb-2',
              page.isActive ? 'accent-text text-accent font-bold' : page.completionPercentage === 100 ? 'text-text-secondary' : 'text-text-muted'
            ]"
          >
            <div
              :class="[
                'relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0',
                page.isActive 
                  ? 'accent-bg bg-accent text-text-inverse' 
                  : page.completionPercentage === 100 
                    ? 'bg-muted' 
                    : 'bg-muted text-text-muted'
              ]"
            >
              <!-- Checkmark for 100% complete pages -->
              <svg 
                v-if="page.completionPercentage === 100 && !page.isActive" 
                class="accent-text w-5 h-5 text-accent" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <!-- Number for active or incomplete pages -->
              <span v-else>{{ index + 1 }}</span>
            </div>
            <button
              @click="handlePageClick(page.id)"
              :class="[
                'flex-1 text-left cursor-pointer hover:underline',
                page.isActive ? 'font-bold' : 'font-normal'
              ]"
            >
              {{ page.title }}
            </button>
          </div>

          <!-- Form blocks (only visible for active page) -->
          <div v-if="page.isActive && page.blocks.length > 0" class="ml-11 mt-2 space-y-4">
            <div
              v-for="block in page.blocks"
              :key="block.id"
              class="mb-3"
            >
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm text-text-muted">{{ block.title }}</span>
                <span class="text-xs text-text-muted">{{ block.answered }}/{{ block.total }}</span>
              </div>
              <!-- Progress bar -->
              <div class="w-full bg-progress-bg rounded-full h-1">
                <div
                  class="accent-fill bg-progress-fill h-1 rounded-full transition-all duration-300"
                  :style="{ width: `${block.percentage}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Action Button -->
      <div class="fixed bottom-6 right-6">
        <button class="accent-bg w-12 h-12 bg-accent text-text-inverse rounded-full shadow-lg hover:bg-accent-hover transition-colors flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOnboardingStore } from '../../stores/onboardingStore'
import { formData } from '../../data/formData'

const route = useRoute()
const router = useRouter()
const store = useOnboardingStore()

const currentPage = computed(() => {
  if (route.path.includes('/step1/page1')) return 'page1'
  if (route.path.includes('/step1/page2')) return 'page2'
  if (route.path.includes('/step1/page3')) return 'page3'
  return null
})

const pages = computed(() => {
  const step1Pages = formData.step1
  const pageIds = ['page1', 'page2', 'page3']
  
  return pageIds.map((pageId, index) => {
    const pageData = step1Pages[pageId]
    const isActive = currentPage.value === pageId
    const completionPercentage = store.calculatePageCompletionPercentage('step1', pageId)
    
    // Get form blocks for this page (counts from store + formData so add/remove questions stays correct)
    const blocks = pageData ? pageData.formBlocks.map(block => {
      const { answered, total } = store.getBlockProgressCounts('step1', pageId, block.id, block.questions)
      const percentage = total > 0 ? Math.round((answered / total) * 100) : 0
      return {
        id: block.id,
        title: block.title,
        answered,
        total,
        percentage
      }
    }) : []
    
    return {
      id: pageId,
      title: pageData ? pageData.title : '',
      isActive,
      completionPercentage,
      blocks
    }
  })
})

const handlePageClick = (pageId) => {
  // Progress is already saved in the store as user interacts with forms
  // Navigate to the clicked page
  const routeMap = {
    'page1': '/step1/page1',
    'page2': '/step1/page2',
    'page3': '/step1/page3'
  }
  
  const targetRoute = routeMap[pageId]
  if (targetRoute && route.path !== targetRoute) {
    router.push(targetRoute)
  }
}
</script>
