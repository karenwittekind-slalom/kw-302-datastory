<script setup lang="ts">
import ChapterShell from '../components/ChapterShell.vue'
import MetricCallout from '../components/MetricCallout.vue'
import MaterialFlowVisualization from '../visualizations/MaterialFlowVisualization.vue'
import StepRecommendation from '../components/StepRecommendation.vue'
</script>

<template>
  <ChapterShell eyebrow="Chapter 2" title="Not every ton of cocoa becomes chocolate." kicker="At 89% yield, waste is not only material leaving the factory. It is product that cannot reach customers.">
    <div class="stats-grid stats-grid--two">
      <MetricCallout value="1,000t" label="cocoa purchased" tone="default" />
      <MetricCallout value="890t" label="packaged output" tone="highlight" />
      <MetricCallout value="110t" label="annual loss" tone="risk" />
    </div>
    <MaterialFlowVisualization />
    <p class="chapter__supporting-copy">
      The loss is concentrated in quality handling, processing, and packaging rework. It is visible in the flow, but it also shows up in service levels, cost, and carbon.
    </p>
    <StepRecommendation
      step="02"
      title="Find the largest loss points before choosing a fix."
      copy="Measure yield at quality handling, processing, and packaging so improvement work starts where the most material is leaving the product flow."
      tool="Loss Pareto by production stage"
      ai="group operator notes and surface recurring causes behind the largest loss categories."
    />
  </ChapterShell>
</template>
