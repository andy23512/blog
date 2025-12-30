---
title: Tangent's Progress for CharaChorder One, CharaChorder Two and Master Forge
description: Tangent shares about his progress and story about using CharaChorder One, CharaChorder Two and Master Forge in this article.
date: 2023-06-03T02:06:21.916Z
updated: 2025-07-19T11:50:38.377Z
categories: [Article, Experience]
alias:
  - /2023/06/01/tangent-s-progress-for-charachorder-one-charachorder-two-and-master-forge/
  - /2023/06/02/tangent-s-progress-for-charachorder-one-charachorder-two-and-master-forge/
  - /2023/06/03/tangent-s-progress-for-charachorder-one-charachorder-two-and-master-forge/
  - /2023/06/04/tangent-s-progress-for-charachorder-one-charachorder-two-and-master-forge/
  - /2023/06/05/tangent-s-progress-for-charachorder-one-charachorder-two-and-master-forge/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.github.io/blog-zh-tw/tangent-的-charachorder-one、charachorder-two-和-master-forge-使用歷程/
---

## 1. How I Meet CharaChorder One (CC1)

Last year (2022) some pain occurred sometimes on my index fingers and wrists, and I found out the main problem was the keyboard. I have relatively small hands so I need to move my entire hand to type on a normal keyboard, and keys are hit mostly by my index fingers. It's nearly impossible to change these 20+ years of bad typing habits, so I thought a possible way is changing the keyboard! I did some searches such as `no hand keyboard`, and `carpal tunnel keyboard` at that time, and I found the **One** with the keyword `fastest keyboard` at a news site.

![](https://hackmd.io/_uploads/ry1FbX_8n.png)

(Of course, I don't remember this now but Google remembers it forever...) I did some search about CC1 and purchased it the next day! (2022/07/22, Order #1195)

## 2. Training or Using?

I received CC1 about two months later (2022/09/13) and started practicing when off-work. Practicing chentry and chord on CC1 is just like enjoying a relaxing finger exercise. It really helps me reduce the finger and mental fatigue caused by typing and programming when working as a software engineer. My typing speed on CC1 slowly grew higher at this time, and I tried to use CC1 at work a few times because I know there is a huge gap between practicing and using it. But I was interrupted by lots of emergency tasks to do at that time so I could not help but switched back to QWERTY when speed is required. Furthermore, I also need to practice programming and typing in my input method of my native language, Chinese Bopomofo (Zhuyin), on CC1. Both are different from pure English typing. Nice, I really chose a really tough road. But my hands will finally get broken by QWERTY if I give up! I still want to write more useful and interesting programs! With this determined mind and lots of practicing, despite lots of tasks and lots of bad things happening at that time, I reached 40 WPM (English typing) this February, learned a layout (Eten Bopomofo, which keys are highly linked to English key so they are easier to memorize) for my language, and started to write some small piece of the program with CC1. The time with full CC1 is coming?

![](https://hackmd.io/_uploads/BJ5o-QdUn.png)

## 3. Sudden Death and New Comer

When everything seems to be fine, I accidentally broke a switch on CC1, (I strongly think I have a curse for breaking any electrical things around me.) so I ordered another CC1. (Order #2935, 2023/02/27) The second CC1 was delivered after 10 days. (2023/03/09) Improving from 2 months to 10 days, wow! The bag changed a little bit and I felt the switch is much stronger and easier to use than the old one. The product and the company are growing! These 10 days without practicing surely caused a drop in my speed at first, but it grew back quickly. 

## 4. Finding Ways to Improve Bopomofo Typing

During those 10 days, I kept thinking about if there is any improvement space to the layout for my language since the English typing and programming were enough for use. (Of course, speed is still much slower than on QWERTY, 20+ years of muscle memory is as hard as a diamond.) Before that I had already known that my input method, Bopomofo, is possible to chord if the 41 symbols are distributed in different keys (Need to use some number keys with Bopomofo Eten, so it's not an option, but it is still an easier solution although the layout isn't optimized.), so the problems are "How to distribute 41 char keys on CC1 A1 layer with fewer changes to alphabet keys and non-char keys?" and "How to change the mapping between char and Bopomofo symbol of input method?" At first, as a trivial idea, I used 1~9 to replace some non-char keys in the A1 layer. But later, concerning the use case of programming, I moved some frequently used chars in programming instead. As a result, I got this layout.

![](https://hackmd.io/_uploads/HJ8gzXd83.png)

(Below is the remapped layout and above is the corresponding Bopomofo layout. Pinky and arrow switches are unmodified so they are not rendered. )

For the second problem, I found an open-sourced Bopomofo input method, so I changed the mapping according to the layout image and everything has worked well. Time to write a training website for this Bopomofo layout next!

(I wrote <a href="{% post_path tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one %}">the detail about the whole design and implementation of my Bopomofo input method in this article</a>.)

## 5. Dealing with Bopomofo Password

While working with CC1 and my new Bopomofo layout, I find out a new problem. It’s called the Bopomofo password. It uses the mapping between the standard Bopomofo layout and the QWERTY layout to make passwords from several Chinese characters. (See [this link](https://www.theverge.com/tldr/2019/3/5/18252150/bad-password-security-data-breach-taiwan-ji32k7au4a83-have-i-been-pwned) for more details if anyone is interested.)

Since it’s dependent on the QWERTY layout and the standard Bopomofo layout, it’s not possible to directly use my Bopomofo layout to type this kind of password. So I need a way to let my new Bopomofo layout to output the corresponding character of the Bopomofo symbol.

So after some search, I found an Unicode Keyboard Layout Editor for Mac, [Ukelele](https://software.sil.org/ukelele/), and created a keyboard layout for the mapping between CC1 output and Bopomofo password. (for example, for mapping CC1 output `/` -> Bopomofo ㄅ -> Bopomofo password `1`, `/` key should output character `1`) Then I can type out the Bopomofo password normally on CC1 and my Bopomofo layout.

![](https://hackmd.io/_uploads/B1R87-Awh.png)

## 6. Further Research on Chinese typing methods for improvement

With curiousity about any better solutions or improvements for typing Chinese on CC1, I researched about other existing input method.

1. Curious about the current fastest Bopomofo input method, I found the [追音輸入法](https://www.goingpro.me/chasew). (I didn't find the official English name, and I would translate it as "Sound Chaser" by its meaning.) It was designed for court judges, court clerks, and Chinese input needs in the judicial field. Every character (combinations of Bopomofo symbol) can be typed out with 3-key chord. User can reach 200 CPM (Character per minutes) after training. But sadly it's a close-sourced software and only supports Windows, so I can't try it or modify it for CC1.

2. I reviewed some of the shape-based input methods. (Chagjie might be the most famous one in this category.) Almost all of them are sensible to input order of the character components, so they are not feasible to work with chording.

After the research, I think that the CC1 Bopomofo layout I designed is the best solution I can have for now. So I decide to focus on practice this layout. It is going to take much longer time than English layout. 

## 7. Last Step to Fully Switch to CC1

Training my Chinese typing on CC1 is the last to-do before I fully switch to CC1. So I started to do some intensive practices for that at 2023/11/06 and recorded my typing speed for each 10-minute practice on [spreadsheet](https://docs.google.com/spreadsheets/d/1TabjAxHYCFnemCBY6yf7dgy4nmKx8K6DbMktckZ-ZwI/edit?usp=sharing). I also did some adjustments to the layout according to the problems I encountered during practice.

After I started to do Chinese typing on CC1, I found that the Bopomofo input method and CC1 are a match made in heaven. The design of CC1 can make the most of the chording nature of Bopomofo input method, and that [each group in Bopomofo symbols](https://zh.wikipedia.org/wiki/%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F#%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F%E8%A1%A8) has three or four symbols perfectly matches with the four-direction switches on CC1. Furthermore, I only need to move a finger to reach the arrow keys to do word choosing. It's a delightful experience for me to type Chinese on CC1.

Finally, after 166 practices (i.e. 1660 minutes), today (2023/12/21), also my birthday, is the first day on which I fully switch to CC1. I can type a long document in a mix of Chinese and English at work! Really a long way to get here, and my journey with CC1 would keep going.

## 8. Take back CC1 chording

Before I fully switched to CC1, I usually turned off the chording feature of CC1, because some CC1's chords conflict with Bopomofo chords and my layout of Bopomofo were under adjustment at that time. And after I got a stable version (<a href="{% post_path tangent-s-layout-for-using-bopomofo-chinese-input-method-with-charachorder-one %}#V5-Latest">V5</a>) of Bopomofo layout, I reopened the chording feature of CC1 and added some CC1 chords. They are for some words that I frequently use while working, and their key combinations don't conflict with any Bopomofo chords under Bopomofo layout V5. 

## 9. Good Bye, Mouse

Besides the problem caused by bad typing habits, my fingers and wrists also suffered from normal mice. Lots of mouse click actions on a normal mouse also caused some pain to my index fingers. Then I switched to trackpad, but the skin on my fingers had a sense of being torn so it was not feasible for me. After that, I switched to trackball. Trackball can reduce the movement of my wrists, but in return I need more movement of my fingers to rotate the ball, so it still caused some problems on my fingers. Furthermore, while using any of them, I always need to move away my hands from the keyboard.

Since I knew the mouse feature on CC1, I have wanted to switch from the trackball to CC1's mouse switches. Though slower, I just need to do small actions on my fingers to reach the switches and control them, so it should be better for my fingers in the long term.

But for my Chinese input method, the mouse movement and mouse click keys at the primary layer have been remapped to other keys. So I decided to remap those mouse action keys on the number layer. With the num-lock setup, I can switch between the primary (for keyboard) and number layer (for mouse). As a result, on 2024/01/16, I finally switched from trackball to CC1 mouse, and there is only my lovely CC1, named `Estrea`, on my keyboard stand.

## 10. A new Bopomofo layout designed for Master Forge (M4G)

When the preview of M4G, the successor of CC1, first came out, I didn't consider switching to M4G because it had too few switches for my usage. (It only had six switches on each side at that time.) But as four more switches had been added to M4G's design, I started to find for solution for my usage (especially for the Bopomofo input method) and came up with a new Bopomofo layout, **TanChord 36**, which only needs 36 keys to type Chinese with Bopomofo and Bopomofo chords on a CC1 or an M4G. (I wrote the details about <a href="{% post_path tangent-s-progress-for-finding-a-bopomofo-solution-on-master-forge %}">the process and the layout in this article</a>.)

And after [a few days of practice](https://docs.google.com/spreadsheets/d/e/2PACX-1vQqARitEkMk4es205yPdTQfpOU6DqhlYL6W9T9pA6mxkFuxGyOVV3WklNUbCfUjW1s0RYGg5MKb6jtZ/pubhtml?gid=629628516&single=true) on CC1, I got 30 WPM, and I thought this speed is enough for me to use. Though there are some other little drawbacks, I feel that using fewer keys has some efficiency benefit.

## 11. Developing a new practice tool for CC1

My English and Chinese typing speed on CC1 are enough for me to use. But when programming, I still feel slow when I need to type numbers or symbols. I think I am still unfamiliar with the locations of those keys, and I want a practice tool for practicing them. I also need a good side project to practice some new frontend technologies, syntaxes, and other things I want to try.

As a result, I recently started developing a new practice tool, called [Alnitak](https://andy23512.github.io/alnitak/). At the time of writing, it has already had a basic layout highlight and typing lessons for numbers and letters. About its latest features and details, I will update them in <a href="{% post_path alnitak-a-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent %}">this article</a>.

## 12. Awakening Ambidexterity / Dual Wielding

I was born left-handed. I was trained to use my right hand to write with a pencil and eat with chopsticks in my childhood, but I still tend to use my left hand to do some other things. During my late high school, I found that my writing speed wasn't enough to take notes in class, so I practiced writing with both hands simultaneously. They can cooperate on one English word / Chinese character or work on different ones. Finally, I can do it whenever I have two pencils and I need to write fast. (Not so important but I also can use two pairs of chopsticks at the same time.)

But after I graduated from the graduated school and started my full-stack web engineer job, I seldom need to do speed writing on paper but on a computer. Some designs of devices are only for one hand or a specified hand. One example is that the arrow key on a normal keyboard is on the right-hand side. Another example is that the vent of some laptops is on the left side, so I cannot put the mouse on that side.

However, the arrow keys and mouse movement keys on CC1 don't have such limitations. I can freely decide which one to use at any time. And chording on CC1, especially using the Bopomofo chords, I also use both hands at the same time to type. These things remind me of the time when I used two hands to write, and I think these things can be a good practice for coordinating and balancing both hands.

## 13. From One to Two

This month (December 2024), one of the keys on my second CC1 was broken, and I found that the metal caps on the CC1 are a little cold when used in cold weather. Though I could still use it and had pre-ordered the M4G, I bought a CC2 as my birthday present this year. I received it yesterday and started using it today (2024/12/28). The transition from CC1 to CC2 was perfect, and I got used to CC2 in a short time. I could feel the great improvements, including the quietness, the low actuation force keys, and the new keycaps design when I typed this chapter with CC2. I write <a href="{% post_path tangent-s-review-to-charachorder-two %}">my review to CC2 in this article</a>.

## 14. Master Forge arrived!

After about one year waiting (I pre-ordered in 2024/03/30), my Master Forge arrived a few days ago (2025/03/05), and I started using it today (2025/03/08). The unboxing experience was great, and I can seamlessly move my chords and layout from my CC2 to it. The switches on M4G have a different feeling from the one on CC1 and CC2, they feel much snapper, and louder. The positions of switches are also different from those of CC1 and CC2, so I may need to take some time to get used to it. I write <a href="{% post_path tangent-s-review-to-master-forge %}">my review to M4G in this article</a>.
