import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { formData } from '../data/formData'

export const useOnboardingStore = defineStore('onboarding', () => {
  // Form answers - structure: { step1: { page1: { blockId: { questionId: answer } } } }
  const answers = ref({})
  
  // Page completion status
  const pageCompletion = ref({
    step1: {
      page1: false,
      page2: false,
      page3: false
    }
  })
  
  // Step completion status
  const stepCompletion = ref({
    step1: false,
    step2: false,
    step3: false
  })

  // Step submission dates - tracks when each step was submitted
  const stepSubmissions = ref({
    step1: null,
    step2: null,
    step3: null
  })

  // Initialize answers structure
  function initializeAnswers(step, page, blockId, questionId) {
    if (!answers.value[step]) answers.value[step] = {}
    if (!answers.value[step][page]) answers.value[step][page] = {}
    if (!answers.value[step][page][blockId]) answers.value[step][page][blockId] = {}
    if (!answers.value[step][page][blockId][questionId]) {
      answers.value[step][page][blockId][questionId] = null
    }
  }

  // Update answer
  function updateAnswer(step, page, blockId, questionId, value) {
    initializeAnswers(step, page, blockId, questionId)
    answers.value[step][page][blockId][questionId] = value
  }

  // Get answer
  function getAnswer(step, page, blockId, questionId) {
    return answers.value[step]?.[page]?.[blockId]?.[questionId] ?? null
  }

  // Calculate progress for a form block
  function calculateBlockProgress(step, page, blockId, totalQuestions) {
    if (!answers.value[step]?.[page]?.[blockId]) return 0
    const blockAnswers = answers.value[step][page][blockId]
    const answeredCount = Object.values(blockAnswers).filter(
      answer => answer !== null && answer !== undefined && answer !== ''
    ).length
    return totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0
  }

  // Calculate page progress
  function calculatePageProgress(step, page, totalBlocks) {
    const pageAnswers = answers.value[step]?.[page] || {}
    const blocksWithAnswers = Object.keys(pageAnswers).length
    return totalBlocks > 0 ? Math.round((blocksWithAnswers / totalBlocks) * 100) : 0
  }

  // Calculate page completion percentage based on all questions answered
  function calculatePageCompletionPercentage(step, page) {
    const pageData = formData.step1[page]
    if (!pageData) return 0
    
    let totalQuestions = 0
    let answeredQuestions = 0
    
    pageData.formBlocks.forEach(block => {
      const blockAnswers = answers.value[step]?.[page]?.[block.id] || {}
      const blockTotal = block.questions.length
      totalQuestions += blockTotal
      
      const answered = Object.values(blockAnswers).filter(
        answer => {
          if (answer === null || answer === undefined || answer === '') return false
          if (typeof answer === 'object' && answer !== null) {
            // Handle file upload objects
            if (answer.file || answer.explanation) return true
            return Object.keys(answer).length > 0
          }
          return true
        }
      ).length
      answeredQuestions += answered
    })
    
    return totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0
  }

  // Mark page as complete
  function markPageComplete(step, page) {
    if (!pageCompletion.value[step]) pageCompletion.value[step] = {}
    pageCompletion.value[step][page] = true
  }

  // Mark step as submitted (stores the submission date)
  function markStepSubmitted(step) {
    stepSubmissions.value[step] = new Date()
  }

  // Get step submission date
  function getStepSubmissionDate(step) {
    return stepSubmissions.value[step] || null
  }

  // Get expected review date (submission date + 4 days)
  function getExpectedReviewDate(step) {
    const submissionDate = stepSubmissions.value[step]
    if (!submissionDate) return null
    const reviewDate = new Date(submissionDate.getTime() + 4 * 24 * 60 * 60 * 1000)
    return reviewDate
  }

  // Check if step is submitted
  function isStepSubmitted(step) {
    return stepSubmissions.value[step] !== null
  }

  // Mark step as complete
  function markStepComplete(step) {
    stepCompletion.value[step] = true
    markStepSubmitted(step)
  }

  // Check if step is complete
  function isStepComplete(step) {
    return stepCompletion.value[step] || false
  }

  // Check if page is complete
  function isPageComplete(step, page) {
    return pageCompletion.value[step]?.[page] || false
  }

  // Reset Step 1
  function resetStep1() {
    if (answers.value.step1) {
      answers.value.step1 = {}
    }
    pageCompletion.value.step1 = {
      page1: false,
      page2: false,
      page3: false
    }
    stepCompletion.value.step1 = false
  }

  return {
    answers,
    pageCompletion,
    stepCompletion,
    stepSubmissions,
    updateAnswer,
    getAnswer,
    calculateBlockProgress,
    calculatePageProgress,
    calculatePageCompletionPercentage,
    markPageComplete,
    markStepComplete,
    markStepSubmitted,
    getStepSubmissionDate,
    getExpectedReviewDate,
    isStepSubmitted,
    isStepComplete,
    isPageComplete,
    resetStep1
  }
})
