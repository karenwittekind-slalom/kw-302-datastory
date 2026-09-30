<script setup lang="ts">
import { ref } from 'vue'
import ChapterShell from '../components/ChapterShell.vue'
import AccessibleChartSummary from '../components/AccessibleChartSummary.vue'
import DemandGrowthChart from '../visualizations/DemandGrowthChart.vue'
import StepRecommendation from '../components/StepRecommendation.vue'

const selectedYear = ref('2025')
</script>

<template>
  <ChapterShell eyebrow="Chapter 1" title="Demand is growing. The supply chain is working harder to keep up." kicker="Can the current supply chain support the next stage of growth?">
    <p class="chapter__lede">
      Bean &amp; Bloom’s demand grew by approximately 52% over two years, but production efficiency did not improve at the same rate.
    </p>
    <div class="stats-grid stats-grid--growth" role="group" aria-label="Annual demand by year">
      <button
        class="metric-callout growth-year-card"
        :class="{ 'growth-year-card--selected': selectedYear === '2023' }"
        type="button"
        :aria-pressed="selectedYear === '2023'"
        @click="selectedYear = '2023'"
      >
        <div class="metric-callout__value">5.2M</div>
        <div class="metric-callout__label">2023 bars</div>
      </button>
      <button
        class="metric-callout growth-year-card"
        :class="{ 'growth-year-card--selected': selectedYear === '2024' }"
        type="button"
        :aria-pressed="selectedYear === '2024'"
        @click="selectedYear = '2024'"
      >
        <div class="metric-callout__value">6.5M</div>
        <div class="metric-callout__label">2024 bars</div>
      </button>
      <button
        class="metric-callout growth-year-card"
        :class="{ 'growth-year-card--selected': selectedYear === '2025' }"
        type="button"
        :aria-pressed="selectedYear === '2025'"
        @click="selectedYear = '2025'"
      >
        <div class="metric-callout__value">7.9M</div>
        <div class="metric-callout__label">2025 bars</div>
      </button>
      <button
        class="metric-callout growth-year-card growth-year-card--projected"
        :class="{ 'growth-year-card--selected': selectedYear === '2026' }"
        type="button"
        :aria-pressed="selectedYear === '2026'"
        @click="selectedYear = '2026'"
      >
        <div class="metric-callout__value">9.3M</div>
        <div class="metric-callout__label">2026 projected bars</div>
      </button>
    </div>
    <DemandGrowthChart :selected-year="selectedYear" />
    <AccessibleChartSummary :summary="`A line chart showing monthly demand trends for 2023, 2024, 2025, and projected 2026. ${selectedYear} is emphasized in color while the other years remain visible in gray for comparison.`" />
    <p class="chapter__supporting-copy">
      The business is growing, yet the process is not turning cocoa into finished product as efficiently as the product demand curve implies.
    </p>
    <StepRecommendation
      step="01"
      title="Make the demand gap visible in the operating review."
      copy="Track demand growth alongside yield and sellable output each month so production pressure is identified before it becomes a service problem."
      tool="Demand-versus-capacity trend monitor"
      ai="flag unusual demand acceleration and summarize emerging capacity gaps."
    />
  </ChapterShell>
</template>
