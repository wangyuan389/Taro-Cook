<!--
 * @Description: 
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:14:20
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-09 16:32:09
-->
<template>
  <div class="design-center">
    <WujieVue
      id="edit"
      class="edit"
      name="vue3"
      url="http://192.168.0.104:10086/#/pages/index/index"
      :sync="true"
    ></WujieVue>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.design-center {
  .edit {
    width: 375px;
    height: 667px;
    margin: 0 auto;
    overflow: auto;
    background: #fff;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>
