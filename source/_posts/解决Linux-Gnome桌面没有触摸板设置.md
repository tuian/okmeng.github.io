---
title: 解决Linux Gnome桌面没有触摸板设置
categories:
  - Linux
tags:
  - Ubuntu
comments: true
date: 2017-08-19 13:52:11
updated: 2017-08-19 13:52:11
---
解决办法：
1、安装全部libinput包（libinput5,libinput10,xserver-xorg-input-libinput）
2、卸载synaptics驱动（xserver-xorg-input-synaptics）[sudo apt-get purge xserver-xorg-input-synaptics]
3、重启电脑
注意：
    第一步是可选的，我是直接执行第二步删除synaptics驱动后重启电脑就可以了。所以，建议先执行第二步。如果还是找不到触摸板的设置再安装libinput。
<!-- more -->
问题产生原因：
GNome和大部分的桌面的桌面环境基于“synaptic”驱动笔记本的触摸板，但是从GNome3.20开始，Gnome不再支持synaptics，改为libinput驱动。但是xserver-xorg-input-synaptics还是作为xserver-xorg-input-all的一个依赖包被安装，并且会优先使用synaptics驱动。所以导致在Gnome桌面设置中没有触摸板的设置，因为Gnome3.20开始已经不支持synaptics。
