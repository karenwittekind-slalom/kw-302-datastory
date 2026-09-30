<script setup lang="ts">
import ChapterShell from '../components/ChapterShell.vue'
import RecommendationCard from '../components/RecommendationCard.vue'
import MultiplierNetwork from '../visualizations/MultiplierNetwork.vue'
</script>

<template>
  <ChapterShell eyebrow="Chapter 6" title="One operational improvement creates value across the system." kicker="Sustainability is not a separate workstream. It is an outcome of smarter operating decisions.">
    <MultiplierNetwork focus-label="Yield 89 to 93" />
    <div class="final-stats">
      <div><strong>320,000</strong><span>additional bars</span></div>
      <div><strong>40</strong><span>fewer tons of waste</span></div>
      <div><strong>36%</strong><span>waste reduction</span></div>
      <div><strong>12</strong><span>more inventory days</span></div>
      <div><strong>9-point</strong><span>stockout reduction</span></div>
      <div><strong>8-point</strong><span>carbon-index reduction</span></div>
      <div><strong>$430k</strong><span>avoided cost</span></div>
      <div><strong>$650k</strong><span>revenue at risk avoided</span></div>
    </div>

    <RecommendationCard
      step="06"
      eyebrow="Final recommendation"
      title="Prioritize a yield-improvement program across the loss points."
      copy="Focus on processing loss, packaging rework, and material-quality consistency. Track yield improvements alongside product availability, avoided cost, and carbon impact."
      tool="Yield-to-impact control tower"
      ai="surface early drift from the 93% target and summarize cross-functional trade-offs for review."
    />

    <div class="recommendation-tools" aria-labelledby="recommendation-tools-title">
      <p id="recommendation-tools-title" class="step-recommendation__eyebrow">Recommended data tools</p>
      <div class="recommendation-tools__grid">
        <div>
          <h3>Yield control chart</h3>
          <span>Spot drift from the 93% target before losses compound.</span>
          <small class="recommendation-tools__ai">AI assist: flag unusual drift and summarize likely causes for review.</small>
        </div>
        <div>
          <h3>Loss Pareto</h3>
          <span>Focus corrective action on the few stages causing most waste.</span>
          <small class="recommendation-tools__ai">AI assist: cluster quality notes and surface recurring loss patterns.</small>
        </div>
        <div>
          <h3>Integrated impact scorecard</h3>
          <span>Review availability, cost, waste, carbon, and resilience together.</span>
          <small class="recommendation-tools__ai">AI assist: explain scenario trade-offs while managers make the decision.</small>
        </div>
      </div>
      <p class="recommendation-tools__disclaimer">AI features are optional decision support and should remain human-reviewed; this story uses no runtime AI.</p>
    </div>

  </ChapterShell>
</template>
