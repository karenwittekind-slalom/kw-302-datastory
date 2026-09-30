<script setup lang="ts">
const props = defineProps<{ summary: string }>()
</script>

<template>
  <p class="sr-only" aria-live="polite">{{ props.summary }}</p>
</template>
