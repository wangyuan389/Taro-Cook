<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-10 10:14:38
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-10 14:37:01
-->
<template>
  <div class="box">
    <div class="box-head"></div>
    <div class="box-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.box {
  border-radius: 10px;
  box-shadow: 1px 1px 6px 0 rgba(12, 31, 80, 0.14);
  margin-top: 5px;

  .box-head {
    height: 30px;
    background: url("https://file.qingflow.com/assets/widget/theme/header0.png");
    background-size: 100% 100%;
    font-size: 14px;
    color: #fff;
    letter-spacing: 1px;
  }
  .box-body {
    padding: 10px;
    min-height: 40px;
  }
}
</style>
