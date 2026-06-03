# vi-sta

> Headless, keyword-driven rich-text editor with multi-view editing and full design freedom.

vi-sta is a TypeScript editor library built on Tiptap (ProseMirror). One document, viewed through four lenses — Styled (WYSIWYG), Keyword, HTML, and Preview — all backed by a single source of truth, so any view round-trips losslessly.

## Packages

| Package            | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `@vi-sta/core`     | Framework-agnostic engine: schema, keyword engine, serializer, view controllers. |
| `@vi-sta/react`    | Thin React adapter.                                                              |
| `@vi-sta/renderer` | Pure, DOM-free renderer for SSR/SSG/RSC. Independent of the engine.              |
| `@vi-sta/presets`  | Opt-in bundles: default keywords, embed providers, themes.                       |

## Requirements

- Node.js >= 18
- React >= 17 (for `@vi-sta/react`)

## Development

This is a pnpm monorepo.

```bash
pnpm install # install all workspaces
pnpm dev # build packages in watch mode
pnpm test # run the test suite
pnpm lint # lint all packages
pnpm type-check # type-check all packages
pnpm build # build all packages
```

Run the demo app:

```bash
pnpm --filter playground dev
```

## Status

Early development. See the milestone roadmap (M0–M10) in the design document.

## License

[MIT](./LICENSE)
