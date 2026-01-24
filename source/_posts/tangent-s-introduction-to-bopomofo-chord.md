---
title: Tangent's Introduction to Bopomofo Chord
description: Tangent explains what is Bopomofo Chord in this article.
date: 2024-09-14T00:50:39.253Z
updated: 2024-11-28T16:05:59.621Z
categories: [Article, Language]
alias:
  - /2024/09/12/tangent-s-introduction-to-bopomofo-chord/
  - /2024/09/13/tangent-s-introduction-to-bopomofo-chord/
  - /2024/09/14/tangent-s-introduction-to-bopomofo-chord/
  - /2024/09/15/tangent-s-introduction-to-bopomofo-chord/
  - /2024/09/16/tangent-s-introduction-to-bopomofo-chord/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.com/blog-zh-tw/tangent-對注音和弦的介紹/
---

## Preface

I found that it's quite hard to search things on the internet with English about Bopomofo chord mentioned in my other articles. Maybe there is no official or general translation for this thing, so I decided to write this article to explain Bopomofo chord in detail.

## What is Bopomofo?

According to [Wikipedia](https://en.wikipedia.org/wiki/Bopomofo), Bopomofo is a transliteration system for Standard Chinese and other Sinitic languages. It's used to transcribe all possible sounds in Mandarin, i.e., the sound of every Chinese character can be described by Bopomofo.

For example, `你好` (Hello in English) has two Chinese characters. The Bopomofo of `你` here is `ㄋㄧˇ`, and the Bopomofo of `好` here is `ㄏㄠˇ`. (Same Chinese character may have different pronciations at different places.)

There are three kinds of Bopomofo symbols, consonants, medials and rhymes. The Bopomofo of a Chinese character has at most one consonant, one medial and one rhyme, and it must have a tone.

## What is Bopomofo input method?

We can type Chinese character with Bopomofo input method. For example, we have [all of the Bopomofo symbols and tones on a normal keyboard](https://en.wikipedia.org/wiki/Bopomofo#/media/File:Keyboard_layout_Zhuyin.svg), and can type a Chinese character by inputing the Bopomofo of it to the Bopomofo input method.

For example, this is how `你好` is typed under a Bopomofo input method. The Bopomofo would be converted to Chinese character when it's finished with a tone, so you would not see the tone mark.

![螢幕錄影 2024-09-14 09.43.49](https://hackmd.io/_uploads/BycXswz6C.gif)

## What is Bopomofo chord?

Since the Bopomofo of a Chinese character has at most one consonant, one medial and one rhyme, if they are at different key under a Bopomofo layout, the order of inputing them doesn't matter. They can be input simultaneously[^simultaneously] in modern Bopomofo input method.

It's called "聲韻並擊" in Chinese. Its literal translation is "typing the consonant (聲母) and the rhyme (韻母) simultaneously". But I think "Bopomofo chord" is shorter and easier to understand for anyone who already know chorded input, especially for users of CharaChorder device. 

For example, I can type `ㄋㄧ` and `ㄏㄠ` simultaneously for `你好`. This is how Bopomofo chord works.

![未命名](https://hackmd.io/_uploads/HJHTmufTC.gif)

[^simultaneously]: This "simultaneous" of Bopomofo chord is pretty looser than CC's chord. Actually it doesn't have any timing interval (press/release tolerance) limitation as CC devices. It's just because one can input those three kinds of Bopomofo symbols in any order. Even if one misses or mistypes a symbol in the chord, they could fix it with additional keystrokes without redoing the chords. For example, one tries the `ㄑㄧㄢ` chord but misses the `ㄢ` key, and they can trigger the `ㄢ` key later to fix this. In other word, one can type a word with either full chord, a partial chord + single keystroke(s), or full single keystrokes. It's some sort similar to the "Fluid Chord/Character Entry" of CC devices.
