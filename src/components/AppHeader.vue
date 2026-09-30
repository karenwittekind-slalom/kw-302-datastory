<script setup lang="ts">
import { Coffee, Leaf } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'

const props = defineProps<{ theme: 'light' | 'dark' }>()
const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <header class="topbar">
    <div class="topbar__brand" aria-label="Bean & Bloom home">
      <div class="brand-mark" aria-hidden="true">
        <Coffee :size="18" />
      </div>
      <div>
        <p class="eyebrow">Bean &amp; Bloom</p>
        <h1 class="brand-title">The Sustainability Multiplier</h1>
      </div>
    </div>
    <div class="topbar__meta">
      <div class="meta-pill">
        <Leaf :size="14" />
        <span>Organic cocoa system</span>
      </div>
      <ThemeToggle :theme="props.theme" @toggle="emit('toggle')" />
    </div>
  </header>
</template>
