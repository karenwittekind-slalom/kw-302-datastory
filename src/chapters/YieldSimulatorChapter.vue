<script setup lang="ts">
import ChapterShell from '../components/ChapterShell.vue'
import MetricCallout from '../components/MetricCallout.vue'
import YieldComparison from '../visualizations/YieldComparison.vue'
import { useYieldScenario } from '../composables/useYieldScenario'
import { getYieldScenario } from '../utils/calculations'
import { formatCurrency, formatPercent } from '../utils/formatters'
import StepRecommendation from '../components/StepRecommendation.vue'

const { yieldRate, scenario } = useYieldScenario(89)
const currentScenario = getYieldScenario(89)
</script>

<template>
  <ChapterShell eyebrow="Chapter 4" title="Connect the data. Test the trade-off." kicker="This simulator shows what decision intelligence makes possible when operational outcomes can be evaluated together.">
    <div class="yield-simulator">
      <div class="yield-simulator__panel">
        <div class="yield-simulator__header">
          <div>
            <label for="yield-slider">Yield</label>
            <div class="yield-simulator__value">{{ scenario.yieldRate }}%</div>
            <p id="yield-slider-hint" class="yield-simulator__hint">
              Change the operating assumption to compare sellable product, waste, service risk, and carbon in one view.
            </p>
          </div>
        </div>

        <input id="yield-slider" v-model.number="yieldRate" type="range" min="89" max="95" step="0.5" aria-describedby="yield-slider-hint yield-summary" class="yield-slider" />

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
        <YieldComparison :current="currentScenario" :selected="scenario" />
        <p class="chapter__supporting-copy">
          The 93% scenario is a proof point: connected assumptions reveal how one operating choice can change availability, cost, waste, and carbon together.
        </p>
      </div>
    </div>
    <StepRecommendation
      step="04"
      title="Use scenarios before funding fixes."
      copy="Test the trade-offs, define success across output, waste, service, and carbon, then fund the intervention with the clearest balanced case."
      tool="Decision-support scenario planner with target-versus-actual tracking"
      ai="compare scenarios and explain which outcomes move most as yield changes."
    />
  </ChapterShell>
</template>
