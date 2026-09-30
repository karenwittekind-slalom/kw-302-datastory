export type StrategyId = 'inventory' | 'supplier' | 'yield'

export interface StrategyScenario {
  id: StrategyId
  name: string
  action: string
  description: string
  summary: string
  scores: {
    availability: number
    cost: number
    waste: number
    carbon: number
    resilience: number
    effort: number
  }
}

export const strategyScenarios: StrategyScenario[] = [
  {
    id: 'inventory',
    name: 'Increase inventory',
    action: 'Add 15 days of buffer inventory.',
    description: 'This protects availability, but it locks cash in stock and exposes more material to waste and obsolescence risk.',
    summary: 'Strong resilience, but higher carrying cost and slightly worse waste exposure.',
    scores: {
      availability: 4,
      cost: 2,
      waste: 1,
      carbon: 2,
      resilience: 4,
      effort: 3,
    },
  },
  {
    id: 'supplier',
    name: 'Add a new supplier',
    action: 'Onboard one additional certified cocoa supplier.',
    description: 'This reduces concentration risk and improves coverage, though onboarding and logistics complexity can temporarily increase cost.',
    summary: 'Higher resilience without changing the core conversion challenge.',
    scores: {
      availability: 3,
      cost: 2,
      waste: 3,
      carbon: 3,
      resilience: 5,
      effort: 2,
    },
  },
  {
    id: 'yield',
    name: 'Improve yield',
    action: 'Improve yield from 89% to 93%.',
    description: 'This creates a more efficient process, lowers waste, reduces emergency procurement, and cuts carbon intensity without needing a larger inventory buffer.',
    summary: 'Strongest balanced outcome across availability, waste, operating cost, and carbon.',
    scores: {
      availability: 5,
      cost: 5,
      waste: 5,
      carbon: 5,
      resilience: 4,
      effort: 3,
    },
  },
]
