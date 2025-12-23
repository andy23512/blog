---
title: TanChord Code Library (TCCL) language reference
date: 2025-11-23T06:46:11.677Z
updated: 2025-11-25T10:03:24.560Z
categories: [Article, Creation]
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/2025/11/24/tanchord-code-library-tccl-語言參考文件/
---

## Introduction

TanChord Code Library (TCCL) language is a language used to describe a chord library in [TanChord Code (TC Code)](https://andy23512.github.io/tccode/) editor. This reference will explain the language's syntax.

It's recommended to read [the chords page in the official CharaChorder document](https://docs.charachorder.com/Chords.html) and know about "chord", "chord input", "chord output", and "chord notation" before reading this language reference. 

## Key Notation

The fundamental element of chord input and chord output is a key. In this section, I will explain how to describe keys in TCCL.

For English letters (upper and lowercase), numbers, and a few supported symbols, you can directly use the character itself to specify the corresponding key on the QWERTY OS layout (or corresponding CCOS action code). For example, `b` is the b key, `2` is the 2 key, and `/` is the / key.

In the chord output, the space character is the right space key, but you cannot use this character at chord input.

For other keys or actions, you can use the [CCOS action code](https://andy23512.github.io/ccos-meta-viewer/#/?device=two_s3&version=2.1.1&meta=actions.json) number enclosed in angle brackets to specify any of them. For example, `<558>` is the action that activates a dynamic library, and `<559>` is the action that returns to the base library.

Below is a table of these keys for reference.

|Type|Syntax|Example|Remark|
|-|-|-|-|
|Letter Key|`[a-zA-Z]`|`a`, `A` , `b`||
|Number key|`[0-9]`|`1`, `2`, `3`||
|Symbol key|`[`, `]`, `.`, `/`, `-`|`[`, `-`||
|(Right) Space key|` `|` `|It can only be used in chord output.|
|Action code|`<ACTION_CODE_NUMBER>`|`<558>`, `<559>`||

## Chord Notation

Next, we will learn how to describe a chord.

First, let's look at a simple example. Here is a chord whose input keys are b and c, and its output is `because`. 

```typescript
b + c = because
```

Similar to [the chord notation defined in the official CharaChorder document](https://docs.charachorder.com/Chords.html#chord-notation), we use `+` to separate the input keys and use `=` to separate the input and output. The spaces around `+` and `=` are **necessary** to make it more readable and easier to be parsed. The chord output is just a series of keys without any separator.

So the general syntax of a chord can be described as:

```typescript
K + K + ... = KK...
```

, where you can replace any K with any key notation defined above.

## Chord Library

A TCCL file describes a whole chord library. Each non-empty line is a chord notation that represents a chord. An empty line is **required** at the end of the file.

Let's take sample 1 from the TC Code editor as an example.

```typescript=
b + c = because
y + o + u = you
b + a + k = back
d + o + w + n = down
i + m + p = important

```

It is a chord library with five chords.

## Compound Chord and Dynamic Chord Library

{% blockquote %}
  :information_source: Dynamic chord library activation chord is a special kind of compound parent chord that will hold its input in the background, so you can access its children chord after it is activated. TCCL uses the same way to describe them.
{% endblockquote %}

In the official CharaChorder document, the pipe symbol (`|`) is used to separate sequential chord inputs in a compound chord. For example, `w + b + s + t | c + h + a + r = www.charachorder.com` means you need to chord w+b+s+t and then chord c+h+a+r, to get the output "www.charachorder.com".

That format is good when you only describe a compound chord. But for a chord library, there may be many redundancies when multiple compound chords share the same ancestor(s), or many chords under a dynamic chord library. For example,

```typescript=
// PAY ATTENTION! This is NOT the syntax of TCCL!
s + m = some
s + m | t + g = something
s + m | b + o = somebody
s + m | o + n = someone
s + v = several

```

So in TCCL, inspired by languages such as Python and YAML, indentation is used to specify the parent-child relationships between chords. For example, the TCCL file describing the chord library above would be:

```typescript=
s + m = some
  t + g = something
  b + o = somebody
  o + n = someone
s + v = several

```

And here is another example, the sample 3 of TC Code. It has a dynamic chord library, `lib1`, a chord for returning to the base library, and a chord `a + r = arm` under the `lib1`.

```typescript=
i + l = <559>base
l + r = <558>lib1
  a + r = arm

```

Regarding indentation size, using two spaces is recommended, and it's also the default setting in TC Code.

## Conclusion

That's all you need to know to code your chord library in TCCL language. TCCL language aims to be a convenient and straightforward way to describe chord libraries. Thanks for your reading!
