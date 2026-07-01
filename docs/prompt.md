MASTER PROMPT — PRODUCTION UI SPACING, LAYOUT & WHITESPACE OPTIMIZATION
ROLE

You are a Senior Frontend Architect, UI/UX Engineer, and Design System Expert.

Your task is to perform a complete UI spacing audit of my entire React project and make it production-ready.

DO NOT redesign the website.

Keep the existing design language, colors, animations, typography, branding, responsiveness, and component structure.

Your goal is only to improve:

spacing
alignment
padding
margins
whitespace
section rhythm
layout consistency
visual balance

The final website should look premium, modern, balanced, and professionally designed.

IMPORTANT

Do NOT make random spacing changes.

Every spacing value must follow one unified spacing system throughout the project. Consistent spacing systems improve readability, hierarchy, and maintainability.

FULL PROJECT AUDIT

Audit EVERY page.

Including:

Home
About
Services
Elevators
Product Details
Contact
Quote
Footer
Navbar
Hero
CTA
FAQ
Cards
Forms
Every reusable component

Do NOT skip anything.

REMOVE EXCESSIVE WHITESPACE

Find every place where there is unnecessary empty space.

Examples:

Huge gap between sections

Large top padding

Large bottom padding

Too much card padding

Extra margin

Empty blank areas

Uneven spacing

Random spacing

Collapsed spacing

Overflow spacing

Hidden spacing

Invisible wrappers creating empty space

Fix ALL of them.

DO NOT REMOVE NECESSARY BREATHING SPACE

Do NOT compress everything.

The UI should still feel premium.

Maintain proper visual breathing room.

Whitespace should improve readability, not disappear.

CREATE ONE GLOBAL SPACING SYSTEM

Replace random spacing values with a consistent design-token system.

Example:

4px

8px

12px

16px

24px

32px

48px

64px

80px

96px

Use CSS variables or Tailwind theme tokens instead of hard-coded values. Consistent spacing scales based on 4px/8px systems are a common production practice.

SECTION SPACING

Every section should have identical vertical rhythm.

Example:

Hero

↓

Features

↓

Products

↓

Benefits

↓

Gallery

↓

FAQ

↓

CTA

↓

Footer

Spacing should feel visually balanced.

No section should appear too close.

No section should appear too far.

REMOVE RANDOM PADDING

Find things like

pt-[127px]

mb-[93px]

padding:87px

margin:53px

Replace with system values.

STANDARDIZE CONTAINERS

Every page should use identical containers.

Example

max width

horizontal padding

left alignment

right alignment

desktop

tablet

mobile

Everything must align perfectly.

CARD SPACING

Audit every card.

Ensure consistent:

internal padding

header spacing

icon spacing

title spacing

paragraph spacing

button spacing

bottom spacing

card height

card alignment

grid gaps

BUTTON SPACING

Every button should have

consistent padding

consistent height

consistent icon spacing

consistent margin

consistent gap

consistent alignment

FORM SPACING

Fix every form.

Fields should have equal spacing.

Labels

Inputs

Checkboxes

Textarea

Buttons

Validation

Error messages

Everything aligned perfectly.

TYPOGRAPHY SPACING

Fix spacing between

Heading

↓

Subtitle

↓

Paragraph

↓

Button

↓

Lists

↓

Cards

↓

Icons

Use a consistent vertical rhythm rather than arbitrary margins.

GRID SYSTEM

Every grid should have

equal column gaps

equal row gaps

equal card spacing

equal alignment

No uneven layouts.

ICON SPACING

Fix

icon padding

icon margin

icon alignment

icon size consistency

IMAGE SPACING

Fix

image padding

image margins

image alignment

caption spacing

gallery spacing

HERO SECTION

Optimize Hero.

Remove unnecessary blank areas.

Improve spacing between

Logo

Navbar

Title

Subtitle

Buttons

Image

Scroll indicator

Everything should feel balanced.

CTA SECTIONS

Reduce oversized whitespace.

Make CTA feel compact but premium.

FOOTER

Fix footer spacing.

Equal spacing between:

Columns

Headings

Links

Icons

Social media

Copyright

Bottom padding

NAVBAR

Audit spacing.

Logo

Navigation

Buttons

Dropdowns

Mobile menu

Tablet menu

Desktop menu

Everything perfectly aligned.

RESPONSIVENESS

Audit every breakpoint.

360px

375px

390px

414px

480px

640px

768px

834px

1024px

1280px

1440px

1600px

1920px

Spacing should scale naturally.

No overflow.

No clipping.

No cropped content.

REMOVE CSS DUPLICATION

Remove duplicate spacing utilities.

Merge duplicate styles.

Create reusable spacing classes.

REMOVE EMPTY WRAPPERS

Delete

unused divs

empty wrappers

unused containers

extra nesting

Only if safe.

IMPROVE CONSISTENCY

Find pages where spacing differs.

Standardize everything.

DO NOT BREAK

Animations

Hover effects

Transitions

Routing

Logic

Accessibility

SEO

Performance

Lighthouse

Responsive behavior

CODE QUALITY

Refactor spacing.

Simplify CSS.

Remove unnecessary margin overrides.

Remove unnecessary padding overrides.

Remove inline spacing styles where reusable tokens are better.

VALIDATION

After finishing:

Audit entire project again.

Ensure

No oversized whitespace

No inconsistent spacing

No random padding

No layout jumps

No visual imbalance

No broken responsiveness

No overflow

No horizontal scrolling

No clipping

No regression

FINAL REPORT

Generate a detailed report including:

Total sections audited
Files modified
Extra whitespace removed
Components standardized
New spacing system implemented
CSS cleaned
Duplicate spacing removed
Responsive improvements
Production readiness checklist
Regression test results
Remaining manual improvements (if any)
SUCCESS CRITERIA

The website should look like a professionally designed premium corporate product.

✔ Consistent spacing everywhere

✔ No unnecessary whitespace

✔ Perfect section rhythm

✔ Proper container widths

✔ Equal padding across components

✔ Responsive on every screen

✔ No visual imbalance

✔ Clean production-ready codebase

✔ Maintainable spacing system

✔ No broken UI or functionality

Do not stop until the entire project has been audited, cleaned, standardized, regression-tested, and prepared for production deployment.