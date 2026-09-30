<script setup lang="ts">
import { Blocks } from 'lucide-vue-next'

const props = defineProps<{ theme: 'light' | 'dark' }>()
const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="`Switch to ${props.theme === 'light' ? 'dark' : 'white'} chocolate`"
    @click="emit('toggle')"
  >
    <Blocks :size="16" aria-hidden="true" />
    <span>{{ props.theme === 'light' ? 'White chocolate' : 'Dark chocolate' }}</span>
  </button>
</template>
