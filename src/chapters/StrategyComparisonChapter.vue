<script setup lang="ts">
import { computed, ref } from 'vue'
import ChapterShell from '../components/ChapterShell.vue'
import StrategyImpactChart from '../visualizations/StrategyImpactChart.vue'
import { strategyScenarios } from '../data/strategyScenarios'

const selectedId = ref('yield')
const selectedStrategy = computed(() => strategyScenarios.find((scenario) => scenario.id === selectedId.value) ?? strategyScenarios[2])
</script>

<template>
  <ChapterShell eyebrow="Chapter 5" title="Three strategies reduce risk. Only one improves every outcome." kicker="The best lever does not just protect service. It also improves costs, waste, and emissions.">
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
      Scores are illustrative relative impact, not an objective industry benchmark. The yield-improvement option remains the strongest balanced choice because it improves availability without increasing carrying cost or waste exposure.
    </p>
  </ChapterShell>
</template>
