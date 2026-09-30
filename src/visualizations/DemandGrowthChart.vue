<script setup lang="ts">
import { computed } from 'vue'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { monthlyDemand } from '../data/demand'

use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer])

const labels = monthlyDemand.map((point) => point.shortLabel)
const values = monthlyDemand.map((point) => point.demandMillions)

const option = computed(() => ({
  backgroundColor: 'transparent',
  animationDuration: 800,
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(30, 24, 20, 0.92)',
    borderColor: '#d5a76a',
    textStyle: { color: '#f4efe8' },
  },
  grid: { left: 36, right: 20, top: 24, bottom: 28 },
  xAxis: {
    type: 'category',
    data: labels,
    boundaryGap: false,
    axisLabel: { color: 'var(--color-text-muted)' },
    axisLine: { lineStyle: { color: 'var(--color-border)' } },
  },
  yAxis: {
    type: 'value',
    name: 'Millions of bars',
    nameTextStyle: { color: 'var(--color-text-muted)' },
    axisLabel: {
      formatter: '{value}M',
      color: 'var(--color-text-muted)',
    },
    splitLine: { lineStyle: { color: 'var(--color-border-subtle)' } },
  },
  series: [
    {
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      data: values,
      lineStyle: { width: 3, color: 'var(--color-accent-strong)' },
      areaStyle: {
        color: 'var(--color-accent-soft)',
      },
      itemStyle: { color: 'var(--color-accent-strong)' },
    },
  ],
}))
</script>

<template>
  <div class="chart-panel">
    <v-chart class="chart-panel__chart" :option="option" autoresize />
  </div>
</template>
