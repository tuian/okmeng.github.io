---
title: Python库和函数
categories: 开发
tags: [开发,技术,Python]
comments: true
date: 2017-04-10 10:18:25
updated: 2017-04-10 10:18:25
---

本文包含一些我在开发过程中遇到的一些Python库和函数的分析和用法

<!-- more -->

### 一、Python核心函数库

#### （1）Dictionary.get(key, default=None)
Dictionary：
定义：dic = {key: value}
dic.get查找返回字典中对应key的值(value)，如果指定的键不存在，返回key参数后边的default值。

#### （2）sorted

### 二、numpy函数库
    NumPy（Numeric Python）系统是Python的一种开源的数值计算扩展。这种工具可用来存储和处理大型矩阵，比Python自身的嵌套列表（nested list structure)结构要高效的多（该结构也可以用来表示矩阵（matrix））。据说NumPy将Python相当于变成一种免费的更强大的MatLab系统。
    NumPy 提供了许多高级的数值编程工具，如：矩阵数据类型、矢量处理，以及精密的运算库。专为进行严格的数字处理而产生。多为很多大型金融公司使用，以及核心的科学计算组织如：Lawrence Livermore，NASA用其处理一些本来使用C++，Fortran或Matlab等所做的任务。

### 三、operator函数库
    待补充

#### operator.itemgetter(序号1，序号2)
调用该过程定义一个函数，eg：myget=operator.itemgetter(1)，则get()为一个获取传入参数序号为1的数据的函数。此时：myget([1,2,3])，返回 2 。
