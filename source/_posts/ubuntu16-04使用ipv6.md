---
title: ubuntu16.04使用ipv6
categories:
  - Linux
tags:
  - 技术
  - 转载
comments: true
date: 2017-10-05 22:54:19
updated: 2017-10-05 22:54:19
---
设置了ipv6可以干什么呢？
1．现在用ipv6的少这样你的使用的带宽不会太拥挤
2.ipv6修改hosts后可很轻松的访问墙外的网站-->对于写程序的Google是必须的
3.高清ipv6直播～看电视了～

<!-- more -->
启动ipv6
1. sudo apt-get install miredo
2. 以root权限打开ufw的配置文件: “/etc/default/ufw”，找到”IPV6=no”这一行，将其改为”IPV6=yes”。
3. sudo invoke-rc.d networking restart

测试ipv6

    1.ping6 ipv6.baidu.com
![ok](assets/ubuntu16.04使用ipv6/ubuntu16-04使用ipv6-8873e.png)
    2.浏览器搜索ipv6测试
![2](assets/ubuntu16.04使用ipv6/ubuntu16-04使用ipv6-bf12f.png)
    3.ipv6直播
![3](assets/ubuntu16.04使用ipv6/ubuntu16-04使用ipv6-6d95e.png)

    问题解决

    ubuntu16.04按照上述方案，ipv6地址出来了，但是仍不能访问ipv6网址。
    原因
    当前用的是校园网动态分配的ipv6地址，需要改成静态的。
    方法
    1.只需要改变/etc/sysctl.d/10-ipv6-privacy.conf文件，将net.ipv6.conf.default.use_tempaddr改为0
    2.sudo sysctl –system #加载所有的配置文件
    正常使用路由器拨号仍是ipv4方式，直接插网线使用ipv6

关于科学上网(请安全使用，请明辨好坏！)

    修改hosts
        ipv4也可通过修改ipv4来科学上网，但是youtube不一定能够正常播放，我之前就是这样的。

        ipv6修改hosts
    [bash]
    sudo su
    curl https://github.com/lennylxx/ipv6-hosts/raw/master/hosts -L >> /etc/hosts

    youtube
![youtube](assets/ubuntu16-04使用ipv6-7f17a.png)

修改hosts_ipv6:http://static.blog.fiht.me/2016/10/03/use-ipv6-break-the-great-fire-wall/
hosts_ipv6:https://raw.githubusercontent.com/lennylxx/ipv6-hosts/master/hosts
ubuntu16.0４ipv6:http://blog.csdn.net/qq_18820397/article/details/51171220
修改hosts_ipv4:https://laod.cn/

原文地址：http://blog.csdn.net/scylhy/article/details/72699166
