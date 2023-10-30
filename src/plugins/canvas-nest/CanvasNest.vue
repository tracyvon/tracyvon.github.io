<template>
  <ClientOnly></ClientOnly>
</template>

<script setup>
// 在这里导入 CanvasNest，那构建时会报 `window is not defined` 异常
// import CanvasNest from "canvas-nest.js";
import { onMounted, onUnmounted } from "vue";

const config = {
  opacity: 0.8,
  count: 120,
  zIndex: 10,
};

let cn;

onMounted(() => {
  // see https://v2.vuepress.vuejs.org/zh/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84
  // INFO: 打包构建时会创建 SSR 版本，导致在 Node 环境下报 `window is not defined`，通过 `import then` 方式确保 `canvas-next.js` 加载完成后再渲染
  import("canvas-nest.js").then((module) => {
    const CanvasNest = module.default;
    cn = new CanvasNest(document.body, config);
  });
});

onUnmounted(() => {
  cn && cn.destroy();
});
</script>

<style></style>
