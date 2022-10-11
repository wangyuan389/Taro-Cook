<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-09 19:04:30
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-11 17:17:48
-->
<template>
  <div class="area" type="area" :id="widget.children" :class="inMoveArea">
    <draggable
      group="itxst"
      v-model="widget.children"
      item-key="id"
      animation="300"
      ghostClass="ghost"
      :class="widget.children.length ? '' : 'area-empty'"
      @dragover="moveWidget"
    >
      <template #item="{ element }">
        <WidgetShape :widgetId="element.id">
          <component
            class="area-item"
            :is="element.component"
            v-bind="element"
            type="widget"
          >
            <WidgetList v-if="element.children" :widget="element" />
          </component>
        </WidgetShape>
      </template>
    </draggable>
  </div>
</template>

<script>
import { reactive, toRefs, computed, defineProps } from "vue";
import draggable from "vuedraggable";
import WidgetShape from "./WidgetShape.vue";
import TextWidget from "../../widgets/TextWidget.vue";
import BoxWidget from "../../widgets/BoxWidget.vue";
import { useDesign } from "./useDesign";

export default {
  components: { WidgetShape, TextWidget, BoxWidget, draggable },

  props: {
    widget: {
      type: Object,
      default: () => {},
    },
  },

  setup(props) {
    const { moveStatus, moveWidget } = useDesign();

    let inMoveArea = computed(() => {
      console.log("inMoveArea......", moveStatus);
      console.log("props", props);
      console.log("props?.widget?.id", props?.widget?.id);
      if (props?.widget?.id == moveStatus?.id && moveStatus?.type == "area") {
        return "move";
      }

      return "";
    });

    return {
      moveStatus,
      moveWidget,
      inMoveArea,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variable";

.area {
  position: relative;

  .area-item {
    user-select: none;
  }
  .ghost {
    position: relative;
    width: 100%;
    height: 40px;

    &::before {
      content: "组件放置";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      line-height: 40px;
      background: #fafafa;
      text-align: center;
      color: #8591a2;
      z-index: 10000;
    }
  }

  .area-empty {
    position: relative;
    height: 40px;
    background: #fafbfc;
    &::after {
      content: "拖拽组件到此处";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #8591a2;
      font-size: 10px;
    }
  }
}

.move {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $theme-color;
  }
}
</style>