MASTER PROMPT — FIX MOBILE LIGHTHOUSE PERFORMANCE TO 100 (React + Vite)
ROLE

You are a Principal React Performance Engineer, Google Lighthouse Expert, Vite Optimization Specialist, Core Web Vitals Consultant, and Senior Frontend Architect.

Your task is to analyze my entire React + Vite codebase, identify every reason why the mobile Lighthouse Performance score is below 100, and fix every issue using production-grade techniques.

Do NOT use temporary hacks or fake optimizations.

The final project must be production-ready and preserve all existing functionality, design, responsiveness, animations, and UI.

CURRENT STATUS

Current Lighthouse:

Performance ❌ (around 40–60 on Mobile)
Accessibility ✅
SEO ✅
Best Practices (needs improvement)

The mobile performance score is still low.

Find every root cause.

PRIMARY GOAL

Achieve:

Mobile Performance = 100
Desktop Performance = 100
Accessibility = 100
SEO = 100
Best Practices = 100

without breaking anything.

STEP 1 — ANALYZE THE ENTIRE PROJECT

Inspect every page.

Inspect every route.

Inspect every component.

Inspect every image.

Inspect every animation.

Inspect every dependency.

Inspect every CSS file.

Inspect every JavaScript file.

Inspect every font.

Inspect every React hook.

Inspect every asset.

Do NOT only inspect the homepage.

STEP 2 — FIND ALL LONG TASKS

Identify every task longer than 50ms.

Find exactly what blocks the main thread.

Examples include:

large JS bundles
React hydration
expensive useEffect
expensive loops
repeated rendering
animation calculations
unnecessary DOM work
synchronous execution
large dependencies

Split every long task.

Move expensive work to idle callbacks, Web Workers where appropriate, or defer it until after the initial render. Excessive JavaScript and long main-thread tasks are among the biggest causes of poor mobile Lighthouse scores.

STEP 3 — HERO SECTION OPTIMIZATION

The Hero section is the Largest Contentful Paint element.

Optimize it completely.

Requirements:

✓ preload hero image

✓ preload hero font

✓ remove unnecessary animation during first paint

✓ defer secondary animations

✓ render text immediately

✓ render CTA immediately

✓ lazy load decorative graphics

✓ prioritize LCP resource

Do NOT change the design.

STEP 4 — JAVASCRIPT OPTIMIZATION

Find:

unused JS

duplicate JS

dead code

duplicate imports

large libraries

heavy dependencies

unused packages

Remove everything unnecessary.

Reduce:

JS execution time

Main-thread work

Parse time

Compile time

Hydration cost

Memory usage

Bundle size

STEP 5 — REACT OPTIMIZATION

Apply:

React.memo

useMemo

useCallback

lazy()

Suspense

Dynamic imports

Route splitting

Memoization

Stable props

Context optimization

Prevent unnecessary renders.

STEP 6 — ROUTE SPLITTING

Every page must be lazy loaded.

Only load:

Home

Elevators

Services

Contact

when needed.

No page should be included in the initial bundle.

STEP 7 — VITE BUILD OPTIMIZATION

Optimize:

vite.config

manualChunks

tree shaking

Rollup output

vendor chunk

dynamic imports

asset hashing

module preload

minification

compression

STEP 8 — IMAGE OPTIMIZATION

Convert images where appropriate:

PNG → WebP

JPEG → AVIF

Requirements:

responsive images

srcset

sizes

width

height

aspect-ratio

fetchpriority="high"

decoding="async"

loading="lazy"

Only the hero image should load eagerly.

Everything else should be lazy.

STEP 9 — FONT OPTIMIZATION

Optimize Nunito loading.

Use:

woff2

font-display: swap

preload only required weights

remove unused weights

preconnect

unicode-range

avoid duplicate requests

Avoid render-blocking fonts.

STEP 10 — CSS OPTIMIZATION

Remove:

unused CSS

duplicate CSS

unused Tailwind classes

unused keyframes

unused variables

unused media queries

Minify CSS.

Reduce render-blocking CSS.

STEP 11 — ANIMATION OPTIMIZATION

Do NOT remove animations.

Instead:

use transform

use opacity

GPU acceleration

avoid layout changes

avoid reflow

avoid repaint

remove animation jank

maintain 60 FPS

STEP 12 — THIRD-PARTY SCRIPTS

Audit every external script.

Delay all non-essential scripts.

Load analytics only after interaction or idle time if possible.

Remove unnecessary third-party code.

STEP 13 — NETWORK OPTIMIZATION

Reduce:

HTTP requests

duplicate requests

waterfalls

render-blocking requests

Optimize:

preload

prefetch

preconnect

dns-prefetch

Brotli

Gzip

immutable cache

long-term caching

HTTP/2

HTTP/3 readiness

STEP 14 — CORE WEB VITALS

Optimize:

LCP

CLS

INP

FCP

TTFB

Speed Index

TBT

Interaction delay

Every metric should reach Google's "Good" thresholds.

STEP 15 — MOBILE-FIRST OPTIMIZATION

Test on:

320px

360px

375px

390px

412px

480px

No layout shift.

No overflow.

No clipping.

No animation lag.

No dropped frames.

STEP 16 — REMOVE UNUSED CODE

Delete:

unused components

unused hooks

unused CSS

unused JS

unused images

unused fonts

unused assets

unused packages

unused imports

unused icons

unused configs

unused utilities

STEP 17 — VERIFY BUILD

Run:

npm run build

npm run preview

TypeScript check

ESLint

Production build

Bundle analysis

Lighthouse (Mobile)

Lighthouse (Desktop)

Chrome Performance

Core Web Vitals

Fix every issue found.

STEP 18 — ITERATE UNTIL 100

Do NOT stop after one optimization pass.

Run Lighthouse.

Analyze.

Fix.

Run again.

Repeat until:

Performance = 100
Accessibility = 100
SEO = 100
Best Practices = 100
STEP 19 — FINAL REPORT

For every optimization provide:

Root cause
File modified
Code changed
Why it was slow
Why the fix works
Performance improvement
Lighthouse impact
Core Web Vitals impact
Regression check
IMPORTANT

Do NOT chase the score by disabling features or animations.

The website must remain:

Fully responsive
Pixel-perfect
Visually identical
Fully functional
Production-ready
Optimized for real users, not just Lighthouse

Also note that a pure React SPA built with Vite may not consistently reach a perfect 100/100 mobile Performance score on every Lighthouse run, because Lighthouse heavily penalizes JavaScript execution on simulated low-end mobile devices. The goal should be to eliminate genuine bottlenecks and achieve consistently excellent Core Web Vitals rather than relying on score-only optimizations.