<script setup lang="ts">
const phases = [
  {
    number: '01',
    timing: 'Weeks 0-4',
    title: 'Map the decision gaps',
    copy: 'Define shared measures across demand, production, inventory, suppliers, and sustainability.',
    measure: 'Gate: shared definitions and owners agreed',
  },
  {
    number: '02',
    timing: 'Weeks 5-12',
    title: 'Pilot the decision workspace',
    copy: 'Use the yield scenario as a proof point for connected data and cross-functional trade-offs.',
    measure: 'Gate: one decision reviewed from connected data',
  },
  {
    number: '03',
    timing: 'Weeks 13-26',
    title: 'Scale and govern',
    copy: 'Embed the scorecard in monthly operating, procurement, supplier, and sustainability reviews.',
    measure: 'Gate: benefits tracked, owned, and acted on',
  },
]
</script>

<template>
  <section class="action-plan" aria-labelledby="action-plan-title">
    <div class="action-plan__header">
      <div>
        <p class="step-recommendation__eyebrow">Funding plan</p>
        <h3 id="action-plan-title">Fund the capability in stages, release the next stage at each proof point.</h3>
      </div>
      <span class="action-plan__gate">Three gates</span>
    </div>

    <div class="action-plan__phases">
      <article v-for="phase in phases" :key="phase.number" class="action-plan__phase">
        <div class="action-plan__phase-topline">
          <span class="action-plan__number">{{ phase.number }}</span>
          <span>{{ phase.timing }}</span>
        </div>
        <h4>{{ phase.title }}</h4>
        <p>{{ phase.copy }}</p>
        <small>{{ phase.measure }}</small>
      </article>
    </div>
  </section>
</template>
