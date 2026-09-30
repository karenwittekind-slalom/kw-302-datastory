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
  <ChapterShell eyebrow="Chapter 4" title="What changes when more cocoa becomes sellable product?" kicker="The yield lever improves product availability and reduces waste without adding a separate workstream.">
    <div class="yield-simulator">
      <div class="yield-simulator__panel">
        <div class="yield-simulator__header">
          <div>
            <label for="yield-slider">Yield</label>
            <div class="yield-simulator__value">{{ scenario.yieldRate }}%</div>
            <p id="yield-slider-hint" class="yield-simulator__hint">
              Drag to model how much of the cocoa input becomes sellable product. Start at the current 89% baseline and test the 93% target.
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
          At 93% yield, Bean &amp; Bloom produces 7.44 million bars, 320,000 more than the current baseline, while waste falls to 70 tons.
        </p>
      </div>
    </div>
    <StepRecommendation
      step="04"
      title="Set 93% yield as the first testable target."
      copy="Pilot the improvements that move yield from 89% toward 93%, then judge the result across sellable product, waste, stockout risk, and carbon together."
      tool="Yield scenario planner with target-versus-actual tracking"
      ai="compare scenarios and explain which outcomes move most as yield changes."
    />
  </ChapterShell>
</template>
