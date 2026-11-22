# Design guide: Night knit

This is the style guide for Emad Siddig’s portfolio. The page is a static site (`index.html`, `style.css`, `script.js`) published on GitHub Pages. Recruiters and clients should be able to tell who he is, what he has shipped, and how to email him, without learning a dashboard.

## Theme

**Night knit.** The palette is taken from the color photograph in `assets/emad-photo.jpg`, which the previous design had flattened to grayscale.

Sampled from that file, then adjusted only enough to hit WCAG AA:

| Source in the photo | Sample | UI use |
| --- | --- | --- |
| Night sky behind him | `#040a16` | Dark surface `#10141c` (lifted so type can sit on it) |
| Shadow beside the sleeve | `#191c25` | Dark surface container |
| Sage quarter-zip | `#b9c6ae` | Light surface `#e4eadc`, and dark secondary text `#b7c4ad` |
| Knit highlight | `#e4f3dc` | Dark on-surface `#e6eedd` |
| Cream sleeve stripe | `#f6f3d0` | Primary action on night `#f3efd0`; day-theme stripe `#6e5830` so the bar stays visible on sage |

The only ornament is those three sleeve bars, once, above the name. They are decoration. The `h1` is the accessible name. Nothing else uses a stripe, a glow, or a gradient. The mark is not in the header, where it would look like a menu icon.

Day colors are the sweater in daylight (sage field, night-ink text, ink button). Night colors are the photograph’s background (navy field, knit-colored text, cream button). Neither theme is an afterthought.

### Why this, for this person

Emad is a full-stack JavaScript developer in Rwanda, a trainee at The Gym, and the person in that photograph. The work on the page runs from a STEM lab (Pixel Hills, 2nd at Cursor Kigali Hackathon) through an Arabic shop, an auth app, a university site, a quiz, and a C account program. The audience is a recruiter or a client deciding whether to write to him.

The opening gives them the face, the role, two concrete projects, and the email. The work section gives them problem, what he built, and result, in that order. Skills stay self-rated and out of the first screen.

### What this theme refuses

Documented in the last section. In short: no purple gradients, no glass, no Inter, no donut scores, no rounded-card grid, no cream-and-terracotta editorial kit, no acid green on pure black. The sage here is a measured sweater color, not a neon accent. The serif is roman Source Serif 4 for titles only, not an italic display face on a beige page.

## Color roles

Tokens are CSS custom properties on `:root` (night) and `[data-theme="light"]` (day). Names follow Material Design 3 color roles, adapted for a website. They are not an Android component skin.

Roles are defined in [Material color roles](https://m3.material.io/styles/color/roles). This site uses the roles it actually needs.

### Night

| Token | Hex | Job |
| --- | --- | --- |
| `--md-sys-color-surface` | `#10141c` | Page background |
| `--md-sys-color-surface-container` | `#191c25` | Hover wash |
| `--md-sys-color-surface-container-high` | `#22262f` | Pressed wash |
| `--md-sys-color-on-surface` | `#e6eedd` | Body text, focus ring |
| `--md-sys-color-on-surface-variant` | `#b7c4ad` | Secondary text, table caption, stack line |
| `--md-sys-color-primary` | `#f3efd0` | Filled button (the sleeve stripe) |
| `--md-sys-color-on-primary` | `#1a1e18` | Text on that button |
| `--md-sys-color-primary-hover` | `#e5dcaf` | Button hover |
| `--md-sys-color-primary-pressed` | `#d4c98a` | Button press |
| `--md-sys-color-secondary` | `#c5d4bc` | Reserved knit tint |
| `--md-sys-color-on-secondary` | `#1a1e18` | Text on secondary |
| `--md-sys-color-outline` | `#8b9784` | Control borders |
| `--md-sys-color-outline-variant` | `#4a554c` | Hairline dividers between records |
| `--md-sys-color-inverse-surface` | `#e4eadc` | Inverse pair, for selection logic |
| `--md-sys-color-inverse-on-surface` | `#1a1e18` | Text on inverse |
| `--md-sys-color-stripe` | `#f3efd0` | Middle sleeve bar |
| `--md-sys-color-caption-bg` / `fg` | `#10141c` / `#f3efd0` | Photo caption. Fixed, because it sits on the picture |

### Day

| Token | Hex | Job |
| --- | --- | --- |
| `--md-sys-color-surface` | `#e4eadc` | Page background |
| `--md-sys-color-surface-container` | `#f4f3e6` | Hover wash (stripe cream) |
| `--md-sys-color-surface-container-high` | `#f7f6ee` | Pressed wash |
| `--md-sys-color-on-surface` | `#1a1e18` | Body text, focus ring |
| `--md-sys-color-on-surface-variant` | `#3e493c` | Secondary text |
| `--md-sys-color-primary` | `#1a2318` | Filled button |
| `--md-sys-color-on-primary` | `#f4f3e6` | Text on that button |
| `--md-sys-color-primary-hover` | `#2c3830` | Button hover |
| `--md-sys-color-primary-pressed` | `#0e140f` | Button press |
| `--md-sys-color-secondary` | `#243028` | Deep knit |
| `--md-sys-color-on-secondary` | `#f4f3e6` | Text on secondary |
| `--md-sys-color-outline` | `#3e493c` | Control borders |
| `--md-sys-color-outline-variant` | `#b7c2ae` | Dividers |
| `--md-sys-color-stripe` | `#6e5830` | Middle sleeve bar, darkened so it reads on sage |

### Contrast (WCAG AA)

Body text and button labels are above 4.5:1. Large title text is well above 3:1. Checked as relative luminance pairs:

| Pair | Ratio | Use |
| --- | --- | --- |
| `#e6eedd` on `#10141c` | 15.5:1 | Night body |
| `#b7c4ad` on `#10141c` | 10.1:1 | Night secondary |
| `#1a1e18` on `#f3efd0` | 15.9:1 | Night button |
| `#1a1e18` on `#e5dcaf` | above 7:1 | Night button hover |
| `#1a1e18` on `#e4eadc` | 13.8:1 | Day body |
| `#3e493c` on `#e4eadc` | 7.7:1 | Day secondary |
| `#f4f3e6` on `#1a2318` | 14.5:1 | Day button |
| `#f3efd0` on `#10141c` | 15.9:1 | Photo caption |

Selection is `#f3efd0` on `#1a1e18` in both themes. Meaning is never carried by color alone: the current nav item is underlined and exposed with `aria-current`, links in prose are underlined, and “Available for project work” is a sentence.

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

Shape is almost square. Photographs and sections have no radius. Controls use `--md-sys-shape-corner-small: 4px`, enough to mark a button without turning it into a pill.

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

From 900px up, the opening is a two-column plate. The photograph takes the free width and runs at least the height of the viewport under the header (`min-height: calc(100dvh - 4.5rem)`). The copy column stops at 42rem and is vertically centered. Wider windows give the extra space to the photograph, not to the line length.

Below that, content sits in `.wrap`: `min(72rem, calc(100% - 2.5rem))`, centered. At 1440px that is a column with real margins, not a stretched paragraph.

Projects become a row at 720px (index + body). The problem / built / result list becomes three columns at 860px, which is the wide-layout behavior that earns its width: a recruiter can compare the three claims without scrolling inside the project. About and contact become two columns at 900px (prose beside skills, email beside profiles).

Services stay a single column with a 40rem measure. Turning four short offers into a card grid would not make them clearer.

Under 800px the header keeps the name and a Menu button. Navigation, the theme switch, and the CV move into a solid full-screen panel. Without JavaScript the links stay in the header, in normal flow, so the page is still usable.

## Components and states

### Skip link

Visually hidden until focused, then pinned to the top left on the primary fill. Target is `#main`, which receives focus.

### Header and wordmark

Sticky, solid surface, 1px bottom border. The wordmark is the name only. The sleeve mark is not in the header: at that size it reads as a menu icon, and on a phone it would sit next to the real Menu button. Hover underlines the name. Focus uses the global ring.

### Primary navigation

Text links, 44px minimum height. Default: no underline. Hover and active: underline plus a surface-container wash. Current section: 2px underline and `aria-current="true"`. Color does not carry the current state by itself.

### Menu button (narrow viewports)

Label is the word “Menu”, switching to “Close”. `aria-expanded` and `aria-controls="primary-nav"`. Escape closes and returns focus to the button. Tab cycles inside the open header. `inert` is set on `main` and the footer while the menu is open.

### Theme switch

Visible label “Night on” or “Day on”, so the words are the current state, not the destination. The `aria-label` states which theme is on and what the button will do (“Switch to day colors” / “Switch to night colors”). The choice is stored in `localStorage` under `emad-theme` only after a click. First visit follows `prefers-color-scheme`. A short script in `head` sets the attribute before paint.

### Filled button

One per page in the opening: the email address itself, on the primary fill. Hover and pressed swap to `primary-hover` and `primary-pressed`. Text stays `on-primary`. Minimum height 44px. Radius 4px.

### Outline controls

Download CV, theme switch, menu. 1px `outline` border, transparent fill, surface-container on hover, surface-container-high on press.

### Text links

Underlined. Hover adds the same wash as nav. Project sources and live sites say which project in visually hidden text, and that they open in a new tab.

### Intro plate

Photograph, caption bar, sleeve mark, `h1`, two paragraphs, availability sentence, email button, link to the work. The caption bar is a solid night strip even in day theme, because it sits on the photo. Caption contrast is 15.9:1.

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

`prefers-reduced-motion: reduce` sets transition and animation duration to nearly zero and uses an instant scroll. There is no entrance animation, no scroll-triggered fade, and no pulsing status dot.

GSAP was removed. It only faded blocks in on scroll, which did not explain anything, and it was a render-blocking third-party script.

## Accessibility

- One `h1`. Section titles are `h2`. Project, service, skill, and profile titles are `h3`.
- Landmarks: header, primary nav, main, footer.
- Skip link.
- Language is `en`.
- Portrait alt text describes the person and the sweater. The sleeve SVG is `aria-hidden`.
- Focus ring: 3px `on-surface` outline, offset 3px, with a 3px surface-colored gap so the ring stays visible on both the cream button and the ink button. `:focus-visible` only, except the skip link, which must appear on `:focus`.
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

Night knit is allowed to be quiet. It is not allowed to be that bundle.

- No purple, indigo, or pink gradient. No gradient text. No glass. No glow. No blob. No neon cyan (the previous version of this site used that dashboard look).
- No Inter, Geist, Roboto, or Space Grotesk.
- No centered hero, no pill pair, no “trusted by” row, no stat tiles. The old “6+ / 2nd / FS / Gym” grid was four decorations. The 2nd-place result now sits on Pixel Hills, where it is a fact.
- No rounded card grid, no icon tiles, no emoji, no skill donuts.
- No cream page, no terracotta, no acid green, no italic editorial headline. Sage and cream are here because they are in the photograph.
- No all-caps eyebrows, no arrow suffixes on buttons, no monospace label chrome.
- Motion only for theme change, in-page movement, and the menu.

If a later edit adds a card grid, a gradient, or a new font “to make it pop,” it is off this guide. Change the photograph’s colors only when contrast fails, and write the new hex in the tables above.
