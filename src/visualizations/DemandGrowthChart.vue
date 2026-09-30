<script setup lang="ts">
import { computed } from 'vue'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { monthlyDemandByYear } from '../data/demand'
import { useChartColors } from '../composables/useChartColors'

use([LineChart, GridComponent, TooltipComponent, TitleComponent, LegendComponent, CanvasRenderer])

const props = defineProps<{ selectedYear: string }>()
const colors = useChartColors()

const option = computed(() => ({
  backgroundColor: 'transparent',
  animationDuration: 800,
  title: {
    text: 'Monthly sales trend by year',
    left: 48,
    top: 4,
    textStyle: { color: colors.value.textMuted, fontSize: 13, fontWeight: 600 },
  },
  legend: {
    top: 26,
    right: 24,
    itemWidth: 18,
    itemHeight: 3,
    textStyle: { color: colors.value.textMuted },
    selected: {
      '2023': true,
      '2024': true,
      '2025': true,
      '2026': true,
    },
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(30, 24, 20, 0.92)',
    borderColor: '#d5a76a',
    textStyle: { color: '#f4efe8' },
  },
  grid: { left: 48, right: 24, top: 68, bottom: 32 },
  xAxis: {
    type: 'category',
    data: (monthlyDemandByYear[props.selectedYear] ?? monthlyDemandByYear['2025']).map((point) => point.shortLabel),
    boundaryGap: false,
    axisLabel: { color: colors.value.textMuted },
    axisLine: { lineStyle: { color: colors.value.border } },
  },
  yAxis: {
    type: 'value',
    name: 'Millions of bars',
    nameTextStyle: { color: colors.value.textMuted },
    axisLabel: {
      formatter: '{value}M',
      color: colors.value.textMuted,
    },
    splitLine: { lineStyle: { color: colors.value.borderSubtle } },
  },
  series: Object.entries(monthlyDemandByYear).map(([year, points]) => {
    const isSelected = year === props.selectedYear
    const isProjected = year === '2026'
    const seriesColor = isSelected && isProjected ? colors.value.leaf : isSelected ? colors.value.accentStrong : colors.value.textMuted
    return {
      name: year,
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: isSelected ? 8 : 5,
      data: points.map((point) => point.demandMillions),
      z: isSelected ? 3 : 1,
      lineStyle: {
        width: isSelected ? 3.5 : 1.5,
        color: seriesColor,
        opacity: isSelected ? 1 : 0.55,
      },
      itemStyle: {
        color: seriesColor,
        opacity: isSelected ? 1 : 0.55,
      },
      areaStyle: isSelected ? { color: isProjected ? colors.value.leaf : colors.value.accentSoft, opacity: isProjected ? 0.14 : 1 } : undefined,
    }
  }),
}))
</script>

<template>
  <div class="chart-panel">
    <v-chart class="chart-panel__chart" :option="option" autoresize />
  </div>
</template>
