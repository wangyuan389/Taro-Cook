<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-08 16:43:21
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-12 09:51:05
-->
<template>
  <div class="text">
    <div style="background: #ccc">{{ value }}</div>
  </div>
</template>

<script setup lang='ts'>
import { defineEmits, ref } from "vue";

const props = defineProps({
  value: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.text {
  padding: 30px 0;
  text-align: center;
  font-size: 14px;
  background: #fff;
}
</style>
