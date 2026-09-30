<script setup lang="ts">
const props = defineProps<{ focusLabel: string }>()

const valueOutcomes = [
  { value: '+320k', label: 'additional bars', detail: 'more sellable product' },
  { value: '$430k', label: 'cost avoided', detail: 'less emergency procurement' },
  { value: '$650k', label: 'revenue protected', detail: 'less stockout exposure' },
  { value: '+12 days', label: 'inventory coverage', detail: 'more resilience at peak demand' },
]

const sustainabilityOutcomes = [
  { value: '-40t', label: 'waste', detail: 'material kept in the product flow' },
  { value: '36%', label: 'waste reduction', detail: 'less loss from the same input' },
  { value: '-8 pts', label: 'carbon index', detail: 'lower impact per sellable bar' },
  { value: '-9 pts', label: 'stockout risk', detail: 'fewer rush decisions and shipments' },
]
</script>

<template>
  <section class="multiplier-network" aria-labelledby="multiplier-network-title">
    <div class="multiplier-network__intro">
      <p class="multiplier-network__eyebrow">The same 4-point gain, seen two ways</p>
      <h2 id="multiplier-network-title">One yield decision returns value and takes pressure off the system.</h2>
    </div>

    <div class="multiplier-network__diagram">
      <div class="multiplier-network__source">
        <span class="multiplier-network__source-label">Operating lever</span>
        <strong>{{ props.focusLabel }}</strong>
        <span>more of each 1,000 tons becomes sellable product</span>
      </div>

      <div class="multiplier-network__bridge" aria-hidden="true">
        <span class="multiplier-network__bridge-line"></span>
        <span class="multiplier-network__bridge-label">+40 sellable tons</span>
      </div>

      <div class="multiplier-network__outcomes">
        <section class="multiplier-network__group multiplier-network__group--value" aria-labelledby="value-outcomes-title">
          <div class="multiplier-network__group-heading">
            <span class="multiplier-network__marker">01</span>
            <div>
              <p>Value created</p>
              <h3 id="value-outcomes-title">More product. More room to serve demand.</h3>
            </div>
          </div>
          <div class="multiplier-network__cards">
            <article v-for="outcome in valueOutcomes" :key="outcome.label" class="multiplier-network__card">
              <strong>{{ outcome.value }}</strong>
              <span>{{ outcome.label }}</span>
              <small>{{ outcome.detail }}</small>
            </article>
          </div>
        </section>

        <section class="multiplier-network__group multiplier-network__group--sustainability" aria-labelledby="sustainability-outcomes-title">
          <div class="multiplier-network__group-heading">
            <span class="multiplier-network__marker">02</span>
            <div>
              <p>Pressure reduced</p>
              <h3 id="sustainability-outcomes-title">Less loss. Less carbon. Fewer recovery moves.</h3>
            </div>
          </div>
          <div class="multiplier-network__cards">
            <article v-for="outcome in sustainabilityOutcomes" :key="outcome.label" class="multiplier-network__card">
              <strong>{{ outcome.value }}</strong>
              <span>{{ outcome.label }}</span>
              <small>{{ outcome.detail }}</small>
            </article>
          </div>
        </section>
      </div>
    </div>

    <p class="multiplier-network__caption">Improving yield does not trade business performance for sustainability. It improves both because the system loses less material before it becomes product.</p>
  </section>
</template>
