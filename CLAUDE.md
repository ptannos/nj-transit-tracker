Project Overview

This repository contains a frontend-only application built with Lit for web components and Vitest for testing.

## Tech Stack

Framework: Lit
Language: TypeScript
Testing: Vitest
Styling: Plain CSS (one stylesheet per component)

## Development Guidelines

- Keep components focused on a single responsibility.
- Prefer small, composable components over large, monolithic ones.

## Styling

- Avoid inline styles unless they are truly dynamic and cannot reasonably be expressed in CSS.
- Use CSS custom properties for theming.
- Prefer `:host` for component-level styling.
- Avoid unnecessary `!important`.
- Keep selectors shallow.
- Every component should have its own dedicated stylesheet.

Example:

src/components/
my-button/
my-button.ts
my-button.css
my-button.test.ts

## Guidelines

- Do not place component styles inside JavaScript or TypeScript files.
- Store all static styles in the component's corresponding .css file.
- Keep styles scoped to the component.
- Reuse shared design tokens or utility styles instead of duplicating values.

## Lit Guidelines

- Extend `LitElement` for all components.
- Use reactive properties instead of manually manipulating the DOM.
- Prefer `@state()` for internal state.
- Avoid querying the DOM when reactive rendering can be used instead.
- Keep render methods declarative and free of business logic.
- Components should communicate upward using CustomEvents.
- Events should bubble and be composed when intended for consumers.
- Document all public events.
- Avoid components directly reaching into parent components.
- Keep component state local whenever possible.
- Do not introduce global state management libraries unless requested.
- Pass data through properties.

## Testing Guidelines

- Every component should have its own test file.
- Create one \*.test.ts file in component's folder.
- Place tests alongside the component implementation.
- Write tests using Vitest.
- Test public behavior rather than implementation details.
- Prefer user-observable outcomes over internal state assertions.
- Avoid testing Lit internals or private methods.
- Keep related files together.

Example:

src/components/
button/
button.ts
button.css
button.test.ts
dialog/
dialog.ts
dialog.css
dialog.test.ts

Tests should verify:

- rendering
- property updates
- event dispatching
- user interactions
- accessibility
- user interactions

## Code Style

- Write readable, maintainable code.
- Favor clear naming over abbreviations.
- Keep functions small and focused.
- Remove unused code and imports.
- Avoid unnecessary complexity.
- Use relative imports within the project.
- Remove unused imports.
- Keep imports grouped and ordered.

Components should:

- Use semantic HTML.
- Support keyboard navigation where appropriate.
- Include appropriate ARIA attributes only when native HTML semantics are insufficient.
- Ensure sufficient color contrast.
- Preserve visible focus indicators.
- Avoid unnecessary re-renders.
- Lazy-load code where appropriate.
- Minimize DOM complexity.

New components should include:

- Component implementation
- Corresponding CSS file
- Corresponding Vitest test file

## General Principles

- Keep changes as small and focused as possible.
- Prefer consistency with the existing codebase over introducing new patterns.
- Do not add dependencies unless there is a clear justification.
- Refactor when it improves readability without expanding the scope of the change.
- Leave the codebase cleaner than you found it.
