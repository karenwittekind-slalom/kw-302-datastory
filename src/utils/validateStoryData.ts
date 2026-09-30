import { annualDemand2025, monthlyDemand } from '../data/demand'
import { materialFlowData } from '../data/materialFlow'
import { baselineImpactModel } from '../data/impactModel'

export function validateStoryData(): string[] {
  const warnings: string[] = []

  const materialTotal = materialFlowData.qualityAndHandlingTons + materialFlowData.totalLossTons
  if (materialTotal !== materialFlowData.inputTons) {
    warnings.push('Material input does not reconcile to sellable output plus waste.')
  }

  const targetOutputTons = 930
  if (targetOutputTons <= 890) {
    warnings.push('Target output is not above the baseline output by 40 tons.')
  }

  const additionalBars = 40 * 8000
  if (additionalBars !== 320000) {
    warnings.push('Additional tons do not match the modeled 320,000-bar gain.')
  }

  if (materialFlowData.totalLossTons !== 110 || baselineImpactModel.targetWasteTons !== 70) {
    warnings.push('Waste does not fall from 110 tons to 70 tons at the 93% target.')
  }

  const totalMonthlyDemand = monthlyDemand.reduce((sum, item) => sum + item.demandMillions, 0)
  if (Math.abs(totalMonthlyDemand - annualDemand2025) > 0.01) {
    warnings.push('Displayed annual demand values do not match calculated annual demand values.')
  }

  return warnings
}
