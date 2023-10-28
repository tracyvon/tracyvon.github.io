import { onMounted, watch } from "vue";
import { defineClientConfig } from "@vuepress/client";
import { useRoute } from "vue-router";
// import DynamicTitle from "./DynamicTitle.vue";

const useDynamicTitle = () => {
  let recoverTimeout;
  let originTitle;

  const config = {
    showIcon: SHOW_ICON,
    showText: SHOW_TEXT,
    hideIcon: HIDE_ICON,
    hideText: HIDE_TEXT,
    recoverTime: RECOVER_TIME,
  };

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
    if (config.hideIcon !== "") {
      getIconElm().setAttribute("href", config.hideIcon);
    }
    document.title = config.hideText;
    clearTimeout(recoverTimeout);
  };

  const visible = () => {
    if (config.showIcon !== "") {
      getIconElm().setAttribute("href", config.showIcon);
    }
    document.title = config.showText + " " + originTitle;
    recoverTimeout = setTimeout(() => {
      document.title = originTitle;
    }, config.recoverTime);
  };

  onMounted(() => {
    originTitle = document.title;
    console.log(originTitle, document.title);

    if (config.showIcon !== "") {
      getIconElm().setAttribute("href", config.showIcon);
    }
    document.addEventListener("visibilitychange", () => {
      document.hidden ? hidden() : visible();
    });
  });

  const route = useRoute();
  watch(
    () => route.path,
    (to, from) => {
      if (to !== from) {
        // INFO: 延迟执行是因为路由变化时获取到的title不是最新的
        setTimeout(() => {
          originTitle = document.title;
          clearTimeout(recoverTimeout);
        }, 100);
      }
    }
  );
};

export default defineClientConfig({
  setup() {
    useDynamicTitle();
  },
  // rootComponents: [DynamicTitle],
});
