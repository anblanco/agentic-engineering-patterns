/**
 * Slide data for the Agentic Engineering Patterns presentation.
 * Each slide has: title, bullets, svg (inline SVG string), and notes.
 */
const slides = [
  {
    title: '<span class="accent">Agentic Engineering Patterns</span>',
    bullets: [],
    svg: `<svg viewBox="0 0 600 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="300" y="40" text-anchor="middle" fill="rgba(245,245,247,0.4)" font-family="Inter, sans-serif" font-size="14" font-weight="400">Design patterns for building software with coding agents</text>
      <text x="300" y="68" text-anchor="middle" fill="rgba(245,245,247,0.25)" font-family="Inter, sans-serif" font-size="11">Antonio Blanco</text>
    </svg>`,
    notes: 'Title slide. No bullets \u2014 let the title breathe. The subtitle frames the talk: these are design patterns, not tips and tricks. We\u2019re building a shared vocabulary for a new discipline.'
  },
  {
    title: 'What We\u2019ll <span class="accent">Cover</span>',
    bullets: [],
    svg: `<svg viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Section 1: Foundations -->
      <text x="60" y="24" fill="rgba(41,151,255,0.6)" font-family="Inter, sans-serif" font-size="10" font-weight="600" letter-spacing="0.1em">FOUNDATIONS</text>
      <line x1="60" y1="32" x2="540" y2="32" stroke="rgba(245,245,247,0.06)" stroke-width="1"/>
      <text x="80" y="52" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">A Vision of the Future</text>
      <text x="80" y="72" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">Why Now?</text>
      <text x="80" y="92" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">The Augmented LLM</text>
      <text x="80" y="112" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">The Agentic Loop</text>
      <text x="80" y="132" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">The Art of Context Window Management</text>

      <!-- Section 2: Patterns -->
      <text x="60" y="164" fill="rgba(168,85,247,0.6)" font-family="Inter, sans-serif" font-size="10" font-weight="600" letter-spacing="0.1em">PATTERNS</text>
      <line x1="60" y1="172" x2="540" y2="172" stroke="rgba(245,245,247,0.06)" stroke-width="1"/>
      <text x="80" y="192" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">\ud83d\udccb Plan Files</text>
      <text x="240" y="192" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">\ud83d\udcac Conversational Q&amp;A</text>
      <text x="80" y="212" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">\ud83d\udea6 Red/Green TDD</text>
      <text x="240" y="212" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">\ud83d\udcf8 Screenshot-Debug Loop</text>
      <text x="80" y="232" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">\ud83d\udcd5 Read-The-Manual</text>
      <text x="240" y="232" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="11">\ud83c\udfad Actor-Critic Validation</text>
    </svg>`,
    notes: 'Table of contents. Two sections: Foundations covers the conceptual building blocks (agentic loop, context windows), then Patterns covers the specific techniques practitioners are converging on. This gives the audience a roadmap so they know where we\u2019re headed.'
  },
  {
    title: 'A Vision of the <span class="accent">Future</span>',
    bullets: [],
    svg: `<div class="hero-portrait hero-portrait--solo">
      <blockquote class="hero-quote hero-quote--centered">
        \u201CIt is much easier for most people to write an English statement than it is to use symbols.\u201D
        <cite>\u2014 Grace Hopper</cite>
      </blockquote>
      <div class="portrait-frame portrait-frame--hero">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg" alt="Grace Hopper working with the UNIVAC computer" class="portrait-img" />
      </div>
    </div>`,
    notes: '\u201CI used to be a mathematics professor. At that time I found there were a certain number of students who could not learn mathematics. I then was charged with the job of making it easy for businessmen to use our computers. I found it was not a question of whether they could learn mathematics or not, but whether they would. [\u2026] They said, \u2018Throw those symbols out \u2014 I do not know what they mean, I have not time to learn symbols.\u2019 I suggest a reply to those who would like data processing people to use mathematical symbols that they make the first attempt to teach those symbols to vice-presidents or a colonel or admiral. I assure you that I tried it.\u201D \u2014 Grace Hopper (FLOW-MATIC, 1955)'
  },
  {
    title: 'Why <span class="accent">Now</span>?',
    bullets: [
      'Frontier models have reached a point of <strong>unreasonable effectiveness</strong> at many tasks, including computer programming',
      'The <strong>tokenomics</strong> hit an inflection point \u2014 these capabilities are increasingly accessible (Claude Code starts at $20/month)',
      'The <strong>agentic loop</strong> lets these tools pathfind their way towards a goal \u2014 turning a single prompt into dozens of autonomous steps'
    ],
    svg: `<svg viewBox="0 0 600 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Three converging arrows -->
      <defs>
        <linearGradient id="whyGrad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#34d399" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#34d399" stop-opacity="0.15"/>
        </linearGradient>
        <linearGradient id="whyGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#2997ff" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#2997ff" stop-opacity="0.15"/>
        </linearGradient>
        <linearGradient id="whyGrad3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#a855f7" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#a855f7" stop-opacity="0.15"/>
        </linearGradient>
      </defs>

      <!-- Row 1: Capability -->
      <rect x="60" y="10" width="200" height="28" rx="14" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.3)" stroke-width="1"/>
      <text x="100" y="29" fill="#34d399" font-family="Inter, sans-serif" font-size="10" font-weight="600">Capability</text>
      <line x1="260" y1="24" x2="370" y2="64" stroke="url(#whyGrad1)" stroke-width="1.5"/>
      <polygon points="368,60 374,64 368,68" fill="#34d399" opacity="0.5"/>

      <!-- Row 2: Tokenomics -->
      <rect x="60" y="50" width="200" height="28" rx="14" fill="rgba(41,151,255,0.08)" stroke="rgba(41,151,255,0.3)" stroke-width="1"/>
      <text x="100" y="69" fill="#2997ff" font-family="Inter, sans-serif" font-size="10" font-weight="600">Tokenomics</text>
      <line x1="260" y1="64" x2="370" y2="64" stroke="url(#whyGrad2)" stroke-width="1.5"/>
      <polygon points="368,60 374,64 368,68" fill="#2997ff" opacity="0.5"/>

      <!-- Row 3: Agentic Loop -->
      <rect x="60" y="90" width="200" height="28" rx="14" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.3)" stroke-width="1"/>
      <text x="100" y="109" fill="#a855f7" font-family="Inter, sans-serif" font-size="10" font-weight="600">Agentic Loop</text>
      <line x1="260" y1="104" x2="370" y2="64" stroke="url(#whyGrad3)" stroke-width="1.5"/>
      <polygon points="368,60 374,64 368,68" fill="#a855f7" opacity="0.5"/>

      <!-- Convergence point -->
      <rect x="374" y="44" width="160" height="40" rx="20" fill="rgba(245,245,247,0.04)" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <text x="454" y="69" text-anchor="middle" fill="rgba(245,245,247,0.8)" font-family="Inter, sans-serif" font-size="11" font-weight="600">Agentic Engineering</text>
    </svg>`,
    notes: 'This is the "why now" framing \u2014 three forces converging simultaneously.\n\n1. CAPABILITY: Starting with Claude Opus 4.5 (November 2025) and equivalent frontier models from OpenAI and Google, people started having their "Opus Moment" \u2014 the first time a model felt unreasonably effective at programming tasks. Reading codebases, reasoning about architecture, writing tests, debugging errors. Not perfect, but good enough that many practitioners changed how they worked.\n\n2. TOKENOMICS: The price-per-million-tokens has dropped dramatically. Claude Code starts at $20/month. What was research-lab-only capability 18 months ago is now available to individual developers. We\u2019re seeing more and more success stories in the field of day-to-day software engineering.\n\n3. AGENTIC LOOP: The key architectural insight \u2014 you don\u2019t need a model that gets everything right in one shot. The agentic loop lets the model take a step, check the result, and course-correct. This transforms "pretty good" single-turn capability into "remarkably effective" multi-turn execution. A model that isn\u2019t perfect on any single step can still complete complex tasks by iterating.\n\nThese three forces are converging at the same time \u2014 that\u2019s what makes this moment distinct.'
  },
  {
    title: 'Fundamentals: <span class="accent">The Augmented LLM</span>',
    bullets: [],
    steps: 3,
    svg: `<svg viewBox="0 0 600 310" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="augFlowGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#2997ff" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#2997ff" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="augLlmGrad" x1="220" y1="40" x2="380" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="rgba(41,151,255,0.15)"/>
          <stop offset="100%" stop-color="rgba(168,85,247,0.08)"/>
        </linearGradient>
        <linearGradient id="augLlmBorder" x1="220" y1="40" x2="380" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#2997ff" stop-opacity="0.5"/>
          <stop offset="50%" stop-color="#a855f7" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#2997ff" stop-opacity="0.5"/>
        </linearGradient>
      </defs>

      <!-- Base flow: In -> LLM -> Out -->
      <circle cx="100" cy="75" r="28" stroke="#2997ff" stroke-opacity="0.4" stroke-width="1.5" fill="rgba(41,151,255,0.06)"/>
      <text x="100" y="80" text-anchor="middle" fill="#2997ff" font-family="Inter, sans-serif" font-size="13" font-weight="600">In</text>

      <line x1="131" y1="75" x2="218" y2="75" stroke="url(#augFlowGrad)" stroke-width="1.5"/>
      <polygon points="218,71 226,75 218,79" fill="#2997ff" opacity="0.6"/>

      <rect x="230" y="47" width="140" height="56" rx="14" fill="url(#augLlmGrad)" stroke="url(#augLlmBorder)" stroke-width="1.5"/>
      <text x="300" y="81" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="16" font-weight="600">LLM</text>

      <line x1="374" y1="75" x2="468" y2="75" stroke="url(#augFlowGrad)" stroke-width="1.5"/>
      <polygon points="468,71 476,75 468,79" fill="#2997ff" opacity="0.6"/>

      <circle cx="500" cy="75" r="28" stroke="#2997ff" stroke-opacity="0.4" stroke-width="1.5" fill="rgba(41,151,255,0.06)"/>
      <text x="500" y="80" text-anchor="middle" fill="#2997ff" font-family="Inter, sans-serif" font-size="13" font-weight="600">Out</text>

      <!-- Step 1: Retrieval (left) — bidirectional dashed arrow + horizontal label -->
      <g class="step-1">
        <!-- Down arrow from LLM -->
        <line x1="240" y1="108" x2="120" y2="215" stroke="#2997ff" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="5 4"/>
        <polygon points="117,211 119,220 125,213" fill="#2997ff" opacity="0.4"/>
        <!-- Up arrow to LLM -->
        <polygon points="237,112 241,103 245,112" fill="#2997ff" opacity="0.4"/>
        <!-- Label along the line -->
        <text x="155" y="152" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Query /</text>
        <text x="155" y="164" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Results</text>
        <!-- Box -->
        <rect x="55" y="225" width="130" height="48" rx="10" stroke="#2997ff" stroke-opacity="0.4" stroke-width="1" fill="rgba(41,151,255,0.05)"/>
        <text x="120" y="254" text-anchor="middle" fill="#2997ff" font-family="Inter, sans-serif" font-size="13" font-weight="500">Retrieval</text>
      </g>

      <!-- Step 2: Tools (center) — bidirectional dashed arrow + horizontal label -->
      <g class="step-2">
        <line x1="300" y1="108" x2="300" y2="220" stroke="#a855f7" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="5 4"/>
        <polygon points="296,217 300,225 304,217" fill="#a855f7" opacity="0.4"/>
        <polygon points="296,112 300,103 304,112" fill="#a855f7" opacity="0.4"/>
        <text x="330" y="158" text-anchor="start" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Call /</text>
        <text x="330" y="170" text-anchor="start" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Response</text>
        <rect x="235" y="225" width="130" height="48" rx="10" stroke="#a855f7" stroke-opacity="0.4" stroke-width="1" fill="rgba(168,85,247,0.05)"/>
        <text x="300" y="254" text-anchor="middle" fill="#a855f7" font-family="Inter, sans-serif" font-size="13" font-weight="500">Tools</text>
      </g>

      <!-- Step 3: Memory (right) — bidirectional dashed arrow + horizontal label -->
      <g class="step-3">
        <line x1="360" y1="108" x2="480" y2="215" stroke="#34d399" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="5 4"/>
        <polygon points="478,211 482,220 485,211" fill="#34d399" opacity="0.4"/>
        <polygon points="355,112 359,103 363,112" fill="#34d399" opacity="0.4"/>
        <text x="445" y="152" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Read /</text>
        <text x="445" y="164" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Write</text>
        <rect x="415" y="225" width="130" height="48" rx="10" stroke="#34d399" stroke-opacity="0.4" stroke-width="1" fill="rgba(52,211,153,0.05)"/>
        <text x="480" y="254" text-anchor="middle" fill="#34d399" font-family="Inter, sans-serif" font-size="13" font-weight="500">Memory</text>
      </g>
    </svg>`,
    notes: 'The augmented LLM is the foundational building block of agentic systems. On its own, an LLM takes text in and produces text out. But when you augment it with retrieval (RAG, search), tools (APIs, code execution), and memory (conversation history, knowledge bases), it becomes more capable. Each augmentation expands what the LLM can do without changing the model itself. This diagram is the atom from which all agentic patterns are composed.\n\nSource: Anthropic, "Building Effective Agents" — https://www.anthropic.com/engineering/building-effective-agents'
  },
  {
    title: 'Fundamentals: <span class="accent">The Agentic Loop</span>',
    bullets: [],
    svg: `<svg viewBox="0 0 600 325" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="loopLlmGrad" x1="230" y1="55" x2="370" y2="125" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="rgba(41,151,255,0.15)"/>
          <stop offset="100%" stop-color="rgba(168,85,247,0.08)"/>
        </linearGradient>
        <linearGradient id="loopLlmBorder" x1="230" y1="55" x2="370" y2="125" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#2997ff" stop-opacity="0.5"/>
          <stop offset="50%" stop-color="#a855f7" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#2997ff" stop-opacity="0.5"/>
        </linearGradient>
      </defs>

      <!-- Human (left) -->
      <rect x="30" y="105" width="100" height="44" rx="22" stroke="#34d399" stroke-opacity="0.4" stroke-width="1" fill="rgba(52,211,153,0.06)"/>
      <text x="80" y="132" text-anchor="middle" fill="#34d399" font-family="Inter, sans-serif" font-size="12" font-weight="500">Human</text>

      <!-- Dashed bidirectional arrow: Human <-> Augmented LLM -->
      <line x1="134" y1="127" x2="218" y2="127" stroke="rgba(245,245,247,0.25)" stroke-width="1" stroke-dasharray="5 4"/>
      <polygon points="215,123 223,127 215,131" fill="rgba(245,245,247,0.3)"/>
      <polygon points="137,123 129,127 137,131" fill="rgba(245,245,247,0.3)"/>

      <!-- Augmented LLM (center) -->
      <rect x="228" y="100" width="144" height="54" rx="14" fill="url(#loopLlmGrad)" stroke="url(#loopLlmBorder)" stroke-width="1.5"/>
      <text x="300" y="122" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="13" font-weight="600">Augmented</text>
      <text x="300" y="140" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="13" font-weight="600">LLM</text>

      <!-- Action/Feedback loop (right side) -->
      <!-- Action arrow: LLM -> Environment (curving right and down) -->
      <path d="M 372 112 Q 420 80 468 112" stroke="rgba(245,245,247,0.3)" stroke-width="1" fill="none"/>
      <polygon points="465,108 472,114 464,116" fill="rgba(245,245,247,0.35)"/>
      <text x="420" y="78" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Action</text>

      <!-- Feedback arrow: Environment -> LLM (curving right and up) -->
      <path d="M 468 142 Q 420 174 372 142" stroke="rgba(245,245,247,0.3)" stroke-width="1" fill="none"/>
      <polygon points="375,146 368,140 376,138" fill="rgba(245,245,247,0.35)"/>
      <text x="420" y="184" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Feedback</text>

      <!-- Environment (right) -->
      <rect x="468" y="105" width="110" height="44" rx="22" stroke="#2997ff" stroke-opacity="0.4" stroke-width="1" fill="rgba(41,151,255,0.06)"/>
      <text x="523" y="132" text-anchor="middle" fill="#2997ff" font-family="Inter, sans-serif" font-size="12" font-weight="500">Environment</text>

      <!-- Stop (below LLM) -->
      <line x1="300" y1="158" x2="300" y2="210" stroke="rgba(245,245,247,0.2)" stroke-width="1" stroke-dasharray="4 4"/>
      <polygon points="296,207 300,215 304,207" fill="rgba(245,245,247,0.25)"/>
      <rect x="258" y="220" width="84" height="38" rx="8" stroke="rgba(245,245,247,0.15)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <text x="300" y="244" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="12" font-weight="500">Stop</text>

      <!-- Pass/Fail feedback pipeline -->
      <g transform="translate(72, 270)">
        <!-- Compiles: pass -->
        <rect x="0" y="0" width="105" height="30" rx="15" stroke="#34d399" stroke-width="1.2" fill="rgba(52,211,153,0.08)"/>
        <text x="24" y="20" fill="#34d399" font-family="Inter, sans-serif" font-size="13" font-weight="600">✓</text>
        <text x="38" y="19" fill="#34d399" font-family="Inter, sans-serif" font-size="11" font-weight="500">Compiles</text>
        <!-- Arrow 1 -->
        <text x="113" y="20" fill="rgba(245,245,247,0.25)" font-family="Inter, sans-serif" font-size="12">▸</text>
        <!-- Lint: pass -->
        <rect x="128" y="0" width="85" height="30" rx="15" stroke="#34d399" stroke-width="1.2" fill="rgba(52,211,153,0.08)"/>
        <text x="148" y="20" fill="#34d399" font-family="Inter, sans-serif" font-size="13" font-weight="600">✓</text>
        <text x="162" y="19" fill="#34d399" font-family="Inter, sans-serif" font-size="11" font-weight="500">Lint</text>
        <!-- Arrow 2 -->
        <text x="221" y="20" fill="rgba(245,245,247,0.25)" font-family="Inter, sans-serif" font-size="12">▸</text>
        <!-- Tests: fail -->
        <rect x="236" y="0" width="90" height="30" rx="15" stroke="#ef4444" stroke-width="1.2" fill="rgba(239,68,68,0.08)"/>
        <text x="256" y="20" fill="#ef4444" font-family="Inter, sans-serif" font-size="13" font-weight="600">✗</text>
        <text x="270" y="19" fill="#ef4444" font-family="Inter, sans-serif" font-size="11" font-weight="500">Tests</text>
        <!-- Arrow 3 -->
        <text x="334" y="20" fill="rgba(245,245,247,0.15)" font-family="Inter, sans-serif" font-size="12">▸</text>
        <!-- Human: pending -->
        <rect x="349" y="0" width="105" height="30" rx="15" stroke="rgba(245,245,247,0.2)" stroke-width="1.2" fill="rgba(255,255,255,0.03)"/>
        <text x="371" y="20" fill="rgba(245,245,247,0.3)" font-family="Inter, sans-serif" font-size="13" font-weight="600">?</text>
        <text x="385" y="19" fill="rgba(245,245,247,0.3)" font-family="Inter, sans-serif" font-size="11" font-weight="500">Human</text>
      </g>
    </svg>`,
    notes: 'The agentic loop is the simplest and most powerful pattern: an augmented LLM that acts, observes feedback from its environment, and iterates. The key insight is that agents can self-correct. Code compiles or it does not. Tests pass or they do not. When we build robust feedback loops, the agent can pathfind its way toward a working solution without getting every step right on the first try.\n\nHuman feedback is part of this loop too. "I\'ll know it when I see it" is a perfectly valid way to steer an agent. This shifts us beyond "the perfect prompt" toward iterative development \u2014 you don\'t need to specify everything up front, you just need enough to start the loop.\n\nSource: Anthropic, "Building Effective Agents" \u2014 https://www.anthropic.com/engineering/building-effective-agents'
  },
  {
    title: 'Fundamentals: The <span class="accent">Art of Context Window Management</span>',
    bullets: [
      'LLMs are stateless: they don\u2019t \u201cremember\u201d anything \u2014 they only have what\u2019s in the window right now',
      'Context is a finite resource \u2014 every token competes for the model\u2019s attention budget',
      'Bigger isn\u2019t always better \u2014 excess context causes \u201ccontext rot,\u201d often described as \u201cforgetfulness\u201d or \u201cnot actually finishing the task\u201d'
    ],
    svg: `<svg viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cwPerfGrad" x1="80" y1="150" x2="520" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#2997ff" stop-opacity="0.5"/>
          <stop offset="45%" stop-color="#34d399" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0.5"/>
        </linearGradient>
        <linearGradient id="cwFillGrad" x1="80" y1="150" x2="520" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#2997ff" stop-opacity="0.08"/>
          <stop offset="45%" stop-color="#34d399" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0.04"/>
        </linearGradient>
      </defs>

      <!-- Axes -->
      <line x1="80" y1="18" x2="80" y2="160" stroke="rgba(245,245,247,0.15)" stroke-width="1"/>
      <line x1="80" y1="160" x2="520" y2="160" stroke="rgba(245,245,247,0.15)" stroke-width="1"/>

      <!-- Y-axis label -->
      <text x="28" y="90" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="10" font-weight="500" transform="rotate(-90, 28, 90)">Agent Performance</text>

      <!-- X-axis label -->
      <text x="300" y="175" text-anchor="middle" fill="rgba(245,245,247,0.3)" font-family="Inter, sans-serif" font-size="9" font-weight="500">Context Window Usage \u2192</text>

      <!-- Performance curve (rises, peaks ~45%, then declines) -->
      <path d="M 80 148 C 130 140, 170 55, 270 35 C 340 22, 370 30, 400 55 C 440 90, 480 130, 520 148" stroke="url(#cwPerfGrad)" stroke-width="2" fill="none"/>
      <!-- Area fill under curve -->
      <path d="M 80 148 C 130 140, 170 55, 270 35 C 340 22, 370 30, 400 55 C 440 90, 480 130, 520 148 L 520 160 L 80 160 Z" fill="url(#cwFillGrad)"/>

      <!-- Sweet-spot zone (dashed vertical lines) -->
      <line x1="210" y1="18" x2="210" y2="160" stroke="rgba(52,211,153,0.25)" stroke-width="1" stroke-dasharray="4 4"/>
      <line x1="350" y1="18" x2="350" y2="160" stroke="rgba(52,211,153,0.25)" stroke-width="1" stroke-dasharray="4 4"/>

      <!-- Zone labels (inside chart, just above x-axis) -->
      <text x="145" y="152" text-anchor="middle" fill="rgba(41,151,255,0.4)" font-family="Inter, sans-serif" font-size="9" font-weight="500">Too little</text>
      <text x="280" y="152" text-anchor="middle" fill="rgba(52,211,153,0.6)" font-family="Inter, sans-serif" font-size="9" font-weight="600">Sweet spot</text>
      <text x="435" y="152" text-anchor="middle" fill="rgba(239,68,68,0.4)" font-family="Inter, sans-serif" font-size="9" font-weight="500">Context rot</text>

      <!-- Peak annotation -->
      <circle cx="270" cy="35" r="3" fill="#34d399" opacity="0.6"/>
      <line x1="270" y1="24" x2="270" y2="10" stroke="rgba(52,211,153,0.3)" stroke-width="1"/>
      <text x="270" y="7" text-anchor="middle" fill="#34d399" font-family="Inter, sans-serif" font-size="9" font-weight="500" opacity="0.8">Goldilocks zone</text>

    </svg>`,
    notes: 'This slide reframes the context window from a technical spec into the central design constraint of agentic engineering. Three key ideas to land:\n\n1. FINITE RESOURCE: Anthropic describes context as having an "attention budget" that depletes with each token. The transformer architecture creates n\u00b2 pairwise relationships between tokens \u2014 as context grows, models struggle to maintain these relationships. The guiding principle is: "find the smallest set of high-signal tokens that maximize the likelihood of some desired outcome."\n\n2. STATELESS: LLMs have zero memory between turns. What we experience as "forgetfulness" in long sessions is really context rot \u2014 the model\u2019s reduced precision for information retrieval as the window fills. When someone says "the AI forgot what I told it" or "it didn\u2019t finish the task," the real issue is usually that we\u2019ve overloaded the context window.\n\n3. GOLDILOCKS PRINCIPLE: Larger context windows don\u2019t guarantee better performance. Models show "reduced precision for information retrieval and long-range reasoning compared to their performance on shorter contexts." The sweet spot varies by task, but the general rule is: include only what the model needs for the current step, nothing more. Claude Code exemplifies this \u2014 it loads CLAUDE.md upfront but uses grep/glob for just-in-time retrieval rather than pre-loading everything.\n\nThe practical takeaway: "Context must be treated as a finite resource with diminishing marginal returns." Do the simplest thing that works.\n\nSource: Anthropic, "Effective Context Engineering for AI Agents" \u2014 https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents'
  },
  {
    title: '<span class="accent">Agentic Engineering Patterns</span>',
    bullets: [
      'From case studies across domains, an emerging set of patterns are seeing widespread, repeated success',
      'Like the Gang of Four\u2019s Design Patterns \u2014 not invented, but observed in the wild and documented',
      'The field lacks a shared language \u2014 naming these patterns lets teams communicate instead of reinventing in isolation'
    ],
    svg: `<svg viewBox="0 0 600 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Table header -->
      <rect x="40" y="8" width="520" height="26" rx="6" fill="rgba(41,151,255,0.08)"/>
      <text x="80" y="26" fill="#2997ff" font-family="Inter, sans-serif" font-size="10" font-weight="600">Pattern</text>
      <text x="280" y="26" fill="#2997ff" font-family="Inter, sans-serif" font-size="10" font-weight="600">Core Idea</text>

      <!-- Divider -->
      <line x1="40" y1="38" x2="560" y2="38" stroke="rgba(245,245,247,0.08)" stroke-width="1"/>

      <!-- Row 1: Plan Files -->
      <text x="56" y="59" font-size="14">\ud83d\udccb</text>
      <text x="80" y="58" fill="rgba(245,245,247,0.85)" font-family="Inter, sans-serif" font-size="11" font-weight="500">Plan Files</text>
      <text x="280" y="58" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10">Decompose a larger problem into smaller steps</text>
      <line x1="40" y1="68" x2="560" y2="68" stroke="rgba(245,245,247,0.05)" stroke-width="1"/>

      <!-- Row 2: Conversational Q&A -->
      <text x="56" y="89" font-size="14">\ud83d\udcac</text>
      <text x="80" y="88" fill="rgba(245,245,247,0.85)" font-family="Inter, sans-serif" font-size="11" font-weight="500">Conversational Q&amp;A</text>
      <text x="280" y="88" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10">Ask clarifying questions instead of crafting a perfect prompt</text>
      <line x1="40" y1="98" x2="560" y2="98" stroke="rgba(245,245,247,0.05)" stroke-width="1"/>

      <!-- Row 3: Red/Green TDD -->
      <text x="56" y="119" font-size="14">\ud83d\udea6</text>
      <text x="80" y="118" fill="rgba(245,245,247,0.85)" font-family="Inter, sans-serif" font-size="11" font-weight="500">Red/Green TDD</text>
      <text x="280" y="118" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10">Agent writes tests first, then implements to green</text>
      <line x1="40" y1="128" x2="560" y2="128" stroke="rgba(245,245,247,0.05)" stroke-width="1"/>

      <!-- Row 4: Screenshot-Debug Loop -->
      <text x="56" y="149" font-size="14">\ud83d\udcf8</text>
      <text x="80" y="148" fill="rgba(245,245,247,0.85)" font-family="Inter, sans-serif" font-size="11" font-weight="500">Screenshot-Debug Loop</text>
      <text x="280" y="148" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10">Visual feedback as a verification signal</text>
      <line x1="40" y1="158" x2="560" y2="158" stroke="rgba(245,245,247,0.05)" stroke-width="1"/>

      <!-- Row 5: Read-The-Manual -->
      <text x="56" y="179" font-size="14">\ud83d\udcd5</text>
      <text x="80" y="178" fill="rgba(245,245,247,0.85)" font-family="Inter, sans-serif" font-size="11" font-weight="500">Read-The-Manual</text>
      <text x="280" y="178" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10">Point the agent to official docs \u2014 a few examples is enough</text>
      <line x1="40" y1="188" x2="560" y2="188" stroke="rgba(245,245,247,0.05)" stroke-width="1"/>

      <!-- Row 6: Actor-Critic SubAgent Validation -->
      <text x="56" y="209" font-size="14">\ud83c\udfad</text>
      <text x="80" y="208" fill="rgba(245,245,247,0.85)" font-family="Inter, sans-serif" font-size="11" font-weight="500">Actor-Critic Validation</text>
      <text x="280" y="208" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10">A sub-agent validates the primary agent\u2019s output</text>
    </svg>`,
    notes: 'This slide is the pivot point of the talk. We\u2019ve covered the fundamentals (agentic loop, context windows) \u2014 now we zoom out and name the discipline.\n\nThe framing comes directly from the Gang of Four\u2019s "Design Patterns: Elements of Reusable Object-Oriented Software" (1994). In the introduction, the authors are explicit: they did not invent nor discover these patterns. They observed recurring solutions in real-world software, gave them names, and cataloged them so practitioners could share a common vocabulary. We\u2019re doing the same thing here for agentic engineering.\n\nThe key observation: from case studies across multiple domains \u2014 frontend, backend, data pipelines, infrastructure \u2014 we are observing emerging patterns. Teams working with coding agents are independently converging on the same techniques.\n\nThe problem right now is language. Is it "vibe coding" or "agentic engineering"? Is output "AI-generated" or "AI-assisted"? These fuzzy definitions can cause confusion about whether results come from machine capability or human expertise. Naming patterns gives teams a shared vocabulary to discuss tradeoffs precisely.\n\nThe table previews what\u2019s coming: Plan Files (externalizing intent), the Screenshot-Debug Loop (visual verification), Actor-Critic validation, Read-The-Manual constraints, and sub-agent architectures. Each gets its own deep-dive slide.\n\nSource: Simon Willison, "Agentic Engineering Patterns" \u2014 https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/'
  },
  {
    title: '\ud83d\udccb <span class="accent">Plan Files</span>',
    bullets: [
      'Many products implement this as \u201cplan mode\u201d \u2014 but you don\u2019t need a plan mode to use the pattern',
      'Decompose a larger problem into smaller steps, then serialize the plan to a file \u2014 typically Markdown',
      'Pro-tip: embed verification criteria in each step so the agent can check its own work'
    ],
    svg: `<svg viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Plan file representation -->
      <rect x="60" y="10" width="240" height="160" rx="8" stroke="rgba(41,151,255,0.3)" stroke-width="1" fill="rgba(41,151,255,0.04)"/>
      <text x="80" y="30" fill="rgba(41,151,255,0.6)" font-family="Inter, sans-serif" font-size="9" font-weight="600" letter-spacing="0.1em">PLAN.md</text>
      <line x1="60" y1="38" x2="300" y2="38" stroke="rgba(41,151,255,0.15)" stroke-width="1"/>

      <!-- Step 1: done -->
      <text x="80" y="58" fill="#34d399" font-family="Inter, sans-serif" font-size="12">\u2611</text>
      <text x="98" y="58" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" text-decoration="line-through">Create data model</text>
      <text x="80" y="72" fill="rgba(52,211,153,0.4)" font-family="Inter, sans-serif" font-size="8">\u2714 types compile, tests pass</text>

      <!-- Step 2: done -->
      <text x="80" y="94" fill="#34d399" font-family="Inter, sans-serif" font-size="12">\u2611</text>
      <text x="98" y="94" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="10" text-decoration="line-through">Build API endpoints</text>
      <text x="80" y="108" fill="rgba(52,211,153,0.4)" font-family="Inter, sans-serif" font-size="8">\u2714 curl returns 200, schema valid</text>

      <!-- Step 3: in progress -->
      <text x="80" y="130" fill="#2997ff" font-family="Inter, sans-serif" font-size="12">\u2610</text>
      <text x="98" y="130" fill="rgba(245,245,247,0.85)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Add auth middleware</text>
      <text x="80" y="144" fill="rgba(41,151,255,0.4)" font-family="Inter, sans-serif" font-size="8">? unauthenticated returns 401</text>

      <!-- Step 4: pending -->
      <text x="80" y="162" fill="rgba(245,245,247,0.2)" font-family="Inter, sans-serif" font-size="12">\u2610</text>
      <text x="98" y="162" fill="rgba(245,245,247,0.3)" font-family="Inter, sans-serif" font-size="10">Write integration tests</text>

      <!-- Arrow from plan to agent loop -->
      <line x1="310" y1="90" x2="360" y2="90" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="358,87 366,90 358,93" fill="rgba(245,245,247,0.25)"/>

      <!-- Agent loop (compact) -->
      <circle cx="440" cy="60" r="30" stroke="rgba(168,85,247,0.3)" stroke-width="1" fill="rgba(168,85,247,0.04)"/>
      <text x="440" y="57" text-anchor="middle" fill="rgba(245,245,247,0.7)" font-family="Inter, sans-serif" font-size="9" font-weight="500">Agent</text>
      <text x="440" y="69" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="8">step 3</text>

      <!-- Feedback arrow back -->
      <path d="M 410 60 Q 360 40 310 58" stroke="rgba(52,211,153,0.3)" stroke-width="1" fill="none" stroke-dasharray="4 3"/>
      <polygon points="313,55 307,58 313,61" fill="rgba(52,211,153,0.3)"/>
      <text x="355" y="36" text-anchor="middle" fill="rgba(52,211,153,0.35)" font-family="Inter, sans-serif" font-size="8">\u2714 / \u2718</text>

      <!-- Self-correct label -->
      <path d="M 470 60 Q 500 30 470 10 Q 440 -10 420 20" stroke="rgba(168,85,247,0.25)" stroke-width="1" fill="none" stroke-dasharray="4 3"/>
      <polygon points="422,17 417,22 425,22" fill="rgba(168,85,247,0.25)"/>
      <text x="510" y="35" fill="rgba(245,245,247,0.25)" font-family="Inter, sans-serif" font-size="8">self-correct</text>

      <!-- Key insight callout -->
      <rect x="380" y="110" width="180" height="44" rx="8" stroke="rgba(245,245,247,0.1)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <text x="470" y="130" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="9" font-weight="500">Agents perform better with</text>
      <text x="470" y="144" text-anchor="middle" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="9" font-weight="500">small discrete steps + checks</text>
    </svg>`,
    notes: 'Plan Files are one of the most common patterns in the catalog \u2014 many teams working with coding agents converge on some version of this independently.\n\nThe core insight: LLMs have a finite context window and are much more likely to accomplish tasks when broken down into small discrete steps. A plan file is simply that breakdown serialized in Markdown \u2014 a checklist the agent works through one step at a time.\n\nThe critical enhancement is embedding verification criteria directly in each step. Instead of "Build the API," you write "Build the API \u2014 verify: curl returns 200, response matches schema." This gives the agent a way to check its own work before moving on. You\u2019re essentially building quality assurance into the workflow rather than bolting it on after.\n\nMost tools have some version of this built in \u2014 Claude Code\u2019s Plan mode, Cursor\u2019s plan/act separation, Copilot\u2019s task breakdown. But the pattern is tool-agnostic: you can just write a Markdown checklist and paste it into any agent.\n\nContraindications: "Not every task requires a plan file. For small tasks or ad-hoc discovery, sometimes Conversational Q&A can be just as efficient."\n\nSource: Antonio Blanco, "Agentic Engineering Patterns: Plan Files" \u2014 https://www.linkedin.com/posts/anblanco-at-microsoft_agentic-engineering-patterns-plan-files-activity-7435476534225825792-ioMS'
  },
  {
    title: '\ud83d\udcac <span class="accent">Conversational Q&A</span>',
    bullets: [
      'Instead of crafting a perfect prompt, ask the agent to ask you clarifying questions as needed',
      'Works both ways \u2014 elicit precise requirements (\u201cI\u2019ll know it when I see it\u201d) or explore a topic (\u201ccan you explain how that works?\u201d)',
      'Often used during research/exploration \u2014 acquire context from outside the repo, then synthesize it into a plan file'
    ],
    svg: `<svg viewBox="0 0 600 176" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Row 1: Human -->
      <rect x="80" y="6" width="200" height="26" rx="13" stroke="rgba(41,151,255,0.3)" stroke-width="1" fill="rgba(41,151,255,0.06)"/>
      <text x="96" y="23" fill="rgba(41,151,255,0.7)" font-family="Inter, sans-serif" font-size="9" font-weight="600">YOU</text>
      <text x="124" y="23" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">"Add auth to the API"</text>

      <!-- Row 2: Agent clarifies -->
      <rect x="160" y="38" width="220" height="26" rx="13" stroke="rgba(168,85,247,0.3)" stroke-width="1" fill="rgba(168,85,247,0.06)"/>
      <text x="176" y="55" fill="rgba(168,85,247,0.7)" font-family="Inter, sans-serif" font-size="9" font-weight="600">AGENT</text>
      <text x="214" y="55" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">"JWT or session-based?"</text>

      <!-- Row 3: Human refines -->
      <rect x="80" y="70" width="310" height="26" rx="13" stroke="rgba(41,151,255,0.3)" stroke-width="1" fill="rgba(41,151,255,0.06)"/>
      <text x="96" y="87" fill="rgba(41,151,255,0.7)" font-family="Inter, sans-serif" font-size="9" font-weight="600">YOU</text>
      <text x="124" y="87" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">"JWT \u2014 can you explain the tradeoffs?"</text>

      <!-- Row 4: Agent explains -->
      <rect x="160" y="102" width="220" height="26" rx="13" stroke="rgba(168,85,247,0.3)" stroke-width="1" fill="rgba(168,85,247,0.06)"/>
      <text x="176" y="119" fill="rgba(168,85,247,0.7)" font-family="Inter, sans-serif" font-size="9" font-weight="600">AGENT</text>
      <text x="214" y="119" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">"JWT is stateless, so..."</text>

      <!-- Arrow down to plan file -->
      <line x1="270" y1="132" x2="270" y2="140" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="267,139 270,146 273,139" fill="rgba(245,245,247,0.25)"/>

      <!-- Resulting plan file -->
      <rect x="170" y="148" width="200" height="24" rx="8" stroke="rgba(52,211,153,0.3)" stroke-width="1" fill="rgba(52,211,153,0.05)"/>
      <text x="188" y="164" fill="rgba(52,211,153,0.6)" font-family="Inter, sans-serif" font-size="9">\ud83d\udccb</text>
      <text x="204" y="164" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9" font-weight="500">Synthesize into plan file</text>
    </svg>`,
    notes: 'Conversational Q&A is the counterpart to Plan Files \u2014 and often its predecessor. Where Plan Files are structured and execution-oriented, Conversational Q&A is open-ended and discovery-oriented.\n\nThe core idea: instead of agonizing over a perfect prompt, just start a conversation and ask the agent to ask you clarifying questions. This is a fundamentally different mental model from "prompt engineering." You\u2019re not trying to specify everything upfront \u2014 you\u2019re collaborating iteratively.\n\nThis pattern works in two directions:\n\u2022 Requirements elicitation: "Add auth to the API" \u2192 agent asks "JWT or session-based? What scopes?" \u2192 you refine together. This is the "I\u2019ll know it when I see it" workflow from the Agentic Loop slide.\n\u2022 Discovery and exploration: "Can you explain how that middleware works?" or "What are the tradeoffs between these approaches?" \u2014 using the agent as a research partner to build understanding before committing to a plan.\n\nThe natural flow is: Conversational Q&A (explore and clarify) \u2192 Plan File (structure the approach) \u2192 Execute (implement the plan). This maps to the research/exploration phase of any engineering task \u2014 acquiring context from outside the repo, synthesizing it, then turning it into actionable steps.\n\nThis is also the pattern referenced in the Plan Files contraindication: "For small tasks or ad-hoc discovery, sometimes Conversational Q&A can be just as efficient."'
  },
  {
    title: '\ud83d\udea6 <span class="accent">Red/Green TDD</span>',
    bullets: [
      'The agent writes the failing tests first (red), then implements until they pass (green)',
      'Many programmers found TDD\u2019s small discrete steps unintuitive \u2014 agents are unreasonably effective at it'
    ],
    svg: `<svg viewBox="0 0 600 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Step 1: Write Tests -->
      <rect x="30" y="40" width="120" height="56" rx="10" stroke="rgba(41,151,255,0.35)" stroke-width="1.2" fill="rgba(41,151,255,0.05)"/>
      <text x="90" y="63" text-anchor="middle" fill="rgba(41,151,255,0.8)" font-family="Inter, sans-serif" font-size="11" font-weight="600">Write Tests</text>
      <text x="90" y="80" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9">define expectations</text>

      <!-- Arrow 1 -->
      <line x1="155" y1="68" x2="185" y2="68" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="183,65 190,68 183,71" fill="rgba(245,245,247,0.25)"/>

      <!-- Step 2: Red (fail) -->
      <rect x="192" y="40" width="100" height="56" rx="10" stroke="rgba(239,68,68,0.4)" stroke-width="1.2" fill="rgba(239,68,68,0.06)"/>
      <text x="242" y="60" text-anchor="middle" fill="#ef4444" font-family="Inter, sans-serif" font-size="18" font-weight="700">\u2718</text>
      <text x="242" y="63" text-anchor="middle" fill="#ef4444" font-family="Inter, sans-serif" font-size="11" font-weight="600"> </text>
      <text x="242" y="80" text-anchor="middle" fill="rgba(239,68,68,0.6)" font-family="Inter, sans-serif" font-size="10" font-weight="500">RED</text>

      <!-- Arrow 2 -->
      <line x1="297" y1="68" x2="327" y2="68" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="325,65 332,68 325,71" fill="rgba(245,245,247,0.25)"/>

      <!-- Step 3: Implement -->
      <rect x="334" y="40" width="120" height="56" rx="10" stroke="rgba(168,85,247,0.35)" stroke-width="1.2" fill="rgba(168,85,247,0.05)"/>
      <text x="394" y="63" text-anchor="middle" fill="rgba(168,85,247,0.8)" font-family="Inter, sans-serif" font-size="11" font-weight="600">Agent Implements</text>
      <text x="394" y="80" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9">make it pass</text>

      <!-- Arrow 3 -->
      <line x1="459" y1="68" x2="489" y2="68" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="487,65 494,68 487,71" fill="rgba(245,245,247,0.25)"/>

      <!-- Step 4: Green (pass) -->
      <rect x="496" y="40" width="80" height="56" rx="10" stroke="rgba(52,211,153,0.4)" stroke-width="1.2" fill="rgba(52,211,153,0.06)"/>
      <text x="536" y="60" text-anchor="middle" fill="#34d399" font-family="Inter, sans-serif" font-size="18" font-weight="700">\u2714</text>
      <text x="536" y="63" text-anchor="middle" fill="#34d399" font-family="Inter, sans-serif" font-size="11" font-weight="600"> </text>
      <text x="536" y="80" text-anchor="middle" fill="rgba(52,211,153,0.6)" font-family="Inter, sans-serif" font-size="10" font-weight="500">GREEN</text>

      <!-- Loop-back arrow from Implement back to Red -->
      <path d="M 394 100 Q 394 130 318 130 Q 242 130 242 100" stroke="rgba(239,68,68,0.25)" stroke-width="1" fill="none" stroke-dasharray="4 3"/>
      <polygon points="239,102 242,94 245,102" fill="rgba(239,68,68,0.25)"/>
      <text x="318" y="144" text-anchor="middle" fill="rgba(245,245,247,0.25)" font-family="Inter, sans-serif" font-size="8">still red? iterate</text>

      <!-- Prompt example -->
      <rect x="80" y="4" width="440" height="22" rx="6" stroke="rgba(41,151,255,0.2)" stroke-width="1" fill="rgba(41,151,255,0.04)"/>
      <text x="100" y="19" fill="rgba(41,151,255,0.6)" font-family="Inter, sans-serif" font-size="9" font-weight="700">PROMPT</text>
      <text x="148" y="19" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="9">"Build a function to extract headers from markdown. Use red/green TDD."</text>
    </svg>`,
    notes: 'Red/Green TDD is Simon Willison\u2019s contribution to the agentic patterns catalog, and it\u2019s "a pleasingly succinct way to get better results out of a coding agent."\n\nThe workflow is strict test-first development:\n1. Write automated tests that define the expected behavior\n2. Run them and confirm they FAIL (the red phase)\n3. Let the agent implement code to make the tests pass (the green phase)\n4. Verify all tests pass\n\nStep 2 is the one most people skip, and it\u2019s the most important. If you don\u2019t confirm the tests fail first, you risk writing tests that already pass \u2014 which means you haven\u2019t actually validated anything. The red phase is your proof that the tests are meaningful.\n\nThis pattern addresses two risks that are amplified with coding agents:\n\u2022 Broken code: agents can generate plausible-looking implementations that don\u2019t actually work. Tests catch this.\n\u2022 Unnecessary code: agents tend to over-build. When you write the tests first, you define exactly what\u2019s needed \u2014 nothing more.\n\nA side benefit: you end up with a test suite that protects against regressions. Many developers skip writing tests under time pressure \u2014 this pattern makes test coverage a natural byproduct of the workflow.\n\nThe prompt pattern is dead simple: just append "Use red/green TDD" to your request.\n\nSource: Simon Willison, "Red/Green TDD" \u2014 https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/'
  },
  {
    title: '\ud83d\udcf8 <span class="accent">The Screenshot-Debug Loop</span>',
    bullets: [
      'Frontier models are multi-modal \u2014 paste a screenshot and the agent can \u201cread\u201d it',
      'Works beyond web apps: error messages (\u201cwhat does this mean?\u201d), disconnected environments (\u201csend me a screenshot\u201d)',
      'Pro-tip: add visual debug overlays so anyone can use the screenshot-debug loop, not just developers'
    ],
    svg: `<svg viewBox="0 0 600 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Screenshot frame -->
      <rect x="60" y="8" width="180" height="120" rx="8" stroke="rgba(245,245,247,0.15)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <!-- Title bar dots -->
      <circle cx="76" cy="22" r="3" fill="rgba(239,68,68,0.5)"/>
      <circle cx="86" cy="22" r="3" fill="rgba(234,179,8,0.5)"/>
      <circle cx="96" cy="22" r="3" fill="rgba(52,211,153,0.5)"/>
      <line x1="60" y1="32" x2="240" y2="32" stroke="rgba(245,245,247,0.08)" stroke-width="1"/>
      <!-- Content placeholder lines -->
      <rect x="74" y="42" width="100" height="6" rx="3" fill="rgba(245,245,247,0.08)"/>
      <rect x="74" y="54" width="150" height="6" rx="3" fill="rgba(245,245,247,0.08)"/>
      <rect x="74" y="66" width="80" height="6" rx="3" fill="rgba(245,245,247,0.06)"/>
      <!-- Error highlight -->
      <rect x="74" y="82" width="120" height="20" rx="4" stroke="rgba(239,68,68,0.4)" stroke-width="1" fill="rgba(239,68,68,0.06)" stroke-dasharray="3 2"/>
      <text x="134" y="96" text-anchor="middle" fill="rgba(239,68,68,0.5)" font-family="Inter, sans-serif" font-size="8">cutoff / bug / error</text>
      <!-- Debug overlay: minimized icon -->
      <circle cx="230" cy="112" r="7" fill="rgba(41,151,255,0.12)" stroke="rgba(41,151,255,0.3)" stroke-width="0.5"/>
      <text x="230" y="116" text-anchor="middle" font-size="7">\ud83d\udc1e</text>
      <!-- Expansion arrow -->
      <text x="230" y="128" text-anchor="middle" fill="rgba(245,245,247,0.2)" font-family="Inter, sans-serif" font-size="7">\u25bc</text>
      <!-- Expanded state (faded to show it's the "after click") -->
      <rect x="170" y="132" width="68" height="28" rx="4" fill="rgba(41,151,255,0.08)" stroke="rgba(41,151,255,0.2)" stroke-width="0.5" stroke-dasharray="2 2"/>
      <text x="204" y="144" text-anchor="middle" fill="rgba(41,151,255,0.5)" font-family="Inter, sans-serif" font-size="6">1440\u00d7810 \u2022 2x</text>
      <text x="204" y="154" text-anchor="middle" fill="rgba(41,151,255,0.5)" font-family="Inter, sans-serif" font-size="6">Safari 17.2</text>

      <!-- Arrow: screenshot to agent -->
      <line x1="248" y1="68" x2="290" y2="68" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="288,65 296,68 288,71" fill="rgba(245,245,247,0.25)"/>
      <text x="269" y="60" text-anchor="middle" fill="rgba(245,245,247,0.25)" font-family="Inter, sans-serif" font-size="8">\ud83d\udcf8</text>

      <!-- Agent box -->
      <rect x="298" y="40" width="120" height="56" rx="10" stroke="rgba(168,85,247,0.35)" stroke-width="1.2" fill="rgba(168,85,247,0.05)"/>
      <text x="358" y="63" text-anchor="middle" fill="rgba(168,85,247,0.8)" font-family="Inter, sans-serif" font-size="11" font-weight="600">Agent</text>
      <text x="358" y="78" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9">\u201cI can see the issue\u201d</text>

      <!-- Arrow: agent to fix -->
      <line x1="426" y1="68" x2="468" y2="68" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="466,65 474,68 466,71" fill="rgba(245,245,247,0.25)"/>

      <!-- Fix output -->
      <rect x="476" y="40" width="100" height="56" rx="10" stroke="rgba(52,211,153,0.35)" stroke-width="1.2" fill="rgba(52,211,153,0.05)"/>
      <text x="526" y="63" text-anchor="middle" fill="rgba(52,211,153,0.7)" font-family="Inter, sans-serif" font-size="11" font-weight="600">\u2714 Fix</text>
      <text x="526" y="78" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9">code patch</text>

      <!-- Loop back -->
      <path d="M 526 100 Q 526 140 300 140 Q 150 140 150 132" stroke="rgba(245,245,247,0.15)" stroke-width="1" fill="none" stroke-dasharray="4 3"/>
      <polygon points="147,134 150,126 153,134" fill="rgba(245,245,247,0.15)"/>
      <text x="340" y="155" text-anchor="middle" fill="rgba(245,245,247,0.2)" font-family="Inter, sans-serif" font-size="8">re-screenshot to verify</text>
    </svg>`,
    notes: 'The Screenshot-Debug Loop leverages the multi-modal capabilities of frontier models. Most modern AI interfaces let you paste a screenshot directly into the conversation, and the model can "read" it \u2014 identifying layout issues, error messages, visual regressions, and more.\n\nThis pattern works in three contexts:\n\u2022 Web apps: "The layout is getting cutoff at the bottom" \u2014 paste a screenshot and the agent can see exactly what you mean, no need to describe it in words.\n\u2022 Error messages: "What does this error mean?" \u2014 screenshot a terminal, a dialog box, a crash log. Faster and more accurate than copy-pasting text that might lose formatting.\n\u2022 Disconnected environments: when you can\u2019t share a URL or the agent can\u2019t access the environment directly, screenshots bridge the gap. "Send me a screenshot" is a universal debugging interface.\n\nThe loop is: screenshot \u2192 agent diagnoses \u2192 agent fixes \u2192 re-screenshot to verify. It\u2019s the visual equivalent of the red/green TDD cycle.'
  },
  {
    title: '\ud83d\udcd5 <span class="accent">Read-The-Manual</span>',
    bullets: [
      'Point the agent to hand-curated documentation \u2014 official docs, READMEs, API references',
      'LLMs are few-shot learners: given a few examples, they can typically figure out the pattern',
      'Pro-tip: most developer documentation is a git clone away, or already available in Markdown'
    ],
    svg: `<svg viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Docs sources -->
      <rect x="40" y="10" width="130" height="30" rx="6" stroke="rgba(245,245,247,0.12)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <text x="58" y="29" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">\ud83d\udcd6 Official Docs</text>

      <rect x="40" y="48" width="130" height="30" rx="6" stroke="rgba(245,245,247,0.12)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <text x="58" y="67" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">\ud83d\udcc1 README.md</text>

      <rect x="40" y="86" width="130" height="30" rx="6" stroke="rgba(245,245,247,0.12)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <text x="58" y="105" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">\ud83d\udce6 API Reference</text>

      <rect x="40" y="124" width="130" height="30" rx="6" stroke="rgba(245,245,247,0.12)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <text x="58" y="143" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="9">\ud83d\udd0d Code Examples</text>

      <!-- Arrows to agent -->
      <line x1="178" y1="25" x2="260" y2="70" stroke="rgba(245,245,247,0.12)" stroke-width="1"/>
      <line x1="178" y1="63" x2="260" y2="72" stroke="rgba(245,245,247,0.12)" stroke-width="1"/>
      <line x1="178" y1="101" x2="260" y2="78" stroke="rgba(245,245,247,0.12)" stroke-width="1"/>
      <line x1="178" y1="139" x2="260" y2="82" stroke="rgba(245,245,247,0.12)" stroke-width="1"/>
      <polygon points="258,68 266,75 258,80" fill="rgba(245,245,247,0.15)"/>

      <!-- Agent context window -->
      <rect x="268" y="30" width="160" height="100" rx="10" stroke="rgba(168,85,247,0.3)" stroke-width="1.2" fill="rgba(168,85,247,0.04)"/>
      <text x="280" y="48" fill="rgba(168,85,247,0.5)" font-family="Inter, sans-serif" font-size="8" font-weight="600" letter-spacing="0.1em">CONTEXT WINDOW</text>
      <line x1="268" y1="54" x2="428" y2="54" stroke="rgba(168,85,247,0.15)" stroke-width="1"/>
      <!-- Few examples inside -->
      <text x="284" y="70" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="9">Example 1: \u2713</text>
      <text x="284" y="84" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="9">Example 2: \u2713</text>
      <text x="284" y="98" fill="rgba(245,245,247,0.5)" font-family="Inter, sans-serif" font-size="9">Example 3: \u2713</text>
      <text x="284" y="118" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9" font-style="italic">\u2192 infers the pattern</text>

      <!-- Arrow to output -->
      <line x1="436" y1="80" x2="470" y2="80" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="468,77 476,80 468,83" fill="rgba(245,245,247,0.25)"/>

      <!-- Output -->
      <rect x="478" y="54" width="100" height="52" rx="10" stroke="rgba(52,211,153,0.35)" stroke-width="1.2" fill="rgba(52,211,153,0.05)"/>
      <text x="528" y="77" text-anchor="middle" fill="rgba(52,211,153,0.7)" font-family="Inter, sans-serif" font-size="11" font-weight="600">\u2714 Correct</text>
      <text x="528" y="93" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9">idiomatic code</text>
    </svg>`,
    notes: 'Read-The-Manual is deceptively simple: instead of hoping the agent\u2019s training data includes the right API or framework knowledge, explicitly point it to the documentation.\n\nThis works because of a fundamental capability described in "Language Models are Few-Shot Learners" (Brown et al., 2020 \u2014 the GPT-3 paper): given just a few examples in context, LLMs can infer the underlying pattern and generalize. You don\u2019t need to teach the agent an entire framework \u2014 a handful of representative examples from the docs is often enough.\n\nWhere to find documentation:\n\u2022 Most open-source projects have docs in their repo \u2014 a git clone away\n\u2022 Many frameworks publish Markdown docs that can be fed directly into context\n\u2022 API references, READMEs, and CHANGELOG files are all high-signal sources\n\u2022 Some tools (like Claude Code\u2019s CLAUDE.md) are specifically designed for this pattern\n\nThe key insight: hand-curated documentation is higher signal than letting the agent guess from training data. The agent\u2019s training data may be outdated, incomplete, or mixed with outdated or incorrect examples. Official docs are the authoritative source.\n\nSource: Brown et al., "Language Models are Few-Shot Learners" (2020) \u2014 https://arxiv.org/abs/2005.14165'
  },
  {
    title: '\ud83c\udfad <span class="accent">Actor-Critic SubAgent Validation</span>',
    bullets: [
      'Ask a separate agent to independently validate the main agent\u2019s work \u2014 code reviews, content checklists, fact-checking',
      'The separate context window is what enables it: the critic is focused only on validation, not implementation',
      'The actor-critic loop produces higher quality than one-shot approaches \u2014 by the time it completes, most checks are done and you\u2019re ready for human review'
    ],
    svg: `<svg viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Actor agent -->
      <rect x="40" y="30" width="140" height="60" rx="10" stroke="rgba(168,85,247,0.35)" stroke-width="1.2" fill="rgba(168,85,247,0.05)"/>
      <text x="110" y="55" text-anchor="middle" fill="rgba(168,85,247,0.8)" font-family="Inter, sans-serif" font-size="12" font-weight="600">Actor</text>
      <text x="110" y="72" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9">writes / implements</text>

      <!-- Arrow: Actor to Output -->
      <line x1="188" y1="60" x2="228" y2="60" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="226,57 234,60 226,63" fill="rgba(245,245,247,0.25)"/>

      <!-- Output / artifact -->
      <rect x="236" y="38" width="120" height="44" rx="8" stroke="rgba(245,245,247,0.15)" stroke-width="1" fill="rgba(255,255,255,0.03)"/>
      <text x="296" y="58" text-anchor="middle" fill="rgba(245,245,247,0.6)" font-family="Inter, sans-serif" font-size="10" font-weight="500">Output</text>
      <text x="296" y="72" text-anchor="middle" fill="rgba(245,245,247,0.3)" font-family="Inter, sans-serif" font-size="8">code / content / doc</text>

      <!-- Arrow: Output to Critic -->
      <line x1="364" y1="60" x2="404" y2="60" stroke="rgba(245,245,247,0.2)" stroke-width="1"/>
      <polygon points="402,57 410,60 402,63" fill="rgba(245,245,247,0.25)"/>

      <!-- Critic agent -->
      <rect x="412" y="30" width="150" height="60" rx="10" stroke="rgba(41,151,255,0.35)" stroke-width="1.2" fill="rgba(41,151,255,0.05)"/>
      <text x="487" y="55" text-anchor="middle" fill="rgba(41,151,255,0.8)" font-family="Inter, sans-serif" font-size="12" font-weight="600">Critic</text>
      <text x="487" y="72" text-anchor="middle" fill="rgba(245,245,247,0.35)" font-family="Inter, sans-serif" font-size="9">separate context window</text>

      <!-- Feedback loop: Critic back to Actor -->
      <path d="M 487 94 Q 487 130 296 130 Q 110 130 110 94" stroke="rgba(239,68,68,0.25)" stroke-width="1" fill="none" stroke-dasharray="4 3"/>
      <polygon points="107,96 110,88 113,96" fill="rgba(239,68,68,0.25)"/>
      <text x="296" y="124" text-anchor="middle" fill="rgba(239,68,68,0.35)" font-family="Inter, sans-serif" font-size="9">\u2718 issues found \u2192 revise</text>

      <!-- Pass path -->
      <line x1="487" y1="94" x2="487" y2="140" stroke="rgba(52,211,153,0.25)" stroke-width="1"/>
      <polygon points="484,138 487,146 490,138" fill="rgba(52,211,153,0.3)"/>
      <text x="487" y="158" text-anchor="middle" fill="rgba(52,211,153,0.5)" font-family="Inter, sans-serif" font-size="9" font-weight="500">\u2714 Ready for human review</text>
    </svg>`,
    notes: 'Actor-Critic SubAgent Validation introduces a separation of concerns between implementation and review. The core idea: use a separate agent with its own clean context window to independently review the work of the main agent.\n\nWhy a separate context window matters: the "actor" agent\u2019s context is full of implementation details \u2014 file contents, error messages, iterative attempts. By the time it produces output, it\u2019s deep in the weeds. The "critic" agent sees only the output and the validation criteria. This separation of concerns means the critic isn\u2019t biased by the implementation journey \u2014 it\u2019s focused purely on "does this meet the bar?"\n\nUse cases:\n\u2022 Code reviews: the critic agent reviews a PR or diff against coding standards, security checklists, or architectural guidelines\n\u2022 Content creation: the actor drafts, the critic checks against a style guide, fact-checks claims, or verifies completeness\n\u2022 Document validation: "can you independently validate the claims this document makes?" \u2014 the critic cross-references sources\n\nThe key insight: by the time the actor-critic loop completes, the output has already been through most of the routine checks. What reaches the human reviewer is higher quality than a one-shot approach \u2014 the human can focus on judgment calls and high-level decisions rather than catching mechanical errors.'
  },
  {
    title: '<span class="accent">References</span>',
    bullets: [],
    svg: `<div class="references-list">
      <a href="https://www.anthropic.com/engineering" target="_blank" rel="noopener" class="reference-item">
        <span class="reference-source">Anthropic</span>
        <span class="reference-title">Engineering at Anthropic</span>
        <span class="reference-desc">Building effective agents, context engineering, agentic coding best practices, and evaluation methodologies</span>
      </a>
      <a href="https://simonwillison.net" target="_blank" rel="noopener" class="reference-item">
        <span class="reference-source">Simon Willison</span>
        <span class="reference-title">Simon Willison\u2019s Weblog</span>
        <span class="reference-desc">One of the most prolific writers in AI \u2014 real hands-on testing, zero hype, often daily</span>
      </a>
      <a href="https://www.linkedin.com/in/anblanco-at-microsoft/" target="_blank" rel="noopener" class="reference-item">
        <span class="reference-source">Antonio Blanco</span>
        <span class="reference-title">LinkedIn</span>
        <span class="reference-desc">Presenter \u2014 writes about AI-assisted engineering patterns</span>
      </a>
    </div>`,
    notes: 'These references informed the patterns and narrative of this presentation. The Anthropic engineering hub is particularly valuable for its practical guides on building with AI agents.'
  }
];
