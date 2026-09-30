export interface DemandPoint {
  month: string
  shortLabel: string
  demandMillions: number
  yieldRate: number
  inventoryCoverage: number
}

export const monthlyDemand: DemandPoint[] = [
  { month: 'January', shortLabel: 'Jan', demandMillions: 0.52, yieldRate: 89.1, inventoryCoverage: 28 },
  { month: 'February', shortLabel: 'Feb', demandMillions: 0.55, yieldRate: 89.3, inventoryCoverage: 27 },
  { month: 'March', shortLabel: 'Mar', demandMillions: 0.58, yieldRate: 89.6, inventoryCoverage: 26 },
  { month: 'April', shortLabel: 'Apr', demandMillions: 0.61, yieldRate: 89.2, inventoryCoverage: 25 },
  { month: 'May', shortLabel: 'May', demandMillions: 0.68, yieldRate: 88.9, inventoryCoverage: 24 },
  { month: 'June', shortLabel: 'Jun', demandMillions: 0.72, yieldRate: 89.1, inventoryCoverage: 23 },
  { month: 'July', shortLabel: 'Jul', demandMillions: 0.8, yieldRate: 88.8, inventoryCoverage: 22 },
  { month: 'August', shortLabel: 'Aug', demandMillions: 0.85, yieldRate: 89.7, inventoryCoverage: 21 },
  { month: 'September', shortLabel: 'Sep', demandMillions: 0.9, yieldRate: 89.4, inventoryCoverage: 20 },
  { month: 'October', shortLabel: 'Oct', demandMillions: 0.96, yieldRate: 90.1, inventoryCoverage: 19 },
  { month: 'November', shortLabel: 'Nov', demandMillions: 1.02, yieldRate: 89.9, inventoryCoverage: 18 },
  { month: 'December', shortLabel: 'Dec', demandMillions: 1.08, yieldRate: 89.5, inventoryCoverage: 17 },
]

export const annualDemand = [
  { year: '2023', demandMillions: 5.2 },
  { year: '2024', demandMillions: 6.5 },
  { year: '2025', demandMillions: 7.9 },
  { year: '2026', demandMillions: 9.3 },
] as const

const monthlyProfileTotal = monthlyDemand.reduce((total, point) => total + point.demandMillions, 0)

export const monthlyDemandByYear = Object.fromEntries(
  annualDemand.map(({ year, demandMillions: annualTotal }) => [
    year,
    monthlyDemand.map(({ month, shortLabel, demandMillions }) => ({
      month,
      shortLabel,
      demandMillions: (demandMillions / monthlyProfileTotal) * annualTotal,
    })),
  ]),
) as Record<string, Array<Pick<DemandPoint, 'month' | 'shortLabel' | 'demandMillions'>>>

export const annualDemand2025 = monthlyDemand.reduce((total, point) => total + point.demandMillions, 0)
