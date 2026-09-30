<script setup lang="ts">
import { computed } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([BarChart, GridComponent, TooltipComponent, CanvasRenderer])

const props = defineProps<{ current: number; selected: number }>()

const option = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(30,24,20,.92)',
    textStyle: { color: '#f4efe8' },
  },
  grid: { left: 42, right: 12, top: 18, bottom: 30 },
  xAxis: {
    type: 'category',
    data: ['Current', 'Selected'],
    axisLabel: { color: 'var(--color-text-muted)' },
  },
  yAxis: {
    type: 'value',
    axisLabel: { formatter: '{value}%', color: 'var(--color-text-muted)' },
    splitLine: { lineStyle: { color: 'var(--color-border-subtle)' } },
  },
  series: [
    {
      type: 'bar',
      data: [props.current, props.selected],
      itemStyle: {
        color: (value: { dataIndex: number }) => (value.dataIndex === 0 ? 'var(--color-risk)' : 'var(--color-accent-strong)'),
        borderRadius: [10, 10, 0, 0],
      },
      barWidth: '32%',
    },
  ],
}))
</script>

<template>
  <div class="chart-panel chart-panel--narrow">
    <v-chart class="chart-panel__chart" :option="option" autoresize />
  </div>
</template>
