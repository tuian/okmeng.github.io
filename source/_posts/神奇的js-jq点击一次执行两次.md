---
title: 神奇的js/jq点击一次执行两次
categories:
  - 开发

tags:
  - JavaScript

comments: true
date: 2017-06-06 21:12:03
updated: 2017-06-06 21:12:03
---
最近在开发web的时候，发现一个点击按钮怎么点击也没反应，于是用火狐设置JavaScript断点，点击按钮后一步一步调试，发现点击按钮函数执行了两次（我擦嘞，WTF,0.0）,于是百度了半天，然并卵。换用google，神奇的stackoverflow，一下子就在Stack Overflow找到了答案：

Make sure and check that you have not accidentally included your script twice in your HTML page.
请确认你有咩有在HTml中不小心包含了脚本（JavaScript）两次。
来源：[Stack Overflow][1]
[1]: https://stackoverflow.com/questions/6731894/click-event-is-calling-twice-in-jquery

<!-- more -->
