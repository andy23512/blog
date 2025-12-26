---
title: Tangent's Latest Layout on CharaChorder One, CharaChorder Two and Master Forge
date: 2024-11-03T01:08:44.871Z
updated: 2025-12-12T12:47:07.484Z
categories: [Article, Layout]
alias: /tangent-s-latest-layout-on-charachorder-one-charachorder-two-and-master-forge/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/2024/11/03/tangent-在-charachorder-one、charachorder-two-和-master-forge-上的最新佈局/
---

### Preface

I wrote two articles about <a href="{% post_path tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one %}">how I designed the layout for Bopomofo input method on CC1</a> and <a href="{% post_path tangent-s-progress-for-finding-a-bopomofo-solution-on-master-forge %}">M4G</a>. They are like progress notes for my layout, including what problems I faced and how I solved them.

However, it may be hard to trace the reason behind each remapped keys on my layout in those two articles, so in this article, I would break down my latest layout (<a href="{% post_path tangent-s-progress-for-finding-a-bopomofo-solution-on-master-forge %}#V2">TC36.V2</a>) and explain why I remap those keys.

### Primary Layer

#### Placing Symbols on Home Row

![localhost_4200_layouts (3)](https://hackmd.io/_uploads/SJh3sUV-ke.png)

Corresponding Bopomofo layout:
![localhost_4200_layouts](https://hackmd.io/_uploads/ByF157m7kx.png)


The Bopomofo IME can only map character keys (alphabets, numbers, and symbols) to Bopomofo symbols, so some non-character keys on the home row are replaced with symbol keys. Those symbol keys don't hold shift, so that they won't affect the chords (both CC chords and Bopomofo chords).

These symbol keys are also useful when programming.

#### Placing the Replaced Non-character Keys

![localhost_4200_layouts (2)](https://hackmd.io/_uploads/S1HFjUNbyg.png)

Then I should find places for the non-character keys replaced by symbols. Similar to the default layout of M4G, I place them on the ring middle switches.

`LW` and `RW` are `Left GUI` and `Right GUI` keys. （Windows keys on Windows, or Command keys on Mac） They are actually `Ctrl` keys on my Mac since I use Karabiner to swap the `Ctrl` and `Command` keys on CC1, CC2 and M4G.

#### Numeric Layer Lock

![localhost_4200_layouts (4)](https://hackmd.io/_uploads/HkIfT8E-Jg.png)

Since the mouse switches on the primary layer are occupied by some non-character keys, I use the mouse actions on the numeric layer instead. I remap a numeric layer lock key to lock the device to the numeric layer. (And the original num-shift keys are used to unlock.)

### Numeric Layer

#### Placing Function Keys to Left Half

![localhost_4200_layouts (3)](https://hackmd.io/_uploads/B1wp0YtMWg.png)

To make the function keys more accessible, I remap them to the left half of the numeric layer.

#### Placing Mouse Actions

![localhost_4200_layouts (4)](https://hackmd.io/_uploads/HyMARFtf-g.png)

- M(arrow): mouse move
- S(arrow): mouse scroll
- LC, MC, RC: mouse left, middle, right click

As mentioned above, I use the mouse actions on the numeric layer. I place the mouse actions on the middle row, so I can shift my hands down to it (i.e. The tips of my thumb, middle finger, and ring finger are on the corresponding middle switches.). I call it `mouse mode`.

There are all three click actions on both the left and right thumb middle switches, so I can access all the mouse actions with one hand.
