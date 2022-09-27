<template>
  <div class="media-dialog">
    <i @click="$emit('close')" class="close iconfont icon-guanji" />
    <video
      v-show="showVideo"
      id="camera-video"
      ref="video"
      :srcObject="srcObject"
      autoplay
    />
    <div v-show="showVideo" class="camera-controls">
      <i
        @click="selectPicHandle"
        class="camera-controls-item iconfont icon-xiangce1"
      />
      <i
        @click="photograph"
        class="camera-controls-item iconfont icon-paizhao"
      />
      <i
        @click="flipCamera"
        class="camera-controls-item iconfont icon-fanzhuanjingtou"
      />
    </div>
    <div v-show="!showVideo" class="camera-controls">
      <i
        @click="resetPhotoData"
        class="camera-controls-item iconfont icon-zhongpaishe"
      />
      <i @click="finish" class="camera-controls-item iconfont icon-queding" />
    </div>
    <canvas v-show="false" ref="canvas" id="canvas" />
    <input
      style="display: none"
      ref="input"
      @change="handleChange"
      type="file"
      multiple
      accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
    />
    <img class="photo" v-show="showPhoto" :src="photoData" />
  </div>
</template>
<script setup name="media-dialog">
import { ElMessage } from 'element-plus';

const emits = defineEmits(['finish', 'close']);

let srcObject = $ref({});
let selectPics = $ref([]);
let canvas = $ref(null);
let video = $ref(null);
let input = $ref(null);
let photoData = $ref(null);
let showPhoto = $ref(false);
let showVideo = $ref(false);
let flipCameraFlag = $ref(false);
const $vm = inject('$vm');

function setupCanvas(w = 1920, h = 1080) {
  var ratio = window.devicePixelRatio || 1;

  canvas.width = w * ratio; // 实际渲染像素
  canvas.height = h * ratio; // 实际渲染像素
  canvas.style.width = `${w}rem`; // 控制显示大小
  canvas.style.height = `${h}rem`; // 控制显示大小
  // canvas.style.transform = `scale(${1 / ratio})`;
  // canvas.style.transformOrigin = 'left';
  // setTransform() 允许您缩放、旋转、移动并倾斜当前的环境
  // canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  // console.log(ratio);
}

const callCamera = async (facingMode = 'environment') => {
  try {
    console.log(facingMode);
    const res = await navigator.mediaDevices.getUserMedia({
      video: {
        width: {
          min: 1024,
          ideal: window.innerWidth,
          max: 2560,
        },
        height: {
          min: 768,
          ideal: window.innerHeight,
          max: 1440,
        },
        facingMode,
      },
    });
    console.log(res);
    showVideo = true;
    showPhoto = false;
    return res;
  } catch (error) {
    $vm.msgError(error);
    throw new Error(error);
  }
};
const selectPicHandle = () => {
  input.click();
};
const draw = async (facingMode = 'environment') => {
  console.log(facingMode);
  if (srcObject && srcObject.getTracks) {
    // 停止当前视频流
    srcObject.getTracks().forEach((track) => {
      track.stop();
    });
  }
  const res = await callCamera(facingMode);

  srcObject = res;
};
watch(
  () => flipCameraFlag,
  (val) => {
    console.log(val);
    if (!val) {
      draw('environment');
    } else {
      draw('user');
    }
  }
);
const oprShowHideen = () => {
  showPhoto = !showPhoto;
  showVideo = !showVideo;
};
// 图片转换为base64
const imageToBase64 = (file) => {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file); //转化二进制流，异步方法
    reader.onload = (e) => {
      // console.log(e.target.result,'-----res')
      resolve(e.target.result);
    };
  });
};

// base64转为图片
// const base64ToBlob = ({ urlData, type = 'image/png' }) => {
//   return `data:${type};base64,${urlData}`;
// };
const handleChange = async (e) => {
  selectPics = e.target?.files;
  const transformQueue = [];
  Array.from(selectPics).forEach((i) => {
    transformQueue.push(imageToBase64(i));
  });
  try {
    const transformResult = await Promise.all(transformQueue);
    console.log(transformResult);

    emits('finish', transformResult);
    resetCameraData();
    e.target.value = [];
  } catch (error) {
    ElMessage({ showClose: true, message: error, type: 'error' });
  }
};
const photograph = () => {
  let ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const datas = canvas.toDataURL('image/webp', 0);
  photoData = datas;
  oprShowHideen();
  // console.log(datas);
};
const resetPhotoData = () => {
  oprShowHideen();
  photoData = null;
};
const init = () => {
  draw();
  setupCanvas(window.innerWidth, window.innerHeight);
  resetCameraData();
};
const resetCameraData = () => {
  showPhoto = false;
  showVideo = true;
  photoData = null;
  selectPics = [];
};

const finish = () => {
  emits('finish', [photoData]);
  resetCameraData();
};
const flipCamera = () => {
  flipCameraFlag = !flipCameraFlag;
};
onMounted(async () => {
  init();
  // window.addEventListener('resize', () => {
  //   init();
  // });
});
onActivated(() => {
  init();
  // window.addEventListener('resize', () => {
  //   init();
  // });
});
</script>
<style lang="scss" scoped>
.media-dialog {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: black;
  z-index: 100000;
  #camera-video {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // display: none;
  }
  .camera-controls {
    position: absolute;
    z-index: 10000;
    top: 0;
    right: 0;
    height: 100%;
    width: 20rem;
    background: rgba($color: white, $alpha: 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .camera-controls-item {
      font-size: 4rem;
      color: white;
      cursor: pointer;
      user-select: none;
    }
  }
  #canvas {
    width: 100vw;
    height: 100vh;
    background: black;
    // display: none;
  }
  .photo {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
  }
  .close {
    position: absolute;
    z-index: 10000;
    font-size: 4rem;
    color: white;
    cursor: pointer;
    user-select: none;
    top: 2rem;
    left: 2rem;
  }
}
</style>
