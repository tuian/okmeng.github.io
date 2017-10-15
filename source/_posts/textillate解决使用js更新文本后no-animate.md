---
title: textillate解决使用js更新文本后no animate
categories:
  - 开发
tags:
  - JavaScript
comments: true
date: 2017-06-12 23:09:24
updated: 2017-06-12 23:09:24
---
对于textillate脚本文件，如果使用js更新文本后动画不执行，比如说我这次遇到的情况，我在一个div下面添加了一个span标签，span标签里是要animate的文字，由于需要在点击的时候更新一下文本，我写了一个js来执行，但是却发现，更新文本后，文本不animate了，一时想不到是什么原因。
后来莫名其妙的，由于某些原因，我把点击事件的触发转到了上一级的div，欣喜的发现，使用js更新后的文本又animate了，不知道是什么原因，但是问题解决了。

<!-- more -->
