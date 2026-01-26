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
            <component
              v-for="question in block.questions"
              :key="question.id"
              :is="getComponentType(question.type)"
              v-bind="getComponentProps(question, block.id)"
              :model-value="getAnswer(block.id, question.id)"
              @update:model-value="updateAnswer(block.id, question.id, $event)"
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
import RadioGroup from '../../components/forms/RadioGroup.vue'
import SelectMenu from '../../components/forms/SelectMenu.vue'
import TextArea from '../../components/forms/TextArea.vue'

const store = useOnboardingStore()

const pageData = computed(() => formData.step1.page1)

const getAnswer = (blockId, questionId) => {
  return store.getAnswer('step1', 'page1', blockId, questionId)
}

const updateAnswer = (blockId, questionId, value) => {
  store.updateAnswer('step1', 'page1', blockId, questionId, value)
}

const getComponentType = (type) => {
  const components = {
    radio: RadioGroup,
    select: SelectMenu,
    textarea: TextArea
  }
  return components[type] || TextArea
}

const getComponentProps = (question, blockId) => {
  const baseProps = {
    label: question.label,
    name: `step1-page1-${blockId}-${question.id}`
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
