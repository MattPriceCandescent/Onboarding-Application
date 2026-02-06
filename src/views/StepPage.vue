<template>
  <div class="min-h-screen bg-page layout-page">
    <Header />
    <div class="flex">
      <LeftNav />
      <main class="flex-1 ml-64 mr-80 mt-16 mb-20 p-8 pb-24 bg-page layout-page">
        <div class="max-w-4xl" v-if="pageData">
          <h1 class="text-3xl font-bold text-text-primary mb-2">{{ pageData.title }}</h1>
          <p class="text-text-secondary mb-8">{{ pageData.subtitle }}</p>

          <FormBlock
            v-for="block in pageData.formBlocks"
            :key="block.id"
            :title="block.title"
            :block-id="block.id"
            :step="stepId"
            :page="pageId"
            :questions="block.questions"
          >
            <QuestionRow
              v-for="(question, index) in block.questions"
              :key="question.id"
              :is-answered="isQuestionAnswered(block.id, question.id, question.type)"
              :show-separator="index < block.questions.length - 1"
            >
              <FileUpload
                v-if="question.type === 'file'"
                :label="question.label"
                :description="question.description"
                :model-value="getFile(block.id, question.id)"
                :explanation="getExplanation(block.id, question.id)"
                :is-answered="isQuestionAnswered(block.id, question.id, 'file')"
                @update:model-value="updateFile(block.id, question.id, $event)"
                @update:explanation="updateExplanation(block.id, question.id, $event)"
              />
              <component
                v-else
                :is="getComponentType(question.type)"
                v-bind="getComponentProps(question, block.id, question.id)"
                :model-value="getAnswer(block.id, question.id)"
                @update:model-value="updateAnswer(block.id, question.id, $event)"
              />
            </QuestionRow>
          </FormBlock>
        </div>
        <div v-else class="max-w-4xl">
          <p class="text-text-secondary">Page not found.</p>
        </div>
      </main>
      <ProgressIndicator />
      <PageNavigation />
    </div>
  </div>
</template>

<script setup>
import { computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useOnboardingStore } from '../stores/onboardingStore'
import { formData } from '../data/formData'
import Header from '../components/layout/Header.vue'
import LeftNav from '../components/layout/LeftNav.vue'
import ProgressIndicator from '../components/layout/ProgressIndicator.vue'
import PageNavigation from '../components/layout/PageNavigation.vue'
import FormBlock from '../components/forms/FormBlock.vue'
import QuestionRow from '../components/forms/QuestionRow.vue'
import RadioGroup from '../components/forms/RadioGroup.vue'
import SelectMenu from '../components/forms/SelectMenu.vue'
import TextArea from '../components/forms/TextArea.vue'
import TextField from '../components/forms/TextField.vue'
import DateInput from '../components/forms/DateInput.vue'
import FileUpload from '../components/forms/FileUpload.vue'

const route = useRoute()
const store = useOnboardingStore()

const stepId = computed(() => route.params.stepId || '')
const pageId = computed(() => route.params.pageId || '')

const pageData = computed(() => {
  const step = formData[stepId.value]
  return step ? step[pageId.value] : null
})

// Scroll to form block when route has #block-* hash (e.g. after clicking block in progress sidebar)
watch(
  () => ({ path: route.path, hash: route.hash }),
  ({ hash }) => {
    if (hash && hash.startsWith('#block-')) {
      const id = hash.slice(1)
      nextTick(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  },
  { immediate: true }
)

const getAnswer = (blockId, questionId) => {
  return store.getAnswer(stepId.value, pageId.value, blockId, questionId)
}

const updateAnswer = (blockId, questionId, value) => {
  store.updateAnswer(stepId.value, pageId.value, blockId, questionId, value)
}

const getFile = (blockId, questionId) => {
  const answer = store.getAnswer(stepId.value, pageId.value, blockId, questionId)
  return answer?.file || null
}

const getExplanation = (blockId, questionId) => {
  const answer = store.getAnswer(stepId.value, pageId.value, blockId, questionId)
  return answer?.explanation || ''
}

const updateFile = (blockId, questionId, file) => {
  const currentAnswer = store.getAnswer(stepId.value, pageId.value, blockId, questionId) || {}
  store.updateAnswer(stepId.value, pageId.value, blockId, questionId, {
    ...currentAnswer,
    file
  })
}

const updateExplanation = (blockId, questionId, explanation) => {
  const currentAnswer = store.getAnswer(stepId.value, pageId.value, blockId, questionId) || {}
  store.updateAnswer(stepId.value, pageId.value, blockId, questionId, {
    ...currentAnswer,
    explanation
  })
}

const isQuestionAnswered = (blockId, questionId, questionType) => {
  const answer = store.getAnswer(stepId.value, pageId.value, blockId, questionId)

  if (answer === null || answer === undefined || answer === '') return false

  if (typeof answer === 'object' && answer !== null) {
    if (questionType === 'file') {
      return answer.file || answer.explanation
    }
    if (questionType === 'select' && answer.value !== undefined) {
      if (answer.value === 'Other') return Boolean(answer.other && answer.other.trim())
      return true
    }
    return Object.keys(answer).length > 0
  }

  return true
}

const getComponentType = (type) => {
  const components = {
    radio: RadioGroup,
    select: SelectMenu,
    text: TextField,
    textarea: TextArea,
    date: DateInput
  }
  return components[type] || TextArea
}

const getComponentProps = (question, blockId, questionId) => {
  const isAnswered = isQuestionAnswered(blockId, questionId, question.type)

  const baseProps = {
    label: question.label,
    name: `${stepId.value}-${pageId.value}-${blockId}-${questionId}`,
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

  if (question.type === 'text') {
    return {
      ...baseProps,
      placeholder: question.placeholder || ''
    }
  }

  if (question.type === 'date') {
    return {
      ...baseProps,
      placeholder: question.placeholder || 'MM/DD/YYYY'
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
