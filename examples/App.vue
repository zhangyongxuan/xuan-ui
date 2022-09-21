<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {XVideoToChar} from 'xuan-vue-ui';

import 'xuan-vue-ui/lib/style.css';
</script>

<template>
  <x-video-to-char
    :canvasBC="'#fff'"
    :colorful="true"
    :charList="[1,2,3,4,5]"
    :random="true"
    sourceURL="https://www.zhangyongxuan.com/oss/vue-admin/1.mp4"
  />
</template>

<style scoped>
  
</style>
