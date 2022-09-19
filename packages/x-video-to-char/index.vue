<template>
  <div class="vtc-container">
    <video
      class="player"
      ref="player"
      :src="sourceURL"
      :width="size.width"
      :height="size.height"
      @ended="isPlay = false"
    />
    <canvas ref="handleDataCanvas" style="display: none" />
    <canvas
      ref="displayCanvas"
      class="displayCanvas"
      :width="size.width"
      :height="size.height"
    />
    <div class="mask" ref="mask" :style="{ display: maskDisplay }">
      <xIcon
        v-if="!isPlay"
        name="icon-24gf-play"
        @click="handleVideoPlay(0)"
        class="controls"
      />
      <xIcon
        v-else
        name="icon-24gf-pauseCircle"
        @click="handleVideoPlay(1)"
        class="controls"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "x-video-to-char",
};
</script>
<script setup name="x-video-to-char">
import { ref, computed, onMounted } from "vue";
import xIcon from "../x-icon";
const props = defineProps({
  canvasBC: {
    type: String,
    default: "#000",
  },
  sourceURL: {
    type: String,
    default: "",
  },
  size: {
    type: Object,
    default: {
      width: 200,
      height: 400,
    },
  },
  charList: {
    type: Array,
    default: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  random: {
    type: Boolean,
    default: true,
  },
  colorful: {
    type: Boolean,
    default: true,
  },
});
const isPlay = ref(false);
const player = ref(null);
const handleDataCanvas = ref(null);
const displayCanvas = ref(null);
const mask = ref(null);
const maskDisplay = ref(1);
let handleDataCtx = null;
let displayCtx = null;

const handleVideoPlay = (opr) => {
  switch (opr) {
    case 0:
      player.value.play();
      isPlay.value = true;
      break;
    case 1:
      player.value.pause();
      isPlay.value = false;
      break;

    default:
      break;
  }
};
const pixelsTransform = (imgData) => {
  const pixelsData = imgData.data;
  const width = imgData.width;
  const height = imgData.height;
  const charData = [];
  for (let row = 0; row < height; row++) {
    const rowData = [];
    for (let col = 0; col < width; col++) {
      const R = pixelsData[(width * row + col) * 4 + 0];
      const G = pixelsData[(width * row + col) * 4 + 1];
      const B = pixelsData[(width * row + col) * 4 + 2];
      const gray = R * 0.299 + B * 0.587 + G * 0.114;
      rowData.push({ gray, R, G, B });
    }
    charData.push(rowData);
  }
  let map = props.charList;
  if (!props.colorful) {
    map = ["#", "&", "$", "*", "!", ".", " "];
  }

  let charIndex = 0;
  return charData.map((row) => {
    return row.map(({ gray, R, G, B }) => {
      // const charD = flag ? map1[Math.floor(gray / 256 * map1.length)] : map[Math.floor(gray / 256 * map.length)];
      let txt = map[charIndex];
      if (!props.colorful || (props.colorful && props.random)) {
        txt = map[Math.floor((gray / 256) * map.length)];
      } else {
        txt = map[charIndex];
      }
      if (charIndex < map.length - 1) {
        charIndex++;
      } else {
        charIndex = 0;
      }
      return { txt, R, G, B };
    });
  });
};

const draw = () => {
  displayCtx.clearRect(
    0,
    0,
    displayCanvas.value.width,
    displayCanvas.value.height
  );
  handleDataCtx.drawImage(
    player.value,
    0,
    0,
    handleDataCanvas.value.width,
    handleDataCanvas.value.height
  );
  const imgData = handleDataCtx.getImageData(
    0,
    0,
    handleDataCanvas.value.width,
    handleDataCanvas.value.height
  );
  const charData = pixelsTransform(imgData);
  charData.forEach((row, rowIndex) => {
    const fontSize = Math.floor(displayCanvas.value.width / row.length);
    // 这里使用画布宽度/每行字符数得到字体大小
    const offsetY = Math.floor(
      (props.size.height - charData.length * fontSize) / 2
    );
    /**
     * charData.length * fontSize为在画布中绘制的图像高度
     * Y轴方向偏移量为 （画布高度-图像高度）/2
     */
    displayCtx.font = `${fontSize}px arial`;
    // 使用等宽字体 确保上面计算结果在X方向铺满画布，Y方向居中
    row.forEach((col, colIndex) => {
      const { txt, R, G, B } = col;
      if (props.colorful) {
        displayCtx.fillStyle = `rgb(${R},${G},${B})`;
      } else {
        displayCtx.fillStyle = "#000";
      }
      displayCtx.fillText(
        txt,
        fontSize * colIndex,
        fontSize * rowIndex + offsetY
      );
    });
  });
};

const init = () => {
  const genFun = (opacity) => {
    return () => {
      console.log(111);
      maskDisplay.value = opacity;
    };
  };
  player.value.addEventListener(
    "play",
    () => {
      handleDataCanvas.value.width = 50;
      handleDataCanvas.value.height =
        ((50 / 1.5) * player.value.videoHeight) / player.value.videoWidth;
      displayCanvas.value.addEventListener("mouseenter", genFun("flex"), false);
      mask.value.addEventListener("mouseenter", genFun("flex"), false);
      displayCanvas.value.addEventListener("mouseout", genFun("none"), false);
      mask.value.addEventListener("mouseout", genFun("none"), false);
      genFun("none")();
      const render = () => {
        const event = new CustomEvent("render");
        player.value.dispatchEvent(event);
        if (!player.value.ended && !player.value.paused) {
          requestAnimationFrame(render);
        }
      };
      requestAnimationFrame(render);
    },
    false
  );
  player.value.addEventListener(
    "render",
    () => {
      draw();
    },
    false
  );
  player.value.addEventListener(
    "ended",
    () => {
      displayCanvas.value.removeEventListener(
        "mouseenter",
        genFun("flex"),
        false
      );
      mask.value.removeEventListener("mouseenter", genFun("flex"), false);
      displayCanvas.value.removeEventListener(
        "mouseout",
        genFun("none"),
        false
      );
      mask.value.removeEventListener("mouseout", genFun("none"), false);
      isPlay.value = false;
      genFun("flex")();
    },
    false
  );
  displayCtx = displayCanvas.value.getContext("2d");
  handleDataCtx = handleDataCanvas.value.getContext("2d");
  player.value.crossOrigin = "";
  player.value.setAttribute("webkit-playsinline", "webkit-playsinline"); // Fix fullscreen problem on IOS 8 and 9
  player.value.setAttribute("playsinline", "playsinline");
};
onMounted(() => {
  init();
});
const boxSize = computed(() => ({
  width: props.size.width + "px",
  height: props.size.height + "px",
}));
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.vtc-container {
  // display: flex;
  position: relative;
  height: v-bind("boxSize.height");
  width: v-bind("boxSize.width");
  .player {
    display: none;
    height: v-bind("boxSize.height");
    width: v-bind("boxSize.width");
  }
  .displayCanvas {
    background: v-bind("props.canvasBC");
  }
  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    width: v-bind("boxSize.width");
    height: v-bind("boxSize.height");
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    .controls {
      color: v-bind("canvasBC");
      font-size: 30px;
      transition: 0.3s all;
      filter: invert(100%);
      &:hover {
        opacity: 0.5;
        transform: scale(1.2);
      }
    }
  }
}
</style>>

