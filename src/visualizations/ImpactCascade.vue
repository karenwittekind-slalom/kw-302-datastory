<script setup lang="ts">
import { computed } from 'vue'
import type { ImpactChainStep } from '../data/impactModel'

const props = defineProps<{
  steps: ImpactChainStep[]
  activeIndex: number
}>()

const emit = defineEmits<{ 'update:activeIndex': [number] }>()

const activeStep = computed(() => props.steps[props.activeIndex] ?? props.steps[0])

</script>

<template>
  <div class="impact-cascade" tabindex="0" aria-label="Cause and effect sequence">
    <div class="impact-cascade__track">
      <template v-for="(step, index) in steps" :key="step.id">
        <button
          class="impact-cascade__step"
          :class="{ 'impact-cascade__step--active': index === activeIndex }"
          type="button"
          :aria-pressed="index === activeIndex"
          @click="emit('update:activeIndex', index)"
        >
          <span class="impact-cascade__index">0{{ index + 1 }}</span>
          <strong>{{ step.label }}</strong>
          <small>{{ step.detail }}</small>
        </button>

        <div v-if="index === activeIndex" class="impact-cascade__mobile-context">
          <div class="impact-cascade__focus" aria-live="polite">
            <p class="impact-cascade__eyebrow">Current step</p>
            <h3>{{ activeStep.label }}</h3>
            <div class="impact-cascade__focus-grid">
              <div><strong>Problem</strong><p>{{ activeStep.detail }}</p></div>
              <div><strong>Actionable solution</strong><p>{{ activeStep.action }}</p></div>
              <div><strong>Data input</strong><p>{{ activeStep.dataInput }}</p></div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="impact-cascade__desktop-context">
      <div class="impact-cascade__focus" aria-live="polite">
        <p class="impact-cascade__eyebrow">Current step</p>
        <h3>{{ activeStep.label }}</h3>
        <div class="impact-cascade__focus-grid">
          <div><strong>Problem</strong><p>{{ activeStep.detail }}</p></div>
          <div><strong>Actionable solution</strong><p>{{ activeStep.action }}</p></div>
          <div><strong>Data input</strong><p>{{ activeStep.dataInput }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>
