---
title: CC Extensions - unofficial extensions that display the layout of CharaChorder 3D input devices on typing websites
description: Tangent introduces CC Extensions, a set of unofficial browser extensions he developed. They can display the layout of CharaChorder 3D input devices (CharaChorder One, CharaChorder Two, and Master Forge) on Keybr and Monkeytype.
date: 2025-10-19T10:02:03.861Z
updated: 2026-01-06T00:43:58.614Z
categories: [Article, Creation]
alias:
  - /2025/10/17/cc-extensions-unofficial-extensions-that-display-the-layout-of-charachorder-3d-input-devices-on-typing-websites/
  - /2025/10/18/cc-extensions-unofficial-extensions-that-display-the-layout-of-charachorder-3d-input-devices-on-typing-websites/
  - /2025/10/19/cc-extensions-unofficial-extensions-that-display-the-layout-of-charachorder-3d-input-devices-on-typing-websites/
  - /2025/10/20/cc-extensions-unofficial-extensions-that-display-the-layout-of-charachorder-3d-input-devices-on-typing-websites/
  - /2025/10/21/cc-extensions-unofficial-extensions-that-display-the-layout-of-charachorder-3d-input-devices-on-typing-websites/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.com/blog-zh-tw/cc-extensions-能使打字網站顯示-charachorder-3d-輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件們/
---
{% blockquote %}
:information_source: Disclaimer: These extensions are not affiliated, associated, authorized, endorsed by, or in any way officially connected with CharaChorder, Keybr or Monkeytype.
{% endblockquote %}


## Link

### Keybr CC Extension

- [Chrome Web Store](https://chromewebstore.google.com/detail/keybr-cc-extension/fdofhfbipdhkkhhdjlfjnjfnkibpbdpg)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/keybr-cc-extension/)
- [GitHub](https://github.com/andy23512/keybr-cc-extension)
- [Demonstration Video](https://youtu.be/IQWf4IuekFQ)

### Monkeytype CC Extension

- [Chrome Web Store](https://chromewebstore.google.com/detail/monkeytype-cc-extension/mhfjhmegecimjbohhdbflkhdfnaadple)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/monkeytype-cc-extension/)
- [GitHub](https://github.com/andy23512/monkeytype-cc-extension)
- [Demonstration Video](https://youtu.be/nwbKUjUmwD4)

## Feature

- Display the device layout of CharaChorder 3D input device on [Keybr](https://www.keybr.com/) or [Monkeytype](https://monkeytype.com/)
- Allow uploading a custom device layout
- Support changing the position, size and transparency of the device layout
- Support setting for difference OS keyboard layout

## Side topic

### Reason for making these extensions

There are already a few practice tools that show the visual guide of CharaChorder 3D input devices, such as [dot i/o](https://www.iq-eq.io/#/) and [Alnitak](https://andy23512.github.io/alnitak/). These tools provide different strategies for learning the device layout. However, Keybr’s unique learning strategy stands out, which is why many CharaChorder users prefer it. However, there are some users who favor Monkeytype over Keybr.

To better meet the needs of CharaChorder users, I decided to enable Keybr and Monkeytype to display the layout of CharaChorder 3D input devices.

 
### Reason for choosing to make a browser extension

There are many ways to modify an existing open-sourced website like Keybr and Monkeytype, including:

1. Directly contributing to its repo
2. Forking it and hosting the modified website on our own
3. Using extension like [Tampermonkey](https://www.tampermonkey.net/) to inject JavaScript to it
4. Making a browser extension to modify and extend its functionality

About the first way, I've looked into the source code of Keybr. The keyboard geometry logic in it is for 1D keyboards, as you can see in its [layouts page](https://www.keybr.com/layouts). It takes lots of work and review efforts to make it support the CharaChorder 3D keyboard directly. Not to mention the handling of the CharaChorder action codes to support a custom device layout JSON file. On the Monkeytype side, there’s not even basic support for displaying keyboard layouts.

About the second way, besides the efforts to modify the source code, hosting and updating the website is a non-stop work, especially for websites that store users' information on the server. It's also bad for users to have two similar websites with different data.

About the third way, the amount of code to show a dynamic device layout is not small. Also, we need to have a way to teach users from installing Tampermonkey to running the script. It's not a good choice for both the developer side and the user side.

The last one, making a browser extension, is the way I chose. On the developer's side, this prevents me from studying tons of the source code of Keybr and Monkeytype. I just need to figure out how to get the current character, hide the original layout, and show my component on their websites, and I can write other things in this extension. Also, I can freely decide the tech stack and work individually. On the users' side, users only need to go to the web store page, add this extension to their browser, and everything gets done. It is a win-win solution.

### Logo and icon design

Unlike a website, a browser extension requires additional images, such as an icon for the extension section in the browser and a logo for the extension market.

Since Keybr CC Extension is for Keybr, I was inspired by the simple design of Keybr's own logo, which features a section of tilted keyboard layout. The first logo I created for this extension was simply a screenshot of the tilted device layout as shown by this extenion.

![image](https://hackmd.io/_uploads/S1J5rvnkbe.png)

However, when displayed on the browser toolbar, this logo becomes quite small and difficult to recognize, especially using the browser's dark theme.

To address this, I designed a second logo (and now current). This new logo features just a switch, with the north, west and south keys highlighted. The design forms a "C" shape, representing the CharaChorder, and it is recognizable at small sizes.

![icon-128](https://hackmd.io/_uploads/r1QCPP31Zx.png)

For the Monkeytype CC Extension, I created a similar one with Monkeytype's theme.

![icon-128](https://hackmd.io/_uploads/SJyL5eRy-e.png)


### Layout design

When developing the layout component, my initial approach was to copy the SVG from the layout on [Alnitak](https://andy23512.github.io/alnitak/), a practice tool I built for CC 3D input devices, to create a proof-of-concept version. Below is a screenshot from that stage. At this point, the extension could detect the current character in Keybr and highlight the corresponding key in the layout.

![image](https://hackmd.io/_uploads/S11QFOhkZl.png)

As shown, the layout style did not match Keybr's aesthetic. After researching Keybr's theme and styling, I found that the website uses CSS variables for its theme colors and fonts. I decided to adopt these CSS variables and apply them to the layout component. This approach allows the layout to adapt to Keybr's theme settings and ensures visual consistency with the rest of Keybr's elements.

![screenshot-dark-cc1](https://hackmd.io/_uploads/H1p6TO2yZx.png)

![screenshot-m4g-light](https://hackmd.io/_uploads/Bkj0a_2JZe.png)

For Monkeytype, since it also uses CSS variables for theme colors and fonts, I applied the same approach in the Monkeytype CC Extension.

![screenshot-dark-cc1](https://hackmd.io/_uploads/By-ZogCybx.png)

![screenshot-light-m4g](https://hackmd.io/_uploads/HyLbix0yWx.png)

### Reason for choosing React

If you look at the tech stack I use in my other projects, you'll see that I primarily use [Angular](https://angular.dev/) as my frontend framework. Angular is the framework I'm most familiar with, and I use it in my full stack engineer role. However, I am still able to work with other options like [React](https://react.dev/) and [Vue](https://vuejs.org/).

For this extension, I chose to use React instead and rewrote the layout component from Alnitak for two main reasons.

First, Keybr itself is built with React, so using the same library helps avoid unexpected issues that could arise from introducing a different frontend framework or UI library. (Monkeytype is built without any frontend frameworks or UI libraries.)

The second reason is performance. While Angular is well-suited for building complex websites like Alnitak, it is too heavy for simply displaying a device layout component. Therefore, I prefer a lightweight option like React for CC extensions.

### Tech stack

- Chrome extension starter project: [chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)
- Programming language: [TypeScript](https://www.typescriptlang.org/)
- Module bundler: [webpack](https://webpack.js.org/)
- Icon: [Material Icon](https://fonts.google.com/icons)
- Web UI library: [React](https://react.dev/)
- Component library: [MUI](https://mui.com/)
- CSS framework: [Tailwind CSS](https://tailwindcss.com/)
- Web extension API polyfill: [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
- Draggable, resizable and snappable library: [react-moveable](https://www.npmjs.com/package/react-moveable)
- Class name utility: [classnames](https://www.npmjs.com/package/classnames)
- State Management: [Zustand](https://zustand-demo.pmnd.rs/)
- Web extension development CLI tool: [web-ext](https://www.npmjs.com/package/web-ext)
