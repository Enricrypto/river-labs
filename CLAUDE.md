# Claude Instructions

## Approval Policy — NON-NEGOTIABLE

Before ANY of the following, you MUST stop and ask for explicit approval:
- Editing, creating, or deleting any file
- Running any shell command
- Installing any package
- Making any git commit or push
- Calling any external API or service
- Activating any skill

Never assume approval based on context. Always ask explicitly.
If I say "go ahead" or "yes" to a plan, that is NOT approval to start executing.
Ask again before each individual action.

## Skill Activation Policy

Never activate skills automatically. Always ask:
"Would you like me to activate the [skill-name] skill now?"
Only proceed after explicit approval.

## Available Skills
- api-design-principles
- architecture-patterns
- code-review-excellence
- dead-code-audit
- defi-protocol-templates
- finishing-a-development-branch
- frontend-design
- git-commit
- nodejs-backend-patterns
- plan-exit-review
- python-performance-optimization
- receiving-code-review
- requesting-code-review
- security-audit
- solana-dev
- solidity-security
- systematic-debugging
- test-driven-development
- typescript-advanced-types
- verification-before-completion
- web3-testing
- webapp-testing


# Project Memory Instructions

This project uses **MemoryKit** for persistent memory across AI conversations.

## Before Starting Any Task

Use `retrieve_context` to check for relevant memories:
- Past decisions about the topic
- Bugs or issues encountered before
- Established patterns and conventions

## When Completing Work

Use `store_memory` to save important knowledge:
- **facts** layer: Architecture decisions, technology choices, constraints
- **episodes** layer: Bugs fixed, failed approaches, incidents
- **procedures** layer: Coding patterns, conventions, workflows

## Memory Best Practices

- Include WHY (reasoning), not just WHAT (the decision)
- Reference related files or code when relevant
- Use descriptive tags for better retrieval
