<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <div class="flex">
      <LeftNav />
      <main class="flex-1 ml-64 mr-80 mt-16 mb-20 p-8">
        <div class="max-w-4xl">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Marketplace Onboarding</h1>
          <p class="text-gray-600 mb-8">
            Complete the three-step marketplace onboarding process to get your solution listed. Each step requires approval before proceeding.
          </p>

          <div class="space-y-6">
            <StepCard
              :step="1"
              title="Step 1: Sandbox access"
              description="Get access to the development sandbox environment to begin testing your integration."
              :is-active="!isStep1Submitted"
              :is-submitted="isStep1Submitted"
              :expected-review-date="step1ReviewDate"
              success-message="Sandbox access is on the way!"
              :support-comments="0"
              review-time="1 week review time"
              @start="handleStartStep1"
              @review="handleReviewStep1"
            />

            <StepCard
              :step="2"
              title="Step 2: Security & compliance"
              subtitle="[Company wide questions and documents]"
              :is-active="false"
              :is-submitted="isStep2Submitted"
              :expected-review-date="step2ReviewDate"
              success-message="Security & compliance review is in progress!"
              :support-comments="0"
              review-time="3 - 4 week review time"
              @start="handleStartStep2"
              @review="handleReviewStep2"
            />

            <StepCard
              :step="3"
              title="Step 3: Product information"
              description="Submit your marketplace listing details to showcase your solution to customers."
              :is-active="false"
              :is-submitted="isStep3Submitted"
              :expected-review-date="step3ReviewDate"
              success-message="Product information review is in progress!"
              :support-comments="0"
              review-time="3 - 4 week review time"
              @start="handleStartStep3"
              @review="handleReviewStep3"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useOnboardingStore } from '../stores/onboardingStore'
import Header from '../components/layout/Header.vue'
import LeftNav from '../components/layout/LeftNav.vue'
import StepCard from '../components/overview/StepCard.vue'

const router = useRouter()
const store = useOnboardingStore()

const isStep1Complete = computed(() => store.isStepComplete('step1'))
const isStep2Complete = computed(() => store.isStepComplete('step2'))
const isStep3Complete = computed(() => store.isStepComplete('step3'))

const isStep1Submitted = computed(() => store.isStepSubmitted('step1'))
const isStep2Submitted = computed(() => store.isStepSubmitted('step2'))
const isStep3Submitted = computed(() => store.isStepSubmitted('step3'))

// Format date as "MMM DD, YYYY" (e.g., "Nov 21, 2025")
const formatDate = (date) => {
  if (!date) return ''
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const step1ReviewDate = computed(() => {
  const reviewDate = store.getExpectedReviewDate('step1')
  return reviewDate ? formatDate(reviewDate) : ''
})

const step2ReviewDate = computed(() => {
  const reviewDate = store.getExpectedReviewDate('step2')
  return reviewDate ? formatDate(reviewDate) : ''
})

const step3ReviewDate = computed(() => {
  const reviewDate = store.getExpectedReviewDate('step3')
  return reviewDate ? formatDate(reviewDate) : ''
})

const handleStartStep1 = () => {
  router.push('/step1/page1')
}

const handleStartStep2 = () => {
  if (isStep1Complete.value) {
    // Navigate to Step 2 when implemented
    console.log('Step 2 not yet implemented')
  }
}

const handleStartStep3 = () => {
  if (isStep1Complete.value) {
    // Navigate to Step 3 when implemented
    console.log('Step 3 not yet implemented')
  }
}

const handleReviewStep1 = () => {
  // Navigate to Step 1, page 1 to review submission
  router.push('/step1/page1')
}

const handleReviewStep2 = () => {
  // Navigate to review page or show details
  console.log('Review Step 2')
}

const handleReviewStep3 = () => {
  // Navigate to review page or show details
  console.log('Review Step 3')
}
</script>
