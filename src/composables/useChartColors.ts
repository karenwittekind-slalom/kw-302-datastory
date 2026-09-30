import { onMounted, onUnmounted, ref } from 'vue'

const fallbackColors = {
  accentStrong: '#c56f43',
  accentSoft: 'rgba(197, 111, 67, 0.16)',
  cocoa: '#563827',
  leaf: '#9bc653',
  risk: '#c76d4f',
  textMuted: '#665348',
  border: 'rgba(67, 49, 41, 0.18)',
  borderSubtle: 'rgba(90, 67, 57, 0.1)',
}

export function useChartColors() {
  const colors = ref({ ...fallbackColors })
  let observer: MutationObserver | undefined

  const refresh = () => {
    const styles = getComputedStyle(document.documentElement)
    colors.value = {
      accentStrong: styles.getPropertyValue('--color-accent-strong').trim() || fallbackColors.accentStrong,
      accentSoft: styles.getPropertyValue('--color-accent-soft').trim() || fallbackColors.accentSoft,
      cocoa: styles.getPropertyValue('--color-cocoa').trim() || fallbackColors.cocoa,
      leaf: styles.getPropertyValue('--color-leaf').trim() || fallbackColors.leaf,
      risk: styles.getPropertyValue('--color-risk').trim() || fallbackColors.risk,
      textMuted: styles.getPropertyValue('--color-text-muted').trim() || fallbackColors.textMuted,
      border: styles.getPropertyValue('--color-border').trim() || fallbackColors.border,
      borderSubtle: styles.getPropertyValue('--color-border-subtle').trim() || fallbackColors.borderSubtle,
    }
  }

  onMounted(() => {
    refresh()
    observer = new MutationObserver(refresh)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  })

  onUnmounted(() => observer?.disconnect())

  return colors
}