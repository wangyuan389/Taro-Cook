<!--
 * @Description: 自定义物料列表
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:16:23
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-08 16:02:08
-->
<template>
  <ul class="widgets" @dragstart="handleDragStart">
    <li
      v-for="(widget, index) in widgets"
      :key="index"
      class="widgets-item"
      :draggable="true"
      :data-component="JSON.stringify(widget)"
    >
      <i class="icon" :class="widget.icon"></i>
      <span>{{ widget.name }}</span>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { useDesignStore } from "@/store/design.ts";

const { handleDragStart } = useDesignStore();

const widgets: any[] = ref([
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
]);
</script>

<style lang="scss" scoped>
.widgets {
  background: #fff;

  .widgets-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 72px;
    margin-bottom: 8px;
    padding: 10px 0;
    font-size: 12px;
    color: #666;
    cursor: pointer;

    i {
      font-size: 29px;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    &:hover {
      color: #fff;
      background: #155bd4;
    }
  }
}
</style>
