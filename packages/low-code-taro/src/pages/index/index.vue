<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-09-29 17:13:33
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-10 11:15:29
-->
<template>
  <WidgetList :list="list" />
  <!-- <div>{{ a }}</div>
  <div>{{ b }}</div>
  <div @click="a++">+</div> -->
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import WidgetList from "../../components/Design/WidgetList.vue";

const list: any[] = ref([
  { id: 1, component: "TextWidget", value: "text1" },
  { id: 2, component: "TextWidget", value: "text2" },
  { id: 3, component: "TextWidget", value: "text3" },
  {
    id: 0,
    component: "BoxWidget",
    children: [{ id: 4, component: "TextWidget", value: "text4" }],
  },
]);

// let a = ref(0);

// let b = computed(() => {
//   return `${a.value}...`;
// });
</script>

<style lang="scss" scoped>
</style>