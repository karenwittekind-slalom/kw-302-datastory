export interface YieldScenarioResult {
  yieldRate: number
  sellableProductTons: number
  wasteTons: number
  annualBarsProduced: number
  wasteReductionPercent: number
  stockoutRisk: number
  carbonIndex: number
  inventoryCoverageDays: number
  avoidedProcurementCost: number
  revenueAtRiskAvoided: number
}

const BASELINE = {
  inputTons: 1000,
  currentYield: 89,
  targetYield: 93,
  barsPerFinishedTon: 8000,
  baselineWaste: 110,
  baselineStockoutRisk: 18,
  baselineCarbonIndex: 100,
  baselineInventoryCoverage: 24,
  targetStockoutRisk: 9,
  targetCarbonIndex: 92,
  targetInventoryCoverage: 36,
  targetAvoidedProcurementCost: 430000,
  targetRevenueAtRiskAvoided: 650000,
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

function interpolate(start: number, end: number, progress: number): number {
  return start + (end - start) * progress
}

export function getYieldScenario(yieldRate: number): YieldScenarioResult {
  const normalizedYield = clamp(yieldRate, BASELINE.currentYield, 95)
  const percentProgress = (normalizedYield - BASELINE.currentYield) / (95 - BASELINE.currentYield)
  const sellableProductTons = BASELINE.inputTons * (normalizedYield / 100)
  const wasteTons = BASELINE.inputTons - sellableProductTons
  const annualBarsProduced = sellableProductTons * BASELINE.barsPerFinishedTon / 1000000
  const wasteReductionPercent = ((BASELINE.baselineWaste - wasteTons) / BASELINE.baselineWaste) * 100
  const stockoutRisk = interpolate(BASELINE.baselineStockoutRisk, BASELINE.targetStockoutRisk, percentProgress)
  const carbonIndex = interpolate(BASELINE.baselineCarbonIndex, BASELINE.targetCarbonIndex, percentProgress)
  const inventoryCoverageDays = interpolate(BASELINE.baselineInventoryCoverage, BASELINE.targetInventoryCoverage, percentProgress)
  const avoidedProcurementCost = interpolate(0, BASELINE.targetAvoidedProcurementCost, percentProgress)
  const revenueAtRiskAvoided = interpolate(0, BASELINE.targetRevenueAtRiskAvoided, percentProgress)

  return {
    yieldRate: Number(normalizedYield.toFixed(1)),
    sellableProductTons: Number(sellableProductTons.toFixed(1)),
    wasteTons: Number(wasteTons.toFixed(1)),
    annualBarsProduced: Number(annualBarsProduced.toFixed(2)),
    wasteReductionPercent: Number(wasteReductionPercent.toFixed(1)),
    stockoutRisk: Number(stockoutRisk.toFixed(1)),
    carbonIndex: Number(carbonIndex.toFixed(0)),
    inventoryCoverageDays: Number(inventoryCoverageDays.toFixed(0)),
    avoidedProcurementCost: Number(avoidedProcurementCost.toFixed(0)),
    revenueAtRiskAvoided: Number(revenueAtRiskAvoided.toFixed(0)),
  }
}

export function getYieldScenarioDelta(currentYield: number, selectedYield: number): Record<string, number> {
  const current = getYieldScenario(currentYield)
  const next = getYieldScenario(selectedYield)
  return {
    sellableProductTons: Number((next.sellableProductTons - current.sellableProductTons).toFixed(1)),
    annualBarsProduced: Number((next.annualBarsProduced - current.annualBarsProduced).toFixed(2)),
    wasteTons: Number((current.wasteTons - next.wasteTons).toFixed(1)),
    wasteReductionPercent: Number((next.wasteReductionPercent - current.wasteReductionPercent).toFixed(1)),
    stockoutRisk: Number((current.stockoutRisk - next.stockoutRisk).toFixed(1)),
    carbonIndex: Number((current.carbonIndex - next.carbonIndex).toFixed(0)),
    inventoryCoverageDays: Number((next.inventoryCoverageDays - current.inventoryCoverageDays).toFixed(0)),
    avoidedProcurementCost: Number((next.avoidedProcurementCost - current.avoidedProcurementCost).toFixed(0)),
    revenueAtRiskAvoided: Number((next.revenueAtRiskAvoided - current.revenueAtRiskAvoided).toFixed(0)),
  }
}

export const currentYieldBaseline = BASELINE.currentYield
export const targetYieldBaseline = BASELINE.targetYield
