/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-09-29 01:15:23
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-08 16:01:09
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style/index.scss";

// 无界 微前端
import WujieVue from "wujie-vue3";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(WujieVue);

app.mount("#app");
