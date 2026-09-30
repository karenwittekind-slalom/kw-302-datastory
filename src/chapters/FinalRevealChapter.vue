<script setup lang="ts">
import ChapterShell from '../components/ChapterShell.vue'
import RecommendationCard from '../components/RecommendationCard.vue'
import MultiplierNetwork from '../visualizations/MultiplierNetwork.vue'
</script>

<template>
  <ChapterShell eyebrow="Chapter 6" title="One connected view reveals the multiplier." kicker="The yield scenario is proof of what better decision support can uncover across growth, resilience, profitability, and sustainability.">
    <MultiplierNetwork focus-label="Connected visibility" focus-detail="Yield proof point" />
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
      title="Invest in integrated supply chain visibility and decision intelligence."
      copy="Connect demand, inventory, production, supplier performance, and sustainability data into one decision-support experience. Use the yield scenario as a proof point, not a standalone program."
      tool="Unified decision-support control tower"
      ai="surface early drift, explain cross-functional trade-offs, and prepare evidence for leadership review."
    />

    <div class="recommendation-tools" aria-labelledby="recommendation-tools-title">
      <p id="recommendation-tools-title" class="step-recommendation__eyebrow">Recommended data tools</p>
      <div class="recommendation-tools__grid">
        <div>
          <h3>Connected KPI layer</h3>
          <span>Unify demand, production, inventory, supplier, and sustainability signals.</span>
          <small class="recommendation-tools__ai">AI assist: flag unusual movement and summarize likely drivers for review.</small>
        </div>
        <div>
          <h3>Scenario planning workspace</h3>
          <span>Test operational trade-offs before committing capital or capacity.</span>
          <small class="recommendation-tools__ai">AI assist: compare scenarios and surface the assumptions driving the result.</small>
        </div>
        <div>
          <h3>Executive impact scorecard</h3>
          <span>Review availability, cost, waste, carbon, and resilience together.</span>
          <small class="recommendation-tools__ai">AI assist: explain trade-offs and draft the questions leadership needs to resolve.</small>
        </div>
      </div>
      <p class="recommendation-tools__disclaimer">AI features are optional decision support and should remain human-reviewed; this story uses no runtime AI.</p>
    </div>

  </ChapterShell>
</template>
