<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div class="flex items-start justify-between">
      <div class="flex items-start gap-4 flex-1">
        <!-- Icon -->
        <div
          :class="[
            'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
            isActive ? 'bg-blue-100' : 'bg-gray-100'
          ]"
        >
          <!-- Step 1 Icon -->
          <svg v-if="step === 1" :class="['w-6 h-6', isActive ? 'text-blue-600' : 'text-gray-400']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <!-- Step 2 Icon -->
          <svg v-else-if="step === 2" :class="['w-6 h-6', isActive ? 'text-blue-600' : 'text-gray-400']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <!-- Step 3 Icon -->
          <svg v-else :class="['w-6 h-6', isActive ? 'text-blue-600' : 'text-gray-400']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <!-- Content -->
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800 mb-1">
            {{ title }}
          </h3>
          <p v-if="subtitle" class="text-sm text-gray-500 mb-2">{{ subtitle }}</p>
          <p v-if="description" class="text-gray-600 mb-4">{{ description }}</p>

          <!-- Status Tags -->
          <div class="flex items-center gap-4 flex-wrap">
            <span
              :class="[
                'px-3 py-1 rounded-full text-sm',
                isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
              ]"
            >
              {{ statusText }}
            </span>
            <span class="text-sm text-gray-500 flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {{ supportComments }} Support comments
            </span>
            <span class="text-sm text-gray-500 flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ reviewTime }}
            </span>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="flex items-center gap-2">
        <button
          v-if="isActive"
          @click="$emit('start')"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Get started
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          v-else
          disabled
          class="px-6 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Locked
        </button>
        <button class="p-2 text-gray-400 hover:text-gray-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  step: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: false
  },
  supportComments: {
    type: Number,
    default: 0
  },
  reviewTime: {
    type: String,
    default: ''
  }
})

defineEmits(['start'])

const statusText = computed(() => {
  return props.isActive ? 'Ready to start' : 'Not ready to start'
})
</script>
