<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

const props = defineProps<{ theme: 'light' | 'dark' }>()
const emit = defineEmits<{ toggle: [] }>()
const logoSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzKKm40mtDZHrAzXfmB_HZvuG-K67a1KaUnxw4Nx9ZQ&s=10'
</script>

<template>
  <header class="topbar">
    <div class="topbar__brand" aria-label="Bean & Bloom home">
      <div class="brand-mark" aria-hidden="true">
        <img class="brand-mark__image" :src="logoSrc" alt="" width="40" height="40" />
      </div>
      <div>
        <p class="eyebrow">Bean &amp; Bloom</p>
        <h1 class="brand-title">The Sustainability Multiplier</h1>
      </div>
    </div>
    <div class="topbar__meta">
      <ThemeToggle :theme="props.theme" @toggle="emit('toggle')" />
    </div>
  </header>
</template>
