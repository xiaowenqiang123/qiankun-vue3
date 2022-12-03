<template>
    <div class="w-screen h-screen flex">
        <div class="mr-5">
            <Menu class="h-full" :nav="nav" @menuClick="handleMenuClick" />
        </div>
        <div class="flex flex-1 overflow-hidden relative">
            <div id="Container"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Menu from "../components/Menu.vue";
import { start, setDefaultMountApp } from "qiankun";
import { ref } from "vue";
import { ElLoading } from "element-plus";
// 这里也应该又接口返回
const loading = ref(true);
const nav = ref([
    {
        name: "Simpson",
        url: "vue", // 对应激活的路由
        index: "0",
    },
    {
        name: "tset",
        url: "react", // 对应激活的路由
        index: "1",
    },
]);
setDefaultMountApp(nav.value[0].url);
start();

const handleMenuClick = (index: string) => {
    const res = nav.value.find((res) => res.index === index);
    window.history.pushState(null, "", res?.url);
};
</script>
