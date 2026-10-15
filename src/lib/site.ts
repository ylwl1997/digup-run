export const SITE = {
  name: 'Digup Run',
  shortName: 'digup.run',
  url: 'https://digup.run',
  /** Our product app repo (binaries). */
  appRepo: 'https://github.com/ylwl1997/digup-run-app',
  appReleases: 'https://github.com/ylwl1997/digup-run-app/releases',
  appReleasesLatest: 'https://github.com/ylwl1997/digup-run-app/releases/latest',
  /** Upstream DigUp (MIT source) — attribution only, not download target. */
  upstreamRepo: 'https://github.com/ARahim3/DigUp',
  brewCask: 'Homebrew cask not published yet — use the Mac DMG from Releases',
  disclaimerEn:
    'Digup Run is based on DigUp (MIT, Copyright (c) 2026 Abdur Rahim). Not an official DigUp / ARahim3 product. Downloads via our GitHub Releases only; this site hosts no binaries.',
  disclaimerZh:
    'Digup Run 基于 DigUp（MIT，Copyright (c) 2026 Abdur Rahim）衍生。非官方 DigUp / ARahim3 产品。安装包仅经我们的 GitHub Releases；本站不托管二进制文件。',
} as const;

export type Lang = 'en' | 'zh';

/** Locale-neutral path → localized href (trailing slash). */
export function pathFor(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'zh') {
    if (clean === '/' || clean === '') return '/zh/';
    return `/zh${clean.endsWith('/') ? clean : `${clean}/`}`;
  }
  if (clean === '/' || clean === '') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export const NAV = [
  { href: '/', labelEn: 'Home', labelZh: '首页' },
  { href: '/what-is-digup/', labelEn: 'What is', labelZh: '是什么' },
  {
    href: '/install-mac/',
    labelEn: 'Install',
    labelZh: '安装',
    children: [
      { href: '/install-mac/', labelEn: 'Mac', labelZh: 'Mac' },
      { href: '/install-windows/', labelEn: 'Windows (beta)', labelZh: 'Windows（测试）' },
      { href: '/install-linux/', labelEn: 'Linux (beta)', labelZh: 'Linux（测试）' },
    ],
  },
  { href: '/vs-spotlight/', labelEn: 'vs Spotlight', labelZh: '对比 Spotlight' },
  { href: '/embeddinggemma-2/', labelEn: 'EmbeddingGemma 2', labelZh: 'EmbeddingGemma 2' },
  { href: '/faq/', labelEn: 'FAQ', labelZh: '常见问题' },
  { href: '/changelog-notes/', labelEn: 'Changelog', labelZh: '更新说明', enOnly: true },
] as const;

/**
 * UI stills from upstream DigUp demo.gif (ARahim3/DigUp) — illustrative of the
 * Digup Run experience (same engine lineage). Not an official DigUp endorsement.
 */
export const DIGUP_UI = {
  hero: {
    src: '/media/digup/ui-mac-video-zebra.webp',
    altEn:
      'Digup Run (DigUp-lineage) Mac search panel: query “zebra in a video”, result with video at 0:42 — still from upstream DigUp docs/demo.gif.',
    altZh:
      'Digup Run（DigUp 同源）Mac 搜索面板：查询「zebra in a video」，视频定位 0:42 — 取自上游 DigUp docs/demo.gif 静帧。',
  },
  audio: {
    src: '/media/digup/ui-mac-audio-sleep.webp',
    altEn:
      'Mac UI: query “where they talk about sleep”, audio near 7:55 — still from ARahim3/DigUp docs/demo.gif (illustrative for Digup Run).',
    altZh:
      'Mac 界面：查询「where they talk about sleep」，音频约 7:55 — 取自 ARahim3/DigUp docs/demo.gif（Digup Run 示意）。',
  },
  pdf: {
    src: '/media/digup/ui-win-pdf-lease.webp',
    altEn:
      'Windows UI: “the clause about pets in the lease”, PDF page 4 — still from upstream DigUp demo.gif (illustrative for Digup Run).',
    altZh:
      'Windows 界面：「the clause about pets in the lease」，PDF 第 4 页 — 取自上游 DigUp demo.gif（Digup Run 示意）。',
  },
  multimodal: {
    src: '/media/digup/ui-win-multimodal-dog.webp',
    altEn:
      'Windows UI: “a dog on the beach”, multimodal results — still from upstream DigUp demo.gif (illustrative for Digup Run).',
    altZh:
      'Windows 界面：「a dog on the beach」，多模态结果 — 取自上游 DigUp demo.gif（Digup Run 示意）。',
  },
  code: {
    src: '/media/digup/ui-linux-code-search.webp',
    altEn:
      'Linux UI: code: retry with backoff — still from upstream DigUp demo.gif (illustrative for Digup Run).',
    altZh:
      'Linux 界面：code: retry with backoff — 取自上游 DigUp demo.gif（Digup Run 示意）。',
  },
  logo: {
    src: '/logo.svg',
    altEn: 'Digup Run mark (digup.run) — original site artwork, not the DigUp trademark logo.',
    altZh: 'Digup Run 标志（digup.run）— 本站原创，非 DigUp 商标标识。',
  },
  sourceNoteEn:
    'UI stills from DigUp docs/demo.gif (ARahim3/DigUp, MIT). Illustrative for Digup Run; not an official DigUp screenshot endorsement.',
  sourceNoteZh:
    '界面静帧取自 DigUp docs/demo.gif（ARahim3/DigUp，MIT）。用于 Digup Run 示意；非官方 DigUp 背书。',
} as const;
