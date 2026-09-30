<script setup lang="ts">
import RecommendationCard from './RecommendationCard.vue'

defineProps<{
  step: string
  title: string
  copy: string
  tool: string
  ai: string
}>()
</script>

<template>
  <RecommendationCard :step="step" eyebrow="Next move" :title="title" :copy="copy" :tool="tool" :ai="ai" />
</template>
