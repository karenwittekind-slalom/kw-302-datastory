<script setup lang="ts">
const { progress = 0 } = defineProps<{ progress: number }>()
</script>

<template>
  <div class="story-progress" aria-label="Story progress">
    <div class="story-progress__track">
      <div class="story-progress__fill" :style="{ width: `${Math.min(Math.max(progress, 0), 100)}%` }" />
    </div>
  </div>
</template>
