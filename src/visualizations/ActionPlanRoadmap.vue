<script setup lang="ts">
const phases = [
  {
    number: '01',
    timing: 'Weeks 0-4',
    title: 'Diagnose the loss',
    copy: 'Instrument yield at quality handling, processing, and packaging.',
    measure: 'Gate: largest loss causes quantified',
  },
  {
    number: '02',
    timing: 'Weeks 5-12',
    title: 'Pilot the 93% target',
    copy: 'Fund focused fixes and test whether more input becomes sellable product.',
    measure: 'Gate: 93% yield sustained for 3 cycles',
  },
  {
    number: '03',
    timing: 'Weeks 13-26',
    title: 'Scale and govern',
    copy: 'Embed the scorecard in monthly operations, procurement, and sustainability reviews.',
    measure: 'Gate: benefits tracked and owned',
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
