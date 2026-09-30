<script setup lang="ts">
import { computed, ref } from 'vue'
import ChapterShell from '../components/ChapterShell.vue'
import StrategyImpactChart from '../visualizations/StrategyImpactChart.vue'
import { strategyScenarios } from '../data/strategyScenarios'
import StepRecommendation from '../components/StepRecommendation.vue'

const selectedId = ref('yield')
const selectedStrategy = computed(() => strategyScenarios.find((scenario) => scenario.id === selectedId.value) ?? strategyScenarios[2])
</script>

<template>
  <ChapterShell eyebrow="Chapter 5" title="Compare options before committing capital." kicker="A shared scorecard turns competing priorities into a decision leadership can defend.">
    <div class="strategy-grid">
      <div class="strategy-cards" role="list" aria-label="Strategy options">
        <button
          v-for="strategy in strategyScenarios"
          :key="strategy.id"
          type="button"
          role="listitem"
          class="strategy-card"
          :class="{ 'strategy-card--selected': strategy.id === selectedId }"
          @click="selectedId = strategy.id"
        >
          <span class="strategy-card__label">{{ strategy.name }}</span>
          <strong>{{ strategy.action }}</strong>
          <small>{{ strategy.summary }}</small>
        </button>
      </div>

      <div class="strategy-detail">
        <h3>{{ selectedStrategy.name }}</h3>
        <p>{{ selectedStrategy.description }}</p>
        <dl>
          <div><dt>Availability</dt><dd>{{ selectedStrategy.scores.availability }}/5</dd></div>
          <div><dt>Cost</dt><dd>{{ selectedStrategy.scores.cost }}/5</dd></div>
          <div><dt>Waste</dt><dd>{{ selectedStrategy.scores.waste }}/5</dd></div>
          <div><dt>Carbon</dt><dd>{{ selectedStrategy.scores.carbon }}/5</dd></div>
          <div><dt>Resilience</dt><dd>{{ selectedStrategy.scores.resilience }}/5</dd></div>
          <div><dt>Implementation effort</dt><dd>{{ selectedStrategy.scores.effort }}/5</dd></div>
        </dl>
      </div>
    </div>

    <StrategyImpactChart :selected-id="selectedId" />
    <p class="chapter__supporting-copy">
      Scores are illustrative relative impact, not an objective industry benchmark. The value of the comparison is the connected trade-off view: leadership can prioritize an option without improving one outcome by quietly worsening another.
    </p>
    <StepRecommendation
      step="05"
      title="Adopt a cross-functional decision scorecard."
      copy="Compare cost, waste, carbon, availability, resilience, and effort in one review, then make the trade-off explicit before capital is committed."
      tool="Weighted strategy scorecard with connected sustainability outcomes"
      ai="summarize trade-offs and identify where a strategy score changes the recommendation."
    />
  </ChapterShell>
</template>
