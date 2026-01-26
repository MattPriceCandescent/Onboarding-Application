<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <div class="flex">
      <LeftNav />
      <main class="flex-1 ml-64 mr-80 mt-16 mb-20 p-8">
        <div class="max-w-4xl">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ pageData.title }}</h1>
          <p class="text-gray-600 mb-8">{{ pageData.subtitle }}</p>

          <FormBlock
            v-for="block in pageData.formBlocks"
            :key="block.id"
            :title="block.title"
          >
            <FileUpload
              v-for="question in block.questions"
              :key="question.id"
              :label="question.label"
              :description="question.description"
              :model-value="getFile(block.id, question.id)"
              :explanation="getExplanation(block.id, question.id)"
              @update:model-value="updateFile(block.id, question.id, $event)"
              @update:explanation="updateExplanation(block.id, question.id, $event)"
            />
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
</script>
