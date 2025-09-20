---
title: 本人在编译 Twikoo 前端时遇到的问题及解决方案
published: 2025-09-20
description: '近几天本人在编译 Twikoo 的时候遇到了一些问题，这里特此发表出来向大家分享下'
image: ''
tags: [Twikoo, 编译]
category: '技术'
draft: true 
lang: ''
---

## 为什么要自己编译 Twikoo？

在博客由 Typecho 迁移到基于 Astro 的静态博客后，我采用的评论系统便是由 iMaeGoo 开发的 Twikoo 评论系统。

::github{repo="twikoojs/twikoo"}

但是 Twikoo 在 Fuwari 这个基于 Astro 的主题上直接应用会有单击部分按钮直接返回网站顶部的问题。为了解决这一问题，于是我着手准备自己自行编译一个 Twikoo 前端

但在编译过程中，我遇到了一堆奇怪的问题……

## 编译流程

### 1. 编译环境的设置导致最终文件不同

Fork 项目后，我在 Vscode 上打开 Twikoo 的源码，准备快速搞完后干其他事。在一切准备工作搞完后，我尝试进行 Twikoo 前端的编译，这便引出了编译 Twikoo 前端出现的第一个问题。

编译完之后的我查看 `dist` 文件夹，发现编译后生成的文件如下：

```
dist
    twikoo.nocss.js
    
```
