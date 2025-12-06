---
title: Tangent's Collection of CharaChorder Tips
date: 2025-11-26 20:42:54
updated: 2025-12-06 11:44:05
categories: [Note,Resource]
---

## Preface

This notes collect many CharaChorder tips. Most of them are from the CharaChorder Discord server.

## Preparation

### Things to do when waiting for the device

You can check out <a href="{% post_path tangent-s-suggestions-for-learning-english-character-entry-on-charachorder-3d-input-devices %}#Memorize-device-layout-without-device">the "Memorize device layout without device" section in my article on suggestions for learning character entry</a>.

### Hand placement on CC1/2

You can check [this video](https://www.youtube.com/watch?v=GXvsBoK55B8&feature=youtu.be) for guidance on the recommended way of hand placement for CC1 and CC2.

## Key

### Find the position of a key 

You can use [the layout viewer in Alnitak](https://andy23512.github.io/alnitak/layout-viewer), which I developed, to search for a key. Click the magnifying glass icon at the top right, enter the key name or character, and select a search result. The layout viewer would highlight the key in the layout chart.

By default, the layout viewer shows the CC1/CC2 default layout. If your device is Master Forge, you can change this in the settings page.

### Symbol keys

Some symbols may be complex to type because you need to hold down both Num-Shift and Shift. You can remap these keys to locations that are easier for you to reach. For example, you could swap the number keys on one side of the numeric layer with their corresponding symbol keys.

![image](https://hackmd.io/_uploads/B11CXHd--e.png)

### Helpful hot keys

There are some helpful hot keys for typing.

||Windows|Mac|
|-|-|-|
|Move the cursor to previous word|ctrl + :arrow_left:|option + :arrow_left:|
|Move the cursor to next word|ctrl + :arrow_right:|option + :arrow_right:|
|Move the cursor to the beginning of line|home|cmd + :arrow_left:|
|Move the cursor to the end of line|end|cmd + :arrow_right:|
|Delete the word to the left of the cursor|ctrl + backspace|option + backspace|
|Delete the text from the cursor's current position to the beginning of the line||cmd + backspace|

## Character entry

### Learning

You can check out <a href="{% post_path tangent-s-suggestions-for-learning-english-character-entry-on-charachorder-3d-input-devices %}">my article on suggestions for learning character entry</a>.

### Alternate space

On the default layout of CC 3D input devices, there are two space keys. Some users alternate between them to increase typing speed. For further details, refer to [the section "Tech: Using both space keys" on this outdated wiki page](https://charachorder.notion.site/Typing-Exercises-a5adbdac10024675820be9f6c74a4994#:~:text=Tech%3A%20Using%20both%20space%20keys).

### Prevent double letters

If you encounter the unexpected double-letter problem, try making quick flicks on the keys to avoid holding them down too long. If the issue persists, consider increasing [the debounce press and release settings](https://docs.charachorder.com/Device%20Manager.html#character-entry).

## Chorded entry

### KSC_00

If a chord's output includes the "KSC_00 - No key pressed" action, the CC device won't automatically add a space at the end when triggered. Adding this action to the chord output can help avoid issues caused by automatic spaces in certain situations, such as when using IMEs.

### 2-letter chords

2-letter chords, especially when the two letters form a common bigram, are easy to trigger by mistake when you do character entries. Most users recommend avoiding them.

### Functional chords

There are some functional chords available. These are not built-in, but you can [load them from the library tab in the device manager](https://docs.charachorder.com/Device%20Manager.html#library).

The functional chords include:

- X actions: Press a key (such as delete, backspace, or any arrow key) multiple times
- Cursor wrap: Type a pair of symbols (like parentheses) and move the cursor between them
- Caps Lock
- Backspace once, then type `!` or `:` followed by a space

### Things to try when chording is hard

When you find a chord that is complex for you, here are things you can try:

1. Use [the chord timing diagnostic tool](https://typing-tech.github.io/CharaChorder-utilities/#/chord-tools?tab=3) to check on which key(s) you miss the timing, and adjust your movement until you can constantly trigger the chord successfully.
2. Use the [spurring](https://docs.charachorder.com/Device%20Manager.html#spurring) mode.
3. When you think the key combination of a chord is too complex for your hands, you can [make an easier chord](https://docs.charachorder.com/Chords.html#how-do-i-make-chords) for the same output instead.
4. When you have difficulty with many chords, you can try increasing the [press and release tolerance](https://docs.charachorder.com/Device%20Manager.html#chording).

### Avoid some previous characters being removed when doing a chord

Unexpected character removal happens when the timing between the previous character entries and the chord is too short. It causes CC devices to incorrectly treat previously entered characters as failed chord attempts, resulting in more backspaces than expected.

Especially, it would happen if you chord right after entering insert mode in Vim.

There are some ways to avoid this issue:

- Hit Ctrl before the chord.
- Change the max attempt of [auto correct setting](https://docs.charachorder.com/Device%20Manager.html#autocorrect) to 0.

### Diagonal presses (Chords with multiple input keys on the same stick)

There is [a video about how to do a diagonal press](https://youtu.be/H5aES55JRUs?si=QWr5mEJtPYtVp1KC). If you still feel hard after trying, you can change the input of the chord. For example, you can swap a key with its mirrored key, such as swap the c key with the d key.

### Prevent chord confliction

It's not possible to have two chords with the same chord input at the same time. For some words with the same letter set, such as `art`, `tar`, and `rat`, you can add additional keys, like `Alt`, `''` or `Dup`, to make them have different chord inputs.

## Mouse

### Changing mouse speed

There are four mouse speeds in CC devices.

1. Fast mouse: Hold both mouse keys in the same direction.
2. Slower Fast mouse: Hold Num-shift and both mouse keys in the same direction 
3. Slow mouse: Hold a mouse key in any direction
4. Slowest mouse: hold Num-shift and a mouse key in any direction

You could change the mouse speed setting via [the device manager](https://docs.charachorder.com/Device%20Manager.html#mouse) or [GTM](https://docs.charachorder.com/GenerativeTextMenu.html#mouse).

## Other

### Mac keyboard identify dialog

When you connect your CC device to a Mac for the first time, your Mac will attempt to identify what type of keyboard you have. A screen will pop up, asking you to press the Shift key to the left of the space bar. You may close this screen. Your device should work.

### Other languages and layouts

If you want to use a CC 3D input device in an OS keyboard layout other than QWERTY-US or a language other than English, you can check <a href="{% post_path tangent-s-explanation-to-the-compatible-languages-of-charachorder-one-charachorder-two-and-master-forge %}">my article about it</a>.

I also made a [layout viewer](https://andy23512.github.io/alnitak/layout-viewer) to view the final output across different OS layouts. It shows the CC1/CC2 default layout by default, and you can change it to the Master Forge (M4G) default layout on the settings page.

## Tip list on other websites

### Video

- [ChorderClub Essentials - YouTube](https://www.youtube.com/playlist?list=PL5UG1PKtBJF7JQxwee2AwmUA2137eMHXL)
- [CharaChorder Beginner Tips - YouTube](https://www.youtube.com/watch?v=ZJAXwuhwROI)

### Document

- [CharaChorder One Wiki](https://charachorder.notion.site/CharaChorder-One-Wiki-f6f24cdfa4f94df7988d48e9b69fbacc)
  - "Learn to Type" and "Learn to Chord" sections are helpful.
- [CharaChorder Builder](https://docs.google.com/spreadsheets/d/1ZiVmLQewM9AFnHXMyyWmq5UpMn3w8RCFe9kPOmYsC4Y/edit?gid=582376771#gid=582376771)
- [Tips at device manager](https://github.com/CharaChorder/DeviceManager/blob/master/src/lib/assets/random-tips/en.json)
- [Design the layout section at CharaChorder document](https://docs.charachorder.com/Layout.html#design-of-the-layout)

