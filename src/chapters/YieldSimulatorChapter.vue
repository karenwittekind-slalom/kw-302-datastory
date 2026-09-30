<script setup lang="ts">
import { computed } from 'vue'
import ChapterShell from '../components/ChapterShell.vue'
import MetricCallout from '../components/MetricCallout.vue'
import YieldComparison from '../visualizations/YieldComparison.vue'
import { useYieldScenario } from '../composables/useYieldScenario'
import { formatCurrency, formatPercent } from '../utils/formatters'

const { yieldRate, scenario, reset, setRecommendedTarget } = useYieldScenario(89)
const selectedYield = computed(() => Number(yieldRate.value.toFixed(1)))
</script>

<template>
  <ChapterShell eyebrow="Chapter 4" title="What changes when more cocoa becomes sellable product?" kicker="The yield lever improves product availability and reduces waste without adding a separate workstream.">
    <div class="yield-simulator">
      <div class="yield-simulator__panel">
        <div class="yield-simulator__header">
          <div>
            <label for="yield-slider">Yield</label>
            <div class="yield-simulator__value">{{ scenario.yieldRate }}%</div>
          </div>
          <div class="yield-simulator__actions">
            <button class="story-button" type="button" @click="reset">Reset to current state</button>
            <button class="story-button story-button--primary" type="button" @click="setRecommendedTarget">Show recommended target</button>
          </div>
        </div>

        <input id="yield-slider" v-model.number="yieldRate" type="range" min="89" max="95" step="0.5" aria-describedby="yield-summary" class="yield-slider" />

        <div class="yield-simulator__stats">
          <MetricCallout :value="`${scenario.sellableProductTons}t`" label="sellable product" tone="highlight" />
          <MetricCallout :value="`${scenario.annualBarsProduced.toFixed(2)}M`" label="annual bars" tone="default" />
          <MetricCallout :value="`${scenario.wasteTons}t`" label="waste" tone="risk" />
        </div>

        <div class="yield-simulator__summary" id="yield-summary" aria-live="polite">
          <div><strong>Waste reduction</strong><span>{{ formatPercent(scenario.wasteReductionPercent) }}</span></div>
          <div><strong>Stockout risk</strong><span>{{ scenario.stockoutRisk }}%</span></div>
          <div><strong>Carbon index</strong><span>{{ scenario.carbonIndex }}</span></div>
          <div><strong>Inventory coverage</strong><span>{{ scenario.inventoryCoverageDays }} days</span></div>
          <div><strong>Avoided procurement</strong><span>{{ formatCurrency(scenario.avoidedProcurementCost) }}</span></div>
          <div><strong>Revenue at risk avoided</strong><span>{{ formatCurrency(scenario.revenueAtRiskAvoided) }}</span></div>
        </div>
      </div>

      <div class="yield-simulator__side">
        <YieldComparison :current="89" :selected="selectedYield" />
        <p class="chapter__supporting-copy">
          At 93% yield, Bean &amp; Bloom produces 7.44 million bars, 320,000 more than the current baseline, while waste falls to 70 tons.
        </p>
      </div>
    </div>
  </ChapterShell>
</template>
