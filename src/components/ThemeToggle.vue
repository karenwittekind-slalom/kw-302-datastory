<script setup lang="ts">
import { Moon, SunMedium } from 'lucide-vue-next'

const props = defineProps<{ theme: 'light' | 'dark' }>()
const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="`Switch to ${props.theme === 'light' ? 'dark' : 'light'} mode`"
    @click="emit('toggle')"
  >
    <SunMedium v-if="props.theme === 'light'" :size="16" aria-hidden="true" />
    <Moon v-else :size="16" aria-hidden="true" />
    <span>{{ props.theme === 'light' ? 'Light' : 'Dark' }}</span>
  </button>
</template>
