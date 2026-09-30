<script setup lang="ts">
defineProps<{
  step: string
  eyebrow: string
  title: string
  copy: string
  tool?: string
  ai?: string
}>()
</script>

<template>
  <aside class="step-recommendation">
    <div class="step-recommendation__marker">{{ step }}</div>
    <div>
      <p class="step-recommendation__eyebrow">{{ eyebrow }}</p>
      <h3>{{ title }}</h3>
      <p>{{ copy }}</p>
      <p v-if="tool" class="step-recommendation__tool"><strong>Data tool:</strong> {{ tool }}</p>
      <p v-if="ai" class="step-recommendation__ai"><strong>AI assist:</strong> {{ ai }}</p>
    </div>
  </aside>
</template>
