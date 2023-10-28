<template></template>

<script setup>
import { ref, onMounted, defineComponent, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

let recoverTimeout = null;

const originTitle = ref("");
const config = ref({
  showIcon: SHOW_ICON,
  showText: SHOW_TEXT,
  hideIcon: HIDE_ICON,
  hideText: HIDE_TEXT,
  recoverTime: RECOVER_TIME,
});

const getIconElm = () => {
  let elm = document.querySelector("link[rel=icon]");
  if (elm === null) {
    elm = document.createElement("link");
    elm.setAttribute("rel", "icon");
    document.head.appendChild(elm);
  }
  return elm;
};

const hidden = () => {
  if (config.value.hideIcon !== "") {
    getIconElm().setAttribute("href", config.value.hideIcon);
  }
  document.title = config.value.hideText + " " + originTitle.value;
  recoverTimeout && clearTimeout(recoverTimeout);
};

const visible = () => {
  if (config.value.showIcon !== "") {
    getIconElm().setAttribute("href", config.value.showIcon);
  }
  document.title = config.value.showText + " " + originTitle.value;
  recoverTimeout = setTimeout(() => {
    document.title = originTitle.value;
  }, config.value.recoverTime);
};

onMounted(() => {
  originTitle.value = document.title;
  if (config.value.showIcon !== "") {
    getIconElm().setAttribute("href", config.value.showIcon);
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      hidden();
    } else {
      visible();
    }
  });
});

const route = useRoute();
watch(
  () => route.path,
  (to, from) => {
    if (to !== from) {
      setTimeout(() => {
        originTitle.value = document.title;
        clearTimeout(recoverTimeout);
      }, 100);
    }
  }
);
</script>
