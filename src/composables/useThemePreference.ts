import { computed, onMounted, ref, watch } from 'vue'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'bean-bloom-theme'

function getSystemPreference(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useThemePreference() {
  const theme = ref<ThemeMode>('light')

  const applyTheme = (mode: ThemeMode) => {
    theme.value = mode
    document.documentElement.dataset.theme = mode
    localStorage.setItem(STORAGE_KEY, mode)
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    const initialTheme = savedTheme ?? getSystemPreference()
    applyTheme(initialTheme)
  })

  watch(
    theme,
    (value) => {
      document.documentElement.dataset.theme = value
      localStorage.setItem(STORAGE_KEY, value)
    },
    { immediate: true },
  )

  return {
    theme: computed(() => theme.value),
    isDark: computed(() => theme.value === 'dark'),
    applyTheme,
    toggleTheme,
  }
}
