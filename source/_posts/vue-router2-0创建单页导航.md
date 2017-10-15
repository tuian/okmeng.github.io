---
title: vue-router2.0创建单页导航
categories: 前端开发
tags: [代码,技术,JavaScript]
comments: true
date: 2017-04-08 21:09:51
updated: 2017-04-08 21:09:51
---
本文介绍在路由的组件中使用vue-resource中的方法给页面渲染数据。vue-resource就像jQuery里的$.ajax，用来和后端交互数据的。vue-resource是Vue.js的一款插件，它可以通过XMLHttpRequest或JSONP发起请求并处理响应。vue-resource的API很简洁。

<!-- more -->

```html5
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>vue-route使用</title>
<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="./vue.js"></script>
<script src="./vue-router.js"></script>

</head>
<body>
<div id="app">
<nav class="navbar navbar-inverse">
  <div class="container">

    <div class="navbar-header">
        <img src="https://static.shiyanlou.com/img/logo_03.png" alt="" height="50">
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><router-link to="home">首页</router-link></li>
        <li><router-link to="courses">项目</router-link></li>
        <li><router-link to="paths">路径</router-link></li>
        <li><router-link to="bootcamp">博客</router-link></li>
      </ul>
    </div>
    </div>
</nav>
<div class="container">
<router-view></router-view>
</div>
<script>
const Home = { template: '<div><h1>首页</h1></div>' }
const Courses = { template: '<div><h1>项目</h1></div>' }
const Paths = { template: '<div><h1>路径</h1></div>' }
const Bootcamp = { template: '<div><h1>博客</h1></div>' }

var router = new VueRouter({
routes: [
{ path: '/home', component: Home },
{ path: '/courses', component: Courses },
{ path: '/paths', component: Paths },
{ path: '/bootcamp', component: Bootcamp }
]
})

const app = new Vue({
router
}).$mount('#app')
</script>
</body>
</html>
```









[获取实验代码][getcode]

  [getcode]: http://labfile.oss.aliyuncs.com/courses/762/vue-route.zip "代码获取"
