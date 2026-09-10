# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # tsc -b (typecheck all tsconfig projects) then vite build → dist/
npm run lint      # ESLint over **/*.{ts,tsx}
npm run preview   # serve the production build
```

There is **no test runner** configured. `npm run build` is the gate: it runs `tsc -b` first, so a type error fails the build. Run `npx tsc -b` alone for a fast typecheck without bundling.

## Stack

- **React 19** + **React Router 7** (`createBrowserRouter`), **Vite 8**, **TypeScript** (strict, `verbatimModuleSyntax` — use `import type` for type-only imports or the build fails).
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin. There is **no `tailwind.config.js`** — all design tokens live in `@theme` inside `src/index.css`. Adding `--color-foo` there generates `bg-foo`, `text-foo`, `border-foo` utilities automatically; a class like `bg-app-bg` only works if `--color-app-bg` is defined.
- Tailwind v4 canonical class names: `bg-linear-to-r` (not `bg-gradient-to-r`), `py-(--space-section)` for CSS-var values, and named scale utilities (`text-display`, `w-70`) over arbitrary `[...]` values — the editor flags the non-canonical forms.
- Icons: **react-icons** (`Fa*`, `Hi*`, `Si*`). Decorative icons need `aria-hidden="true"`.

## Architecture

Single-page app. `main.tsx` → `RouterProvider` → one route: `RootLayout` (skip link, `Navbar`, `<main>`, `Footer`) wrapping `Home`, which stacks five section components in order: **Hero → Project → About → Skill → Contact**. `App.tsx` is an unused stub — `main.tsx` mounts the router directly.

### Design system is CSS-first

`src/index.css` is the source of truth: the `@theme` block defines the full token set (OLED surface ramp, cyan/violet brand, fluid `clamp()` type scale `--text-display`/`--text-h2`, `--space-section` rhythm, radius, three font families). `@layer base` sets global focus rings, `:target` scroll offset, and a fixed radial backdrop via `body::before`. `@layer utilities` defines `.text-gradient`, `.card-surface`, `.skip-link`, and the **`.reveal` / `.reveal-stagger`** classes (opacity+translate that clear when `.is-visible` is added; stagger cascades direct children via `:nth-child` transition-delays). A `prefers-reduced-motion` block neutralizes all of it.

### UI primitives (`src/components/ui/`)

Hand-rolled, no component library. Compose these instead of repeating utility soup:

- **`Section`** — the section wrapper. Takes `id`, optional `eyebrow`/`title`/`description`, applies `Container` + vertical rhythm + scroll-reveal to the whole block. Every page section uses it.
- **`Button`** — polymorphic (`as="a"` for links), `variant` (`primary`/`outline`/`ghost`) × `size`.
- **`Field` / `FieldLabel` / `FieldError` / `Input` / `Textarea`** — shadcn-style form composition (label associated via `htmlFor`/`id`, error linked with `aria-describedby` + `role="alert"`). `Input`/`Textarea` take an `invalid` prop for error styling.
- **`Container`**, **`Tag`**, **`Reveal`** (standalone reveal wrapper; `stagger` prop for child cascade).
- `src/lib/cn.ts` — `cn()` class joiner (filter + join, no dependency).

### Hooks (`src/hooks/`)

- **`useReveal`** — powers `Section`/`Reveal`. Returns `{ ref, visible }`. Checks if the element is already on screen at mount, else uses an `IntersectionObserver` (fires slightly before full view), plus a 2.5s safety timeout so content is never left hidden. Respects `prefers-reduced-motion` (starts visible, no observer). When adding reveal to new content, go through `Section`/`Reveal` — do not hand-roll a fourth copy.
- **`useActiveSection`** — observes section ids, returns the one in view; `Navbar` uses it to highlight the current link. Nav hrefs (`#hero`, `#work`, `#about`, `#stack`, `#contact`) must match the section `id`s.

### Data

`src/data/*.ts` export typed arrays (`projects`, `Skills`) with interfaces in `src/types/`. `projectData.ts` `image` paths point at `/images/projectN.png` which **do not exist in `public/`** — `ProjectCard` handles the 404 with an `onError` fallback (branded gradient + project initial). Add real files to `public/images/` to replace the placeholders.

## Conventions

- Section components are default exports named after the file; `Project.tsx` renders the section with `id="work"`.
- Semantic color/spacing tokens only — never raw hex in components (it belongs in `@theme`).
- The contact form has no backend: it validates client-side (on blur + on submit, focus-first-error) and submits via a `mailto:` link.
