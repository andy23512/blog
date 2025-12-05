---
title: Alnitak - a practice tool of CharaChorder 3D input devices developed by Tangent
date: 2024-05-01 19:10:38
updated: 2025-12-05 22:51:29
categories: [Article,Creation]
---
{% blockquote %}
:information_source: Disclaimer: This tool is not affiliated, associated, authorized, endorsed by, or in any way officially connected with CharaChorder.
{% endblockquote %}

![截圖 2025-02-19 23.15.27](https://hackmd.io/_uploads/HJR3BOX51l.png)


## Links

- [Alnitak](https://andy23512.github.io/alnitak/)
- [Github](https://github.com/andy23512/alnitak)

## Features

- Layout Lesson
  - 3~4 keys in a small lesson
  - lessons for numbers, letters and symbols
- Device Layout View
  - only show the labels of keys in the current lesson
  - highlight the current key(s) required to type out the character
  - can load the custom layout via the backup json file from device manager website
- Widgets
  - combo counter that counts the number of consecutive correct keystrokes
  - speedometer that shows the current typing speed
- Chord Practice
  - can load the chord list via the backup json file from device manager website
  - can select chords to practice from the chord list
  - only show the labels of keys from the input of the selected chords
  - highlight the keys of current chord
- Layout Viewer
  - can view the final layout (actual output under the seleced OS keyboard layout) by layers and modifier keys (Shift and Alt Graph)
  - search for a key in the layout
  - print the final layout (or generate a pdf file of it)
- Layout Song
  - an AI generated song that can help you that can help you memorize the letter keys on the default layout 

## Side Topics

### Naming and Theme Color

Letting users practice around three things at a time is the first main feature I want this tool to have. (Yes, according to the rule of three.) So about the name, I started with "three" and found a Chinese word, 參. It's the [Financial form](https://en.wikipedia.org/wiki/Chinese_numerals#Ordinary_numerals) of three, and it also can mean "study" with another pronunciation in some contexts.

As a result, the first name of this project is named `typing-san`. The `san` sounds like three in Chinese (三/參) and Japanese ({三|さん}/{参|さん}), so it can mean "typing three or more things". (三 in Chinese can mean "many" in some contexts.)

But this name is too abstract for people who know about neither Chinese nor Japanese, and it's also hard to design a theme from such an abstract name.

Later, I found that a [star mansion](https://en.wikipedia.org/wiki/Star_(Chinese_constellation)) called [參宿 (Three Stars)](https://en.wikipedia.org/wiki/Three_Stars_(Chinese_constellation)), so I decided to name this project as the first star in the Three Stars, [參宿一 (Alnitak)](https://en.wikipedia.org/wiki/Alnitak). 參 can mean study, 宿 can mean place and 一 means one, so 參宿一 can be overtranslated to "**Study** **Place** for CharaChorder **One**" by me. And since the main star of Alnitak is a blue supergiant, I could use this as a theme color in this project, so that's how the theme color of this tool was decided.

### Design Concepts

#### Combo Counter

The combo counter records how many consecutive correct keystrokes have been made til now. Trying to get a higher count can be a different challenge from the typing speed or the accuracy. 

As the number of combo increases, the color of the counter will change in the same way as the [color temperature](https://en.wikipedia.org/wiki/Color_temperature) or the [stellar color](https://en.wikipedia.org/wiki/Stellar_classification), and it pretty fits the name of this project, Alnitak, which is a star name.

#### Speedometer

A speedometer is a great way to visualize the current speed. The current design of speedometer is the result after collecting some dashboard or speedometer designs relating to a classic racing car anime, [Future GPX Cyber Formula](https://en.wikipedia.org/wiki/Future_GPX_Cyber_Formula), and simplifying it to make it less distractive. Also, the donut sector shape really matches with the shape of the key on CC1's layout.

The color of the meter chunk and the speed number are also changed in the same way as the color temperature or the stellar color mentioned above.

### Tech Stack

- Build System: [Nx](https://nx.dev/)
- Frontend Framework: [Angular](https://angular.dev/)
  - [Signal](https://angular.dev/guide/signals) - input, output and computed
  - [Template Syntax - Control Flow](https://angular.dev/guide/templates/control-flow) 
  - [Standalone Components](https://angular.dev/guide/components/importing#standalone-components)
  - [withComponentInputBinding](https://angular.dev/guide/routing/routing-with-urlmatcher#configure-your-routes-for-your-application)
- Component Library: [Angular Material](https://material.angular.io/)
- State Management System: [@ngrx/signal](https://ngrx.io/guide/signals/)
  - SignalStore + Entity Management
  - `withDevtools` from [@angular-architects/ngrx-toolkit](https://github.com/angular-architects/ngrx-toolkit)
- Hotkey Library: [@ngneat/hotkeys](https://github.com/ngneat/hotkeys)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)
- Chart Library: [Highcharts Angular](https://github.com/highcharts/highcharts-angular)
- IndexedDB Wrapper: [Dexie.js](https://dexie.org/)
- Printing Directive: [ngx-print](https://github.com/selemxmn/ngx-print)
- User Agent Parser: [UAParser.js](https://uaparser.dev/)
- Operating System Logo Icon: [font-logos](https://github.com/lukas-w/font-logos)
- Tooltip Library: [@webed/angular-tooltip](https://www.npmjs.com/package/@webed/angular-tooltip)

#### Layout Song

- LLM (used for lyric generation): [Kimi K2 Thinking](https://www.kimi.com/)
- AI-powered music creation: [Suno](https://suno.com/)
- Lyric Timestamp Data Generation: [Stabilizing Timestamps for Whisper](https://github.com/jianfch/stable-ts)

## Other References

- [Blue Giant Color Palette](https://www.color-hex.com/color-palette/28907)
- [Algorithm that converts temperature (K) to RGB](https://tannerhelland.com/2012/09/18/convert-temperature-rgb-algorithm-code.html)
- [FS Sevegment Font](https://fontstruct.com/fontstructions/show/2390233/fs-sevegment)
- [Speedometer Design Reference](https://www.youtube.com/watch?v=kyjPWP7NGuk)
- [OS Keyboard Layout Reference](https://kbdlayout.info/)
