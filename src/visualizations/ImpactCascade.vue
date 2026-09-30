<script setup lang="ts">
import { computed } from 'vue'
import type { ImpactChainStep } from '../data/impactModel'

const props = defineProps<{
  steps: ImpactChainStep[]
  activeIndex: number
}>()

const emit = defineEmits<{ 'update:activeIndex': [number] }>()

const activeStep = computed(() => props.steps[props.activeIndex] ?? props.steps[0])

const stepForward = () => {
  emit('update:activeIndex', Math.min(props.activeIndex + 1, props.steps.length - 1))
}

const stepBackward = () => {
  emit('update:activeIndex', Math.max(props.activeIndex - 1, 0))
}
</script>

<template>
  <div class="impact-cascade" tabindex="0" aria-label="Cause and effect sequence">
    <div class="impact-cascade__controls">
      <button type="button" class="story-button" @click="stepBackward" :disabled="activeIndex === 0">Previous</button>
      <button type="button" class="story-button story-button--primary" @click="stepForward" :disabled="activeIndex === steps.length - 1">Next</button>
    </div>

    <div class="impact-cascade__track">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="impact-cascade__step"
        :class="{ 'impact-cascade__step--active': index === activeIndex }"
      >
        <span class="impact-cascade__index">0{{ index + 1 }}</span>
        <strong>{{ step.label }}</strong>
        <small>{{ step.detail }}</small>
      </div>
    </div>

    <div class="impact-cascade__focus" aria-live="polite">
      <p class="impact-cascade__eyebrow">Current step</p>
      <h3>{{ activeStep.label }}</h3>
      <p>{{ activeStep.detail }}</p>
    </div>
  </div>
</template>
