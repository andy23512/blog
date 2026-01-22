---
title: TanChord Code (TC Code) - an unofficial, experimental code editor for the chord library of CharaChorder device
description: Tangent introduces TanChord Code (TC Code) in this article. It's an unofficial, experimental editor that allows you to edit the chord library of your CharaChorder device, similar to editing code in a code editor.
date: 2025-11-23T06:46:22.184Z
updated: 2025-11-24T14:06:10.822Z
categories: [Article, Creation]
alias:
  - /2025/11/21/tanchord-code-tc-code-an-unofficial-experimental-code-editor-for-the-chord-library-of-charachorder-device/
  - /2025/11/22/tanchord-code-tc-code-an-unofficial-experimental-code-editor-for-the-chord-library-of-charachorder-device/
  - /2025/11/23/tanchord-code-tc-code-an-unofficial-experimental-code-editor-for-the-chord-library-of-charachorder-device/
  - /2025/11/24/tanchord-code-tc-code-an-unofficial-experimental-code-editor-for-the-chord-library-of-charachorder-device/
  - /2025/11/25/tanchord-code-tc-code-an-unofficial-experimental-code-editor-for-the-chord-library-of-charachorder-device/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.com/blog-zh-tw/tanchord-code-tc-code-非官方的、實驗性的-charachorder-和弦庫代碼編輯器/
---

{% blockquote %}
:information_source: Disclaimer: This editor is not affiliated, associated, authorized, endorsed by, or in any way officially connected with CharaChorder.
{% endblockquote %}

![localhost_4300_](https://hackmd.io/_uploads/SkO7J4xbZl.png)

## Links

- [TanChord Code](https://andy23512.com/tccode/)
- [GitHub](https://github.com/andy23512/tccode)
- <a href="{% post_path tanchord-code-library-tccl-language-reference %}">TanChord Code Library (TCCL) language reference</a>

## TCCL language

This editor allows you to describe the chord library with a format similar to the [chord notation](https://docs.charachorder.com/Chords.html#chord-notation) described in the CharaChorder official document. I call this language TanChord Code Library language, or TCCL for short.

## Features

- Loading chords from various sources
  - CharaChorder device
  - JSON backup file of the official device manager
  - TCCL or TXT file in TCCL format
- Editing chords in a code editor
  - Syntax error and duplicated chords checking
  - Support popular keybindings (classic / emacs / vim)
- Saving chords to CharaChorder device or file

## Side topics

### Reason for making this editor

As I mentioned in <a href="{% post_path tangent-s-usages-of-chording %}">my article about my usage of chords</a>, the CC chords and Bopomofo chords will conflict if they have the same input. It takes much effort to check it every time before adding new chords with impulse chords or device manager, and sometimes I forget to check it. Checking for the duplicated chords is also a hassle.

As a software engineer, I had an idea. We can edit our chord library in a code editor, which would do all the necessary checks, like when we write a program. This is how the idea of this editor came out.

### Naming

For the name of this editor, I initially considered "Chord Studio Code" (a play on Visual Studio Code, a popular code editor) or "Chord Editor". But these names are too general, so I decided to mix my name, Tangent, into it. That's why it's called "TanChord Code".

### Logo design

![andy23512.com_tccode_](https://hackmd.io/_uploads/r1DYsVgbbx.png)

If you look at the strokes, the logo is composed of two circles and one line. The line is both a tangent of the inner circle and a chord of the outer circle. It echoes with the "TanChord" part in the name.

And if you look at the coloring areas, the logo is made of a teal "C", a black "O", and a red "D". This can mean "code" if we ignore the silent "e", or a possible chord, "c+o+d = code".

## Tech stack

- Build System: [Nx](https://nx.dev/)
- Frontend Framework: [Angular](https://angular.dev/)
- Component Library: [Angular Material](https://material.angular.io/)
- State Management System: [@ngrx/signal](https://ngrx.io/guide/signals/)
- Code Editor Library: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
  - Vim Keybinding: [monaco-vim](https://www.npmjs.com/package/monaco-vim)
  - Emacs Keybinding: [monaco-emacs](https://www.npmjs.com/package/monaco-emacs)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)
- Parser Generator: [ANTLR](https://www.antlr.org/)
  - TypeScript Runtime: [antlr4ng](https://www.npmjs.com/package/antlr4ng)
  - CLI Tool: [antlr-ng](https://www.npmjs.com/package/antlr-ng)
  - Code Completion Core: [antlr4-c3](https://www.npmjs.com/package/antlr4-c3)
- Indent Detection: [detect-indent](https://www.npmjs.com/package/detect-indent)
- Tree Difference: [tree-object-diff](https://www.npmjs.com/package/tree-object-diff)
