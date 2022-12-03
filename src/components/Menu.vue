<template>
    <el-menu
        default-active="0"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
    >
        <el-menu-item v-for="item of nav" :index="item.index" @click="handleClick">
            <span>{{ item.name }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ElMenu, ElSubMenu, ElMenuItemGroup, ElMenuItem, MenuItemRegistered } from "element-plus";

// import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
interface Nav {
    name: string;
    url: string;
    index: string;
}

defineProps<{
    nav: Array<Nav>;
}>();
const emits = defineEmits<{
    (e: "menuClick", index: string): void;
}>();
const handleClick = (item: MenuItemRegistered) => {
    const { index } = item;
    emits("menuClick", index);
};
</script>
