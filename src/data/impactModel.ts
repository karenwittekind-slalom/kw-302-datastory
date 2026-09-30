export interface ImpactChainStep {
  id: string
  label: string
  detail: string
}

export const impactChainSteps: ImpactChainStep[] = [
  {
    id: 'raw-loss',
    label: 'Raw material loss',
    detail: '110 tons of cocoa ingredients are not converted into sellable product.'
  },
  {
    id: 'fewer-bars',
    label: 'Fewer finished bars',
    detail: 'Loss reduces output by 550,000 bars and compresses available inventory.'
  },
  {
    id: 'inventory-gap',
    label: 'Reduced inventory coverage',
    detail: 'Coverage tightens from 24 to 18 days over peak demand periods.'
  },
  {
    id: 'stockout-risk',
    label: 'Elevated stockout risk',
    detail: 'Modeled stockout risk rises to 18% under the current yield profile.'
  },
  {
    id: 'expedited-purchasing',
    label: 'Emergency procurement',
    detail: 'The team buys on short notice, incurring freight premiums and recovery costs.'
  },
  {
    id: 'added-cost-and-carbon',
    label: 'Additional cost and emissions',
    detail: 'This drives cost, carbon intensity, and margin pressure across the network.'
  },
]

export const baselineImpactModel = {
  annualInputTons: 1000,
  currentYield: 89,
  targetYield: 93,
  baselineSellableTons: 890,
  targetSellableTons: 930,
  annualBarsProduced: 7.12,
  targetAnnualBars: 7.44,
  additionalBars: 0.32,
  baselineWasteTons: 110,
  targetWasteTons: 70,
  baselineStockoutRisk: 18,
  targetStockoutRisk: 9,
  baselineCarbonIndex: 100,
  targetCarbonIndex: 92,
  baselineInventoryCoverageDays: 24,
  targetInventoryCoverageDays: 36,
  avoidedProcurementCost: 430000,
  revenueAtRiskAvoided: 650000,
  modeledCo2e: 420,
  fewerBarsAtRisk: 550000,
} as const
