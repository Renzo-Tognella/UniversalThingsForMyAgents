---
name: research-synthesis
description: Use when combining information from multiple sources into a coherent output. Use when sources conflict, when you need to reconcile different viewpoints, or when producing a final report from gathered research.
---

# Research Synthesis

## Overview

Methods for combining, reconciling, and presenting information from multiple sources into coherent, actionable outputs. Core principle: **synthesis is not summarization** — it requires weighing evidence, resolving conflicts, and structuring for the user's decision context.

## When to Use

- You have gathered information from 3+ sources and need to present a unified view
- Sources conflict or present different recommendations
- Need to produce a report, comparison, or recommendation from research
- User asked "what should I do?" after presenting research findings

**When NOT to use:** Only one source exists; user asked for a raw dump of findings without analysis.

## Synthesis Framework

### 1. Organize by Claim, Not by Source

**Don't:**
```
Source A says X. Source B says Y. Source C says Z.
```

**Do:**
```
Claim: [the assertion]
Evidence for: [what sources say, with strength]
Evidence against: [what sources say, with strength]
Assessment: [your weighted conclusion]
```

### 2. Weight Sources

| Weight Factor | High | Low |
|---------------|------|-----|
| **Recency** | Published within last 12 months for fast-moving topics | >2 years old without updates |
| **Independence** | Third-party benchmark, academic paper | Vendor blog post about own product |
| **Methodology** | Reproducible benchmark, controlled study | Anecdotal, "we tried it once" |
| **Real-world validation** | Production case study with metrics | Lab experiment only |

### 3. Flag Uncertainty Levels

Use explicit markers:

| Marker | Meaning | Example |
|--------|---------|---------|
| **[confirmed]** | Multiple independent sources agree | "Python is slower than C++ for CPU-bound tasks [confirmed]" |
| **[likely]** | Strong evidence but limited independent confirmation | "Qdrant scales better than Chroma for >1M vectors [likely]" |
| **[debated]** | Sources conflict or evidence is mixed | "Fine-tuning vs RAG is better for domain adaptation [debated]" |
| **[uncertain]** | Weak evidence or theoretical only | "This approach reduces latency by 40% [uncertain — single benchmark]" |

## Handling Conflict

### When Sources Disagree

1. **Check context:** Do they test under different conditions? (hardware, scale, version)
2. **Check date:** Is one source outdated?
3. **Check bias:** Is one author affiliated with a product?
4. **Check scope:** Does one generalize from a narrow case?

**Present the conflict explicitly:**
```
There is disagreement on whether X is better than Y:
- Pro-X: [Source A, a 2024 benchmark on dataset Z, claims 30% faster]
- Pro-Y: [Source B, a 2025 production case study at scale, claims more stable]
- Resolution: X appears faster in controlled benchmarks; Y appears more stable at scale. The choice depends on your scale and stability requirements.
```

### When No Clear Answer Exists

**Don't:** Force a conclusion.

**Do:** Present a decision framework:
```
There is no universally "best" choice. The decision depends on:
- If you prioritize [X], choose [A] because [reason]
- If you prioritize [Y], choose [B] because [reason]
- If you need both, consider [C] as a compromise with trade-off [Z]
```

## Output Structures

### Comparison Table

Best for: "Which tool/framework/approach should I use?"

| Criteria | Option A | Option B | Option C |
|----------|----------|----------|----------|
| Performance | Fast [source] | Moderate [source] | Slow [source] |
| Ease of use | Steep learning [source] | Beginner-friendly [source] | Moderate [source] |
| Maintenance | Active [source] | Active [source] | Stale [source] |
| Best for | [use case] | [use case] | [use case] |

### Structured Report

Best for: "Explain topic X comprehensively"

```
# [Topic]

## Executive Summary
2-3 sentences capturing the bottom line.

## Current State
What is true now, with evidence.

## Key Approaches
### Approach A
- How it works
- Pros / cons
- When to use

### Approach B
- How it works
- Pros / cons
- When to use

## Trade-offs
[Comparison or decision framework]

## Recommendations
[Conditional recommendations based on context]

## Sources
- [Source 1] — [what it covers]
- [Source 2] — [what it covers]
```

### Step-by-Step Guide

Best for: "How do I do X?"

```
## Prerequisites
- [what you need before starting]

## Steps
1. [action] — [why this matters]
2. [action] — [common pitfall]
3. [action] — [verification step]

## Verification
How to confirm it worked correctly.

## Next Steps / Extensions
Where to go from here.
```

## Quality Checklist

Before delivering synthesized output:

- [ ] Every major claim has a source marker or uncertainty flag
- [ ] Conflicting evidence is presented, not suppressed
- [ ] The structure matches the user's goal (comparison, report, guide)
- [ ] Recommendations are conditional ("if X, then Y") rather than absolute when appropriate
- [ ] Sources section allows the user to verify independently
- [ ] No source is presented as saying something it didn't

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Listing sources instead of synthesizing | Group by claim, evaluate evidence weight |
| Ignoring conflicts | Explicitly present disagreement with context |
| Overstating confidence | Use uncertainty markers [confirmed/likely/debated/uncertain] |
| Structuring by source rather than topic | Reorganize around user questions |
| Omitting caveats | Preserve limitations from original sources |
| Forcing a single answer | Use conditional recommendations when context matters |

## Red Flags — STOP and Re-evaluate

- You're about to recommend something based on a single source
- Two sources say opposite things and you haven't investigated why
- You're presenting a vendor claim as independent fact
- The user's goal is unclear and you're guessing at the right structure
- You've summarized but haven't actually synthesized (no evaluation or weighting)
