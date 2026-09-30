<script setup lang="ts">
import { computed } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { useChartColors } from '../composables/useChartColors'
import type { YieldScenarioResult } from '../utils/calculations'

use([BarChart, GridComponent, TooltipComponent, CanvasRenderer])

const props = defineProps<{ current: YieldScenarioResult; selected: YieldScenarioResult }>()
const colors = useChartColors()

const option = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: 'rgba(30,24,20,.92)',
    textStyle: { color: '#f4efe8' },
    formatter: (params: Array<{ dataIndex: number }>) => {
      const state = params[0]?.dataIndex === 0 ? props.current : props.selected
      return [
        `<strong>${state.yieldRate}% yield</strong>`,
        `Sellable product: ${state.sellableProductTons}t`,
        `Waste: ${state.wasteTons}t`,
        `Annual bars: ${state.annualBarsProduced.toFixed(2)}M`,
      ].join('<br />')
    },
  },
  legend: {
    top: 12,
    right: 12,
    textStyle: { color: colors.value.textMuted },
  },
  grid: { left: 42, right: 12, top: 48, bottom: 54 },
  xAxis: {
    type: 'category',
    data: [
      `Current\n${props.current.annualBarsProduced.toFixed(2)}M bars`,
      `Selected\n${props.selected.annualBarsProduced.toFixed(2)}M bars`,
    ],
    axisLabel: { color: colors.value.textMuted },
  },
  yAxis: {
    type: 'value',
    max: 1000,
    name: 'Tons of input',
    nameTextStyle: { color: colors.value.textMuted },
    axisLabel: { formatter: '{value}t', color: colors.value.textMuted },
    splitLine: { lineStyle: { color: colors.value.borderSubtle } },
  },
  series: [
    {
      type: 'bar',
      name: 'Sellable product',
      stack: 'input',
      data: [props.current.sellableProductTons, props.selected.sellableProductTons],
      itemStyle: { color: colors.value.cocoa },
      barWidth: '34%',
    },
    {
      type: 'bar',
      name: 'Waste',
      stack: 'input',
      data: [props.current.wasteTons, props.selected.wasteTons],
      itemStyle: { color: colors.value.risk, borderRadius: [10, 10, 0, 0] },
    },
  ],
}))
</script>

<template>
  <div class="chart-panel chart-panel--narrow">
    <v-chart class="chart-panel__chart" :option="option" autoresize />
    <p class="yield-comparison__note">Each bar represents the same 1,000 tons of cocoa input. Annual bars are shown beneath each state.</p>
  </div>
</template>
