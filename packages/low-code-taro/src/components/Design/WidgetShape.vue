<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-10 11:19:27
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-10 16:37:45
-->
<template>
  <div class="shape">
    <div class="shape-dashed event-none"></div>
    {{ moveStatus }}
    <slot />
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs } from "vue";
import { useMove } from "./useMove";

const { moveStatus } = useMove();
</script>

<style lang="scss" scoped>
@import "../../style/variable";

.shape {
  position: relative;
  cursor: pointer;

  &:hover > .shape-dashed {
    display: block;
  }

  .shape-dashed {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: dashed 1px $theme-color;
    z-index: 100;
  }

  .event-none {
    pointer-events: none;
  }

  .shape-solid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: solid 2px $theme-color;
    z-index: 100;
  }
}
</style>
