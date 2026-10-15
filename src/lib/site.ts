export const SITE = {
  name: 'digup.run (unofficial)',
  url: 'https://digup.run',
  upstreamRepo: 'https://github.com/ARahim3/DigUp',
  upstreamReleases: 'https://github.com/ARahim3/DigUp/releases',
  brewCask: 'brew install --cask arahim3/tap/digup',
  disclaimerEn:
    'Unofficial coverage site. digup.run is an independent informational / keyword site about the open-source DigUp project. It is not affiliated with, endorsed by, or operated by ARahim3 or the DigUp maintainers. DigUp is MIT-licensed open source; trademarks and product names belong to their owners. For downloads and support, use the official repository: github.com/ARahim3/DigUp and Releases. This site does not host DMG, EXE, or other binaries.',
  disclaimerZh:
    '非官方介绍站。digup.run 是关于开源项目 DigUp 的独立信息 / 关键词站点，与 ARahim3 或 DigUp 维护者无隶属、无背书、无运营关系。DigUp 为 MIT 开源；商标与产品名归其权利人所有。下载与支持请前往官方仓库 github.com/ARahim3/DigUp 与 Releases。本站不托管 DMG、EXE 或其他二进制安装包。',
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

/** Official DigUp UI stills extracted from upstream docs/demo.gif (ARahim3/DigUp). */
export const DIGUP_UI = {
  hero: {
    src: '/media/digup/ui-mac-video-zebra.webp',
    altEn:
      'DigUp search panel on Mac: query “zebra in a video”, result list with Masai Mara video at 0:42 and Open at 0:42 — still from official upstream demo.gif (unofficial site).',
    altZh:
      'DigUp Mac 搜索面板：查询「zebra in a video」，结果列表含 Masai Mara 视频定位到 0:42，并显示 Open at 0:42 — 取自官方上游 demo.gif 静帧（本站非官方）。',
  },
  audio: {
    src: '/media/digup/ui-mac-audio-sleep.webp',
    altEn:
      'DigUp Mac UI: query “where they talk about sleep”, audio result open near 7:55 — still from official ARahim3/DigUp docs/demo.gif.',
    altZh:
      'DigUp Mac 界面：查询「where they talk about sleep」，音频结果定位约 7:55 — 取自官方 ARahim3/DigUp docs/demo.gif 静帧。',
  },
  pdf: {
    src: '/media/digup/ui-win-pdf-lease.webp',
    altEn:
      'DigUp Windows UI: query “the clause about pets in the lease”, PDF Lease page 4 preview — still from official upstream demo.gif.',
    altZh:
      'DigUp Windows 界面：查询「the clause about pets in the lease」，PDF 租约第 4 页预览 — 取自官方上游 demo.gif 静帧。',
  },
  multimodal: {
    src: '/media/digup/ui-win-multimodal-dog.webp',
    altEn:
      'DigUp Windows UI: query “a dog on the beach”, multimodal result list (images, video, audio, PDF) — still from official upstream demo.gif.',
    altZh:
      'DigUp Windows 界面：查询「a dog on the beach」，多模态结果列表（图片、视频、音频、PDF）— 取自官方上游 demo.gif 静帧。',
  },
  code: {
    src: '/media/digup/ui-linux-code-search.webp',
    altEn:
      'DigUp Linux UI: code: search for retry with backoff, CODE results and Open — still from official upstream demo.gif.',
    altZh:
      'DigUp Linux 界面：code: 搜索 retry with backoff，CODE 结果与打开 — 取自官方上游 demo.gif 静帧。',
  },
  logo: {
    src: '/media/digup/logo.webp',
    altEn: 'DigUp logo from official ARahim3/DigUp docs/logo.png (unofficial coverage site).',
    altZh: 'DigUp 标志，来自官方 ARahim3/DigUp docs/logo.png（本站为非官方介绍）。',
  },
  sourceNoteEn:
    'UI stills extracted from the official DigUp demo (docs/demo.gif) and logo (docs/logo.png) in ARahim3/DigUp. Illustrative; digup.run is unofficial.',
  sourceNoteZh:
    '界面静帧取自官方 DigUp 演示（docs/demo.gif）与标志（docs/logo.png，仓库 ARahim3/DigUp）。仅作示意；digup.run 为非官方站点。',
} as const;
