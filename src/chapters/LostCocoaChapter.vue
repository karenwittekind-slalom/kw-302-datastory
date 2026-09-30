<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ChapterShell from '../components/ChapterShell.vue'
import MetricCallout from '../components/MetricCallout.vue'
import ImpactCascade from '../visualizations/ImpactCascade.vue'
import { impactChainSteps } from '../data/impactModel'
import StepRecommendation from '../components/StepRecommendation.vue'

const activeIndex = ref(0)
const stepCount = impactChainSteps.length

const updateStep = (nextIndex: number) => {
  activeIndex.value = Math.min(Math.max(nextIndex, 0), stepCount - 1)
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') updateStep(activeIndex.value + 1)
  if (event.key === 'ArrowLeft') updateStep(activeIndex.value - 1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <ChapterShell eyebrow="Chapter 3" title="Waste does not stop at the production line." kicker="The cascading effect of annual material loss hits availability, cost, and emissions.">
    <div class="stats-grid stats-grid--three">
      <MetricCallout value="550k" label="bars lost" tone="default" />
      <MetricCallout value="$1.1M" label="revenue not realized" tone="default" />
      <MetricCallout value="420t CO2e" label="modeled emissions" tone="risk" />
    </div>
    <ImpactCascade :steps="impactChainSteps" :active-index="activeIndex" @update:active-index="updateStep" />
    <StepRecommendation
      step="03"
      title="Link the loss to the decisions it triggers."
      copy="Bring production, inventory, procurement, and sustainability into one review so the downstream cost of loss is visible before teams react separately."
      tool="Impact chain input map linking yield, inventory, risk, cost, and carbon"
      ai="trace likely downstream relationships and draft questions for the cross-functional review."
    />
  </ChapterShell>
</template>
