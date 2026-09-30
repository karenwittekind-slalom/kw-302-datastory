<script setup lang="ts">
const props = defineProps<{
  value: string
  label: string
  tone?: 'default' | 'highlight' | 'risk' | 'positive'
}>()
</script>

<template>
  <div :class="['metric-callout', `metric-callout--${props.tone || 'default'}`]">
    <div class="metric-callout__value">{{ props.value }}</div>
    <div class="metric-callout__label">{{ props.label }}</div>
  </div>
</template>
