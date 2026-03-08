# Agentic Engineering Patterns

A slide deck presentation cataloging design patterns for software engineers working with AI coding agents.

## Who is this for?

This presentation is aimed at **experienced software engineers and engineering leaders** who are already using — or evaluating — AI coding agents (Claude Code, Cursor, GitHub Copilot, etc.). It assumes familiarity with concepts like TDD, APIs, and software architecture.

The goal is to establish a shared vocabulary for the techniques that practitioners are independently converging on — similar to how the Gang of Four cataloged object-oriented design patterns in 1994.

## What it covers

**Foundations**
- Why now — capability, tokenomics, and the agentic loop
- The augmented LLM (retrieval, tools, memory)
- The agentic loop (act → observe → iterate)
- Context window management (the Goldilocks zone)

**Patterns**
| Pattern | Core Idea |
|---------|-----------|
| 📋 Plan Files | Decompose a larger problem into smaller steps |
| 💬 Conversational Q&A | Ask clarifying questions instead of crafting a perfect prompt |
| 🚦 Red/Green TDD | Agent writes tests first, then implements to green |
| 📸 Screenshot-Debug Loop | Visual feedback as a verification signal |
| 📕 Read-The-Manual | Point the agent to official docs — a few examples is enough |
| 🎭 Actor-Critic Validation | A sub-agent validates the primary agent's output |

## Running locally

```bash
npm install
npm start        # http://localhost:3000
npm test         # Playwright tests
```

No build step — vanilla HTML, CSS, and JavaScript served directly.

## Navigation

- **← →** arrow keys to navigate slides
- **N** to toggle speaker notes
- Click the **dots** at the bottom to jump to any slide
- Hash URLs (`#/1`, `#/2`, etc.) for deep linking

## Tech stack

- Vanilla JS + HTML + CSS, no framework
- Slides are JS data objects with inline SVG diagrams
- [Inter](https://fonts.google.com/specimen/Inter) typeface
- Apple Liquid Glass visual style
- [Playwright](https://playwright.dev) for testing

## References

- [Anthropic — Engineering](https://www.anthropic.com/engineering) — Building effective agents, context engineering
- [Simon Willison's Weblog](https://simonwillison.net) — Hands-on AI testing and agentic patterns
- [Antonio Blanco — LinkedIn](https://www.linkedin.com/in/anblanco-at-microsoft/) — Author of this presentation

## License

MIT
