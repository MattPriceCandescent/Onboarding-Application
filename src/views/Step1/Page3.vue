<template>
  <div class="min-h-screen bg-page layout-page">
    <Header />
    <div class="flex">
      <LeftNav />
      <main class="flex-1 ml-64 mr-80 mt-16 mb-20 p-8 pb-24 bg-page layout-page">
        <div class="max-w-4xl">
          <h1 class="text-3xl font-bold text-text-primary mb-2">{{ pageData.title }}</h1>
          <p class="text-text-secondary mb-8">{{ pageData.subtitle }}</p>

          <FormBlock
            v-for="block in pageData.formBlocks"
            :key="block.id"
            :title="block.title"
            :block-id="block.id"
            step="step1"
            page="page3"
            :questions="block.questions"
          >
            <QuestionRow
              v-for="(question, index) in block.questions"
              :key="question.id"
              :is-answered="isQuestionAnswered(block.id, question.id)"
              :show-separator="index < block.questions.length - 1"
            >
              <FileUpload
                :label="question.label"
                :description="question.description"
                :model-value="getFile(block.id, question.id)"
                :explanation="getExplanation(block.id, question.id)"
                :is-answered="isQuestionAnswered(block.id, question.id)"
                @update:model-value="updateFile(block.id, question.id, $event)"
                @update:explanation="updateExplanation(block.id, question.id, $event)"
              />
            </QuestionRow>
          </FormBlock>
        </div>
      </main>
      <ProgressIndicator />
      <PageNavigation />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useOnboardingStore } from '../../stores/onboardingStore'
import { formData } from '../../data/formData'
import Header from '../../components/layout/Header.vue'
import LeftNav from '../../components/layout/LeftNav.vue'
import ProgressIndicator from '../../components/layout/ProgressIndicator.vue'
import PageNavigation from '../../components/layout/PageNavigation.vue'
import FormBlock from '../../components/forms/FormBlock.vue'
import QuestionRow from '../../components/forms/QuestionRow.vue'
import FileUpload from '../../components/forms/FileUpload.vue'

const store = useOnboardingStore()

const pageData = computed(() => formData.step1.page3)

const getFile = (blockId, questionId) => {
  const answer = store.getAnswer('step1', 'page3', blockId, questionId)
  return answer?.file || null
}

const getExplanation = (blockId, questionId) => {
  const answer = store.getAnswer('step1', 'page3', blockId, questionId)
  return answer?.explanation || ''
}

const updateFile = (blockId, questionId, file) => {
  const currentAnswer = store.getAnswer('step1', 'page3', blockId, questionId) || {}
  store.updateAnswer('step1', 'page3', blockId, questionId, {
    ...currentAnswer,
    file
  })
}

const updateExplanation = (blockId, questionId, explanation) => {
  const currentAnswer = store.getAnswer('step1', 'page3', blockId, questionId) || {}
  store.updateAnswer('step1', 'page3', blockId, questionId, {
    ...currentAnswer,
    explanation
  })
}

const isQuestionAnswered = (blockId, questionId) => {
  const answer = store.getAnswer('step1', 'page3', blockId, questionId)
  
  if (!answer) return false
  
  // For file uploads, check if file or explanation exists
  if (typeof answer === 'object' && answer !== null) {
    return answer.file || answer.explanation
  }
  
  return true
}
</script>
