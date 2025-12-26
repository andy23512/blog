---
title: Tangent's layout for using Bopomofo Chinese input method with CharaChorder One
date: 2023-05-07T16:27:01.862Z
updated: 2025-12-20T07:23:19.820Z
categories: [Article, Layout]
alias:
  - /2023/05/06/tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one/
  - /2023/05/07/tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one/
  - /2023/05/08/tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one/
  - /2023/05/09/tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one/
  - /2023/05/10/tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/tangent-在-charachorder-one-上的注音輸入鍵盤佈局/
---
{% blockquote %}
:information_source: For anyone who would like to know what Bopomofo or Zhuyin is, here is [an article](https://speechling.com/blog/the-ultimate-guide-to-zhuyin-bopomofo-and-how-to-learn-it/) with a detailed explanation.
{% endblockquote %}


## Bopomofo Layout on CharaChorder One (CC1)

In this section, I will explain some existing Bopomofo layouts and their problems with CC1 first, and then the design, implementation, and updates of my Bopomofo layout.

### Problems of Existing Bopomofo Layouts

#### Standard Bopomofo (標準注音、大千注音)

Standard Bopomofo is the layout I've used since I started to learn Chinese typing.

On a normal keyboard, symbols are placed in the same way as the Bopomofo table, so it is easy to find the location of each symbol if one has already been familiar with Bopomofo. Also, one can input the consonant, rhyme, and medial of a Chinese character at the same time (I call it "Bopomofo chord"). Furthermore, the frequently used symbols (`ㄐㄑㄒㄓㄔㄕ一ㄨㄩ`) are placed near the center of the keyboard (for index fingers). 

However, since CC1's layout is completely different from a normal keyboard, the Bopomofo symbols are not easy to find and learn. And since some Bopomofo symbols are on the number or symbol keys on a normal keyboard (such as `1` for `ㄅ`, `/` for `ㄥ`), one needs to switch the layer to get those Bopomofo symbols when typing on CC1. So it is impossible to do "Bopomofo chord" for every combination of Bopomofo with this layout on CC1.

#### Eten Bopomofo (倚天注音)

Eten is another layout that is designed for users that are familiar with English typing. Its rules for mapping symbols are mainly by sound or shape similarity, so it's easier to learn for those who are familiar with English typing on any keyboard (including CC1). Yes, this is a workable and easier solution without any software modification. But still cannot do "Bopomofo chord" due to the same reason as Standard Bopomofo.

### Make a New Bopomofo Layout - TanChord 41 Bopomofo (TC41)

#### Design (V1)

As mentioned, there are some problems when using CC1 with existing Bopomofo layouts. To let it both easy to learn (easy to find key) and efficient (can do "Bopomofo chord"), a special Bopomofo layout should be designed for CC1, so I came up with the layout below.

![](https://hackmd.io/_uploads/HJ4V6CjNh.png)

The design rules of this layout are:

1. Bopomofo symbols are placed according to the order of the Bopomofo table as possible.
2. Positions of consonants (red keys on image), medials (green keys on image), and rhymes (blue keys on image) are placed in a way that makes all Bopomofo chords possible. (Left hand -> consonant,  Right index/middle finger -> medial. Right thumb/ring finger -> rhyme)
3. Position of the `Dup` key is kept since it cannot be mapped to a Bopomofo symbol in IME and I don't want to affect already-learned English typing on CC1.
4. Positions of frequently used keys are kept as possible, such as `ctrl` (mapped to `command` in Karabiner on my Mac), `backspace`, `enter`, and `(right) space`.
5. Frequently used symbols (`ㄐㄑㄒㄓㄔㄕ一ㄨㄩ`) are placed at the switches of the index and middle fingers.

#### Implementation (V1)

Two things are required to do for implementing the layout. One is to remap keys on CC1, the other is to modify the mapping rule of a Bopomofo IME.

##### Remapping keys on CC1

Bopomofo IME only can map character keys (alphabets, numbers, symbols) to Bopomofo symbols, so I need to replace some non-character keys with character keys if I want those keys to map to Bopomofo symbols in IME. Also considering usage for programming, I replace them with some frequently used symbols in codes. Below is the final CC1 layout after remapping. 

![](https://hackmd.io/_uploads/HJWzu13Nn.png)

And I put the CSV file of my layout here. https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout.csv

##### Modifying Bopomofo IME

The final step is to change the IME's Bopomofo layout. It is really difficult to modify the built-in IME of OS, so I forked an open-sourced Mac Bopomofo IME and changed its layout according to the CC1 layout and the Bopomofo layout I designed (https://github.com/andy23512/McBopomofo/commit/7446337c8cc54a0700f467d26b3c4289cd55a9?diff=split). 

(It seems to be possible to use libchewing on Windows and Unix-like systems and change [this line](https://github.com/chewing/libchewing/blob/e58b36332b06e472c47126ea28652655552346f1/src/common/key2pho.c#L77) to `"/[(-wzg#kcmre|io.{\u,atl$])?bqxfdhpsy;nj};",`.)

At this moment, I finally could have a better Bopomofo layout for my Chinese typing.

#### Updates

##### V2

After some time using this layout, I found a few problems so I made a few adjustments to the layout.

![](https://hackmd.io/_uploads/rywIbxeg6.png)
![](https://hackmd.io/_uploads/Hk1ktlxxT.png)


The adjustments are:

1. All Rhymes (except ㄦ[^err]) are moved to right thumb switches to fit the group of Bopomofo chart. (dup key is moved to the north key of left mouse switch) This change also lets all the frequently used rhymes, `ㄢㄣㄤㄥ`, placed at the thumb 1 switch. It is good for efficiency.
2. All Tones (except Tone1(space)) are moved to right middle switch.
3. ㄩ is moved to right ring switch.

New CC1 layout file: https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout-v2.csv
Update to McBopomofo: https://github.com/andy23512/McBopomofo/commit/14899a112d1032330825fe16f8718d6ecab7021c

##### V3

I found that some keys in shift layer in OS layout (such as `{`) would break Bopomofo chords, so I modified the CC1 layout to solve the problem.

New CC1 layout file: https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout-v3.csv
Update to McBopomofo: https://github.com/andy23512/McBopomofo/commit/e33883e3f7d189bf18d339c7a02d0072899848fc

![localhost_4200_layouts (1)](https://hackmd.io/_uploads/Hk80ZYEEa.png)

##### V4

After some praticing, I found that putting the Tone2~Tone5 on the right middle switch would make the workload of right middle finger too high. (We always need one tone per Chinese word when typing.) So I try spliting them into two switches to see whether it gets better or not.

(No change on CC1 layout)
Update to McBopomofo: https://github.com/andy23512/McBopomofo/commit/35b7eccbe94c184d9edee9d11471076702660ec2

![image](https://hackmd.io/_uploads/r1sZj6tSp.png)

##### V5 (Latest)

I found that typing ㄌ(`/`) would trigger the slash command at ClickUp, so I change the key to `=` and move `/` to left mouse switch.

New CC1 layout file: https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout-v5.csv
Update to McBopomofo: https://github.com/andy23512/McBopomofo/commit/fe53eda098250384d600af04d44e2139dc492fef

![localhost_4200_layouts](https://hackmd.io/_uploads/S1seckdIp.png)

##### V5.1 (Adjustment for mouse actions)

Since the mouse switch at primary layer has been remapped to other keys, I decided to use the mouse actions at the numeric layer, so I added a num lock key at right-ring_2-west of primary layer.

`<` and `>` can be typed with `shift+,` and `shift+.` so they can be removed.

###### Primary Layer

![localhost_4200_layouts](https://hackmd.io/_uploads/By-7Cw_j6.png)

###### Numeric Layer

![localhost_4200_layouts (1)](https://hackmd.io/_uploads/HkzXE__ia.png)

- ②: numeric layer key
- M(arrow): mouse move
- S(arrow): mouse scroll
- LC, MC, RC: mouse left, middle, right click

Device Manager Backup file https://github.com/andy23512/setting-files/blob/master/CharaChorder/backup-ONE-v5.1.json

##### V5.2 (Functional Keys at Numeric Layer)

To make the functional keys more accessible (for me), I remap some keys at the left side of numeric layer to functional keys.

###### Numeric Layer

![localhost_4200_layouts](https://hackmd.io/_uploads/rkWnAPlyA.png)

Device Manager Backup file https://github.com/andy23512/setting-files/blob/master/CharaChorder/backup-ONE-v5.2.json

#### The Name - TanChord 41 Bopomofo (TC41)

Since I came up with <a href="{% post_path tangent-s-progress-for-finding-a-bopomofo-solution-on-master-forge %}#2nd-iteration---TanChord-36-Bopomofo-TC36-V1">another Bopomofo layout for Master Forge</a>, to easily distinguish them, I named the layout here as `TanChord 41`. `Tan` is the abbreviation of my name, `Tangent`. `Chord` is because it's mainly designed for using Bopomofo input method and Bopomofo chords on CharaChorder One. `41` is because it uses 41 keys[^41_keys].

## Side Topics

In this section, there are some side topics related to Chinese typing, Bopomofo, chording, or other setting for CC1.

### Chinese Punctuation

This layout occupies some punctuation keys, such as `[`, `]`, to map to Bomopofo symbols. This would make the corresponding Chinese punctuations unaccessible with these keys. (`[` key for `「`, `]` key for `」`)

Under McBopomofo input method, the solution is to add new key combinations to those punctuations with the feature of user dictionary. And here is the dictionary file I use. https://raw.githubusercontent.com/andy23512/setting-files/master/McBopomofo/data.txt

Then we can use the following key combinations for the punctuations:

|Key|Output|
|-|-|
|`ctrl+,`|`，`|
|`ctrl+.`|`。`|
|`ctrl+'`|`、`|
|`shift+,`(`<`)|`「`|
|`shift+.`(`>`)|`」`|

### Chord

(moved to <a href="{% post_path tangent-s-usages-of-chording %}">this article</a>)

### Bopomofo Password

Bopomofo password is a kind of password that we can make with several Chinese words. It uses the mapping between the standard layout and QWERTY layout. (See [this link](https://www.theverge.com/tldr/2019/3/5/18252150/bad-password-security-data-breach-taiwan-ji32k7au4a83-have-i-been-pwned) for more details if anyone is interested.) So we use the same keystrokes but different input sources (Standard Bopomofo or QWERTY) for typing the Chinese words and the corresponding Bopomofo password.

As it's dependent on the QWERTY layout, I cannot directly type it with my Bopomofo layout, so I made a new OS layout for Bopomofo password with [Ukelele](https://software.sil.org/ukelele/) to mapping between CC1 output and Bopomofo password.

The corresponding OS layout for Bopomofo password on TC41.V5 is as below:
![image](https://hackmd.io/_uploads/HyVN_pdpp.png)

It looks like someone shuffle the positions of all keys on your keyboard, but it's actually the combination of TC41.V5 and the Standard Bopomofo layout. 

For example, when typing `ㄅㄆㄇㄈ...` at TC41.V5, the CC1 actually send out the `7890...` sequence.

```mermaid
sequenceDiagram
CC1->>TC41.V5: 7890...
TC41.V5->>Output: ㄅㄆㄇㄈ...
```

But at Standard Bopomofo, the keyboard actually send out the `1qaz...` sequence. (This is the Bopomofo password of ㄅㄆㄇㄈ...)

```mermaid
sequenceDiagram
Keyboard->>Standard BPMF: 1qaz...
Standard BPMF->>Output: ㄅㄆㄇㄈ...
```

So we just need a Bopomofo password layout to map the output from CC1 `7890...` to corresponding output `1qaz...`, so on this layout, `7890` keys would output `1qaz` respectively.

```mermaid
sequenceDiagram
CC1->>TC41.V5: 7890...
TC41.V5->>Reversed Standard BPMF: ㄅㄆㄇㄈ...
Reversed Standard BPMF->>Output: 1qaz... (BPMF password)
```

So the output of `7890` keys should be `1qaz` on the OS layout respectively, which is the result after doing TC41.V5 mapping and Reversed Standard Bopomofo mapping.

![upload_b72eeab34a7f164d74dcf73a19b18b3c](https://hackmd.io/_uploads/ByoFE7l0p.png)

### Custom Keyboard Shortcut

(moved to <a href="{% post_path tangent-s-accessories-and-software-applications-used-with-input-devices %}#Hammerspoon">this article</a>)

### Possible Bopomofo Approaches on Master Forge (M4G)

(moved to <a href="{% post_path tangent-s-progress-for-finding-a-bopomofo-solution-on-master-forge %}">this article</a>)

### Arpeggiate Problem

The arpeggiate feature is a quick single keystroke after a CC chord that can use to modify a chord, such as modifing the tense, adding a suffix, a prefix or a punctuation. 

I found that CC's punctuation arpeggiate feature is also possible to conflict with Bopomofo chords. 

For example, at my <a href="{% post_path tangent-s-progress-for-finding-a-bopomofo-solution-on-master-forge %}#V2">TC36.V2</a> layout, when I type `問（ㄨㄣ、）`, I chord `ㄨ+ㄣ`(corresponding keys is `t+d`) and then hit the Tone4 `、`(corresponding key is `;`) immediately after the chord. The `;` keystroke would trigger the punctuation arpeggiate feature, so CC device seemed to emit `Space`, `;`, `Arrow Left`, `Backspace` and `Arrow Right` keys.

![](https://hackmd.io/_uploads/S1zHh4VVC.gif)

(`ㄨㄣ` + `Space`(Tone1) is the Bopomofo of the `溫` word. And the `Backspace` keystroke delete that word.

The workaround for now is to turn off the arpeggiate feature.

[^err]: ㄦ is a special rhyme that doesn't have any combinations with other consonants or medials, so we can leave it alone from other rhyme keys. 
[^41_keys]: Although there are 42 keys on the layout, the space key (first tone) usually isn't counted by other Bopomofo input methods, such as Eten 41.
