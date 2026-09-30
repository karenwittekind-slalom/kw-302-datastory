import { computed, ref } from 'vue'
import { getYieldScenario } from '../utils/calculations'

export function useYieldScenario(initialYield = 89) {
  const yieldRate = ref(initialYield)

  const scenario = computed(() => getYieldScenario(yieldRate.value))

  const reset = () => {
    yieldRate.value = initialYield
  }

  const setRecommendedTarget = () => {
    yieldRate.value = 93
  }

  return {
    yieldRate,
    scenario,
    reset,
    setRecommendedTarget,
  }
}
