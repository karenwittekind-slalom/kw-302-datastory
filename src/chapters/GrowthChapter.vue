<script setup lang="ts">
import ChapterShell from '../components/ChapterShell.vue'
import AccessibleChartSummary from '../components/AccessibleChartSummary.vue'
import DemandGrowthChart from '../visualizations/DemandGrowthChart.vue'
import MetricCallout from '../components/MetricCallout.vue'
</script>

<template>
  <ChapterShell eyebrow="Chapter 1" title="Demand is growing. The supply chain is working harder to keep up." kicker="Can the current supply chain support the next stage of growth?">
    <p class="chapter__lede">
      Bean &amp; Bloom’s demand grew by approximately 52% over two years, but production efficiency did not improve at the same rate.
    </p>
    <div class="stats-grid">
      <MetricCallout value="5.2M" label="2023 bars" tone="default" />
      <MetricCallout value="6.5M" label="2024 bars" tone="default" />
      <MetricCallout value="7.9M" label="2025 bars" tone="highlight" />
    </div>
    <DemandGrowthChart />
    <AccessibleChartSummary summary="A line chart showing annual demand rising from 5.2 million bars in 2023 to 7.9 million bars in 2025, with a clear upward slope and no analysis hidden in the chart alone." />
    <p class="chapter__supporting-copy">
      The business is growing, yet the process is not turning cocoa into finished product as efficiently as the product demand curve implies.
    </p>
  </ChapterShell>
</template>
