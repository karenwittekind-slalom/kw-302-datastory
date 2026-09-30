<script setup lang="ts">
import ChapterShell from '../components/ChapterShell.vue'
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

    <div class="recommendation-box">
      <p class="recommendation-box__label">Recommendation</p>
      <p>Prioritize a yield-improvement program focused on processing loss, packaging rework, and material-quality consistency. Track yield improvements alongside product availability, avoided cost, and carbon impact.</p>
    </div>

    <ol class="next-actions">
      <li>Investigate the production stages responsible for the largest losses.</li>
      <li>Establish a 93% yield target and track progress monthly.</li>
      <li>Connect production-loss reporting to inventory, procurement, and sustainability reviews.</li>
    </ol>
  </ChapterShell>
</template>
