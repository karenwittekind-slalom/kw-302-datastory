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
    title: 'Growth creates pressure',
    kicker: 'Demand is growing. The supply chain is working harder to keep up.',
    body: 'Bean & Bloom grew from 5.2 million bars in 2023 to 7.9 million bars in 2025, but production efficiency did not improve at the same pace.'
  },
  {
    id: 'hidden-loss',
    label: 'Chapter 2',
    title: 'The hidden loss',
    kicker: 'Not every ton of cocoa becomes chocolate.',
    body: 'At the current model, 110 tons of cocoa are lost before finished product reaches customers, split across quality, process, and rework.'
  },
  {
    id: 'loss-chain',
    label: 'Chapter 3',
    title: 'Follow the lost cocoa',
    kicker: 'Waste does not stop at the production line.',
    body: 'The downstream effects of that loss show up as lower inventory coverage, more stockout risk, and emergency procurement decisions.'
  },
  {
    id: 'yield-sim',
    label: 'Chapter 4',
    title: 'Test the yield lever',
    kicker: 'What changes when more cocoa becomes sellable product?',
    body: 'The yield simulator makes the tradeoff visible. A higher conversion rate increases sellable output and lowers waste at the same time.'
  },
  {
    id: 'strategy',
    label: 'Chapter 5',
    title: 'Compare the strategies',
    kicker: 'Three strategies reduce risk. Only one improves every outcome.',
    body: 'Each lever helps, but only a yield-improvement program strengthens product availability, cost, waste, and carbon together.'
  },
  {
    id: 'final-reveal',
    label: 'Chapter 6',
    title: 'The sustainability multiplier',
    kicker: 'One operational improvement creates value across the system.',
    body: 'When yield moves from 89% to 93%, the company captures production, cash, resilience, and sustainability gains in one move.'
  },
]
