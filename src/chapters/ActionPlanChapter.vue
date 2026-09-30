<script setup lang="ts">
import { Leaf } from 'lucide-vue-next'
import ChapterShell from '../components/ChapterShell.vue'
import RecommendationCard from '../components/RecommendationCard.vue'
import ActionPlanRoadmap from '../visualizations/ActionPlanRoadmap.vue'
import { baselineImpactModel } from '../data/impactModel'
</script>

<template>
  <ChapterShell eyebrow="Chapter 7" title="Fund the decision-support capability." kicker="Start with a measurable proof point, then scale the intelligence layer that helps leaders act on connected signals.">
    <div class="executive-summary">
      <p class="executive-summary__label">The leadership ask</p>
      <p>Approve stage one of an integrated visibility program and the measurement capability needed to prove its impact. Release funding in stages as the team connects signals, tests decisions, and validates business value.</p>
    </div>

    <ActionPlanRoadmap />

    <div class="action-plan__outcomes" aria-label="Modeled outcomes from connected decision support">
      <div><strong>+320k</strong><span>annual bars</span></div>
      <div><strong>-40t</strong><span>annual waste</span></div>
      <div><strong>${{ (baselineImpactModel.avoidedProcurementCost / 1000).toFixed(0) }}k</strong><span>avoided procurement</span></div>
      <div><strong>-8 pts</strong><span>carbon index</span></div>
    </div>

    <RecommendationCard
      step="07"
      eyebrow="Leadership decision"
      title="Approve stage one: connect the signals around the yield proof point."
      copy="The capability earns continued funding by showing where loss occurs, testing the trade-off, and connecting the result to availability, cost, waste, and carbon."
      tool="Executive decision-intelligence scorecard"
      ai="prepare concise gate reviews, flag missing evidence, and surface the decisions leadership needs to make."
    />

    <p class="chapter-farewell">
      <Leaf :size="18" aria-hidden="true" />
      <span>Thank you for reading this report. Here’s to growing sustainably, one bar at a time.</span>
    </p>
  </ChapterShell>
</template>
