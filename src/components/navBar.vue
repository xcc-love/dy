<template>
  <div class="navtop-content">
    <van-icon
      @click="showToast('暂未开放')"
      name="apps-o"
      size="22"
      color="#fff"
    />

    <!-- 如果位于首页显示这个 -->
    <div v-if="homeFlag">
      <i
        @click="handleTabs(i)"
        v-for="(item, i) in navData"
        :key="i"
        :class="i === videoStore.playsData.navIndex ? 'activeColor' : ''"
        >{{ item }}</i
      >
    </div>

    <van-icon
      @click="showToast('暂未开放')"
      name="setting-o"
      size="22"
      color="#fff"
    />
  </div>
  <div></div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useVideoStore } from "../store/videos";
import { showToast } from "vant";

// 定义数据
const navData = reactive(["推荐", "新闻", "教育", "体育", "音乐", "搞笑"]);

// 子组件接收父组件传来的值
const props = defineProps({
  homeFlag: Boolean,
});
// 子组件向父组件传值
const emits = defineEmits(["changeTabs", "chatFlag"]);

// 获取store里的数据
let videoStore = useVideoStore();
videoStore.handleRecom(); //触发actions

// 监听视频分类的值做出相应操作
watch(
  () => videoStore.playsData.navIndex,
  (newValue) => {
    videoStore.$patch(() => {
      if (newValue === 0) {
        videoStore.playsData = videoStore.recomData;
      } else if (newValue === 1) {
        videoStore.playsData = videoStore.newsData;
      } else if (newValue === 2) {
        videoStore.playsData = videoStore.learnData;
      } else if (newValue === 3) {
        videoStore.playsData = videoStore.sportData;
        // emits("chatFlag", true);
      } else if (newValue === 4) {
        videoStore.playsData = videoStore.musicData;
      } else if (newValue === 5) {
        videoStore.playsData = videoStore.funnyData;
      } else {
        console.log("没有这个分类");
      }
      videoStore.playsData.navIndex = newValue;
    });
  },
  { deep: true }
);

function handleTabs(i) {
  emits("changeTabs", true); //将当前点击的标签传给父组件
  videoStore.$patch(() => {
    if (i === 0) {
      videoStore.playsData = videoStore.recomData;
    } else if (i === 1) {
      videoStore.playsData = videoStore.newsData;
    } else if (i === 2) {
      videoStore.playsData = videoStore.learnData;
    } else if (i === 3) {
      videoStore.playsData = videoStore.sportData;
      // emits("chatFlag", true);
    } else if (i === 4) {
      videoStore.playsData = videoStore.musicData;
    } else if (i === 5) {
      videoStore.playsData = videoStore.funnyData;
    } else {
      console.log("没有这个分类");
    }
  });

  videoStore.$patch(() => {
    videoStore.playsData.navIndex = i;
  });
}
</script>

<style scoped lang="less">
.navtop-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  opacity: 0.7;
  width: 95%;
  height: 50px;

  div {
    width: 75%;
    display: flex;
    justify-content: space-between;
    i {
      font-family: cursive;
      color: #fff;
      font-size: 14px;
      text-wrap: nowrap;
    }
  }
}

// 选中样式
.activeColor {
  color: #7ee9f2 !important;
  transform: scale(1.2);
  font-weight: 800;
}
</style>
