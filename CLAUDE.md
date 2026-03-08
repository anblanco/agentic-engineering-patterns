# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**agentic-engineering-patterns** — A slide deck presentation website showcasing agentic engineering patterns. Vanilla JS + HTML + CSS, no build step. Licensed under MIT.

## Architecture

- `index.html` — Single entry point, minimal shell
- `css/styles.css` — All styles (Liquid Glass aesthetic: dark bg, frosted panels, gradient mesh)
- `js/slides.js` — Slide data array (title, bullets, inline SVG, speaker notes)
- `js/main.js` — Slide engine: rendering, keyboard/dot navigation, notes toggle, hash URLs
- `tests/` — Playwright tests for navigation and rendering

## Dev Commands

- `npm install` — Install dependencies
- `npm start` — Serve locally at http://localhost:3000 (uses `npx serve`)
- `npm test` — Run Playwright tests (auto-starts dev server)

## Key Decisions

- Slides are JS data objects, not separate HTML files
- SVG diagrams are inline strings in slide data
- Navigation: arrow keys, clickable dots, hash URLs (`#/1`, `#/2`)
- Speaker notes toggled with Notes button or N key
- Font: Inter (all text) — clean, readable, closest to SF Pro on Google Fonts. No wide or decorative display fonts.
- Visual style: Apple Liquid Glass — frosted glass cards, gradient mesh background, prismatic edges, blue/purple/green accents

## Slide Authoring Guidelines

### Target viewport
- **Primary**: 1440×810 (MacBook Pro 14"/16" with browser chrome), 2x DPR
- All slide content must fit within the viewport without scrolling
- Glass card constraint: `max-height: calc(100vh - 8rem)`

### Layout rules
- Each slide is a JS object in `js/slides.js` with `title`, `bullets`, `svg` (can contain HTML), and `notes`
- The `svg` field holds the visual centerpiece — can be inline SVG or HTML (e.g. images with quotes)
- Bullets are optional — use empty `bullets: []` for narrative/storytelling slides
- Reading order is top-down: quote above image, title above quote

### Image slides
- Hero images: cap height at `~38vh` with `object-fit: contain` to scale gracefully
- Use the `hero-portrait--solo` layout for full-width centered image + quote compositions
- Portrait frames get the glass treatment: rounded corners, prismatic edge shimmer, soft glow

### Slide types (established patterns)
1. **Storytelling opener** (Slide 1): Title + centered quote + hero image, no bullets. Speaker drives the narrative cold.
2. **Concept slide** (Slides 2–3): Title + 2–3 bullets + inline SVG diagram. Standard teaching format.

### Speaker notes
- Every slide must have `notes` — this is the speaker's script/context
- Notes can be long-form quotes, background context, or delivery guidance
- Toggled with the Notes button or N key
- URLs in notes are auto-linkified — write plain URLs (e.g. `https://...`) and they become clickable links
