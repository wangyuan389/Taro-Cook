<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-08 16:43:21
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-09 18:59:05
-->
<template>
  <div class="text">{{ value }}</div>
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
</style>
