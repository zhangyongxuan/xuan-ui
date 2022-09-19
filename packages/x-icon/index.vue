
<template>
  <i v-bind="$attr" :class="className"></i>
</template>

<script>
export default {
  name: "x-icon",
};
</script>

<script setup name="x-icon">
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    defalut: "",
  },
  class: {
    type: String,
    defalut: " ",
  },
});
const className = computed(() => {
  let classNames = ["iconfont", props.name];

  if (props.class) {
    classNames = [...classNames, ...props.class.split(" ").filter((i) => i)];
  }
  return classNames;
});
</script>

<style lang="scss" scoped>
</style>>


<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url("iconfont.ttf?t=1663307627933") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-zanting:before {
  content: "\f0299";
}

.icon-ai08:before {
  content: "\e67c";
}

.icon-bofang:before {
  content: "\e8a3";
}

.icon-bofang1:before {
  content: "\e624";
}

.icon-zanting1:before {
  content: "\e629";
}

.icon-tingzhi:before {
  content: "\eae1";
}

.icon-24gf-pauseCircle:before {
  content: "\ea81";
}

.icon-24gf-play:before {
  content: "\ea82";
}

.icon-24gf-stop:before {
  content: "\ea89";
}
</style>