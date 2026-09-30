<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ChapterShell from '../components/ChapterShell.vue'
import MetricCallout from '../components/MetricCallout.vue'
import ImpactCascade from '../visualizations/ImpactCascade.vue'
import { impactChainSteps } from '../data/impactModel'

const activeIndex = ref(0)
const stepCount = impactChainSteps.length

const currentStep = computed(() => impactChainSteps[activeIndex.value])

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
    <div class="info-note" aria-live="polite">
      <strong>Fictional modeled values:</strong> {{ currentStep.label }} leads to fewer finished bars, tighter inventory coverage, more stockout risk, and emergency procurement.
    </div>
  </ChapterShell>
</template>
