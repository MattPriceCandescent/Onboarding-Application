/**
 * Calculate progress for form questions
 */

export function calculateQuestionProgress(answers, totalQuestions) {
  if (!answers || totalQuestions === 0) return 0
  
  const answeredCount = Object.values(answers).filter(
    answer => {
      if (answer === null || answer === undefined || answer === '') return false
      if (Array.isArray(answer) && answer.length === 0) return false
      if (typeof answer === 'object' && Object.keys(answer).length === 0) return false
      return true
    }
  ).length
  
  return totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0
}

export function isQuestionAnswered(answer) {
  if (answer === null || answer === undefined || answer === '') return false
  if (Array.isArray(answer) && answer.length === 0) return false
  if (typeof answer === 'object' && Object.keys(answer).length === 0) return false
  return true
}
