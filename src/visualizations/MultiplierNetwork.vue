<script setup lang="ts">
const props = defineProps<{ focusLabel: string }>()
</script>

<template>
  <svg viewBox="0 0 700 380" class="multiplier-network" role="img" aria-label="Yield improvement creates value across availability, waste, emissions, resilience, and cost">
    <defs>
      <linearGradient id="linkGradient" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stop-color="var(--color-leaf)" />
        <stop offset="100%" stop-color="var(--color-accent-strong)" />
      </linearGradient>
    </defs>

    <g>
      <line x1="345" y1="173" x2="134" y2="64" stroke="url(#linkGradient)" stroke-width="2" />
      <line x1="345" y1="173" x2="175" y2="295" stroke="url(#linkGradient)" stroke-width="2" />
      <line x1="345" y1="173" x2="540" y2="82" stroke="url(#linkGradient)" stroke-width="2" />
      <line x1="345" y1="173" x2="530" y2="260" stroke="url(#linkGradient)" stroke-width="2" />
      <line x1="345" y1="173" x2="392" y2="312" stroke="url(#linkGradient)" stroke-width="2" />
    </g>

    <g>
      <circle cx="350" cy="175" r="55" fill="var(--color-accent-strong)" opacity="0.12" />
      <circle cx="350" cy="175" r="38" fill="var(--color-accent-strong)" />
      <text x="350" y="180" text-anchor="middle" fill="var(--color-ink)" font-size="19" font-weight="700">Yield</text>
      <text x="350" y="198" text-anchor="middle" fill="var(--color-ink)" font-size="19" font-weight="700">89% → 93%</text>
    </g>

    <g>
      <g transform="translate(60,35)">
        <rect x="0" y="0" width="150" height="58" rx="16" fill="var(--color-surface-alt)" stroke="var(--color-border)" />
        <text x="75" y="25" text-anchor="middle" fill="var(--color-text)" font-size="12">+320k bars</text>
      </g>
      <g transform="translate(100,252)">
        <rect x="0" y="0" width="150" height="58" rx="16" fill="var(--color-surface-alt)" stroke="var(--color-border)" />
        <text x="75" y="25" text-anchor="middle" fill="var(--color-text)" font-size="12">-40 tons waste</text>
      </g>
      <g transform="translate(437,35)">
        <rect x="0" y="0" width="180" height="58" rx="16" fill="var(--color-surface-alt)" stroke="var(--color-border)" />
        <text x="90" y="25" text-anchor="middle" fill="var(--color-text)" font-size="12">36% less waste</text>
      </g>
      <g transform="translate(465,220)">
        <rect x="0" y="0" width="180" height="58" rx="16" fill="var(--color-surface-alt)" stroke="var(--color-border)" />
        <text x="90" y="25" text-anchor="middle" fill="var(--color-text)" font-size="12">$430k cost avoided</text>
      </g>
      <g transform="translate(312,292)">
        <rect x="0" y="0" width="180" height="58" rx="16" fill="var(--color-surface-alt)" stroke="var(--color-border)" />
        <text x="90" y="25" text-anchor="middle" fill="var(--color-text)" font-size="12">$650k revenue protected</text>
      </g>
    </g>
  </svg>
</template>
