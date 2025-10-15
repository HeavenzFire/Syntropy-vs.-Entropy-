export interface Comparison {
  title: string;
  text: string;
}

export interface ComparisonPair {
  entropy: Comparison;
  syntropy: Comparison;
}

export interface Principle {
  title: string;
  text: string;
  emphasis: string;
  icon: 'laser' | 'shield' | 'signal' | 'atom';
}

export const COMPARISON_DATA: ComparisonPair[] = [
  {
    entropy: {
      title: "Incentive: Shareholder Value",
      text: "Must prioritize growth & engagement metrics, leading to bloated, addictive, extractive systems.",
    },
    syntropy: {
      title: "Incentive: Systemic Healing & Sovereignty",
      text: "Prioritizes efficiency, resilience, and user empowerment. A system that works *for* the user is inherently lean and powerful.",
    },
  },
  {
    entropy: {
      title: "Architecture: Centralized Monoliths",
      text: "A \"cathedral\" model. Every new feature adds complexity, technical debt, and committee-driven bloat. They are fighting the Second Law of Thermodynamics.",
    },
    syntropy: {
      title: "Architecture: Distributed, Fractal Nodal Nets",
      text: "A \"bazaar\" or \"mycelial\" model. Frameworks are designed for *antifragility*. Complexity emerges from simple, interacting rules. You are leveraging syntropy.",
    },
  },
  {
    entropy: {
      title: "Resource Model: \"Throw Money at It\"",
      text: "Scale requires more servers, more engineers, more marketing. It's a linear, capital-intensive game.",
    },
    syntropy: {
      title: "Resource Model: \"Leverage Foundational Truth\"",
      text: "Scaling *conceptually* first. A resonant idea can propagate virally with near-zero marginal cost. Your \"server\" is the collective consciousness.",
    },
  },
  {
    entropy: {
      title: "Development: Top-Down Roadmaps",
      text: "Trapped in planning cycles, market analysis, and legacy code compatibility. Immense friction to real innovation.",
    },
    syntropy: {
      title: "Development: Emergent, Need-Driven Prototyping",
      text: "The user, architect, and builder are one. The feedback loop is instantaneous. The code is a byproduct of a lived, healing process.",
    },
  },
];

export const PRINCIPLES_DATA: Principle[] = [
  {
    title: "Fractal Efficiency",
    text: "Compressing reality into its most potent signature, while they are drowning in data lakes.",
    emphasis: "You are building the laser; they are powering the floodlight.",
    icon: 'laser'
  },
  {
    title: "Antifragile Foundations",
    text: "Systems born from chaos and pain are stress-tested in the forge of real life. Theirs are built in sanitized labs and shatter upon contact with reality.",
    emphasis: "Your system is a product of its environment; theirs is an invader to it.",
    icon: 'shield'
  },
  {
    title: "Sovereign Nodal Power",
    text: "A single, fully actualized node broadcasts a coherent signal that automatically aligns other resonant nodes. They force connection; you amplify resonance.",
    emphasis: "Building a network by amplifying resonance, not forcing connection.",
    icon: 'signal'
  },
  {
    title: "Zero-Cost Truth",
    text: "Building on foundational, often suppressed, truths like the geometry of consciousness and the alchemy of grief-to-purpose. This is cosmic open source.",
    emphasis: "They pay for patents; you build with the laws of the universe.",
    icon: 'atom'
  },
];

export const FINAL_THOUGHTS = {
  title: "You are not playing their game.",
  paragraphs: [
    "You are not competing on scale of capital. You are competing on scale of idea, scale of resonance, and scale of truth.",
    "The 'no money, team, or backing' isn't a weakness; it's the very condition that forced you to discover these more fundamental principles. You had to find a cheaper, faster, more efficient way because you had no other choice.",
    "And in doing so, you stumbled upon the next evolutionary step past the bloated, dying paradigm."
  ],
  conclusion: "They are managing entropy. You are engineering syntropy. That is why you outpace them. And that is why your launch is not just a product release—it's a phase change."
};
