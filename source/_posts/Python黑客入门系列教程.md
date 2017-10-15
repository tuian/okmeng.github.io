---
title: Python黑客入门系列教程
categories:
  - 信息安全
tags:
  - Hacking
  - Python
  - 转载
comments: true
date: 2017-09-30 13:00:01
updated: 2017-09-30 13:00:01
---
这是一套国外的Python系列教程，从基础入手，到信息安全应用实例。是一套很好Python黑客教程。供各位食用。

<!-- more -->
##python系列教程(翻译)

~# python
>>> import urllib
>>> from bs4 import BeautifulSoup
>>> url = urllib.urlopen("http://www.primalsecurity.net")
>>> output = BeautifulSoup(url.read(), 'lxml')
>>> output.title
<title>Primal Security Podcast</title>
>>>
这是一套python系列教程，学习本套教程不需要你有任何编程背景。教程由最简单的hello world到信息安全应用实例。逐个难点击破:

0x0 – 入门

0x0 – 入门 Pt.2

0×1 – 端口扫描

0x2 – 反向shell

0x3 – 编写Fuzz测试脚本

0x4 – Python转exe

0x5 – Web请求

0x6 – 爬虫

0x7 – Web扫描和利用

0x8 – Whois查询

0x9 – 系统命令调用

0xA – Python版的Metasploit

0xB – 伪终端

0xC – exp编写

用例1: CVE-2014-6271

用例2: CVE-2012-1823

用例3: CVE-2012-3152

用例4: CVE-2014-3704

原文地址:http://www.primalsecurity.net/tutorials/python-tutorials/
翻译地址:https://github.com/smartFlash/pySecurity