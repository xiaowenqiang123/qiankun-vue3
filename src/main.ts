import { createApp } from "vue";
import "element-plus/dist/index.css";
import LayoutVue from "./views/Layout.vue";
import "./style.css";
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from "qiankun";
import { ElLoading, ElMessage } from "element-plus";
createApp(LayoutVue).mount("#app");
let loadingInstance: ReturnType<typeof ElLoading.service>;
const microApps = [
    {
        name: "VueMicroApp",
        entry: import.meta.env.VITE_APP_SUB_VUE,
        activeRule: "/vue", // 注意这里 如果子应用有路 在创建路由的时候加上base
    },
];

const apps = microApps.map((item) => {
    return {
        ...item,
        container: "#Container",
    };
});
registerMicroApps(apps, {
    beforeLoad: (app) => {
        console.log("before load app.name====>>>>>", app.name);
        loadingInstance = ElLoading.service();
        return Promise.resolve();
    },
    beforeMount: [
        (app) => {
            console.log(app);
            console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
            return Promise.resolve();
        },
    ],
    afterMount: [
        (app) => {
            console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
            loadingInstance.close();
            return Promise.resolve();
        },
    ],
    afterUnmount: [
        (app) => {
            console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
            return Promise.resolve();
        },
    ],
});
addGlobalUncaughtErrorHandler((event) => {
    loadingInstance.close();
    ElMessage({
        showClose: true,
        message: "Oops, this is a error message.",
        type: "error",
    });
});
