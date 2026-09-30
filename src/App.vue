<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppHeader from './components/AppHeader.vue'
import DataDisclaimer from './components/DataDisclaimer.vue'
import StoryProgress from './components/StoryProgress.vue'
import GrowthChapter from './chapters/GrowthChapter.vue'
import HiddenLossChapter from './chapters/HiddenLossChapter.vue'
import LostCocoaChapter from './chapters/LostCocoaChapter.vue'
import YieldSimulatorChapter from './chapters/YieldSimulatorChapter.vue'
import StrategyComparisonChapter from './chapters/StrategyComparisonChapter.vue'
import FinalRevealChapter from './chapters/FinalRevealChapter.vue'
import { useReducedMotion } from './composables/useReducedMotion'
import { useThemePreference } from './composables/useThemePreference'
import { validateStoryData } from './utils/validateStoryData'

const { theme, toggleTheme } = useThemePreference()
const { prefersReducedMotion } = useReducedMotion()
const progress = ref(18)

const handleScroll = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0
  progress.value = Math.max(12, Math.min(100, ratio * 100))
}

const restartStory = () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion.value ? 'auto' : 'smooth' })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)

  gsap.registerPlugin(ScrollTrigger)
  const storyChapters = gsap.utils.toArray<HTMLElement>('.chapter')
  storyChapters.forEach((chapter) => {
    gsap.fromTo(
      chapter,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: chapter,
          start: 'top 82%',
          once: true,
        },
      },
    )
  })

  const warnings = validateStoryData()
  if (warnings.length) {
    console.warn('Story validation warnings:', warnings)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
  <div class="story-shell">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <AppHeader :theme="theme" @toggle="toggleTheme" />
    <DataDisclaimer />
    <StoryProgress :progress="progress" />

    <main id="main-content">
      <GrowthChapter />
      <HiddenLossChapter />
      <LostCocoaChapter />
      <YieldSimulatorChapter />
      <StrategyComparisonChapter />
      <FinalRevealChapter />
    </main>

    <div class="chapter chapter--restart">
      <div class="chapter__content">
        <button type="button" class="story-button story-button--primary" @click="restartStory">
          Restart story
        </button>
      </div>
    </div>
  </div>
</template>
