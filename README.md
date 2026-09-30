# The Sustainability Multiplier
### How Better Supply Chain Decisions Create Better Business Outcomes

**Live Experience:** [View the Interactive Data Story](https://kw-302-datastory.vercel.app/)  
**GitHub Repository:** [View Source Code](https://github.com/karenwittekind-slalom/kw-302-datastory)

---

## Overview

This project was created as a Protogen Capstone Project 302 - Data Story.

The Sustainability Multiplier is an interactive data story that explores how operational decisions ripple across an entire business.

Rather than presenting a traditional dashboard full of metrics and filters, this experience uses storytelling, visualization, and scenario modeling to help leaders understand the relationship between supply chain performance, sustainability outcomes, inventory health, and business growth.

The project follows a fictional organic chocolate manufacturer, **Bean & Bloom Organic Chocolate**, and demonstrates how seemingly small operational changes can create significant downstream impacts across profitability, resilience, customer fulfillment, and environmental performance.

The experience was intentionally designed as a narrative-driven decision-support tool rather than a reporting interface. The goal is not simply to display metrics, but to help stakeholders understand tradeoffs, evaluate investment opportunities, and identify where better visibility can drive better decisions.



# The Sustainability Multiplier

A static Vue 3 + Vite executive data story for fictional Bean & Bloom Organic Chocolate, showing why integrated visibility and decision intelligence can improve growth, resilience, profitability, and sustainability together.

## Live-demo placeholder

This project is intended to run locally and be deployed to Vercel once a GitHub repository is connected.

## Project overview

This experience is built for company leadership and sustainability and supply chain managers who need to answer: what decision-support capability will help the organization understand operational trade-offs and act at scale?

The story uses an illustrative yield scenario as proof of what connected data and scenario planning can uncover. The recommendation is to invest in integrated supply chain visibility and decision intelligence, not to fund a yield initiative in isolation.

## User and business challenge

Bean & Bloom is a fictional organic chocolate company with accelerating demand and increasing operational complexity. Leaders can see individual outcomes, but disconnected demand, production, inventory, supplier, and sustainability signals make causes and trade-offs difficult to evaluate before decisions are made.

## Central data-story thesis

Better visibility is the sustainability multiplier. When leaders can connect operational signals and test scenarios, they can identify opportunities such as the modeled move from 89% to 93% yield and evaluate its effects across sellable product, waste, service risk, cost, and carbon.

## Narrative structure

1. Growth creates complexity
2. The hidden loss
3. Connect the consequences
4. Test the trade-off
5. Compare the strategies
6. The sustainability multiplier
7. Fund the decision-support capability

## Core interactions

- Scroll-driven chapter entrances with a persistent progress indicator
- Interactive annual demand cards with four monthly trend lines, including projected 2026
- Material-loss flow visualization
- Clickable cause-and-effect cascade with compact mobile layout and problem, solution, and data-input context
- Yield scenario slider with connected metric updates and stacked sellable-product/waste bars
- Selectable strategy cards with a shared normalized comparison radar
- Chapter 6 multiplier visual showing value and sustainability outcomes from a connected view
- Chapter 7 executive funding roadmap with staged gates and modeled outcomes
- Light/dark theme picker labeled White chocolate / Dark chocolate
- Accessible scroll-to-top control and fictional-data disclaimer in the footer

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

The stack balances speed, accessibility, and visual clarity. Vue and Vite keep the static experience lightweight, while Vuetify provides theme support and accessible primitives. ECharts delivers responsive analytical visuals without a heavy dashboard framework, and custom CSS/SVG keeps the story narrative and editorial feel intact.

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
    ActionPlanChapter.vue
  components/
    ExecutiveIntro.vue
    RecommendationCard.vue
  composables/
  data/
  styles/
  utils/
  visualizations/
    ActionPlanRoadmap.vue
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
- No remote data services, fonts, or tracking scripts; the supplied logo is the only remote image reference
- CSS and SVG used instead of heavy visual assets
- Clean unmount logic for chart and animation lifecycle

## Current MVP scope

This is a polished single-page data story with seven narrative chapters, an executive leadership brief, connected scenario modeling, strategy comparison, decision-tool recommendations, and a staged funding roadmap. It is designed to be production-ready for a front-end showcase or concept demo.

## Potential next steps

- Connect the local decision-support model to production data sources in a future implementation
- Add more granular supplier and planning scenarios
- Expand sensitivity testing around assumptions and intervention costs
- Add stakeholder review and funding-gate capture in a future workflow
- Prepare a more detailed browser-specific QA pass

## Fictional-data disclaimer

Bean & Bloom Organic Chocolate and all data shown are fictional. Scenario results are illustrative and created for this design demonstration.
