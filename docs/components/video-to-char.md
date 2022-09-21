---
layout: doc
---

<h1 style="font-size:40px;text-align:center;margin-bottom:20px">视频字符化组件</h1>

# 基础用法



:::demo sourceURL为视频资源地址，可以是网络资源也可以是本地资源（必须）

```vue
  <template>
     <x-video-to-char
        :muted="false"  
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
        :muted="false"  
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
        :muted="false"  
        canvasBC="red"
        :size="{width:500,height:300}"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::

## 指定字符集
:::demo charList属性接受一个一维数组，非纯色模式下生效

```vue
  <template>
     <x-video-to-char
        :muted="false"  
        :size="{width:500,height:300}"
        :charList="'charList属性接受一个一维数组，非纯色模式下生效'.split('')"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::


## 指定字符集排列顺序
:::demo random属性接受一个boolean值，非纯色模式下生效,为false时字符按照charlist顺序排列

```vue
  <template>
     <x-video-to-char
        :muted="false"  
        :size="{width:500,height:300}"
        :charList="'charList属性接受一个一维数组，非纯色模式下生效'.split('')"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
     <x-video-to-char
        :muted="false"  
        :random="true"
        :size="{width:500,height:300}"
        :charList="'charList属性接受一个一维数组，非纯色模式下生效'.split('')"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::





## 纯色模式
:::demo colorful接受一个boolean值，为true的时候为纯色模式， 纯色模式下random、charList将会失效，可使用canvasBC、charColor设置背景颜色和字符颜色

```vue
  <template>
     <x-video-to-char
        :muted="false"  
        :size="{width:500,height:300}"
        :colorful="false"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
     <x-video-to-char
        :muted="false"  
        canvasBC="red"
        charColor="blue"
        :size="{width:500,height:300}"
        :colorful="false"
        sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/5.mp4"
      />
  </template>
```
:::

# 属性

|属性                 |           说明            |             类型          | 默认值            |是否必须|
|---------------------|--------------------------|---------------------------|------------------|-------|
|canvasBC                 |   背景颜色            |`String`          | "#000"            |否|
|charColor | 纯色模式下字符的颜色（仅在纯色模式下生效）|`String`          | "#fff"            |否|
|sourceURL | 视频地址|`String`|无 |是|
|muted | 是否静音|`Boolean`|`false`  |否|
|size |宽高|`Object`|`{width: 200,height: 400}` |否|
|charList |字符集|`Array`|大写英文字母A~Z |否|
|random |字符顺序是否随机|`Boolean`|`true` |否|
|colorful |是否为纯色模式|`Boolean`|`true` |否|