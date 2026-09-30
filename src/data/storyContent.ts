export interface ChapterContent {
  id: string
  label: string
  title: string
  kicker: string
  body: string
}

export const chapterContent: ChapterContent[] = [
  {
    id: 'growth',
    label: 'Chapter 1',
    title: 'Growth creates complexity',
    kicker: 'Demand is accelerating. Leadership needs a connected view of the pressure behind it.',
    body: 'Bean & Bloom grew from 5.2 million bars in 2023 to 7.9 million bars in 2025, making disconnected operational signals harder to manage.'
  },
  {
    id: 'hidden-loss',
    label: 'Chapter 2',
    title: 'The hidden loss',
    kicker: 'A single output number hides where value leaves the process.',
    body: 'At the current model, 110 tons of cocoa are lost before finished product reaches customers, but the decision requires stage-level visibility.'
  },
  {
    id: 'loss-chain',
    label: 'Chapter 3',
    title: 'Connect the consequences',
    kicker: 'Disconnected metrics hide the decision.',
    body: 'The downstream effects of loss show up as lower inventory coverage, more stockout risk, emergency procurement, and sustainability pressure.'
  },
  {
    id: 'yield-sim',
    label: 'Chapter 4',
    title: 'Test the trade-off',
    kicker: 'Connected scenario planning makes the highest-value opportunity visible.',
    body: 'The simulator demonstrates how leaders can evaluate sellable output, waste, service risk, and carbon in one decision.'
  },
  {
    id: 'strategy',
    label: 'Chapter 5',
    title: 'Compare the strategies',
    kicker: 'A shared scorecard makes competing priorities easier to defend.',
    body: 'Each lever helps in a different way. Connected comparison makes the trade-offs explicit before capital is committed.'
  },
  {
    id: 'final-reveal',
    label: 'Chapter 6',
    title: 'The sustainability multiplier',
    kicker: 'One connected view reveals value across the system.',
    body: 'The yield scenario demonstrates how decision intelligence can connect production, cash, resilience, and sustainability outcomes.'
  },
]
