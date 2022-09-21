---
layout: home

hero:
  name: xuan-vue-ui
  text: 一个自用vue组件库
  tagline: 前端的小前端的白
  image:
    src: /logo.png
    alt: xuan-ui
  actions:
    - theme: brand
      text: 快速使用
      link: /components/index
    - theme: alt
      text: Gitee
      link: https://gitee.com/zhangyongxuan/xuan-ui
    - theme: alt
      text: GitHub
      link: https://github.com/zhangyongxuan/xuan-ui.git

features:
  - icon: ⚡️
    title: 多种好玩的组件
    details: 视频字符画、图片字符画、文字粒子化组件等各种有趣的组件
  - icon: 🖖
    title: 开箱即用
    details: 两行代码导入，即可在页面使用
  - icon: 🛠️
    title: 基于Vue3
    details: 基于Vue3拥有强大的定制化配置
---



<div style="display:flex;flex-direction: column;align-content: center;justify-content: center;align-items: center;margin-top:20px">
    <h1 style="font-size:24px;font-weight:bolder">视频字符化</h1>
    <x-video-to-char
        :canvasBC="'#fff'"
        :size="{width:400,height:800}"
        :colorful="false"
        :random="true"
        sourceURL="https://server.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
</div>



:::demo 使用type，plain，round来定义 Button 的样式

```vue
  <template>
    <button>123</button>
  </template>
  <style>
    button{
      color:red;
    }
  </style>
```

:::

 