<script setup lang="ts">
import { computed } from 'vue'
import { use } from 'echarts/core'
import { RadarChart } from 'echarts/charts'
import { LegendComponent, RadarComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { strategyScenarios } from '../data/strategyScenarios'

use([RadarChart, RadarComponent, LegendComponent, TooltipComponent, CanvasRenderer])

const props = defineProps<{ selectedId: string }>()

const indicatorNames = ['Availability', 'Cost', 'Waste', 'Carbon', 'Resilience', 'Effort']

const data = computed(() => {
  return strategyScenarios.map((scenario) => ({
    value: [
      scenario.scores.availability,
      scenario.scores.cost,
      scenario.scores.waste,
      scenario.scores.carbon,
      scenario.scores.resilience,
      scenario.scores.effort,
    ],
    name: scenario.name,
    itemStyle: {
      color: scenario.id === props.selectedId ? 'var(--color-accent-strong)' : 'var(--color-text-muted)',
    },
    lineStyle: {
      width: scenario.id === props.selectedId ? 2.5 : 1.5,
      color: scenario.id === props.selectedId ? 'var(--color-accent-strong)' : 'var(--color-text-muted)',
    },
    areaStyle: {
      opacity: scenario.id === props.selectedId ? 0.35 : 0.1,
    },
  }))
})

const option = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(30,24,20,.92)',
    textStyle: { color: '#f4efe8' },
  },
  radar: {
    indicator: indicatorNames.map((name) => ({ name, max: 5 })),
    radius: '65%',
    splitLine: { lineStyle: { color: 'var(--color-border-subtle)' } },
    axisLabel: { color: 'var(--color-text-muted)' },
    axisLine: { lineStyle: { color: 'var(--color-border)' } },
  },
  series: [{
    type: 'radar',
    data: data.value,
  }],
}))
</script>

<template>
  <div class="chart-panel chart-panel--wide">
    <v-chart class="chart-panel__chart" :option="option" autoresize />
  </div>
</template>
