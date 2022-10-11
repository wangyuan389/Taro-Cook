<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-10 11:19:27
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-11 17:22:56
-->
<template>
  <div class="shape" :id="props.widgetId" type="widget">
    <div class="shape-dashed"></div>
    <div class="none" :class="moveStyle"></div>
    <slot />
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, defineProps, computed } from "vue";
import { useDesign } from "./useDesign";

const props = defineProps({
  widgetId: {
    type: String,
  },
});

const { moveStatus } = useDesign();

let moveStyle = computed(() => {
  if (moveStatus.id == props.widgetId && moveStatus?.type == "widget") {
    if (moveStatus.location == "up") {
      return "shape-up";
    } else {
      return "shape-down";
    }
  }

  return "";
});
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
    pointer-events: none;
  }

  .shape-up {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: $theme-color;
    z-index: 100;
  }

  .shape-down {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: $theme-color;
    z-index: 100;
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

.none {
  display: none;
}
</style>
