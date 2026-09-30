<script setup lang="ts">
</script>

<template>
  <div class="material-flow" aria-label="Material flow from cocoa inputs to sellable product">
    <div class="material-flow__row material-flow__row--source">
      <div class="material-flow__node material-flow__node--primary">
        <span class="node-title">1,000 tons</span>
        <small>purchased cocoa</small>
      </div>
      <div class="material-flow__arrow" aria-hidden="true">→</div>
      <div class="material-flow__node material-flow__node--secondary">
        <span class="node-title">950 tons</span>
        <small>after quality and handling</small>
      </div>
    </div>

    <div class="material-flow__row">
      <div class="material-flow__node material-flow__node--secondary">
        <span class="node-title">920 tons</span>
        <small>completed production</small>
      </div>
      <div class="material-flow__arrow" aria-hidden="true">→</div>
      <div class="material-flow__node material-flow__node--primary">
        <span class="node-title">890 tons</span>
        <small>packaged, sellable product</small>
      </div>
    </div>

    <div class="material-flow__loss" aria-label="110 tons lost in total">
      <div class="material-flow__loss-card">
        <strong>110 tons lost</strong>
        <ul>
          <li>50 tons quality and handling</li>
          <li>30 tons processing</li>
          <li>30 tons packaging and rework</li>
        </ul>
      </div>
    </div>
  </div>
</template>
