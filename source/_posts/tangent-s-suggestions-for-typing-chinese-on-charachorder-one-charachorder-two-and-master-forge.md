---
title: Tangent's suggestions for typing Chinese on CharaChorder One, CharaChorder Two and Master Forge
date: 2024-07-16T09:53:09.745Z
updated: 2025-02-19T11:27:42.634Z
categories: [Article, Language]
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/2024/07/24/tangent-對在-charachorder-one、charachorder-two-或-master-forge-上打中文的建議/
---

## TL;DR

- No device layout and IME modification + Built-in[^built_in]
  - Cangjie (倉頡)
  - Pinyin (拼音)
- No device layout and IME modification + Not built-in
  - Boshiamy (嘸蝦米)
  - Eten 26 Bopomofo (倚天26鍵注音) or Hsu Bopomofo (許氏注音)

## Preface

I've taken a lot of effort to design, implement, update and practice <a href="{% post_path tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one %}">my own Bopomofo input method for CC1</a> and <a href="{% post_path tangent-s-progress-for-finding-a-bopomofo-solution-on-master-forge %}">M4G</a>. But these solutions require modifying either or both of the IME and the device layout.

This makes me curious about some possible conditions. Assuming that a user want to type Chinese on CC1, CC2 or M4G. What if they don't want to or they cannot modify IME and device layout for this? What if they can only use the built-in IME on the OS of the computer?

So in this article, I am going to suggest some Chinese IMEs under those conditions.

Note that:
1. I would focus on suggest IMEs that are **suitable for CC1, CC2 and M4G**. It **doesn't** mean that these IME themselves are better than other IMEs.
2. I am a Traditional Chinese user, so most of the IMEs I know are mainly for Traditional Chinese. But since I would explain the reasons for the suggestions, you could follow the same fashion to find suitable one for other types of Chinese.
3. Some third-party IME softwares are paid ones, are limited in a certain OS, or may contain malwares, so pay attention to these things and only install from trustworthy websites.

## Introduction for types of Chinese IME

I think a brief knowledge for the types of Chinese IME is important for one choosing a Chinese IME to learn, so here I will introduce the two types of Chinese IMEs and their pros and cons.

### Phonetic-based

On this type of IME, user inputs the pronunciation of a Chinese character to type it. So if you already know the phonetic methods (like [Pinyin](https://en.wikipedia.org/wiki/Pinyin) or [Bopomofo](https://en.wikipedia.org/wiki/Bopomofo)) and the pronunciations of enough Chinese character, what you type is actually what you speak. It's generally **easier to learn** than the Shape-based IMEs, but generally **slower** due to choosing between the Chinese characters that share the same pronunciation.

P.S.: For hyper speed Chinese typing, there are some IMEs or steno machines, such as [追音輸入法](https://www.text.tw/chasew) and [亞偉速錄](https://zh.wikipedia.org/zh-tw/%E4%BA%9A%E4%BC%9F%E9%80%9F%E5%BD%95), that are phonetic-based and use chorded input to make typing extremely fast, but they are harder to learn.

### Shape-based

On this type of IME, user inputs the corresponding keys of components of a Chinese character to type it. So you need to know the components of a Chinese character (or just memoize the keys of it if it's too complex) to type it. It's generally **faster** than Phonetic-based because less characters share the same keys, but generally **harder to learn**, because you have to learn the rules that deciding the components to choose, and memorize the components that each key can represent. (For example, you can check the keys and the rules in [the wikipedia page of Canjie input method](https://en.wikipedia.org/wiki/Cangjie_input_method).) 

## Suggestions under each condition

### No device layout and IME modification

Since the letter keys and number keys on the default layout of CC1, CC2 and M4G are at different layers, **IMEs that only use letter keys** are better choices under this condition. Some choices would be provided below.

#### Cangjie (倉頡) [Shape-based] [Built-in]

Cangjie is a built-in Chinese IME. The key series (i.e. the Cangjie code) to type a Chinese character are decided by the components of that character.

Taking a simple example, you type `十田十` to get the character `車` (car in Chinese), because you can split `車` into `十`, `田` and `十`. As you see, you need to know the graph of Chinese characters to better figure out the Cangjie code of them. You can learn more in the [wikipedia page](https://en.wikipedia.org/wiki/Cangjie_input_method) or other websites.

Cangjie only need 26 keys (letter keys), and its mapping doesn't depend on the QWERTY, so it can be used on CC1, CC2 and M4G without problem.

Here is the keyboard layout of Cangjie on CC1, CC2 and M4G.

![localhost_4200_layouts (2)](https://hackmd.io/_uploads/rkwmh3I_0.png)


#### Pinyin (拼音) [Phonetic-based] [Built-in]

Under Pinyin, the sound of a Chinese character is represented with Latin alphabet, so in the most basic form of pinyin input method, user enters the pinyin of a Chinese character to type it.

In most of the modern pinyin input methods, user can choose not specifying the tone (by number key 1~5) by using space key. Since one only need to use number key when specifying tones, I think it is an option for CC1, CC2 and M4G.

#### Boshiamy (嘸蝦米) [Shape-based] [Not built-in]

Boshiamy is not a built-in IME. It uses the shape, sound or meaning to link English letters with the corresponding Chinese character components.

Taking a simple example, the Boshiamy code of `命` is `AOP`, because the three components in `命` looks like A (top part), O (bottom left part) and P (bottom right part).

Since it directly uses letter keys for the Chinese character components, it also can be used on CC1, CC2 and M4G without problem.

Boshiamy code (at most 3 keys) is generally shorter than Cangjie code (at most 5 keys), so it's potentially faster than Cangjie. But its rules and components are much more complex than Cangjie. You can have a look at the [wikipedia page](https://zh.wikipedia.org/zh-tw/%E5%98%B8%E8%9D%A6%E7%B1%B3%E8%BC%B8%E5%85%A5%E6%B3%95#%E5%AD%97%E6%A0%B9).

Note that you probably find few resources in English. It's not a popular IME, but it is still a choice to use on CC1, CC2 and M4G.

#### Eten 26 Bopomofo (倚天26鍵注音) or Hsu Bopomofo (許氏注音) [Phonetic-based] [Not built-in]

On Bopomofo IMEs, user inputs the Bopomofo of a Chinese character to type it.

Since there are 41 Bopomofo symbols (The first tone is generally not included.), if one want to input the Bopomofo symbols with only 26 letter keys, there must be some symbols sharing the same keys. Eten 26 Bopomofo and Hsu Bopomofo are two Bopomofo layouts that only use letter keys. They mainly use the sound or shape simularities between Bopomofo symbols and letters to decide the key of each Bopomofo symbols. But you must input the Bopomofo symbols in correct order[^order] (consonant, medial, rhyme, and tone) on them. 

They are not built-in Bopomofo layouts, so you may need to find some third-party Bopomofo IMEs that support these layouts.

Below is the Eten 26 Bopomofo layout on CC1, CC2 or M4G.

![localhost_4200_layouts](https://hackmd.io/_uploads/rySzmWh_0.png)

And below is the Hsu Bopomofo layout on CC1, CC2 or M4G.

![localhost_4200_layouts (1)](https://hackmd.io/_uploads/rkZvjZ2dC.png)

### Device modification + No IME modification

If you accept to modify your device layout for the Chinese typing, you can set up a better layout for the IME you use on CC1, CC2 or M4G.

For example, under Pinyin input method, you can assign the 1~5 keys to the A1 layer of CC1, CC2 or M4G to make them easier to access.

Another example is that you can use a whole layer (such as A3 layer) for your Chinese typing layout, so you can keep A1 layer for English typing. I set up a Standard Bopomofo layout at the A3 layer of my CC1 and CC2, and it is mentioned in the [V2.1 update of the TanChord 36 Bopomofo input method](https://hackmd.io/0NC95sTxTSOwhPaleCynyw#V21).

[^built_in]: **Built-in** here means that the IME is built-in on MacOS and Windows. (It's hard to define built-in for Unix-like system, and it's highly possible to find the corresponding package of some well-known IMEs.)
[^order]: On some Bopomofo IMEs or Bopomofo layouts, you can input the Bopomofo of a Chinese character out of order. Also they can be input at the same time. I call it Bopomofo chord, and it's called 聲韻並擊 in Chinese. But because different types of Bopomofo symbols aren't separated to different keys on Eten 26 and Hsu Bopomofo, we can't do Bopomofo chord on them.
