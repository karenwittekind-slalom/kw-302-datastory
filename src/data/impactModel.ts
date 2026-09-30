export interface ImpactChainStep {
  id: string
  label: string
  detail: string
  action: string
  dataInput: string
}

export const impactChainSteps: ImpactChainStep[] = [
  {
    id: 'raw-loss',
    label: 'Raw material loss',
    detail: 'Loss is recorded as one annual number, so the team cannot see where material leaves the process.',
    action: 'Capture input and output by production stage, shift, product, and loss reason.',
    dataInput: 'Stage-level input, output, scrap reason, and quality notes.',
  },
  {
    id: 'fewer-bars',
    label: 'Fewer finished bars',
    detail: 'Material loss becomes missed finished-product volume and an early warning of constrained supply.',
    action: 'Translate lost tons into finished bars and compare the gap with the demand plan.',
    dataInput: 'Conversion rate, finished bars, demand plan, and production schedule.',
  },
  {
    id: 'inventory-gap',
    label: 'Reduced inventory coverage',
    detail: 'Lower output reduces the buffer available to absorb demand spikes or production interruptions.',
    action: 'Set an inventory-coverage trigger that prompts a cross-functional review before supply is at risk.',
    dataInput: 'On-hand inventory, demand forecast, lead time, and coverage days.',
  },
  {
    id: 'stockout-risk',
    label: 'Elevated stockout risk',
    detail: 'The inventory gap turns process loss into a customer-availability risk.',
    action: 'Prioritize recovery work against the products and periods with the highest service exposure.',
    dataInput: 'Order history, service level, forecast error, and stockout events.',
  },
  {
    id: 'expedited-purchasing',
    label: 'Emergency procurement',
    detail: 'Teams compensate for uncertainty with rushed purchasing, premium freight, and avoidable cost.',
    action: 'Track emergency buys back to their originating loss and use the pattern to target prevention.',
    dataInput: 'Purchase orders, expedite flags, freight premium, and root-cause link.',
  },
  {
    id: 'added-cost-and-carbon',
    label: 'Additional cost and emissions',
    detail: 'Recovery actions add cost and emissions, turning an operational issue into a sustainability trade-off.',
    action: 'Review cost, carbon, availability, and waste in one impact scorecard before funding a fix.',
    dataInput: 'Cost avoided, carbon index, waste, service risk, and intervention status.',
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
