// 这里的数据又接口返回
const microApps = [
    {
        name: "VueMicroApp",
        entry: import.meta.env.VITE_APP_SUB_VUE,
        activeRule: "/vue", // 注意这里 如果子应用有路 在创建路由的时候加上base
    },
];
function loader(loading: boolean) {
    console.log(loading);
}
const apps = microApps.map((item) => {
    return {
        ...item,
        container: "#Container",
        loader,
    };
});
export default apps;
