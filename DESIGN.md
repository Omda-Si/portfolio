# Column & Sage

Design system for Emad Siddig’s portfolio. This file is the reference for future changes. If a proposed change is not described here, it does not belong on the page.

## Who the page is for

Emad Siddig is a full-stack JavaScript developer in Rwanda and a software development trainee at The Gym. The work on the page is real: Pixel Hills (2nd place, Cursor Kigali Hackathon), RoOby Shop, Secrets, a University of Sudan site, a quiz, and an account system in C.

Two people open this page.

- A recruiter needs, in one screen: who he is, that he is available, proof he has shipped, and an email address.
- A client needs the same, plus what kind of work he will take on.

The page is a record of that, not a pitch deck. Nothing here is a testimonial, a client logo, an employer, or a metric that Emad did not already publish. Skill percentages are labeled as his own estimate.

## Theme

**Column & Sage.** The only photograph is Emad at night: a sage quarter-zip with cream stripes, a pale column, black-green trees. Those three colors are the palette. The type is a constructed grotesque (Bricolage Grotesque) for reading and display, and IBM Plex Mono for indexes, labels, and the self-assessed figures — the voice of a person who writes C and also writes interfaces.

Two memorable moments, and only two:

1. The name is set enormous, broken onto two lines, with a small knit-stripe block under it. The block is the sweater: sage ground, three cream bars of decreasing length. It is not a logo system and it is not repeated as decoration.
2. The work is a ledger. Pixel Hills sits on the one filled field (`primary-container`). The other projects are ruled rows that become a three-column record — index, account, links — only once the viewport can hold that record. They are not cards.

The wide layout does not stretch the paragraph. Past 960px the portrait becomes a sticky identity column separated from the document by a hairline (the column in the photograph). Past 1100px the project facts and the services sit in columns. Past 1400px the identity column and the featured project get more air, and the measure of the text stays put. The margin beyond the shell is the same surface color. Empty margin is the point.

Light is the column color. Dark is the trees. The accent is the sweater, darkened or lightened until text on it passes WCAG AA. There is no gradient, no blur, and no drop shadow. Depth is tonal: `surface`, `surface-container`, and the single `primary-container` field.

## This project must not use AI-slop defaults

The section [What “AI slop design” is](#what-ai-slop-design-is) defines the defaults this page refuses. Do not add them back. In particular, do not introduce:

- an indigo, purple, or pink gradient, or gradient text
- Inter, Roboto, Open Sans, Poppins, Lato, Nunito, Manrope, Plus Jakarta Sans, or Outfit as the voice
- glassmorphism or backdrop blur
- a centered hero with a pill badge and two pill buttons
- emoji, or icon tiles, as a feature grid
- a uniform radius and a soft shadow on every block
- decorative blobs, mesh gradients, or glow
- three identical icon cards
- filler lines (“crafting digital experiences”, “unlock”, “seamless”, “elevate”)
- fade-up-on-scroll applied to every block

The previous version of this site had several of those habits (cyan gradient buttons, a frosted sidebar, a card for every block, skill rings, pill CTAs). They were removed on purpose.

## Color roles

Tokens are CSS custom properties on `:root`. Components use roles, never raw hex. Light values are the default. Dark values apply under `[data-theme="dark"]` and, when no theme has been set, under `prefers-color-scheme: dark`.

### Light (the column)

| Role | Hex | Use |
| --- | --- | --- |
| `surface` | `#e7e6d4` | Page background. Sampled from the column, slightly quieted. |
| `surface-dim` | `#dcdac6` | Image fallback before the portrait loads. |
| `surface-container-low` | `#f3f2e6` | Reserved tonal step. |
| `surface-container` | `#ecebd9` | Reserved tonal step. |
| `surface-container-high` | `#e0deca` | Reserved tonal step. |
| `on-surface` | `#1c1e14` | Body text, headings, focus ring. |
| `on-surface-variant` | `#3e4938` | Kickers, indexes, definition terms. Still AA on `surface`. |
| `primary` | `#1f4632` | Links, buttons, meter fill, the knit block. Sweater, darkened. |
| `on-primary` | `#f4f6f1` | Text on `primary`. |
| `primary-hover` | `#173628` | Button hover. |
| `primary-pressed` | `#10261c` | Button active. |
| `primary-container` | `#d3e2d0` | The Pixel Hills field. The only filled region. |
| `on-primary-container` | `#13281c` | All text on that field, including links. |
| `outline` | `#5c6756` | Control borders, meter border. |
| `outline-variant` | `#8a8e7c` | Hairline rules between records. |
| `meter-track` | `#b4b6a4` | The unused part of a skill meter. |
| `inverse-surface` | `#1c1e14` | Reserved. |
| `inverse-on-surface` | `#e7e6d4` | Reserved. |
| `error` | `#8c2f2c` | Reserved. This page has no error UI. |
| `on-error` | `#fff8f7` | Reserved. |

### Dark (the trees)

| Role | Hex | Use |
| --- | --- | --- |
| `surface` | `#13160e` | Page. Sampled from the foliage. |
| `surface-dim` | `#0d0f0a` | Image fallback. |
| `surface-container-low` | `#1a1e14` | Reserved. |
| `surface-container` | `#21261a` | Reserved. |
| `surface-container-high` | `#2a3022` | Reserved. |
| `on-surface` | `#e8e6d4` | Text. The column color, as ink on the trees. |
| `on-surface-variant` | `#c5c8b4` | Kickers and indexes. |
| `primary` | `#c5d4b8` | Links and buttons. The sweater, lifted for contrast. |
| `on-primary` | `#13281c` | Text on `primary`. |
| `primary-hover` | `#d7e4cc` | Button hover. |
| `primary-pressed` | `#e6f0de` | Button active. |
| `primary-container` | `#243628` | Pixel Hills field. |
| `on-primary-container` | `#e4f0e2` | Text on that field. |
| `outline` | `#9aa390` | Control borders. |
| `outline-variant` | `#5a6454` | Hairlines. |
| `meter-track` | `#3d4638` | Unused meter. |
| `error` | `#ffb4ab` | Reserved. |
| `on-error` | `#690005` | Reserved. |

`theme-color` follows the surface: `#e7e6d4` in light, `#13160e` in dark.

State layers, where a hover needs a tint rather than a new fill, are `color-mix` of `primary` at 10–12% over `surface`. That is the Material state layer, not a new color role.

## Type

| Token | Size | Line height | Tracking | Weight | Face |
| --- | --- | --- | --- | --- | --- |
| Display | `clamp(2rem, 20cqi, 7.25rem)` | 0.86 | −0.045em | 800 | Bricolage Grotesque |
| Headline | `clamp(1.75rem, 2.2vw, 2.5rem)` | 1.12 | −0.03em | 600 | Bricolage Grotesque |
| Title, large | `clamp(1.75rem, 2vw, 2.15rem)` | 1.25 | −0.02em | 800 | Bricolage Grotesque |
| Title | 1.35rem | 1.25 | −0.02em | 600 | Bricolage Grotesque |
| Body | 1.0625rem (17px) | 1.65 | 0 | 400 | Bricolage Grotesque |
| Body small | 0.9375rem | 1.65 | 0 | 400 | Bricolage Grotesque |
| Label | 0.75rem | 1.35 | +0.08em, uppercase | 500 | IBM Plex Mono |

Display is the name only. Headline is section titles and the email address. Title is project and service names. Label is the mono voice: section kickers, “Problem / Solution / Result”, technology names, the theme state, skill figures.

Body copy stays near 65–70 characters (`--measure: 68ch`). Headings use `text-wrap: balance`. The display line-height is tight because the name is two short words; body line-height is not reused on it.

Fallback if the fonts do not load: Avenir Next, Segoe UI, then the generic sans. Mono falls back to `ui-monospace`.

## Spacing

A 4px grid, stored in rem so it follows text size.

| Token | Value |
| --- | --- |
| `space-1` | 0.25rem |
| `space-2` | 0.5rem |
| `space-3` | 0.75rem |
| `space-4` | 1rem |
| `space-5` | 1.5rem |
| `space-6` | 2rem |
| `space-7` | 3rem |
| `space-8` | 4rem |
| `space-9` | 6rem |

Sections are separated by `space-9` and a hairline, not by a card. Page padding is `clamp(1rem, 3vw, 2.5rem)`.

## Shape and elevation

| Token | Value | Where |
| --- | --- | --- |
| `shape-none` | 0 | Everything, including buttons, the portrait, and the featured project. |
| `shape-full` | 999px | The availability dot only. It is a dot. |

There is no elevation shadow. Material’s tonal elevation is the model: surfaces differ by color, not by blur. The portrait has a 1px `outline-variant` edge so the night photograph does not melt into the dark theme.

## Motion

| Token | Value | Where |
| --- | --- | --- |
| `motion-fast` | 160ms | Button and switch press (1px). Color changes instantly, so a theme switch never passes through a low-contrast pair. |
| `motion-panel` | 220ms | The mobile menu sliding in |
| `ease-out` | `cubic-bezier(0.2, 0, 0, 1)` | Both |

The menu slide explains that a panel opened. The 1px press on a button explains that it was activated. Both are removed under `prefers-reduced-motion: reduce`. In-page jumps are instant in that case too. Nothing fades in on scroll. The earlier GSAP dependency was removed because it was fade-up decoration.

## Layout

| Viewport | Behavior |
| --- | --- |
| Under 960px | One column. A sticky bar holds the name and a Menu button. The menu is a full-height panel (nav + theme). The portrait is a 16rem crop of the face so the name is on the first screen. |
| From 960px | Two columns. Sticky identity column (portrait, role, nav, theme) and the document, divided by a hairline. The intro splits: the name and lede on the left, the fact list on the right. |
| From 1100px | Project facts sit three across. Ledger rows become index / body / links. Services become index / title / description. Skill groups sit three across, without card chrome. Contact places the address and the button on one row. |
| From 1400px | The identity column widens to 18rem and the featured project gains padding. Text measure does not grow. |

Breakpoints are in px because they describe the viewport, which is what browser zoom changes. At 200% zoom a 1440px window behaves like 720px and falls back to the single column.

## Components and states

### Skip link

First focusable control. Visually hidden until focused, then a solid `primary` button. Target is `#main`, which receives focus.

### Button (`.btn`)

Solid `primary` / `on-primary`. Sharp corners. Minimum height 44px.

| State | Treatment |
| --- | --- |
| Hover | `primary-hover` |
| Focus-visible | 2px `on-surface` outline, 3px offset |
| Active | `primary-pressed`, 1px translate (none if reduced motion) |
| Disabled | Not used. This page has no disabled control. |

### Text link

`primary`, underlined, minimum height 44px when it is an action. Hover adds a 12% primary wash so the state is a shape, not only a color shift. Visited stays `primary` so contrast does not drop to the browser’s purple.

External links say so in text that is visually hidden: “(opens in a new tab)”.

### Navigation

In-page links. The current section gets `aria-current="true"`, a 2px `primary` bar on the left, and the `primary` color. The bar is the non-text cue; the name change is announced by `aria-current`. Hover uses the state-layer wash.

### Theme switch

`role="switch"`. The visible label is “Dark theme”. The state is the word On or Off in mono, plus `aria-checked`. On also adds a left bar. Not color alone.

### Menu button

Visible text “Menu” / “Close”, `aria-expanded`, `aria-controls`. At least 44×44px, with an `outline` border so the control has a boundary. Escape closes it and returns focus to the button. Tab cycles inside the open panel and the button. Below 960px the closed panel is `visibility: hidden`, so its links are not in the tab order.

### Portrait

Color photograph, not a grayscale filter and not a circle. Alt text describes what is in the frame. The caption “Night portrait” does not claim a city the file does not name.

### Knit

Decorative, `aria-hidden`. Sage rectangle, three cream stripes. It sits under the name only.

### Status

“Available for projects” is text. The dot is extra, and it has a border so it survives forced colors.

### Spec list

A description list. Terms are mono labels. Used once, beside the name, for role, location, The Gym, the hackathon, and email.

### Ledger and featured case

An article per project. Problem, solution, and result are a description list. Technologies are a list. Code and live links are real anchors with 44px targets.

Pixel Hills uses `primary-container`. Every line of text on it is `on-primary-container` — metadata is mono and uppercase, not faded.

### Skill meter

`role="meter"` with `aria-valuenow`, `aria-valuetext` (“92 percent, self-assessed”), and a visible percentage. The bar is not the only carrier of the number. The note above the group says the figures are an estimate.

### Footer

Contentinfo landmark, outside `main`. Copyright and a “Back to top” link.

## Accessibility

- One `h1` (“Emad Siddig”). Section titles are `h2`. Project, service, and skill-group titles are `h3`.
- Landmarks: banner (`header`), navigation, main, contentinfo.
- Skip link, visible `:focus-visible` ring on every control, including the switch and the menu.
- Contrast target is WCAG AA: 4.5:1 for text, 3:1 for UI boundaries (borders, the meter, the focus ring).
- Touch targets for links and buttons are at least 44px on the short side.
- Meaning does not depend on color alone: current nav has a bar and `aria-current`; the theme has On/Off; skills have numbers; links are underlined.
- `prefers-reduced-motion` removes the panel slide, the button press, and smooth scrolling.
- `forced-colors` keeps borders and the meter fill in system colors.
- Text is in rem. At 200% browser zoom the layout collapses to the single column rather than clipping. The display size uses `20cqi` (a fraction of the name’s column) so “Siddig” stays inside the column at 320px and at 200% text. Inner multi-column regions (the ledger, the skills) are container queries in rem, so they stack when the text gets large instead of sticking out of the viewport.
- The mobile menu locks background scroll while open.
- In-page links move focus to the target section.

## Writing

Sentences are specific and first person. Keep Emad’s projects, links, email, profiles, The Gym, the hackathon place, and the self-assessed percentages. Do not add employers, client names, testimonials, or numbers that are not already his. If a live URL is replaced, it is because the old one 404s or redirects; say so in the README, not by inventing a project.

## What “AI slop design” is

AI slop, as a phrase, started as a name for low-effort generative content. Applied to interfaces, **AI-slop design is the look a model produces when nobody decides the color, the type, the spacing, or the hierarchy.** It is the statistical middle of the interfaces in the training data. Each habit is harmless once. Together, and every time, they read as machine-made.

[uiscanner’s glossary](https://uiscanner.com/blog/what-is-ai-slop-ui) (4 July 2026) tightens it to a list of defaults an agent reverts to when the prompt leaves design open:

- an indigo or purple-to-blue gradient, usually on the hero and the primary button
- Inter, or a near-identical geometric sans, at nearly every size
- a compressed type scale, so headings and body text sit only a few pixels apart
- three feature cards in a row, each with a matching icon, often a card inside a card
- a 1px light-gray border and a soft shadow on every surface
- glassmorphism and blur on things that did not need them
- dark mode as a reflex, requested or not

The same piece explains the mechanism: a model predicts the most probable next token, and “most probable” for a UI is the median of what it has seen. “Modern, premium” does not escape that median, because those words are already inside it. The article traces the indigo default to the volume of Tailwind examples that used `bg-indigo-500`. The gradient is a frequency, not a taste. The cure it recommends is a real reference: named tokens, a type scale with actual jumps, a spacing rhythm, and a structure (a split hero rather than a centered one) so the agent is not filling blanks with the average.

[The AHD slop taxonomy](https://ahd.adastra.computer/taxonomy) treats these as detectable tells. A page that exhibits more than a handful is, in their words, statistically AI-generated. Tells that show up constantly in generated UI:

1. Inter (or Roboto, Open Sans, Poppins, Lato, Nunito, Manrope, Plus Jakarta Sans) used for display and body alike.
2. A purple-to-blue hero gradient, including `from-indigo-500 via-purple-500 to-pink-500`, or the blurred-blob version behind a glass panel.
3. A centered hero stack: pill badge, 48–72px headline, subhead, two CTAs (one filled, one ghost), everything centered.
4. `rounded-2xl` on everything, so buttons, cards, inputs, and images share one radius.
5. Three equal feature cards: icon in a rounded square, a short title, three lines of gray text.
6. A Lucide icon in a rounded gradient tile (zap, shield, sparkles).
7. Emoji used as bullets.
8. Glassmorphism on every panel (`backdrop-blur-xl`), not on one surface that needs it.
9. Near-black `#0a0a0a` plus one neon accent.
10. One soft drop shadow on every card.
11. Gradient text, especially on the word “AI” or “future”.
12. Fake testimonials and fake avatars.
13. A “trusted by” row of logos the product has no relationship with.
14. A bento of equal rounded cells, nothing dominant.
15. Symmetry with no tension.
16. Fade-up-on-scroll, staggered, on every block.
17. A gradient CTA with a trailing arrow and the words “Get started”.
18. Median SaaS copy: “build the future of X”, “ship faster”, “seamless”.
19. `prefers-reduced-motion` ignored.
20. One line-height for every size, default tracking at every size, and a single typeface with only two weights.

[Design for AI’s anti-slop principles](https://design.yaps.ai/docs/principles) makes the same observation: “AI slop isn’t one mistake. It’s the stack of defaults a model reaches for when nobody tells it otherwise.” Their tells overlap the lists above and add grey text on a grey background, one radius and one shadow on every element, and copy built from “unlock”, “supercharge”, “seamless”, “elevate”, “next-generation”. Their rules are the ones this system follows: a point of view before a component, a real type scale, one neutral family and a restrained accent, depth that is earned, space on a 4/8px rhythm, motion that explains a change of state, every interactive state designed, sentences a competitor could not paste unchanged, and breakpoints that are designed rather than merely unbroken.

### What generated UIs do by default

Left unconstrained, an agent asked for a portfolio or a landing page tends to emit the same page: a dark or white canvas, an indigo-to-pink gradient, Inter or Plus Jakarta Sans, a centered headline with gradient fill, two pill buttons, three icon cards, soft shadows, large radii, and a line of copy that could sit on any other portfolio. Dark mode appears even when nobody asked. Motion is a staggered fade on every section. The result is recognizable within a second, which is the problem: it is nobody’s in particular.

This portfolio is the constraint those defaults need. The palette is taken from one photograph. The type pairing is Bricolage Grotesque and IBM Plex Mono. The layout is a column and a ledger. Radius is zero except a status dot. There is no gradient and no shadow. Future edits should extend these tokens, not reach for the median.
