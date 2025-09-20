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

但是 Twikoo 在 Fuwari 这个基于 Astro 的主题上直接应用会有单击部分按钮直接返回网站顶部的问题。为了解决这一问题，于是我着手准备自己自行编译一个 Twikoo 前端。

但在编译过程中，我遇到了一堆奇怪的问题……

## 编译流程

### 1. 编译环境的设置导致最终文件不同

Fork 项目后，我在 Vscode 上打开 Twikoo 的源码，准备快速搞完后干其他事。在一切准备工作搞完后，我尝试进行 Twikoo 前端的编译，这便引出了编译 Twikoo 前端出现的第一个问题。

编译完之后的我查看 `dist` 文件夹，发现编译后生成的文件如下：

```flies
dist
    …… // 其他文件
    twikoo.nocss.js
    twikoo.nocss.js.LICENSE.txt
```

诶，为什么 `pnpm build` 之后没有生成 Twikoo 文档里所说的 `twikoo.all.min.js` 和 `twikoo.min.js` 呢？抱着疑问，我去询问了 Mugzx 大佬，得到了如下答复：

> 关于编译可以看看package.json里是怎么写的[菜汪]

于是我打开了 `package.json` 文件准备对其进行修改。

```json
"scripts": {
    "dev": "webpack serve --mode development",
    "serve": "webpack serve --mode development",
    "build": "cross-env NODE_ENV=production webpack --mode production",t",
    "analyze": "webpack --profile --json > stats.json && webpack-bundle-analyzer stats.json",
    "login": "tcb login",
    "logout": "tcb logout",
    "deploy": "tcb fn deploy twikoo --force",
    "lint": "eslint src/** --ignore-path .eslintignore",
    "docs:dev": "cd docs && yarn docs:dev",
    "docs:build": "cd docs && yarn docs:build"
```

其中我注意到了 `"build": "cross-env NODE_ENV=production webpack --mode production",t",` 这一代码，因为本人之前从未研究过`package.json` 文件的组成，所以我将这一问题抛给了 AI 解答。


