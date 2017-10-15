---
title: animate、textillate文字动画使用心得
categories:
  - 开发

tags:
  - JavaScript

comments: true
date: 2017-06-13 00:53:57
updated: 2017-06-13 00:53:57
---
最近使用textillate实现文字动画，发现了很多坑，最终还是实现了想要的的结果。本来一开始是想要实现在站点上显示一段动态的文字，使用textillate实现了，但是发现动态的文字会遮挡文章的阅读内容，于是觉得会影响阅读，于是想着点击的时候实现隐藏，再次点击的时候又显示出来，可是，点击隐藏很容易实现，但是再次点击显示就遇到了一点困难，元素隐藏了就不能点击了。后边想到了，把点击事件放到div中，点击隐藏的功能，使用在点击的时候把文本清空，但是此时div也会消失，于是使用js设置了div的宽和高，这样就会显示一个空白的div，既实现了隐藏，又可以实现点击事件了。
其中有一个问题，使用.text更改文本后，发现原来的文本的动画和css属性都没有了。折腾了半天，于是想到还有一个.html可以使用，于是使用了.html动态设置div中的内容，在div中添加一个span标签：<span id='xx' class='xxx'>文本内容</span>,此时通过span的id设置textillate，完美解决了css和动画的问题。

对于.text和.html的一点认识：
.text只会修改文本内容（但是在实际使用了，配合textillate使用的时候css属性和textillate动画会丢失）
.html会修改标签下的所有内容，包括标签，属性设置等。（这次就是使用.html设置完整的span标签的css和id属性等，完美解决了animate和css显示的问题）。

<!-- more -->
