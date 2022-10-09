<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:15:11
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-08 15:42:01
-->
<template>
  <div class="design">
    <DesignLeft />
    <DesignCenter />
    <DesignRight />
  </div>
</template>

<script setup lang='ts'>
import DesignLeft from "@/components/Design/DesignLeft/index.vue";
import DesignCenter from "@/components/Design/DesignCenter/index.vue";
import DesignRight from "@/components/Design/DesignRight/index.vue";
</script>

<style lang="scss" scoped>
.design {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
</style>
