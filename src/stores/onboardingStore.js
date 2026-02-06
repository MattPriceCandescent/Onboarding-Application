import { defineStore } from 'pinia'
import { ref } from 'vue'
import { formData } from '../data/formData'
import { onboardingSteps } from '../data/onboardingConfig'

function buildInitialPageCompletion() {
  const initial = {}
  for (const step of onboardingSteps) {
    initial[step.id] = {}
    for (const pageId of step.pageIds) {
      initial[step.id][pageId] = false
    }
  }
  return initial
}

export const useOnboardingStore = defineStore('onboarding', () => {
  // Form answers - structure: { stepId: { pageId: { blockId: { questionId: answer } } } }
  const answers = ref({})

  // Page completion status - one entry per (stepId, pageId) from config
  const pageCompletion = ref(buildInitialPageCompletion())

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

  // Check if an answer value counts as "answered" (matches page completion logic for file uploads, etc.)
  function isAnswerFilled(answer) {
    if (answer === null || answer === undefined || answer === '') return false
    if (typeof answer === 'object' && answer !== null) {
      if (answer.file || answer.explanation) return true
      if (answer.value !== undefined) {
        if (answer.value === 'Other') return Boolean(answer.other && String(answer.other).trim())
        return true
      }
      return Object.keys(answer).length > 0
    }
    return true
  }

  // Get block progress as { answered, total } based on the block's questions (from formData).
  // Use this so progress stays correct when questions are added/removed.
  function getBlockProgressCounts(step, page, blockId, questions) {
    const total = Array.isArray(questions) ? questions.length : 0
    if (total === 0) return { answered: 0, total: 0 }
    let answered = 0
    for (const q of questions) {
      const answer = getAnswer(step, page, blockId, q.id)
      if (isAnswerFilled(answer)) answered += 1
    }
    return { answered, total }
  }

  // Calculate progress for a form block (percentage, for backward compatibility)
  function calculateBlockProgress(step, page, blockId, totalQuestions) {
    if (!answers.value[step]?.[page]?.[blockId]) return 0
    const blockAnswers = answers.value[step][page][blockId]
    const answeredCount = Object.values(blockAnswers).filter(a => isAnswerFilled(a)).length
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
    const pageData = formData[step]?.[page]
    if (!pageData) return 0

    let totalQuestions = 0
    let answeredQuestions = 0

    pageData.formBlocks.forEach(block => {
      const blockAnswers = answers.value[step]?.[page]?.[block.id] || {}
      const blockTotal = block.questions.length
      totalQuestions += blockTotal

      const answered = Object.values(blockAnswers).filter(isAnswerFilled).length
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

  // Reset a step (clears answers and page completion for that step)
  function resetStep(stepId) {
    if (answers.value[stepId]) {
      answers.value[stepId] = {}
    }
    const stepConfig = onboardingSteps.find(s => s.id === stepId)
    if (stepConfig) {
      pageCompletion.value[stepId] = {}
      for (const pageId of stepConfig.pageIds) {
        pageCompletion.value[stepId][pageId] = false
      }
    }
    stepCompletion.value[stepId] = false
    stepSubmissions.value[stepId] = null
  }

  function resetStep1() {
    resetStep('step1')
  }

  return {
    answers,
    pageCompletion,
    stepCompletion,
    stepSubmissions,
    updateAnswer,
    getAnswer,
    isAnswerFilled,
    getBlockProgressCounts,
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
    resetStep,
    resetStep1
  }
})
