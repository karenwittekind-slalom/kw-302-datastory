<script setup lang="ts">
import ChapterShell from '../components/ChapterShell.vue'
import MetricCallout from '../components/MetricCallout.vue'
import MaterialFlowVisualization from '../visualizations/MaterialFlowVisualization.vue'
import StepRecommendation from '../components/StepRecommendation.vue'
</script>

<template>
  <ChapterShell eyebrow="Chapter 2" title="The first hidden signal is material loss." kicker="A single output number hides where value leaves the process and which team can act on it.">
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
      title="Instrument the flow before choosing a fix."
      copy="Create a stage-level loss log across quality handling, processing, and packaging so the highest-value intervention can be identified."
      tool="Loss Pareto with shared production definitions"
      ai="group operator notes and surface recurring causes behind the largest loss categories."
    />
  </ChapterShell>
</template>
