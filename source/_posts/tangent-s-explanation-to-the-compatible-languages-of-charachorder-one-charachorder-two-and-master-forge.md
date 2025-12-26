---
title: Tangent's explanation to the compatible languages of CharaChorder One, CharaChorder Two and Master Forge
date: 2024-09-30T16:20:07.484Z
updated: 2025-11-21T11:30:12.212Z
categories: [Article, Language]
alias:
  - /2024/09/29/tangent-s-explanation-to-the-compatible-languages-of-charachorder-one-charachorder-two-and-master-forge/
  - /2024/09/30/tangent-s-explanation-to-the-compatible-languages-of-charachorder-one-charachorder-two-and-master-forge/
  - /2024/10/01/tangent-s-explanation-to-the-compatible-languages-of-charachorder-one-charachorder-two-and-master-forge/
  - /2024/10/02/tangent-s-explanation-to-the-compatible-languages-of-charachorder-one-charachorder-two-and-master-forge/
  - /2024/10/03/tangent-s-explanation-to-the-compatible-languages-of-charachorder-one-charachorder-two-and-master-forge/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/tangent-對-charachorder-one、charachorder-two-和-master-forge-的相容語言的說明/
---

### TL;DR

1. A normal keyboard sends the scancodes of the keystrokes, and the operating system transforms them into the actual characters according to the keyboard layout settings on it. That's how a normal keyboard can support the input languages supported by the operating system.

2. CC1, CC2 and M4G can also support those languages because their way of sending keystrokes is the same as that a normal keyboard does.

3. When you want CC1, CC2 or M4G to output a symbol on an OS layout other than `QWERTY - US`, you should set the corresponding symbol (at the same position) on the `QWERTY - US` layout to the key or the chord output.

4. Some features only work under QWERTY OS layout or English.
  - Default Chord Library
    - English-only
    - It only works under the QWERTY OS layout.
  - Startup Text, Generative Text Menu (GTM) and Impulse Chord Menu
    - Text interface would be garbled when under a non-QWERTY OS layout.
  - ==[Partial Support]== Device Manager (layout display and chord output)
    - Some keys (ex: shift layer keys) on the layout and chord output show the output under the `QWERTY - US` OS layout but not the current OS layout.
  - Chord Modifier
    - Modification rules are mainly for English.
    - It only works under the QWERTY OS layout.

5. If your language is supported by the [QWERTY - US-intl](https://en.wikipedia.org/wiki/QWERTY#US-International) OS layout, it's an easier solution that prevents you from doing much manual remapping as mentioned in `3.` and facing some problems mentioned in `4.`.

### 1. How can one type different languages on a keyboard?

First, before talking about the language support on CC1, CC2 and M4G, we need to know how one can type different languages on a normal keyboard.

When you hit a key on a keyboard, it doesn't send the symbol on the key to the computer, but an identifier of the key called **scancode[^scancode]**. Then, it is the **operating system** on the computer that converts that scancode to the actual symbol, according to the keyboard layout setting on the OS. (I would call it **OS layout[^os_layout]** in the following.) In this way, we don't need one keyboard per language we want to type, but just switch the OS layout to change to different languages.

Taking the second column (the column contains the `1` number) of a normal keyboard with [QWERTY](https://en.wikipedia.org/wiki/QWERTY) OS layout for example, the following GIF shows the scancode that a keyboard sends, the corresponding symbol on the OS layout and the output.

{% collapsecard "Click to show the GIF" %}  ![螢幕錄影 2024-10-01 01.06.52](https://hackmd.io/_uploads/HyYci8dCA.gif)
{% endcollapsecard %}

And when one switches the OS layout to [QWERTZ](https://en.wikipedia.org/wiki/QWERTZ), as shown in the following GIF, the scancodes of that column on the keyboard are unchanged, but the output character of the `1D` scancode becomes `y` instead of `z`, due to the change of OS layout.

{% collapsecard "Click to show the GIF" %}  ![螢幕錄影 2024-10-01 08.47.58](https://hackmd.io/_uploads/SkAwv6OA0.gif)
{% endcollapsecard %}

Similar things would happen when using other OS layouts, such as [JCUKEN](https://en.wikipedia.org/wiki/JCUKEN).

{% collapsecard "Click to show the GIF" %}  ![tmp](https://hackmd.io/_uploads/B1rWoiYRC.gif)
{% endcollapsecard %}

And so do the OS layouts that need to be used with IME, such as [Standard Bopomofo](https://en.wikipedia.org/wiki/Bopomofo#Input_method).

{% collapsecard "Click to show the GIF" %}  ![tmp2](https://hackmd.io/_uploads/rk2uMnFAR.gif)
{% endcollapsecard %}

### 2. How can one type different languages on CC1, CC2 and M4G?

On CC1, CC2 and M4G (and other CC devices), you can assign characters or actions to any key or any chord output with the [Device Manager](https://charachorder.io/). This only decides the corresponding **scancode** (on the `QWERTY - US` OS layout) that will be sent when the corresponding key or chord is triggered.

For example, if we assign the characters `1`, `q`, `a`, and `z` to the four directions of a switch on CC1, CC2 or M4G with the Device Manager, similar to the QWERTY example of a normal keyboard, the corresponding scancode will be `1E`, `14`, `04` and `1D`. The process after this is the same as the normal keyboard. The following GIF shows a side-by-side comparison of the process between a normal keyboard and CC1 / CC2 / M4G.

{% collapsecard "Click to show the GIF" %}  ![output](https://hackmd.io/_uploads/SyFmKv111e.gif)
{% endcollapsecard %}

As you can expect, when one uses other OS layouts, the scancodes will be converted to the output characters in the same way as a normal keyboard. The following GIFs show the process on other OS layouts.

{% collapsecard "Click to show the GIF (QWERTZ)" %}![output](https://hackmd.io/_uploads/SJWqJy7yJx.gif)
{% endcollapsecard %}

{% collapsecard "Click to show the GIF (JCUKEN)" %}![output](https://hackmd.io/_uploads/rySHgym1yx.gif)
{% endcollapsecard %}

{% collapsecard "Click to show the GIF (Standard Bopomofo)" %}![output](https://hackmd.io/_uploads/B1dMbyX1ye.gif)
{% endcollapsecard %}

So similar to a normal keyboard, you are able to type different languages on CC1, CC2 or M4G by using different OS layouts.

### 3. How can one configure their CC1, CC2 or M4G for other OS layouts?

Due to the limitation of the web browser, the Device Manager website cannot get the whole OS layout from the browser[^keyboard_api]. So some keys (ex: shift layer keys) showing on the layout and the chord output at the Device Manager are the expected output when the OS layout is `QWERTY - US`.

So when you want CC1, CC2 or M4G to output a symbol on an OS layout other than `QWERTY - US`, you should set the corresponding symbol (at the same position) on the `QWERTY - US` layout to the key or the chord output.

For example, assuming that we want a key to output `z` on the `QWERTZ - Germany` OS layout, then we should set `y` to that key on the Device Manager. Because `z` on the `QWERTZ - Germany` and `y` on the `QWERTY - US` are at the same position.

![image](https://hackmd.io/_uploads/SkrdO7Nk1x.png)

It also works for the symbols on the Shift layer. Assuming that we want a key to output `"` on the `QWERTZ - Germany` OS layout, then we should set `@` to that key on the Device Manager.

That's how to configure CC1 / CC2 / M4G with existing OS layouts. If you want to further customize the OS layout, you have to use some additional software. You can find some options on [Layout page on official CC document](https://docs.charachorder.com/Layout.html#the-real-solution) and [Keyboard layout page on Wikipedia](https://en.wikipedia.org/wiki/Keyboard_layout#Layout_changing_software).

#### Non-US additional keys

Some OS layouts have some additional keys than `QWERTY - US`.

##### Non-US # and ~

![image](https://hackmd.io/_uploads/Sk1IcJiskl.png)

The corresponding action code on CC device of this key is `KSC_32 - Keyboard Non-US # and ~`.

![image](https://hackmd.io/_uploads/ry8Wp1ijyx.png)

The corresponding symbols on this key under typical language OS layouts are listed below[^non_us_number_sign_and_tilde].

- US: \|
- Belg: µ\`£
- French Canadian: <}>
- Danish: ’*
- Dutch: <>
- French: *µ
- German: # ’
- Italian: ù§
- LatinAmerica: }\`]
- Norwegian: , *
- Spain: }Ç
- Swedish: , *
- Swiss: $£
- UK: #~

##### Non-US \\ and |

![image](https://hackmd.io/_uploads/r15FOyLGJx.png)

The corresponding action code on CC device of this key is `KSC_64 - Keyboard Non-US \ and |`.

![image](https://hackmd.io/_uploads/ryNoc1IGke.png)

The corresponding symbols on this key under typical language OS layouts are listed below[^non_us_backslash_and_pipe].

- Belg: <\\>
- French Canadian: <°>
- Danish: <\\>
- Dutch: ]|[
- French: <>
- German: <|>
- Italian: <>
- Latin America: <>
- Norwegian: <>
- Spain: <>
- Swedish: <|>
- Swiss: <>
- UK: \\|
- Brazil: \\|

### 4. Which features on CC1, CC2 and M4G only work with QWERTY OS layout and/or English?

Though one can type other languages on CC1, CC2 or M4G using other OS layouts, some additional features provided with CC1, CC2 and M4G only work with QWERTY OS layout and/or English.

#### Default Chord Library

The default chord library is based on the QWERTY layout and English. So if you use a different layout than QWERTY, the output of the chords in the default chord library will not make any sense.

A solution is to make your own chord library on those other languages or layouts.

#### Startup Message, Generative Text Menu (GTM) and Impulse Chord Menu

The startup message and the text interfaces of [Generative Text Menu (GTM)](https://docs.charachorder.com/GenerativeTextMenu.html) and [Impulse Chord Menu](https://docs.charachorder.com/Chords.html#impulse-chording) are generated by keystrokes (i.e. scancodes) from CC or Forge devices. The actual output characters would be affected by OS layout, so the content of the text interface would not make any sense under a non-QWERTY layout.

A solution is to switch the OS layout back to QWERTY before you connect the device, open the GTM or the impulse chord menu.

#### Device Manager (layout display and chord output)

Some keys (ex. keys on shift layer) on The layout and chord output at the Device Manager will show the key on the device layout, in other words, the output of a key or a chord when it is used under `QWERTY - US` layout is shown. It doesn't show the output under other OS layouts. So you would need to transform it to figure out the output under other OS layouts.

#### Chord Modifier

The built-in [chord modifier](https://docs.charachorder.com/Glossary.html#term-Chord-Modifiers) changes the suffix, capitalization, and conjugation of a chord.

The rules of those changes are for English, so it may not work with other languages that have different rules from English. It's not compatible with non-QWERTY layouts either.

### 5. Is there any other solution?

["QWERTY - US Intl"](https://en.wikipedia.org/wiki/QWERTY#US-International) is a OS layout that support multiple languages. Since it's still QWERTY, you might not need much manual remapping mentioned at [3.](#3-How-can-one-configure-their-CC1-CC2-or-M4G-for-other-OS-layouts) and can prevent some compatible problems mentioned at [4.](#4-Which-features-on-CC1-CC2-and-M4G-only-work-with-QWERTY-OS-layout-andor-English).

It's recommended to use "QWERTY - US Intl" if it supports your language.

### References

- [Keyboard layout - Wikipedia](https://en.wikipedia.org/wiki/Keyboard_layout)
- [Layout - CharaChorder Docs](https://docs.charachorder.com/Layout.html)
- "10 Keyboard/Keypad Page" section (page 83~89) on [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf)
- [CCOS language support](https://docs.google.com/document/d/1bY4uaSF9fzd1VlMMZvBnDtDs0fZ-OLdaL-Bo4djQgAs/edit?tab=t.0)

[^scancode]: There are [many sets of scancodes](https://en.wikipedia.org/wiki/Scancode#Scancode_sets). In this article, USB HID keyboard scancodes are used as examples. You can check them in the "10 Keyboard/Keypad Page" section (page 83 to page 89) in [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf).
[^os_layout]: About the OS layout, the Wikipedia page of keyboard layout uses the name ["Functional layout"](https://en.wikipedia.org/wiki/Keyboard_layout#:~:text=on%20those%20keys.-,Functional%20layout,-is%20the%20arrangement). At different places, it is called with many other names, such as keyboard layout, input method, input source, etc. In this article, to clearly distinguish the layout of the input device and the keyboard layout setting on the OS, they are called "Device layout" and "OS layout" respectively.
[^keyboard_api]: The closest thing is the [Keyboard API](https://developer.mozilla.org/en-US/docs/Web/API/Keyboard_API) supported by some of the browser. But at the written time, it only can get the unmodified output (i.e. the output without modifiers like `Shift` or `AltGraph`) of the keys.

[^non_us_number_sign_and_tilde]: This information is from reference #5 at page 89 of [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf).

[^non_us_backslash_and_pipe]: This information is from reference #9 at page 89 of [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf).
