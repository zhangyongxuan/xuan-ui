该组件库中的x-video-to-char 为一个视频字符画的组件

使用方法：
```
npm install xuan-vue-ui
```
全局导入
```
import { createApp } from 'vue'
import xuanUI from 'xuan-vue-ui';
import 'xuan-vue-ui/lib/style.css'; 
createApp(App).use(xuanUI).mount('#app');
```







x-video-to-char 用法
```
 <x-video-to-char
    :size="{ width: 500, height: 1000 }"
    :canvasBC="'#fff'"
    :colorful="true"
    :charList="[1,2,3,4,5]"
    :random="true"
    sourceURL="https://server.zhangyongxuan.com/oss/vue-admin/1.mp4"
  />
```

size： 尺寸   
canvasBC： 画布背景   
colorful：是否彩色   
charList：字符集（colorful为true时生效）  
random：字符顺序是否随机（colorful为true时生效）   
sourceURL：视频地址  