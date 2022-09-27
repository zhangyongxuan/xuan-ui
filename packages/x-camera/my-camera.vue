<template>
  <div class="my-camera" v-bind="$attrs">
    <i
      v-if="!readonly"
      class="add-photo my-camera-items iconfont icon-jia"
      @click="showCameraModal = true"
    />

    <div
      v-if="picList.length > 0"
      class="my-camera-items view-more-pic"
      :style="{ backgroundImage: `url(${picList[0]})` }"
      @click="showPreview = !showPreview"
    >
      <i class="view-more-pic-warpper iconfont icon-changyong_chakangengduo" />
    </div>
    <div v-if="picList.length === 0 && readonly" class="my-camera-items">
      暂无照片
    </div>

    <my-camera-modal
      v-if="showCameraModal"
      @finish="finish"
      @close="showCameraModal = false"
    />
    <el-dialog
      v-model="showPreview"
      title="图片预览"
      @close="handleClose"
      append-to-body
    >
      <div class="my-camera-preview">
        <div
          v-for="(v, index) in picList"
          class="my-camera-preview-items"
          :key="v.id"
        >
          <div
            v-if="enableSelectFlag"
            class="my-camera-preview-items-warp"
            :style="{
              opacity: selectImgsIndex.includes(index) ? '0.6' : '0.1',
            }"
            @click.stop="handleSelectPic(index)"
          ></div>
          <el-image
            class="my-camera-preview-item-pic"
            :src="v"
            :preview-src-list="picList"
            :initial-index="index"
            fit="cover"
          />
        </div>
      </div>
      <template #footer>
        <el-button
          v-if="!readonly"
          type="primary"
          @click="enableSelectFlag = !enableSelectFlag"
          >{{ enableSelectFlag ? '取消选择' : '选择' }}</el-button
        >
        <el-button
          v-if="!readonly"
          :disabled="enableSelectFlag === false"
          type="danger"
          @click="handleDeletePic"
          icon="Delete"
          >删除</el-button
        >
        <el-button type="primary" @click="handleClose">关闭预览</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup name="my-camera">
const props = defineProps({
  modelValue: {
    type: Array,
    default: [],
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['update:modelValue', 'change']);
let enableSelectFlag = $ref(false);
let selectImgsIndex = $ref([]);
let showPreview = $ref(false);
let picList = $computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    // console.log(val);
    emits('update:modelValue', val);
    emits('change', val);
  },
});
watch(
  () => enableSelectFlag,
  (val) => {
    if (val) {
      selectImgsIndex = [];
    }
  }
);
watch(
  () => picList,
  (val) => {
    if (val.length === 0) {
      showPreview = false;
    }
  }
);

let showCameraModal = $ref(false);
const finish = (imgDatas) => {
  showCameraModal = false;
  picList = [...picList, ...imgDatas];
};
const handleSelectPic = (index) => {
  if (selectImgsIndex.includes(index)) {
    selectImgsIndex = selectImgsIndex.filter((i) => i !== index);
  } else {
    selectImgsIndex.push(index);
  }
};
const handleDeletePic = () => {
  const newImgDatalist = [];
  picList.forEach((i, index) => {
    if (!selectImgsIndex.includes(index)) {
      newImgDatalist.push(i);
    }
  });
  picList = newImgDatalist;
  selectImgsIndex = [];
};
const handleClose = () => {
  showPreview = false;
  enableSelectFlag = false;
  selectImgsIndex = [];
};
</script>
<style lang="scss" scoped>
.my-camera {
  display: flex;
  width: 100%;
  height: 100%;
  .my-camera-items {
    width: 4rem;
    height: 4rem;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 4rem;
  }

  .add-photo {
    font-size: 1rem;
    background-color: white;
    border: 0.1rem dashed gainsboro;
    border-radius: 0.4rem;
  }
  .view-more-pic {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .view-more-pic-warpper {
      display: block;
      width: 100%;
      height: 100%;
      background: rgba($color: white, $alpha: 0.8);
    }
  }
}

.my-camera-preview {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .my-camera-preview-items {
    width: 8rem;
    height: 8rem;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 4rem;
    position: relative;
    .my-camera-preview-items-warp {
      width: 100%;
      height: 100%;
      opacity: 0.9;
      background-color: black;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100000;
    }
    .my-camera-preview-item-pic {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
