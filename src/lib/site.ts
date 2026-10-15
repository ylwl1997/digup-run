export const SITE = {
  /** Software product display name (upstream DigUp). */
  name: 'DigUp',
  shortName: 'digup.run',
  url: 'https://digup.run',
  /** Upstream DigUp (MIT) — source repo + Release assets. */
  upstreamRepo: 'https://github.com/ARahim3/DigUp',
  brewCommand: 'brew install --cask arahim3/tap/digup',
  /** Empty until a real GA4 property exists — do not invent a G- ID. */
  ga4Id: 'G-XVYGCNK3EP',
  /** Direct browser_download_url assets (file download starts on click). */
  downloads: {
    mac: 'https://github.com/ARahim3/DigUp/releases/download/v0.6.1/DigUp-0.6.1.dmg',
    macVersion: '0.6.1',
    windows:
      'https://github.com/ARahim3/DigUp/releases/download/v0.7.0-beta.1/DigUp_0.7.0-beta.1_x64-setup.exe',
    windowsVersion: '0.7.0-beta.1',
    linuxDeb:
      'https://github.com/ARahim3/DigUp/releases/download/v0.7.0-beta.1/DigUp_0.7.0-beta.1_amd64.deb',
    linuxAppImage:
      'https://github.com/ARahim3/DigUp/releases/download/v0.7.0-beta.1/DigUp_0.7.0-beta.1_amd64.AppImage',
    linuxVersion: '0.7.0-beta.1',
  },
  disclaimerEn: 'Based on DigUp (MIT). Not affiliated.',
  disclaimerZh: '基于 DigUp（MIT）。非官方关联。',
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
      { href: '/install-mac/#homebrew', labelEn: 'Homebrew (brew)', labelZh: 'Homebrew（brew）' },
      { href: '/install-windows/', labelEn: 'Windows (beta)', labelZh: 'Windows（测试）' },
      { href: '/install-linux/', labelEn: 'Linux (beta)', labelZh: 'Linux（测试）' },
    ],
  },
  { href: '/vs-spotlight/', labelEn: 'vs Spotlight', labelZh: '对比 Spotlight' },
  { href: '/embeddinggemma-2/', labelEn: 'EmbeddingGemma 2', labelZh: 'EmbeddingGemma 2' },
  {
    href: '/guides/zero-files-indexed/',
    labelEn: 'Guides',
    labelZh: '指南',
    children: [
      { href: '/guides/zero-files-indexed/', labelEn: '0 files indexed', labelZh: '索引为 0' },
      { href: '/guides/battery-and-indexing-hours/', labelEn: 'Battery & hours', labelZh: '耗电与时段' },
      { href: '/guides/win-linux-beta/', labelEn: 'Win/Linux beta', labelZh: 'Win/Linux 测试' },
      {
        href: '/guides/embeddinggemma-2-local-multimodal-search/',
        labelEn: 'EmbeddingGemma multimodal',
        labelZh: 'EmbeddingGemma 多模态',
      },
      { href: '/guides/use-cases/', labelEn: 'Use cases by role', labelZh: '角色用例' },
    ],
  },
  { href: '/faq/', labelEn: 'FAQ', labelZh: '常见问题' },
  { href: '/changelog-notes/', labelEn: 'Changelog', labelZh: '更新说明' },
] as const;

/** UI stills from DigUp demo.gif (ARahim3/DigUp, MIT). */
export const DIGUP_UI = {
  /** DigUp docs/demo.gif mirrored locally (MIT) — primary homepage proof. */
  demo: {
    gif: '/media/digup/demo.gif',
    webm: '/media/digup/demo.webm',
    mp4: '/media/digup/demo.mp4',
    poster: '/media/digup/ui-win-multimodal-dog.webp',
    altEn:
      'DigUp demo (MIT): search across Mac, Windows, and Linux — zebra in a video, podcast minute, lease PDF clause, dog on the beach, and code.',
    altZh:
      'DigUp 演示（MIT）：Mac / Windows / Linux 上的内容搜索——视频斑马、播客分钟、租约 PDF、海滩上的狗、代码。',
    captionEn: 'DigUp demo — content search across platforms.',
    captionZh: 'DigUp 演示——跨平台内容搜索。',
  },
  hero: {
    src: '/media/digup/ui-mac-video-zebra.webp',
    altEn:
      'DigUp Mac search panel: query “zebra in a video”, result with video at 0:42 — still from DigUp docs/demo.gif.',
    altZh:
      'DigUp Mac 搜索面板：查询「zebra in a video」，视频定位 0:42 — 取自 DigUp docs/demo.gif 静帧。',
  },
  audio: {
    src: '/media/digup/ui-mac-audio-sleep.webp',
    altEn:
      'Mac UI: query “where they talk about sleep”, audio near 7:55 — still from ARahim3/DigUp docs/demo.gif.',
    altZh:
      'Mac 界面：查询「where they talk about sleep」，音频约 7:55 — 取自 ARahim3/DigUp docs/demo.gif。',
  },
  pdf: {
    src: '/media/digup/ui-win-pdf-lease.webp',
    altEn:
      'Windows UI: “the clause about pets in the lease”, PDF page 4 — still from DigUp demo.gif.',
    altZh:
      'Windows 界面：「the clause about pets in the lease」，PDF 第 4 页 — 取自 DigUp demo.gif。',
  },
  multimodal: {
    src: '/media/digup/ui-win-multimodal-dog.webp',
    altEn:
      'Windows search UI: results sidebar grouped by VIDEO / IMAGES / AUDIO / DOCUMENTS, preview pane for content match — still from DigUp demo.gif.',
    altZh:
      'Windows 搜索界面：侧栏按 VIDEO / IMAGES / AUDIO / DOCUMENTS 分组，右侧预览命中内容 — 取自 DigUp demo.gif。',
  },
  code: {
    src: '/media/digup/ui-linux-code-search.webp',
    altEn:
      'Linux UI: code: retry with backoff — still from DigUp demo.gif.',
    altZh:
      'Linux 界面：code: retry with backoff — 取自 DigUp demo.gif。',
  },
  logo: {
    src: '/logo.svg',
    altEn: 'digup.run',
    altZh: 'digup.run',
  },
  sourceNoteEn: '',
  sourceNoteZh: '',
} as const;
