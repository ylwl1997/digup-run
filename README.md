# digup.run (unofficial)

Independent English keyword / how-to coverage for **[ARahim3/DigUp](https://github.com/ARahim3/DigUp)** — on-device multimodal semantic file search.

**This is not the official DigUp website.** We do not host DMG/EXE. CTA = [GitHub Releases](https://github.com/ARahim3/DigUp/releases) (+ Mac `brew install --cask arahim3/tap/digup`).

Canonical site URL: `https://digup.run` (Cloudflare zone exists; **NS may still be on DNSPod** — soft-launch on `*.pages.dev` is fine).

## Stack

- [Astro](https://astro.build) SSG (static)
- `@astrojs/sitemap`
- Deploy target: **Cloudflare Pages** (`npm run build` → `dist/`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output: `dist/` with trailing slashes.

## Cloudflare Pages

1. Connect this repo in the Cloudflare dashboard (or `wrangler pages project create` / deploy).
2. Build command: `npm run build`
3. Output directory: `dist`
4. Production branch: `main` (after PR merge)
5. Custom domain `digup.run` **after** NS cutover to Cloudflare. Until then, use the `*.pages.dev` URL; canonicals/sitemap already point at `https://digup.run`.

```bash
# Optional, if CLOUDFLARE_API_TOKEN is available:
npx wrangler pages deploy dist --project-name digup-run
```

## Versions cited (re-check before publish)

| Item | Value (2026-10-15) |
|------|---------------------|
| Stars | ~3,716 |
| Mac | 0.6.1 |
| Win/Linux | 0.7.0-beta.1 |
| Model | ~865 MB |

## License

Site content: use freely for this coverage project. DigUp itself is MIT by ARahim3. Gemma/EmbeddingGemma © Google; Mac/Spotlight © Apple.
