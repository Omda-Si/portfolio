# Design guide: The trace

This is the style guide for Emad Siddig’s portfolio. The page is a static site (`index.html`, `style.css`, `script.js`) published on GitHub Pages. Recruiters and clients should be able to tell who he is, what he has shipped, and how to email him, without learning a dashboard.

## Theme

**The trace.** The portrait is not on the page. The opening is the path of one request: interface, API, database. That is the work he describes, and it is what Pixel Hills, RoOby Shop, and Secrets actually span.

Night knit, the previous theme, took sage, cream, and night navy from `assets/emad-photo.jpg`. Without the photograph those colors had no source, so the palette changed. The files are still in `assets/` and are not referenced by the page. There is no Open Graph image.

The new colors are a schematic, not a sweater:

- Night surface `#0e1a2b` is blueprint ink. It is not the photograph’s sky, and it is not pure `#0a0a0a`.
- Day surface `#e6eef7` is blueprint paper. It is not cream (`#F4F1EA`).
- `--md-sys-color-trace` is the request: amber `#f0c14d` on night, darkened amber `#8a5208` on day so it stays AA. It marks the moving point and, at night, the email button. It is one mark, not a glow.

Type did not change. Source Serif 4 still sets the name and the hop names. Atkinson Hyperlegible still sets the UI. The pairing is about reading his name and the work, not about a garment.

### Why this, for this person

Emad is a full-stack JavaScript developer in Rwanda and a trainee at The Gym. He builds the screen, the route, and the data underneath. Pixel Hills is a React lab for chemistry, biology, and physics (2nd, Cursor Kigali Hackathon). RoOby Shop is an Arabic, right-to-left store that hands orders to WhatsApp. Secrets keeps sessions in PostgreSQL. The account program in C writes `account.dat`.

The audience is a recruiter or a client deciding whether to email him. The opening gives the name, that stack as a thing you can step through, two concrete projects, and the address.

### What this theme refuses

Documented in the last section. In short: no purple gradients, no glass, no Inter, no donut scores, no rounded-card grid, no cream-and-terracotta kit, no acid green, no particle field, no matrix rain, no floating code-snippet cards, no typing-cursor tagline. The trace is a line and three named stops. The words on the stops are his real work.

## Color roles

Tokens are CSS custom properties on `:root` (night) and `[data-theme="light"]` (day). Names follow Material Design 3 color roles, adapted for a website. They are not an Android component skin.

Roles are defined in [Material color roles](https://m3.material.io/styles/color/roles). This site uses the roles it actually needs.

### Night

| Token | Hex | Job |
| --- | --- | --- |
| `--md-sys-color-surface` | `#0e1a2b` | Page background |
| `--md-sys-color-surface-container` | `#162536` | Hover wash |
| `--md-sys-color-surface-container-high` | `#1d3046` | Pressed wash |
| `--md-sys-color-on-surface` | `#e8eef6` | Body text, focus ring |
| `--md-sys-color-on-surface-variant` | `#b4c5d8` | Secondary text, table caption, stack line |
| `--md-sys-color-primary` | `#f0c14d` | Filled button, same amber as the trace |
| `--md-sys-color-on-primary` | `#1c1406` | Text on that button |
| `--md-sys-color-primary-hover` | `#e2b03a` | Button hover |
| `--md-sys-color-primary-pressed` | `#c99622` | Button press |
| `--md-sys-color-secondary` | `#9bb0c6` | Reserved blue-gray |
| `--md-sys-color-on-secondary` | `#0e1a2b` | Text on secondary |
| `--md-sys-color-outline` | `#8aa4bf` | Control borders and the request line |
| `--md-sys-color-outline-variant` | `#2a4158` | Dividers between records |
| `--md-sys-color-inverse-surface` | `#e6eef7` | Inverse pair |
| `--md-sys-color-inverse-on-surface` | `#102033` | Text on inverse |
| `--md-sys-color-trace` | `#f0c14d` | The request mark |

### Day

| Token | Hex | Job |
| --- | --- | --- |
| `--md-sys-color-surface` | `#e6eef7` | Page background, blueprint paper |
| `--md-sys-color-surface-container` | `#f4f7fb` | Hover wash |
| `--md-sys-color-surface-container-high` | `#fbfdff` | Pressed wash |
| `--md-sys-color-on-surface` | `#102033` | Body text, focus ring |
| `--md-sys-color-on-surface-variant` | `#2c435c` | Secondary text |
| `--md-sys-color-primary` | `#102033` | Filled button |
| `--md-sys-color-on-primary` | `#f4f7fb` | Text on that button |
| `--md-sys-color-primary-hover` | `#1c334d` | Button hover |
| `--md-sys-color-primary-pressed` | `#0a1522` | Button press |
| `--md-sys-color-secondary` | `#243e58` | Deeper ink |
| `--md-sys-color-on-secondary` | `#f4f7fb` | Text on secondary |
| `--md-sys-color-outline` | `#2c435c` | Control borders and the request line |
| `--md-sys-color-outline-variant` | `#c5d2e2` | Dividers |
| `--md-sys-color-trace` | `#8a5208` | The request mark, darkened for the paper |

### Contrast (WCAG AA)

Body text and button labels are above 4.5:1. Large title text is well above 3:1. Checked as relative luminance pairs:

| Pair | Ratio | Use |
| --- | --- | --- |
| `#e8eef6` on `#0e1a2b` | 15.0:1 | Night body |
| `#b4c5d8` on `#0e1a2b` | 9.9:1 | Night secondary |
| `#1c1406` on `#f0c14d` | 10.8:1 | Night button |
| `#1c1406` on `#e2b03a` | 9.1:1 | Night button hover |
| `#f0c14d` on `#0e1a2b` | 10.4:1 | Night trace mark |
| `#102033` on `#e6eef7` | 14.1:1 | Day body |
| `#2c435c` on `#e6eef7` | 8.7:1 | Day secondary |
| `#f4f7fb` on `#102033` | 15.3:1 | Day button |
| `#8a5208` on `#e6eef7` | 5.5:1 | Day trace mark |

Selection is `#f0c14d` on `#1c1406` in both themes (10.8:1). Meaning is never carried by color alone: the current nav item is underlined and exposed with `aria-current`, the selected hop is underlined and exposed with `aria-checked`, links in prose are underlined, and “Available for project work” is a sentence.

## Type

Two families, each with a job.

| Role | Family | Why |
| --- | --- | --- |
| Display, titles, the name | [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) | A text serif with enough weight to name a person. Used in roman, not italic. |
| UI, body, buttons, tables | [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible) | Drawn so letters stay distinct. Right for a page that treats reading as the point. |

Atkinson is loaded at 400 and 700 only. Source Serif 4 is loaded as a variable font from 500 to 700. Fallbacks are `"Iowan Old Style", Palatino, Georgia` and `"Segoe UI", "Noto Sans", sans-serif`. Inter, Roboto, and Space Grotesk are not used.

| Token | Size | Line height | Weight |
| --- | --- | --- | --- |
| `--md-sys-typescale-display-*` | `clamp(2.75rem, 1.8rem + 2.8vw, 4rem)` | 1.02 | 600 |
| `--md-sys-typescale-headline-*` | `clamp(1.75rem, 1.3rem + 1vw, 2.25rem)` | 1.15 | 600 |
| `--md-sys-typescale-title-*` | `1.5rem` | 1.25 | 600 |
| `--md-sys-typescale-body-*` | `1.0625rem` | 1.6 | 400 |
| `--md-sys-typescale-label-*` | `0.9375rem` | 1.4 | 700 |

The lead paragraph is `1.1875rem` / 1.5, one step above body. Paragraphs cap around 38rem so a line stays near 60–70 characters. Headings use `text-wrap: balance`. Body uses `text-wrap: pretty`.

Material’s type scale is the model for the steps ([M3 type scale](https://m3.material.io/styles/typography/type-scale-tokens)). Sizes are tuned for a long page in a browser, not for an Android dialog.

## Shape, spacing, elevation

Shape is almost square. Sections have no radius. The request mark is a circle because it is a point on a line, not a card. Controls use `--md-sys-shape-corner-small: 4px`, enough to mark a button without turning it into a pill.

Spacing is a 4px-based scale on `:root`:

| Token | Value |
| --- | --- |
| `--md-sys-spacing-1` | 0.25rem |
| `--md-sys-spacing-2` | 0.5rem |
| `--md-sys-spacing-3` | 0.75rem |
| `--md-sys-spacing-4` | 1rem |
| `--md-sys-spacing-5` | 1.5rem |
| `--md-sys-spacing-6` | 2rem |
| `--md-sys-spacing-7` | 3rem |
| `--md-sys-spacing-8` | 4rem |
| `--md-sys-spacing-9` | 5.5rem |

There is no drop shadow. A record is separated from the next by space and, where a boundary helps scanning, a 1px `outline-variant` line. The header and footer use that line so the sticky bar is obviously separate from the page.

## Layout

The task of the page, in order:

1. Who he is, and the email.
2. Proof: six projects.
3. What he can be hired for.
4. Background, facts, self-rated skills, CV.
5. Contact and profiles.

From 900px up, the opening is two columns. The name, the short proof, and the email stay in a column capped near 36rem. The trace takes the remaining width and is centered in a viewport-tall row (`min-height: calc(100dvh - 4.5rem)`). Wider windows lengthen the gap beside the trace, not the paragraph. On a phone the email stays above the trace, so the first screen still has the address, and the diagram continues underneath.

Below that, content sits in `.wrap`: `min(72rem, calc(100% - 2.5rem))`, centered. At 1440px that is a column with real margins, not a stretched paragraph.

Projects become a row at 720px (index + body). The problem / built / result list becomes three columns at 860px, which is the wide-layout behavior that earns its width: a recruiter can compare the three claims without scrolling inside the project. About and contact become two columns at 900px (prose beside skills, email beside profiles).

Services stay a single column with a 40rem measure. Turning four short offers into a card grid would not make them clearer.

Under 800px the header keeps the name and a Menu button. Navigation, the theme switch, and the CV move into a solid full-screen panel. Without JavaScript the links stay in the header, in normal flow, so the page is still usable.

## Components and states

### Skip link

Visually hidden until focused, then pinned to the top left on the primary fill. Target is `#main`, which receives focus.

### Header and wordmark

Sticky, solid surface, 1px bottom border. The wordmark is the name only. Hover underlines the name. Focus uses the global ring.

### Primary navigation

Text links, 44px minimum height. Default: no underline. Hover and active: underline plus a surface-container wash. Current section: 2px underline and `aria-current="true"`. Color does not carry the current state by itself.

### Menu button (narrow viewports)

Label is the word “Menu”, switching to “Close”. `aria-expanded` and `aria-controls="primary-nav"`. Escape closes and returns focus to the button. Tab cycles inside the open header. `inert` is set on `main` and the footer while the menu is open.

### Theme switch

A toggle. Visible text is “Night theme” or “Day theme”, the mode that is on. `aria-pressed` is `true` for night and `false` for day. A visually hidden phrase in the button says what pressing does: “Press to switch to day theme” or “Press to switch to night theme.” There is no separate `aria-label`, so the accessible name is that full sentence. The choice is stored in `localStorage` under `emad-theme` only after a click. First visit follows `prefers-color-scheme`. A short script in `head` sets the attribute before paint.

### Filled button

One per page in the opening: the email address itself, on the primary fill. Hover and pressed swap to `primary-hover` and `primary-pressed`. Text stays `on-primary`. Minimum height 44px. Radius 4px.

### Outline controls

Download CV, theme switch, menu. 1px `outline` border, transparent fill, surface-container on hover, surface-container-high on press.

### Text links

Underlined. Hover adds the same wash as nav. Project sources and live sites say which project in visually hidden text, and that they open in a new tab.

### The request

A `figure` beside the name. Caption: “One request, three stops.” Three buttons are a radiogroup: Interface, API, Database. Each has a paragraph of real work, wired with `aria-describedby`, and the paragraphs stay visible without JavaScript.

The selected hop is underlined and `aria-checked="true"`. A round mark sits on the line beside it. Arrow keys move the selection (one tab stop, the usual radio pattern). “Play the request” walks Interface, then API, then Database, and the mark travels the line. While it plays, the button says “Stop”. A visually hidden `aria-live="polite"` status repeats the hop for assistive tech. It stays empty on load, so the page does not announce itself.

`prefers-reduced-motion: reduce` drops the travel. The same control becomes “Next hop” and moves one stop per click, instantly. The line is already drawn, so the path is readable with no motion at all.

The copy on the stops is not sample code. It names Pixel Hills, RoOby Shop, Secrets, PostgreSQL, WhatsApp, and `account.dat`, which are his.

### Project record

An `article` with an index, an `h3`, a summary, and a `dl` of problem / built / result. Not a card. No shadow, no lift on hover.

### Service list

An ordered list of four offers. The number is the list marker’s absence plus the heading; the order is the list itself. No icons.

### Facts

A `dl`. The email is a real `mailto:` link with a 44px target.

### Skills table

A table with a visible caption: the numbers are self-rated estimates, not a score. Column headers are `scope="col"`. Percents are text, right-aligned. There is no bar and no ring. The figures are the ones already published on this site (they differ from an older README table; the page is the source that was in front of people).

### Profiles

A list of GitHub, LinkedIn, X, and Instagram. Each row is at least 44px.

### Footer

Name, year, link back to the top.

### Disabled

No control on this page is disabled. Do not invent a greyed-out state until a control can actually be unavailable.

## Motion

| Motion | Purpose |
| --- | --- |
| Theme color change, 160ms | Shows that the surface actually changed |
| In-page scroll | Moves to the section the person asked for |
| Menu open | Shows where the navigation went |
| Request mark, 700ms, only after Play | Shows the order of the three stops |

`prefers-reduced-motion: reduce` sets transition and animation duration to nearly zero and uses an instant scroll. There is no entrance animation, no scroll-triggered fade, and no pulsing status dot.

GSAP was removed. It only faded blocks in on scroll, which did not explain anything, and it was a render-blocking third-party script.

## Accessibility

- One `h1`. Section titles are `h2`. Project, service, skill, and profile titles are `h3`.
- Landmarks: header, primary nav, main, footer.
- Skip link.
- Language is `en`.
- The portrait is not in the page. The request line and the moving mark are `aria-hidden`. The hops are buttons.
- Focus ring: 3px `on-surface` outline, offset 3px, with a 3px surface-colored gap so the ring stays visible on both the amber button and the ink button. `:focus-visible` only, except the skip link, which must appear on `:focus`.
- `forced-colors: active` keeps a `CanvasText` border on controls and uses `Highlight` for the focus ring.
- Touch targets for controls and listed links are at least 44px.
- Text sizes and spacing use `rem`. The layout has to hold at 320px width and at 200% text size. See the review notes in the pull request for the measured pass.
- `color-scheme` follows the theme so the browser chrome matches.
- The menu does not depend on color. The open state is a full panel plus the word “Close”.

## Content rules

- Do not invent projects, employers, metrics, or testimonials.
- Skill percents stay labeled as his own estimates.
- The quiz has no hosted demo. The page says so.
- Pixel Hills source is the renamed repository `Omda-Si/Visual-Lab` (the old `hacthon_project` URL redirects). The live demo remains the Netlify URL he published.
- The university site’s live URL is `https://omda-si.github.io/University-website/`. The previous `emadsiddig.github.io` URL returns 404.
- “University of Sudan” is his description of that project, from the GitHub repository, not a claim that he was employed by the university.
- Secrets’ live app is the Render URL from his repository. It can be slow to wake.

## What “AI slop design” is

AI slop, in interface design, is the look models produce when they aim at “polished and modern” without a subject. Anthropic describes the cause as distributional convergence: safe choices dominate the training data, so an unguided page collapses to the same fonts, gradients, and layouts. Their write-up names the result directly: “In frontend design, this creates what users call the ‘AI slop’ aesthetic.” ([Improving frontend design through Skills](https://claude.com/resources/articles/improving-frontend-design-through-skills))

The same piece lists the defaults those pages cluster on:

- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes, particularly purple gradients on white
- Predictable layouts and component patterns
- Cookie-cutter design with no context-specific character

It also notes a second collapse, onto Space Grotesk, once the first list is banned.

A field guide that catalogs the same look in shipped pages is [AI-Slop Website Design: Spot It, Then Do Not Ship It](https://badhtml.com/ai-slop-website-design/). It calls the style “the new Comic Sans of layout” and lists thirty signs. The ones that matter here:

- Purple-to-blue gradients, decorative glows, glassmorphism (`backdrop-filter` on almost everything), gradient text, neon accents on dark backgrounds
- Huge corner radii, stacked borders and shadows, colored side stripes that mean nothing
- Beige editorial styling as a default: warm cream, muted color, ornamental serif type. The article notes the fashion moved on: “The purple-gradient era of 2022 gave way to cream-and-terracotta pages and near-black pages with acid-green accents in 2025 and 2026.”
- Three identical feature cards, a hero made of badge + oversized headline + paragraph + two buttons + a logo strip, giant statistic tiles, rounded icon tiles
- Inter or Geist by default, italic serif headlines on beige, decorative badges above headings
- Copy that could sell anything (“supercharge”, “next-generation”, “seamless”), and motion that does not explain anything (pulsing dots, auto-scrolling logos)

Anthropic’s frontend-design skill says the same thing from the model’s side, and adds the newer tells that show up once people try to dodge the old ones ([skills/frontend-design/SKILL.md](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)):

1. Warm cream (near `#F4F1EA`), a high-contrast serif, and a terracotta accent near `#D97757`
2. Near-black with one acid-green or vermilion accent
3. A broadsheet of hairline rules, zero radius, and newspaper columns
4. The SaaS card kit: identical rounded cards, one radius on everything, the same soft shadow, gradient washes
5. Template chrome: tracked-out all-caps eyebrows, middle-dot meta strings, em-dash labels, monospace micro-labels, an arrow glued to every link

The [Slop Taxonomy](https://github.com/Ad-Astra-Computing/ahd/blob/main/docs/SLOP_TAXONOMY.md) describes why the pages match: an LLM “emits the distributional centre of its training data,” and that centre is a decade of SaaS landing pages. Its web list lines up with the others: Inter as both display and body, purple-to-blue heroes, a centered stack with two CTAs, `rounded-2xl` on everything, three feature cards, a Lucide icon in a rounded square, emoji bullets, glass panels, `#0a0a0a` plus one neon accent, and one soft shadow on every card.

None of these traits proves a machine drew the page. Humans ship them too. A single one can be a real choice. The failure is the bundle, used because it was the default.

### This project does not use those cliches

The trace is allowed to be a diagram of his work. It is not allowed to be that bundle.

- No purple, indigo, or pink gradient. No gradient text. No glass. No glow. No blob. No particle background. No matrix rain. No neon cyan (an earlier version of this site used that dashboard look).
- No Inter, Geist, Roboto, or Space Grotesk.
- No centered hero, no pill pair, no “trusted by” row, no stat tiles. The 2nd-place result sits on Pixel Hills, where it is a fact.
- No rounded card grid, no icon tiles, no emoji, no skill donuts, no floating code-snippet cards, no typing-cursor tagline.
- No cream page, no terracotta, no acid green, no italic editorial headline. Blueprint paper is blue-gray (`#e6eef7`), not cream.
- No all-caps eyebrows, no arrow suffixes on buttons, no monospace label chrome.
- Motion only for the theme change, in-page movement, the menu, and the request mark after someone presses Play.

If a later edit adds a card grid, a gradient, or a portrait back “to make it personal,” it is off this guide. Change a hex only when contrast fails, and write the new value in the tables above.
