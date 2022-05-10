---
home: true
heroImage: /assets/logo.png
actionText: Get Started →
actionLink: /category/

actionBtn:
  text: 快速入手
  link: /category/
  type: primary
  ghost: false
  size: large
preactionBtn:
  text: 赞助我们
  link: /guide/
  type: primary
  ghost: true
  size: large
features:
  - title: 动态交互
    details: 拥有非常有趣的反馈设计，让你的图标动起来
  - title: 轻便快捷
    details: iconloader的生成非常快速，你只需要配置参数，一个会动的图标就上线了
  - title: 高质量
    details: 大部分都由原生的css3 animation 动画 制作，可以进可以能的让动画顺畅
footer: MIT Licensed | Copyright © 2020 Feng Left-Handed

footerColumn: 2
footerWrap: 
- headline: Column 1
  items:
  - title: Item 1
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
  - title: Item 2
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
- headline: Column 2
  items:
  - title: Item 1
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
  - title: Item 2
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
---

# 	iconloader.js

iconloader.js是一个开源的图标微动效库，细分化的完成图标的互动，尽量使用原生的css来制作细腻的动画，还有丰富的api可以定义动画类型，大小，时间，等等来完成现在项目中所需要的动画效果，虽说现在项目中图标不需要太花哨，但是良好的互动可以给体验上升一个档次

## vue中使用iconloader

> yarn add iconloader.js || npm install iconloader.js 

安装好之后我们可以页面中使用

>首先引入我们的iconloader.js和样式文件
>
>import Icon from "iconloader.js";
>
>import "iconloader.js/style";

引入好之后呢，iconloader.js 需要一个dom元素来接收，这样你们可以自行控制svg的位置,所以需要先创建一个dom

``` html
<template>
  <div>
    <div ref="refs" class="icon"></div>
  </div>
</template> 
```

然后再script中接收

``` vue
<script setup lang="ts">
import Icon from "iconloader.js";
import "iconloader.js/style";
import { onMounted, ref } from "vue";
const refs = ref<HTMLElement>();
const fetch = () => {
  const odiv = Icon(refs.value, {
    icon: "menu",
  });
};
onMounted(() => {
  fetch();
});
</script>
```

完成之后就可以看到图标

## 在html项目中运行

在html中使用暂时没有设置cdn，所以需要手动引入文件

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>icon.js</title>
    <link rel="stylesheet" href="./dist/style.css"></link>
  </head>
  <body>
    icon.js
    <div class="icon"></div>
  </body>
  <script src="./dist/iconloader.js.umd.js"></script>
  <script>
    const icondom = document.querySelector(".icon");
    let consx = iconloader(odiv1, {
      icon: "menu",
    });
  </script>
</html>
```



步骤与上面一致，只是引入的方式发生了变化