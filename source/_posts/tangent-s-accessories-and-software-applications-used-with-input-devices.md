---
title: Tangent's Accessories and Software Applications used with input devices
date: 2024-12-24T16:25:20.667Z
updated: 2025-03-04T02:51:52.563Z
categories: [Article, Other]
alias: /tangent-s-accessories-and-software-applications-used-with-input-devices/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/tangent-的輸入裝置周邊配件和軟體應用程式/
---

### Accessories

#### Hand Protection

As mentioned in <a href="{% post_path tangent-s-progress-for-charachorder-one-charachorder-two-and-master-forge %}#1-How-I-Meet-CharaChorder-One-CC1">my CC1 and CC2 progress article</a>, I had some pain problems on my index fingers and wrists, mainly due to the long-term bad typing habit. To reduce the problem, I bought the half-finger gloves, wrist bands, and finger splint from [Copper Compression](https://www.coppercompression.com/). They do a good job of reducing my pain. Even now, I sometimes use my CC2 with those gloves, and my hands feel twice as comfortable.

#### Keyboard Tray

The desk I use my computers on doesn't have a built-in keyboard tray, and the keyboard placed on it is too high for my hands. I found that this might be another cause of my hand problems, so I bought a keyboard tray that can be installed under my desk.

[This keyboard tray](https://www.ergomap.com.tw/product/kt_mcb33/) is the one I bought. However, it can only be shipped to the mainland and outlying islands of Taiwan. You can probably find similar ones that can ship to your country from other companies.

### Software Applications (on MacOS)

#### Karabiner

[Karabiner](https://karabiner-elements.pqrs.org/) is the application I use to remap the key on the software side.

With it, I swap the command keys and ctrl keys on my CC2, and remap the right option key to ctrl key on my normal keyboards.

#### Hammerspoon

[Hammerspoon](https://www.hammerspoon.org/) is a tool for powerful automation of MacOS. I use it to automatically snap windows to grid and add nome hotkeys.

##### Input Sources

I have four input sources on my Mac computer. They are ABC (English), Zhuyin (Mac built-in), McBopomofo (with my custom  Bopomofo layout for CC1, CC2, and M4G), and Japanese.

To quickly switch to a certain input method, I have the following shortcuts. (https://github.com/andy23512/setting-files/blob/7360eae2f7980aa295c99575b98ee1874a448c2b/Shell/init.lua#L224-L263)

|Shortcut|Changes|
|-|-|
|`cmd+alt+a`|Others -> ABC  or  ABC -> McBopomofo|
|`cmd+alt+b`|Others -> Zhuyin  or  Zhuyin -> ABC|
|`cmd+alt+m` or `cmd+m`|Others -> McBopomofo  or  McBopomofo -> ABC|
|`cmd+alt+j`|Others -> Japanese  or  Japanese -> ABC|

(I often accidentally triggered `cmd+m` when I want to use `cmd+alt+m`, so I [turn off the default `cmd+m` hotkey](https://apple.stackexchange.com/questions/115562/how-do-i-disable-the-minimize-command-m-shortcut) and let it do the same thing as `cmd+alt+m`.)

##### Window Arrangement

To easily arrange the window positions or sizes without much mouse dragging, I set several shortcuts and auto grid snapping. (https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L17-L197)

The shortcuts are:

|Shortcut|Action|
|-|-|
|`cmd+alt+[2-8]`|Set grid to [2-8] x 2.|
|`cmd+alt+g`|Start the interactive window resize/reposition process. Handy for adjusting multiple windows in one go.|
|`cmd+alt+s`|Snap all windows to grid.|
|`cmd+alt+[`|Set the focused window to the left half of the screen.|
|`cmd+alt+]`|Set the focused window to the right half of the screen.|
|`cmd+alt+\`, `cmd+alt+`:arrow_down: |Set the size of the focused window to half of the screen and center it.|
|`cmd+alt+r`|Resize the focused window into a grid row.|
|`cmd+alt+;`|Set the focused window to the cell at the top-right corner.|

##### Mouse Teleport

To move the mouse cursor faster on a dual-wide screen, I set several shortcuts for teleporting the mouse horizontally. (https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L231-L252)

The mouse cursor will be moved to the corresponding line when `alt+shift+[1-5]` is triggered.

![image](https://hackmd.io/_uploads/ryfRjCb06.png)

##### Switch to Application

To switch between applications faster, I set several shortcuts for it. (https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L254-L266)

|Shortcut|Application|
|-|-|
|`cmd+alt+v`|Visual Studio Code - Insider|
|`cmd+alt+c`|Google Chrome|
|`cmd+alt+i`|iTerm|

##### Volume Control

To control the volume faster, I set two shortcuts to increase and decrease volume by 10%. (https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L268-L282)

|Shortcut|Action|
|-|-|
|`cmd+alt+`:arrow_right:|Increase Volume by 10%|
|`cmd+alt+`:arrow_left:|Decrease Volume by 10%|

#### Raycast

[Raycast](https://www.raycast.com/) is a collection of powerful productivity tools all within an extendable launcher. I use it to open applications, web pages, VSCode projects, etc.
