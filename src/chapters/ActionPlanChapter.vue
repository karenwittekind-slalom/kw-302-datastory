<script setup lang="ts">
import { Leaf } from 'lucide-vue-next'
import ChapterShell from '../components/ChapterShell.vue'
import RecommendationCard from '../components/RecommendationCard.vue'
import ActionPlanRoadmap from '../visualizations/ActionPlanRoadmap.vue'
import { baselineImpactModel } from '../data/impactModel'
</script>

<template>
  <ChapterShell eyebrow="Chapter 7" title="Turn the sustainability multiplier into an operating plan." kicker="A staged funding request gives leadership proof points, ownership, and a measurable path from 89% to 93% yield.">
    <div class="executive-summary">
      <p class="executive-summary__label">The leadership ask</p>
      <p>Approve a focused yield-improvement program and the measurement capability needed to prove its impact. Release funding in stages as the team validates loss causes, yield performance, and business value.</p>
    </div>

    <ActionPlanRoadmap />

    <div class="action-plan__outcomes" aria-label="Modeled outcomes at the 93 percent yield target">
      <div><strong>+320k</strong><span>annual bars</span></div>
      <div><strong>-40t</strong><span>annual waste</span></div>
      <div><strong>${{ (baselineImpactModel.avoidedProcurementCost / 1000).toFixed(0) }}k</strong><span>avoided procurement</span></div>
      <div><strong>-8 pts</strong><span>carbon index</span></div>
    </div>

    <RecommendationCard
      step="07"
      eyebrow="Leadership decision"
      title="Approve the first stage now, with the 93% target as the release condition for scale."
      copy="The program earns continued funding by showing where loss occurs, proving the yield improvement, and connecting the result to availability, cost, waste, and carbon."
      tool="Executive yield-to-impact scorecard"
      ai="prepare concise gate reviews, flag missed measures, and surface the decisions leadership needs to make."
    />

    <p class="chapter-farewell">
      <Leaf :size="18" aria-hidden="true" />
      <span>Thank you for reading this report. Here’s to growing sustainably, one bar at a time.</span>
    </p>
  </ChapterShell>
</template>
