# 安装

## npm安装
 ```
 npm install xuan-vue-ui -S
 ```
## yarn安装
 ```
 yarn add xuan-vue-ui -S
 ```

 # 注册

 ## 全局导入

 ```js
import XuanVueUI from 'xuan-vue-ui';
import 'xuan-vue-ui/lib/style.css';
....

app.use(XuanVueUI);

 ```
## 按需导入

 ```js
import {XVideoToChar} from 'xuan-vue-ui';
import 'xuan-vue-ui/lib/style.css';
app.component(XVideoToChar.name,XVideoToChar);

 ```

# 使用

```vue
<template>
  <x-video-to-char
    sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/1.mp4"
  />
</template>
```

