---
title: Keybr CC Extension - an unofficial browser extension that displays the layout of CharaChorder 3D input devices on keybr
date: 2025-10-19 18:02:03
updated: 2025-10-26 09:18:52
categories: [Article,Creation]
---
{% blockquote %}
:information_source: Disclaimer: This extension is not affiliated, associated, authorized, endorsed by, or in any way officially connected with CharaChorder and Keybr.
{% endblockquote %}

![screenshot-dark-cc1](https://hackmd.io/_uploads/rJgRuNMCeg.png)


## Link

- [Chrome Web Store](https://chromewebstore.google.com/detail/keybr-cc-extension/fdofhfbipdhkkhhdjlfjnjfnkibpbdpg)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/keybr-cc-extension/)
- [GitHub](https://github.com/andy23512/keybr-cc-extension)
- [Demonstration Video](https://youtu.be/IQWf4IuekFQ?si=q_DkxyKOvMsdcqV3)

## Feature

- Display the device layout of CharaChorder 3D input device on [Keybr](https://www.keybr.com/)
- Allow uploading a custom device layout
- Draggable device layout

## Side topic

### Reason for making this extension

There are already a few practice tools that can show the visual guide of CharaChorder 3D input devices, such as [dot i/o](https://www.iq-eq.io/#/) and [Alnitak](https://andy23512.github.io/alnitak/). They provide different learning strategies for users to learn the device layout. However, Keybr’s unique learning strategy is truly outstanding, which is why many CharaChorder users prefer it.

As a result, to better meet the needs of CharaChorder users, I decided to make Keybr support displaying the layout of CharaChorder 3D input devices.

 
### Reason for choosing to make a browser extension

There are many ways to modify an existing open-sourced website like Keybr, including:

1. Directly contributing to its repo
2. Forking it and hosting the modified website on our own
3. Using extension like [Tampermonkey](https://www.tampermonkey.net/) to inject JavaScript to it
4. Making a browser extension to modify and extend its functionality

About the first way, I've looked into the source code of Keybr. The keyboard geometry logic in it is for 1D keyboards, as you can see in its [layouts page](https://www.keybr.com/layouts). It takes lots of work and review efforts to make it support the CharaChorder 3D keyboard directly. Not to mention the handling of the CharaChorder action codes to support a custom device layout JSON file.

About the second way, besides the efforts to modify the source code, hosting and updating the website is a non-stop work, especially for websites that store users' information on the server. It's also bad for users to have two similar websites with different data.

About the third way, the amount of code to show a dynamic device layout is not small. Also, we need to have a way to teach users from installing Tampermonkey to running the script. It's not a good choice for both the developer side and the user side.

The last one, making a browser extension, is the way I chose. On the developer's side, this prevents me from studying tons of the source code of Keybr. I just need to figure out how to get the current character, hide the original layout, and show my component on Keybr, and I can write other things in this extension. Also, I can freely decide the tech stack and work individually. On the users' side, users only need to go to the web store page, add this extension to their browser, and everything gets done. It is a win-win solution.

### Tech stack

- Chrome extension starter project: [chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)
- Programming language: [TypeScript](https://www.typescriptlang.org/)
- Module bundler: [webpack](https://webpack.js.org/)
- Icon: [Material Icon](https://fonts.google.com/icons)
- Web UI library: [React](https://react.dev/)
- CSS framework: [Tailwind CSS](https://tailwindcss.com/)
- Browser extension API polyfill: [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
- Draggable library: [react-draggable](https://github.com/react-grid-layout/react-draggable)
- Class name utility: [classnames](https://www.npmjs.com/package/classnames)
