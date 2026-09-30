You are an autonomous senior front-end engineer, information designer, data visualization specialist, and accessibility-focused UX designer.

Build a complete, polished, production-ready interactive data story called:

THE SUSTAINABILITY MULTIPLIER
How 4% Better Yield Transforms Bean & Bloom’s Supply Chain

Complete the project directly in this VS Code workspace. Do not stop after scaffolding. Create all required files, install dependencies, implement the full experience, run validation, fix errors, and leave the repository ready to push to GitHub and deploy to Vercel.

Do not ask me routine implementation questions. Make sensible design and engineering decisions based on this brief.

==================================================
1. PROJECT PURPOSE
==================================================

Bean & Bloom Organic Chocolate is a fictional, mid-sized organic chocolate company.

The primary user is a Supply Chain & Sustainability Manager responsible for:

- Product availability
- Ingredient inventory
- Production yield
- Production waste
- Supplier performance
- Sustainable sourcing
- Carbon impact
- Supply chain resilience
- Margin protection

The experience should help this manager answer:

“What is the highest-impact action Bean & Bloom can take to improve product availability, profitability, and sustainability at the same time?”

The story should gradually reveal that improving production yield from 89% to 93% creates the strongest balanced outcome across the business.

This is an explanatory interactive data story, not a conventional analytics dashboard. It should lead the user through a clear narrative, reveal evidence progressively, and conclude with an actionable recommendation.

==================================================
2. NON-NEGOTIABLE GUARDRAILS
==================================================

Cost and infrastructure:

- Use only free and open-source packages.
- Do not use paid services.
- Do not use APIs that require keys.
- Do not create a backend.
- Do not create a database.
- Do not use authentication.
- Do not use serverless functions.
- Do not use generative AI at runtime.
- Do not require environment variables.
- Keep all data local in static TypeScript or JSON files.
- Ensure the project can run entirely as a static Vite application.
- Ensure it can deploy to Vercel’s free tier.
- Do not load external images, fonts, scripts, maps, or tracking tools at runtime.

Token-efficiency:

- Work in one implementation pass wherever practical.
- Do not produce extensive commentary during implementation.
- Do not repeatedly summarize completed work.
- Do not create speculative features outside this brief.
- Do not add a large memory-bank system.
- Create one concise AGENTS.md file containing architecture and maintenance guidance.
- Prefer readable, reusable components over excessive abstraction.
- Do not generate multiple alternative implementations.
- If a nonessential feature causes instability, simplify it rather than repeatedly rewriting the application.

Content and data:

- All company names, suppliers, events, and metrics must be clearly fictional.
- Include a visible note stating that the data is invented for demonstration purposes.
- Do not claim that the data represents real cocoa production, suppliers, emissions, or business performance.
- Keep the narrative internally consistent.
- Derive displayed scenario values from shared calculation functions rather than scattering hard-coded results across components.

==================================================
3. REQUIRED TECHNOLOGY
==================================================

Use:

- Vue 3
- Vite
- TypeScript
- Composition API
- Vuetify for accessible layout primitives, controls, dialogs, and theme support
- Apache ECharts through vue-echarts for data visualizations
- GSAP with ScrollTrigger for restrained scrollytelling and transitions
- Lucide Vue Next for icons
- Native CSS and SVG where a custom illustration is simpler than adding another dependency

Do not use:

- Nuxt
- React
- Tailwind
- D3 unless absolutely necessary
- Three.js or TresJS for this MVP
- Mapbox
- MapLibre
- Chart.js
- External animation services
- CDN imports
- Remote font services
- Stock photography
- Analytics services

Use selective ECharts imports so the project does not import the entire library.

==================================================
4. EXPERIENCE CONCEPT
==================================================

The experience should feel like a premium visual editorial story inspired by modern digital annual reports and data journalism.

The design should be:

- Immersive but not theatrical
- Sophisticated and warm
- Clearly connected to organic chocolate
- Editorial rather than dashboard-like
- Highly visual
- Mobile-friendly
- Accessible
- Fast to load
- Easy to understand
- Focused on one insight at a time

Avoid:

- Dense KPI grids
- Permanent side navigation
- Large data tables
- Excessive glassmorphism
- Generic admin-dashboard styling
- Decorative animation that competes with the story
- Tiny text
- Interactions that only work on hover
- Scroll hijacking
- Horizontal page overflow

==================================================
5. VISUAL DIRECTION
==================================================

Create a custom visual identity for Bean & Bloom.

Suggested palette:

Light mode:
- Warm cream background
- Espresso text
- Cocoa brown primary
- Leaf green sustainability accent
- Muted terracotta risk accent
- Golden caramel highlight

Dark mode:
- Deep roasted cocoa background
- Warm off-white text
- Muted cacao surfaces
- Brighter leaf green accent
- Accessible caramel highlight
- Soft coral risk accent

Requirements:

- Define colors as semantic CSS custom properties.
- Meet WCAG AA contrast for essential text and controls.
- Use system font stacks only.
- Use large editorial headlines.
- Use restrained rounded corners.
- Use subtle grain or texture only if created with lightweight CSS.
- Build simple cocoa pod, leaf, bar, factory, and package motifs using CSS or inline SVG.
- Use whitespace and pacing to separate chapters.
- Make charts visually consistent with the theme.
- Never rely on color alone to communicate status.

==================================================
6. STORY STRUCTURE
==================================================

Build the experience as six narrative chapters plus a compact footer.

CHAPTER 1: GROWTH CREATES PRESSURE

Purpose:
Establish that the company is succeeding, but that growth is beginning to strain operations.

Headline:
“Demand is growing. The supply chain is working harder to keep up.”

Show an animated line or area chart with annual demand:

- 2023: 5.2 million bars
- 2024: 6.5 million bars
- 2025: 7.9 million bars

Supporting message:
Bean & Bloom’s demand grew by approximately 52% over two years, but production efficiency did not improve at the same rate.

Include a transition question:

“Can the current supply chain support the next stage of growth?”

Interaction:
- Scroll-triggered draw animation
- Accessible chart tooltip
- A static text summary for users who cannot interpret the chart

CHAPTER 2: THE HIDDEN LOSS

Purpose:
Show where incoming cocoa is lost before it becomes finished product.

Headline:
“Not every ton of cocoa becomes chocolate.”

Use a responsive Sankey-style flow or a custom SVG material-flow visualization:

- 1,000 tons of cocoa ingredients purchased
- 950 tons pass initial quality and handling
- 920 tons reach completed production
- 890 tons become packaged, sellable product
- 110 tons are lost in total

Categorize the 110 tons of loss:

- 50 tons quality and handling loss
- 30 tons processing loss
- 30 tons packaging and rework loss

Use clear annotations rather than requiring hover.

Key takeaway:
“At 89% yield, waste is not only material leaving the factory. It is product that cannot reach customers.”

CHAPTER 3: FOLLOW THE LOST COCOA

Purpose:
Translate abstract waste into consequences the manager cares about.

Headline:
“Waste does not stop at the production line.”

Show the cascading effect of 110 tons of annual loss:

- 550,000 fewer chocolate bars
- $1.1 million in potential revenue not realized
- 420 metric tons of modeled CO2e associated with lost material and recovery activity
- 18% modeled stockout risk during peak demand
- Increased need for expedited purchasing and freight

Make it explicit that these are fictional modeled values.

Visual treatment:
Build an animated ripple or cause-and-effect sequence:

Raw material loss
→ fewer finished bars
→ reduced inventory coverage
→ elevated stockout risk
→ emergency procurement
→ additional cost and emissions

Interaction:
- Let the user step through the chain manually
- Also reveal steps through scrolling on larger screens
- On mobile, display the steps vertically
- Include previous and next buttons
- Support keyboard operation

CHAPTER 4: TEST THE YIELD LEVER

Purpose:
Provide the primary interactive moment and demonstrate cause and effect.

Headline:
“What changes when more cocoa becomes sellable product?”

Create a Yield Simulator with an accessible slider ranging from 89% to 95%.

Default:
- 89% current yield

Highlighted target:
- 93% future yield

As the slider changes, calculate and animate:

- Sellable product in tons
- Annual bars produced
- Waste in tons
- Waste reduction percentage
- Modeled stockout risk
- Modeled carbon index
- Inventory coverage days
- Avoided procurement cost
- Revenue at risk avoided

Use one centralized scenario-calculation function.

Use these baseline assumptions:

- Annual material input: 1,000 tons
- Current yield: 89%
- Target yield: 93%
- Baseline bars produced: 7.12 million
- Bars per finished ton: 8,000
- Baseline waste: 110 tons
- Baseline stockout risk: 18%
- Baseline carbon index: 100
- Baseline inventory coverage: 24 days
- Target inventory coverage at 93% yield: 36 days
- Target stockout risk at 93% yield: 9%
- Target carbon index at 93% yield: 92
- Target avoided procurement cost: $430,000
- Target revenue at risk avoided: $650,000

At 93% yield, the experience must show:

- 930 tons sellable product
- 70 tons waste
- 7.44 million bars
- 320,000 additional bars compared with baseline
- Approximately 36% less waste
- 9% modeled stockout risk
- Carbon index of 92
- 36 inventory coverage days
- $430,000 avoided procurement cost
- $650,000 revenue at risk avoided

For intermediate slider values, interpolate in a transparent and deterministic way. Add concise comments to the calculation function explaining that the model is illustrative, not predictive.

Show:

- Current versus selected-state comparison
- Animated counters
- A compact impact summary
- A “Reset to current state” action
- A “Show recommended target” action

Do not communicate success through animation alone.

CHAPTER 5: COMPARE THE STRATEGIES

Purpose:
Show that multiple levers help, but do not create equal outcomes.

Headline:
“Three strategies reduce risk. Only one improves every outcome.”

Create three selectable strategy cards:

A. INCREASE INVENTORY

Action:
Add 15 days of buffer inventory.

Modeled effects:
- Product availability: strong improvement
- Stockout risk: strong improvement
- Operating cost: worsens
- Waste exposure: worsens
- Carbon impact: slight worsening
- Implementation complexity: moderate

B. ADD A NEW SUPPLIER

Action:
Onboard one additional certified cocoa supplier.

Modeled effects:
- Resilience: strong improvement
- Supplier concentration risk: improves
- Product availability: moderate improvement
- Cost: slight worsening during onboarding
- Carbon impact: neutral
- Implementation complexity: high

C. IMPROVE YIELD

Action:
Improve yield from 89% to 93%.

Modeled effects:
- Product availability: strong improvement
- Waste: strong improvement
- Operating cost: strong improvement
- Carbon impact: strong improvement
- Stockout risk: strong improvement
- Implementation complexity: moderate

Interaction:
- Selecting a strategy updates one shared comparison visualization.
- Display outcomes across availability, cost, waste, carbon, resilience, and implementation effort.
- Use a normalized score from 1 to 5 for comparison.
- Label the score as “illustrative relative impact,” not an objective industry benchmark.
- Provide text labels in addition to the visual chart.
- Make “Improve Yield” the strongest balanced option without making the other strategies appear useless.

CHAPTER 6: THE SUSTAINABILITY MULTIPLIER

Purpose:
Deliver the final reveal and recommendation.

Headline:
“One operational improvement creates value across the system.”

Show a central “Yield 89% → 93%” node connected to:

- 320,000 additional bars
- 40 fewer tons of waste
- 36% waste reduction
- 12 additional inventory coverage days
- 9-point reduction in modeled stockout risk
- 8-point carbon-index reduction
- $430,000 avoided procurement cost
- $650,000 revenue at risk avoided

Final statement:

“Sustainability is not a separate workstream. It is an outcome of smarter operating decisions.”

Recommendation:

“Prioritize a yield-improvement program focused on processing loss, packaging rework, and material-quality consistency. Track yield improvements alongside product availability, avoided cost, and carbon impact.”

Include three practical next actions:

1. Investigate the production stages responsible for the largest losses.
2. Establish a 93% yield target and track progress monthly.
3. Connect production-loss reporting to inventory, procurement, and sustainability reviews.

Add a restart-story control that scrolls back to the beginning.

==================================================
7. MOCK DATA MODEL
==================================================

Create well-organized fictional data in src/data.

Recommended files:

- demand.ts
- materialFlow.ts
- impactModel.ts
- strategyScenarios.ts
- storyContent.ts

Use typed interfaces.

Include enough monthly demand and yield data to make visualizations credible, but keep the dataset intentionally small.

Suggested monthly period:
January 2025 through December 2025.

Craft the monthly values so that:

- Demand generally rises.
- Peak demand occurs late in the year.
- Yield fluctuates between approximately 88.5% and 90.5%.
- Waste rises when yield falls.
- Inventory coverage tightens during peak demand.
- The annual totals align with the main story numbers.

Add a development-only data validation utility that checks important story relationships, including:

- Material input equals sellable output plus waste.
- Target output exceeds baseline output by 40 tons.
- At 8,000 bars per finished ton, 40 additional tons equals 320,000 bars.
- Waste decreases from 110 to 70 tons.
- Displayed annual values match calculated annual values.

Avoid unnecessary fake precision. Format dollar values and large quantities for readability.

==================================================
8. APPLICATION ARCHITECTURE
==================================================

Use a clear structure similar to:

src/
  assets/
  components/
    AppHeader.vue
    ChapterShell.vue
    ChapterNavigation.vue
    DataDisclaimer.vue
    ThemeToggle.vue
    StoryProgress.vue
    MetricCallout.vue
    AccessibleChartSummary.vue
  chapters/
    GrowthChapter.vue
    HiddenLossChapter.vue
    LostCocoaChapter.vue
    YieldSimulatorChapter.vue
    StrategyComparisonChapter.vue
    FinalRevealChapter.vue
  visualizations/
    DemandGrowthChart.vue
    MaterialFlowVisualization.vue
    ImpactCascade.vue
    YieldComparison.vue
    StrategyImpactChart.vue
    MultiplierNetwork.vue
  composables/
    useThemePreference.ts
    useReducedMotion.ts
    useStoryProgress.ts
    useYieldScenario.ts
  data/
    demand.ts
    materialFlow.ts
    impactModel.ts
    strategyScenarios.ts
    storyContent.ts
  utils/
    calculations.ts
    formatters.ts
    validateStoryData.ts
  styles/
    tokens.css
    global.css
  App.vue
  main.ts

Also create:

- README.md
- AGENTS.md
- LICENSE
- .gitignore
- package.json
- vite.config.ts
- tsconfig files required by Vite
- vercel.json only if needed for reliable routing or deployment
- any other standard configuration needed for a clean build

Keep the app as a single-page experience. Do not add Vue Router unless it is truly necessary.

==================================================
9. SCROLLYTELLING AND MOTION
==================================================

Use GSAP and ScrollTrigger carefully.

Desktop and tablet:

- Animate chapter entrances.
- Draw or reveal the demand line as it enters view.
- Progressively reveal material loss.
- Pin a visualization only when it improves comprehension.
- Keep pinned sequences short.
- Show a subtle progress indicator.

Mobile:

- Avoid long pinned sections.
- Replace complex pinned behavior with sequential content.
- Make charts and controls fit narrow screens.
- Ensure no content depends on hover.
- Favor vertical layouts.

Reduced motion:

- Respect prefers-reduced-motion.
- Disable scrubbed and large movement animations.
- Show final chart states immediately.
- Preserve all information and interactions.
- Avoid autoplay effects that cannot be stopped.

Prevent duplicate ScrollTrigger instances and clean them up when components unmount.

==================================================
10. DARK AND LIGHT MODE
==================================================

Implement a theme toggle in the header.

Requirements:

- Default to the user’s operating-system preference.
- Persist manual choice in localStorage.
- Use Vuetify theme configuration plus semantic CSS tokens.
- Update chart colors when the theme changes.
- Ensure tooltips, labels, focus states, and SVG graphics work in both themes.
- Prevent a flash of the wrong theme where practical.
- Give the toggle an accessible name and visible keyboard focus.

==================================================
11. RESPONSIVE DESIGN
==================================================

Support at least:

- 360px mobile
- 768px tablet
- 1280px desktop
- Large desktop screens

Requirements:

- Use fluid typography with clamp().
- Use responsive chart heights.
- Stack comparison cards on mobile.
- Keep touch targets at least 44 by 44 CSS pixels.
- Prevent clipped tooltips and labels.
- Avoid horizontal scrolling.
- Test long labels at narrow widths.
- Ensure the yield slider is comfortable to operate by touch.
- Keep the central narrative readable without charts.

==================================================
12. ACCESSIBILITY
==================================================

Treat accessibility as a core requirement.

Implement:

- Semantic landmarks
- Logical heading hierarchy
- A skip-to-content link
- Keyboard-accessible controls
- Visible focus styles
- Properly associated slider labels and values
- Accessible button names
- ARIA only where semantic HTML is insufficient
- Text alternatives or summaries for every chart
- Sufficient color contrast
- Information conveyed by labels and shapes, not color alone
- Reduced-motion support
- Screen-reader announcements for meaningful yield-simulator updates without announcing every animation frame

Do not put essential explanatory text inside canvas-rendered charts only.

==================================================
13. PERFORMANCE
==================================================

Keep the application lightweight.

Requirements:

- Import only required ECharts modules.
- Lazy-load the most complex visualization components if useful.
- Avoid large raster images.
- Prefer CSS, SVG, and HTML for decorative elements.
- Avoid unnecessary watchers.
- Use requestAnimationFrame only when needed.
- Dispose ECharts instances and GSAP triggers correctly.
- Do not add packages for functionality that Vue, CSS, or browser APIs already provide.
- Ensure npm run build completes successfully.
- Do not leave unused dependencies or components.

==================================================
14. CONTENT DETAILS
==================================================

Use polished, concise, plain-language copy.

Tone:

- Confident
- Insightful
- Sustainable without sounding self-congratulatory
- Operationally credible
- Easy to scan
- Appropriate for a manager

Clearly distinguish:

- Observed fictional data
- Modeled scenario outcomes
- Recommended actions

Include this disclaimer near the beginning and in the footer:

“Bean & Bloom Organic Chocolate and all data shown are fictional. Scenario results are illustrative and created for this design demonstration.”

Do not use lorem ipsum.

==================================================
15. README REQUIREMENTS
==================================================

Create a thorough but concise README.md containing:

- Project title
- Live-demo placeholder
- Project overview
- User and business challenge
- Central data-story thesis
- Narrative structure
- Core interactions
- Technology stack
- Why the stack was selected
- Local setup instructions
- Available npm scripts
- GitHub workflow
- Vercel deployment steps
- Project structure
- Mock-data explanation
- Accessibility considerations
- Performance considerations
- Current MVP scope
- Potential next steps
- Fictional-data disclaimer

Do not claim that the site is already deployed.

==================================================
16. AGENTS.MD REQUIREMENTS
==================================================

Create a concise AGENTS.md file that tells future coding agents:

- The project’s purpose
- The central story insight
- Which files own data and calculations
- That all metrics must remain internally consistent
- That no paid service, API key, backend, or runtime AI may be added
- That accessibility and reduced motion must be preserved
- That npm run build must pass before work is considered complete
- That new dependencies should be avoided unless clearly necessary
- That explanations should remain concise to conserve tokens

Keep AGENTS.md short and practical.

==================================================
17. IMPLEMENTATION WORKFLOW
==================================================

Follow this sequence autonomously:

1. Inspect the existing workspace.
2. If it is empty, scaffold a Vue 3, Vite, and TypeScript application in the current directory.
3. If a compatible project already exists, adapt it without deleting useful work.
4. Install only the required dependencies.
5. Create the typed mock data and calculation model first.
6. Validate that the baseline and target story numbers reconcile.
7. Build the global theme and responsive layout.
8. Build the chapters in narrative order.
9. Add charts and interactive behavior.
10. Add dark and light mode.
11. Add responsive and accessibility behavior.
12. Add reduced-motion behavior.
13. Create README.md and AGENTS.md.
14. Run the production build.
15. Fix all build errors.
16. Check for obvious runtime errors, missing imports, overflow, and broken asset paths.
17. Remove unused files and dependencies.
18. Provide one short final summary listing:
    - What was built
    - Commands run
    - Build status
    - Any intentionally simplified features

Do not pause for approval between these steps.

==================================================
18. ACCEPTANCE CRITERIA
==================================================

The project is complete only when:

- The app launches with npm run dev.
- npm run build succeeds.
- The experience contains all six chapters.
- The story clearly leads to the 89% to 93% yield recommendation.
- The yield slider updates all related metrics.
- The 93% target produces the required scenario values.
- The strategy comparison works.
- Dark and light themes work and persist.
- The experience is usable at 360px width.
- The experience is usable by keyboard.
- Reduced-motion preferences are respected.
- Every chart has an accessible text summary.
- No paid services or API keys are required.
- No runtime network data is required.
- All data is visibly identified as fictional.
- The repository has a logical component and data structure.
- README.md contains setup and deployment guidance.
- There are no placeholder components, TODO screens, lorem ipsum, or unfinished chapters.
- There are no obvious console errors.
- The final result is ready to commit to GitHub and deploy through Vercel.

Begin by inspecting the workspace, then execute the full build.