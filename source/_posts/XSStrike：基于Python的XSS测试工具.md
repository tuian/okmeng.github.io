---
title: XSStrike：基于Python的XSS测试工具
categories:
  - 信息安全
  - XSS
tags:
  - Penetration
  - Hacking
  - 转载
comments: true
date: 2017-07-29 20:37:13
updated: 2017-07-29 20:37:13
---
简介

XSStrike 是一款用于探测并利用XSS漏洞的脚本

XSStrike目前所提供的产品特性：

对参数进行模糊测试之后构建合适的payload

使用payload对参数进行穷举匹配

内置爬虫功能

检测并尝试绕过WAF

同时支持GET及POST方式

大多数payload都是由作者精心构造

误报率极低
debian及kali系统可直接下载deb安装包：http://s000.tinyupload.com/?file_id=59938473688400227490

<!-- more -->
通用安装方法

使用如下命令进行下载：

    git clone https://github.com/UltimateHackers/XSStrike/
完成下载之后，进入XSStrike目录：

    cd XSStrike
接下来使用如下命令安装依赖模块：

    pip install -r requirements.txt
完成安装，使用如下命令即可运行XSStrike：

    python xsstrike
注意：本脚本仅支持Python 2.7

使用说明
![1](assets/XSStrike：基于Python的XSS测试工具-fde0c.png)
键入目标URL

这时便可以键入目标URL，但请通过插入”d3v<”以标记最重要的参数
例如：target.com/search.php?q=d3v&category=1
键入目标URL之后，XSStrike将检测该目标是否有WAF保护，如果不受WAF保护你将看到下面4个选项

1. Fuzzer: 检测输入内容是如何在网页下进行反映的，之后据此尝试构建payload
![2](assets/XSStrike：基于Python的XSS测试工具-87d88.png)
构建payload

2. Striker: 对所有参数逐一进行穷举匹配，并在浏览器窗口中生成POC
![3](assets/XSStrike：基于Python的XSS测试工具-5b72f.png)
生成 POC

3. Spider: 提取目标页面上所有存在的链接，并对这些链接进行XSS测试
![4](assets/XSStrike：基于Python的XSS测试工具-7936c.png)
进行XSS测试

4. Hulk: 使用了一种不同寻常的方式，直接无视掉输入所对应的网页内容变化。其有一个 polyglots 列表以及可靠的payload，它会逐一在目标参数中键入并在浏览器窗口中打开这些组合URL
![5](assets/XSStrike：基于Python的XSS测试工具-d2aab.png)
目标参数中键入并在浏览器窗口中打开这些组合URL

XSStrike同样也可以绕过WAF
![6](assets/XSStrike：基于Python的XSS测试工具-aa014.png)
XSStrike绕过WAF

XSStrike 也支持 POST 方式
![7](assets/XSStrike：基于Python的XSS测试工具-c204d.png)
XSStrike 也支持 POST 方式

你也可向 XSStrike 提供 cookies
![8](assets/XSStrike：基于Python的XSS测试工具-03faf.png)
向 XSStrike 提供 cookies

与其他使用蛮力算法的程序不同，XSStrike有着少而精的payload，其中大多数都是由作者精心构造的。如果你发现其中的BUG或者对程序有更好的建议，欢迎到我的Facebook主页下或者GitHub仓库留言
演示视频
<p style="text-align: center;">
<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=i0530cu11cj&auto=0" allowfullscreen="true" allowscriptaccess="always" type="application/x-shockwave-flash" width="690" height="400">
</p>
原文链接：http://www.freebuf.com/sectool/142044.html
