---
title: Chara - a chord practice tool of CharaChorder 3D input devices developed by Tangent
description: Tangent introduces Chara, the unofficial chord practice tool for CharaChorder 3D input devices that he developed, in this article.
date: 2026-06-22T00:47:21.055Z
updated: 2026-06-22T11:37:11.905Z
categories: [Article, Creation]
alias:
  - /2026/06/20/chara-a-chord-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent/
  - /2026/06/21/chara-a-chord-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent/
  - /2026/06/22/chara-a-chord-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent/
  - /2026/06/23/chara-a-chord-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent/
  - /2026/06/24/chara-a-chord-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/chara-常陳四-tangent-所開發的-charachorder-3d-輸入裝置和弦練習工具/
hackMDUrl: https://hackmd.io/@andy23512/SkWQUWUGMg
---
{% blockquote %}
:information_source: Disclaimer: This tool is not affiliated, associated, authorized, endorsed by, or in any way officially connected with CharaChorder.
{% endblockquote %}

![截圖 2026-06-22 08.53.36](/blog/images/Bkq6v-Lfzl.png)


## Links

- [Chara](https://andy23512.github.io/chara/)
- [GitHub](https://github.com/andy23512/chara)
- <a href="{% post_path tangent-s-suggestion-for-learning-english-chorded-entry-on-charachorder-devices %}#What-is-CHARA-cycle">CHARA cycle</a>

## Features

- Chords page
  - It shows all the chords in your chord library and the practice statistics in each phase.
  - It can load the chord library and the device layout from an input device.
  - Chords can be bookmarked, so they would have a higher priority for entering the cycle.
  - Chords can be blocked, so they would not appear in any phase.
- Adapt, Realize, Accumulate pages.
  - They are practice phases aligning with the CHARA cycle⁠.
  - They automatically choose chords from your chord library into the practice cycle.
  - Practice set size and passing criteria can be configured in the settings page.

## Side Topics

### Naming and Theme Color

While thinking of a name for this chord practice tool, I wanted to align it with my previous practice tool, [Alnitak](https://andy23512.github.io/alnitak/)⁠, so I started collecting star names related to chording or CharaChorder. Chara was the perfect name I finally found. It’s a star name (β Canum Venaticorum), and it’s also a part of the name of CharaChorder. The name of the CHARA cycle also came up from it, so everything could be connected.
Like Alnitak, since Chara is a G-type main-sequence star, the yellow theme color is used in this application.

### Design Concepts

#### Visual Guide

Unlike Alnitak, the visual guide on Chara doesn’t have a text label. This is intended to let the user focus more on the finger action to perform, rather than the keys.

### Tech Stack

- Build System: [Nx](https://nx.dev/)
- Frontend Framework: [Angular](https://angular.dev/)
- Component Library: [Angular Material](https://material.angular.io/)
- State Management System: [@ngrx/signal](https://ngrx.io/guide/signals/)
  - SignalStore + Entity Management
  - `withDevtools` from [@angular-architects/ngrx-toolkit](https://github.com/angular-architects/ngrx-toolkit)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)
- User Agent Parser: [UAParser.js](https://uaparser.dev/)
- Operating System Logo Icon: [font-logos](https://github.com/lukas-w/font-logos)
- Internationalization (i18n) Library: [ngx-translate](https://ngx-translate.org/)
- Loading Bar: [ngx-loading-bar](https://aitboudad.github.io/ngx-loading-bar/)
- Table Module: [AG Grid](https://www.ag-grid.com/)
