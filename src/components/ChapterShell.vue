<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    kicker?: string
    align?: 'left' | 'center'
  }>(),
  {
    align: 'left',
  },
)
</script>

<template>
  <section class="chapter" :class="[`chapter--${align}`]">
    <div class="chapter__content">
      <p v-if="eyebrow" class="chapter__eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="kicker" class="chapter__kicker">{{ kicker }}</p>
      <slot />
    </div>
  </section>
</template>
