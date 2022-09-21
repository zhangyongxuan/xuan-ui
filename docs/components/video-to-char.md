---
layout: doc
---

# 视频字符化组件

## 基础用法



:::demo sourceURL为视频资源地址，可以是网络资源也可以是本地资源（必须）

```vue
  <template>
     <x-video-to-char
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::

## 指定大小
:::demo size属性接受一个对象,包含width和height两个属性均为number

```vue
  <template>
     <x-video-to-char
        :size="{width:500,height:300}"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::

## 指定背景颜色
:::demo canvasBC属性接受字符串,可以是符合css颜色定义的任何一种写法

```vue
  <template>
     <x-video-to-char
        canvasBC="red"
        :size="{width:500,height:300}"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::

## 指定字符集
:::demo canvasBC属性接受字符串,可以是符合css颜色定义的任何一种写法

```vue
  <template>
     <x-video-to-char
        :charList="[]"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::

## 纯色模式
:::demo 纯色模式不可指定字符集

```vue
  <template>
     <x-video-to-char
        :colorful="false"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::
