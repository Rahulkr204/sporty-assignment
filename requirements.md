# 🧭 Cursor Rules for Sporty Assignment

These rules are intended to guide development in a consistent, scalable, and performant way for the single-page application that consumes the All Leagues API and displays the sports leagues with filtering options.

---

## 📁 Folder Structure

| Folder         | Purpose                                |
|----------------|----------------------------------------|
| `pages/`       | Page-level views                       |
| `components/`  | Reusable UI components                 |
| `composables/` | Reusable logic like `useLeagues.ts`    |
| `assets/`      | Static assets like images or logos     |

---

## Component Conventions

- Use `<script setup>` syntax in all Vue components.
- Component names must be in **PascalCase**.
- All `props` must be typed and validated.
- Use `defineEmits` for event emission.
- Avoid large components — break them into smaller parts if they exceed 100–150 lines.

---

## Tailwind CSS Guidelines

- Follow [Tailwind class order](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).
- Avoid inline styles; prefer utility classes.
- Use the standard spacing scale (`p-4`, `m-2`, `gap-6`, etc.).
- Leverage responsive classes (`md:flex`, `lg:grid`, etc.) for layout.

---

## Performance Rules

- **Use `:key` in all `v-for` loops**.
- **Use composables to fetch and cache API responses.**
  - Prefer `shallowRef` or `reactive` with custom caching logic.
- Optimize rendering of long lists (use pagination or virtual scrolling if needed).

---

## Composables

- File naming must begin with `use`, e.g., `useLeagues.ts`.
- All API calls should be centralized inside composables.
- Cache API responses to avoid unnecessary network requests.

---

## Responsive UI

- The layout must work across mobile, tablet, and desktop.
- Use Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`, `xl:`).
- Avoid fixed widths unless necessary.

---

## Developer Tips

- Keep each component focused on a single responsibility.
- Use `Suspense` with `<script setup>` for async composables.
- Use `defineExpose` only when absolutely necessary.

---

### APIs:
- All Leagues: https://www.thesportsdb.com/api/v1/json/3/all_leagues.php
- Badge Lookup: https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=<id>

---

**Goal:** Clean, maintainable, performant SPA with consistent architecture and reusable logic.