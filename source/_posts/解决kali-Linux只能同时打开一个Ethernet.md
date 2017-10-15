---
title: 解决kali Linux只能同时打开一个Ethernet
categories:
  - Linux
tags:
  - Kali
comments: true
date: 2017-05-31 00:58:32
updated: 2017-05-31 00:58:32
---
使用kali-Linux 2017-1官方virtualbox镜像的时候，未了实现与主机通讯的同时可以上网，使用了两块网卡，一块网卡nat上网，另一块网卡host-only与主机通讯(因为nat网络，外网是访问不到虚拟机的，所以主机也访问不到虚拟机，如果主机需要访问虚拟机，需要虚拟机另外设置一块网卡与主机通讯)发现只能同时打开一块网卡，eth0打开eth1就断开连接了，eth1打开eth0就断开连接，
### 解决办法：

The solution I found was to delete the file "/etc/NetworkManager/system-connections/Wired connection 1". Now everything works.

就是删除：/etc/NetworkManager/system-connections/Wired connection 1

删除后重启，完美解决:)

来源：[kali forum][1]

[1]:https://forums.kali.org/showthread.php?29657-Only-one-of-multiple-wired-interfaces-(eth0-eth1-etc)-can-be-active-at-a-time
<!-- more -->

Only one of multiple wired interfaces (eth0, eth1, etc) can be active at a time

I have multiple wired interfaces - two in the most simple configuration - eth0 and eth1. Both are dynamic DHCP.
The problem is that only one of them can be active (i.e. have IP address) at a time.
It doesn't matter how I bring them up - using UI (Gnome Network Manager) or command line (ifconfig up/down). If I bring up one in GUI, the other one goes down. In command line, if I take both down using "ifconfig eth0 down; ifconfig eth1 down", then whichever is brought up first gets IP address, and the second one doesn't. On reboot, only eth0 is active.

Wireless interfaces are not affected - they all seem to work fine all at the same time.

I've never seen such behavior on any other Linux system. This is Kali 2006.1, based on pre-built VM image, running inside VMWare. I didn't mess with any factory network settings.
