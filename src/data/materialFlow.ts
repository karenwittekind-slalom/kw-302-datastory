export interface MaterialFlowState {
  inputTons: number
  qualityAndHandlingTons: number
  productionTons: number
  packagedTons: number
  totalLossTons: number
  lossBreakdown: {
    qualityAndHandling: number
    processing: number
    packagingAndRework: number
  }
}

export const materialFlowData: MaterialFlowState = {
  inputTons: 1000,
  qualityAndHandlingTons: 950,
  productionTons: 920,
  packagedTons: 890,
  totalLossTons: 110,
  lossBreakdown: {
    qualityAndHandling: 50,
    processing: 30,
    packagingAndRework: 30,
  },
}
