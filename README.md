# The Sustainability Multiplier

A static Vue 3 + Vite data story for Bean & Bloom Organic Chocolate, designed to show why improving yield from 89% to 93% is the most compelling operational decision.

## Live-demo placeholder

This project is intended to run locally and be deployed to Vercel once a GitHub repository is connected.

## Project overview

This experience is built for a sustainability and supply chain manager who needs to answer: what is the highest-impact action that improves product availability, profitability, and sustainability at the same time?

The story gradually reveals that improving yield from 89% to 93% creates the strongest multi-outcome improvement across cost, waste, service levels, emissions, and resilience.

## User and business challenge

Bean & Bloom is a fictional organic chocolate company with accelerating demand. The company needs to support growth without creating service risk, waste, or avoidable carbon impact. The central challenge is to determine which operational lever creates the best combined outcome.

## Central data-story thesis

Yield is the strongest operational multiplier. When conversion efficiency rises from 89% to 93%, the system produces more sellable product with less waste, lower procurement pressure, fewer stockout events, and lower modeled emissions.

## Narrative structure

1. Growth creates pressure
2. The hidden loss
3. Follow the lost cocoa
4. Test the yield lever
5. Compare the strategies
6. The sustainability multiplier

## Core interactions

- Scroll-driven narrative flow
- Demand growth line chart
- Material loss flow visualization
- Cause-and-effect cascade with previous and next controls
- Yield slider that updates value and risk metrics
- Strategy comparison view with outcome cards and radar chart
- Final recommendation and restart control

## Technology stack

- Vue 3
- Vite
- TypeScript
- Vuetify
- Apache ECharts via vue-echarts
- GSAP + ScrollTrigger
- Lucide Vue Next
- CSS and SVG for bespoke illustration

## Why the stack was selected

The stack balances speed, accessibility, and visual clarity. Vue and Vite keep the static experience lightweight, while Vuetify provides solid, accessible layout primitives. ECharts delivers responsive analytical visuals without a heavy dashboard framework, and custom CSS/SVG keeps the story narrative and editorial feel intact.

## Local setup instructions

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open the local Vite URL in the browser.

## Available npm scripts

```bash
npm run dev
npm run build
npm run preview
```

## GitHub workflow

1. Create a new GitHub repository.
2. Run `git init` inside the project directory if needed.
3. Commit the code with a clear message.
4. Add the remote repository with `git remote add origin ...`.
5. Push to GitHub with `git push -u origin main`.

## Vercel deployment steps

1. Sign in to Vercel and choose "Add new project."
2. Import the GitHub repository.
3. Use the default settings for a Vite app.
4. Keep the framework preset as Vite.
5. Set the build command to `npm run build` and the output directory to `dist`.
6. Deploy.

## Project structure

```text
src/
  chapters/
  components/
  composables/
  data/
  styles/
  utils/
  visualizations/
  App.vue
  main.ts
```

## Mock-data explanation

The project uses local mock data under `src/data` to describe a fictional supply chain and modeled outcomes. The data is intentionally small, consistent, and derived from a shared calculation model so that the narrative remains trustworthy as a demonstration.

## Accessibility considerations

- Semantic headings and landmarks
- Skip-to-content link
- Keyboard-friendly controls
- Visible focus states
- Text summaries for charts
- Reduced-motion behavior via `prefers-reduced-motion`
- High-contrast text and controls in both modes

## Performance considerations

- Selective ECharts imports only
- Lightweight narrative architecture
- No remote images, fonts, or tracking scripts
- CSS and SVG used instead of heavy visual assets
- Clean unmount logic for chart and animation lifecycle

## Current MVP scope

This is a polished single-page data story with six narrative chapters, interactive yield simulation, strategy comparison, and final recommendation. It is designed to be production-ready for a front-end showcase or concept demo.

## Potential next steps

- Add more granular loss mapping by production stage
- Expand the scenario data model for sensitivity testing
- Capture stakeholder review notes in a lightweight CMS-like structure
- Prepare a more detailed QA pass for browser-specific behavior

## Fictional-data disclaimer

Bean & Bloom Organic Chocolate and all data shown are fictional. Scenario results are illustrative and created for this design demonstration.
