---
title: Tangent's Unofficial CharaChorder and Forge Learning Progress Statistic
date: 2025-01-19 23:23:56
updated: 2025-03-07 15:37:47
---
{% blockquote %}
   :information_source: [The official CharaChorder Speed Tracker is here.](https://docs.google.com/spreadsheets/d/1LYi3Y6Ombi1V5bWt-75SnHn9ONvl1KOFugYUBTVNgjM/edit?gid=0#gid=0)
{% endblockquote %}


## Preface

Curious about the real learning curve of Charachorder devices, I try to mine data from the share-your-progress channel of the CharaChorder Discord server and summarize them into charts and tables below.

## Learning Curve Chart

{% blockquote %}
  Here are the power-series trend lines and scatter plots of the typing speed and the days elapsed on each devices. The power-series trend lines can represent average learning progress on each device.
{% endblockquote %}

[Open in new tab](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-GIGZcyrT2rhcVUUot14X00CK7XrqMDSI4gqKdE_8jQtrFqId4hD9-UvE6TS9RZjpaHkmyjfgEBZ6/pubhtml?gid=385574544&single=true)

<iframe width="100%" height="550" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-GIGZcyrT2rhcVUUot14X00CK7XrqMDSI4gqKdE_8jQtrFqId4hD9-UvE6TS9RZjpaHkmyjfgEBZ6/pubhtml?gid=385574544&single=true" frameborder="0"></iframe>

## Speed Achievement Stats

{% blockquote %}
  Here are the statistics about how long it took users to reach some notable typing speeds. Their statistics metrics, boxplots, and histograms would be shown.
  
Notable typing speeds:

- 40 WPM: Speed of average typist
- 60 WPM: Speed of professional typist
- 100 WPM: Speed of top 1% Typist
- 150 WPM: Speed of sound, i.e. average human conversational speed
- (150+ WPM: Supersonic speed)
- 250 WPM: Speed of thought, i.e. average human reading speed
- (250+ WPM: Hypercerebral speed) 
{% endblockquote %}

[Open in new tab](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-GIGZcyrT2rhcVUUot14X00CK7XrqMDSI4gqKdE_8jQtrFqId4hD9-UvE6TS9RZjpaHkmyjfgEBZ6/pubhtml?gid=644493207&amp;single=true)

<iframe width="100%" height="550" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-GIGZcyrT2rhcVUUot14X00CK7XrqMDSI4gqKdE_8jQtrFqId4hD9-UvE6TS9RZjpaHkmyjfgEBZ6/pubhtml?gid=644493207&single=true" frameborder="0"></iframe>

## Data Collecting Rule

1. When the start date of a user is unknown, their data is not collected.
2. At most one representative typing speed is selected per day per user. The date is according to the date shown in the chart screenshot or the message date shown in the Discord app, so there may be some inconsistency due to timezone difference. (P.S.: My timezone is UTC+8.)
3. Some examples of representative typing speed of a day:
   a. the "average typing speed value" mentioned directly in a message at that day (ex: `My average speed is XXX WPM.`)
   b. the maximum "average speed" in a day on the chart of [Launchpad](https://launchpad.charachorder.com/#/)
   c. the maximum typing speed of **NON-CUSTOM** and **NON-REPEATED** testing results in a day on [MonkeyType](https://monkeytype.com/) or [CCType](https://cctype.app/)
   d. the maximum `lWPM` in a day on [Dot I/O](https://www.iq-eq.io/#/)
   e. the maximum "average typing speed" in a day on [keybr.com](https://www.keybr.com/)
4. All speed numbers are rounded to the nearest whole number.[^speed_rounded]
5. Chinese typing is too unique to be included in these statistics, so it's not collected. It's hard to decide how to convert Chinese CPM to English WPM.

[^speed_rounded]: Monkeytype (and CCType) has a setting called "always show decimal places". If it's set to off, the rounded-to-whole-number speed value would get shown. As a result, the speed in some screenshots has decimal places, and some don't. So in this statistic, all speed numbers are rounded to a whole number before being collected.}
