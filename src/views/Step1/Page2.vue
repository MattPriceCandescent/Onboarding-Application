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
            :block-id="block.id"
            step="step1"
            page="page2"
            :questions="block.questions"
          >
            <QuestionRow
              v-for="(question, index) in block.questions"
              :key="question.id"
              :is-answered="isQuestionAnswered(block.id, question.id, question.type)"
              :show-separator="index < block.questions.length - 1"
            >
              <component
                :is="getComponentType(question.type)"
                v-bind="getComponentProps(question, block.id, block.id, question.id)"
                :model-value="getAnswer(block.id, question.id)"
                @update:model-value="updateAnswer(block.id, question.id, $event)"
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
import RadioGroup from '../../components/forms/RadioGroup.vue'
import SelectMenu from '../../components/forms/SelectMenu.vue'
import TextArea from '../../components/forms/TextArea.vue'

const store = useOnboardingStore()

const pageData = computed(() => formData.step1.page2)

const getAnswer = (blockId, questionId) => {
  return store.getAnswer('step1', 'page2', blockId, questionId)
}

const updateAnswer = (blockId, questionId, value) => {
  store.updateAnswer('step1', 'page2', blockId, questionId, value)
}

const isQuestionAnswered = (blockId, questionId, questionType) => {
  const answer = store.getAnswer('step1', 'page2', blockId, questionId)
  
  if (answer === null || answer === undefined || answer === '') return false
  
  // For file uploads, check if file or explanation exists
  if (typeof answer === 'object' && answer !== null) {
    if (questionType === 'file') {
      return answer.file || answer.explanation
    }
    return Object.keys(answer).length > 0
  }
  
  return true
}

const getComponentType = (type) => {
  const components = {
    radio: RadioGroup,
    select: SelectMenu,
    textarea: TextArea
  }
  return components[type] || TextArea
}

const getComponentProps = (question, blockId, blockIdForAnswer, questionIdForAnswer) => {
  const isAnswered = isQuestionAnswered(blockIdForAnswer, questionIdForAnswer, question.type)
  
  const baseProps = {
    label: question.label,
    name: `step1-page2-${blockId}-${question.id}`,
    isAnswered
  }

  if (question.type === 'radio') {
    return {
      ...baseProps,
      options: question.options || ['Yes', 'No']
    }
  }

  if (question.type === 'select') {
    return {
      ...baseProps,
      options: question.options || ['Answer A', 'Answer B', 'Answer C'],
      placeholder: 'Select'
    }
  }

  if (question.type === 'textarea') {
    return {
      ...baseProps,
      placeholder: question.placeholder || ''
    }
  }

  return baseProps
}
</script>
