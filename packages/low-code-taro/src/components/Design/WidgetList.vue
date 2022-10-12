<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-09 19:04:30
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-12 10:29:25
-->
<template>
  <div class="widgets" type="page">
    <draggable
      group="itxst"
      v-model="list"
      item-key="id"
      animation="300"
      ghostClass="ghost"
      :class="list.length ? '' : 'area-empty'"
    >
      <template #item="{ element }">
        <WidgetShape
          :widgetId="element.id"
          @dragover="moveWidget"
          @drop="handleDrop"
        >
          <component
            class="widgets-item"
            :is="element.component"
            v-bind="element"
            type="widget"
          >
            <WidgetNestList v-if="element.children" :widget="element" />
          </component>
        </WidgetShape>
      </template>
    </draggable>
    {{ moveStatus }}
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import draggable from "vuedraggable";
import WidgetShape from "./WidgetShape.vue";
import TextWidget from "../../widgets/TextWidget.vue";
import BoxWidget from "../../widgets/BoxWidget.vue";
import { useDesign } from "./useDesign";
import WidgetNestList from "./WidgetNestList.vue";

export default {
  components: { WidgetNestList, WidgetShape, TextWidget, BoxWidget, draggable },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    const { moveStatus, moveWidget } = useDesign();

    const state = reactive({
      msg2: "你成功了～",
    });

    function handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("拖拽完成", e);
    }

    return {
      ...toRefs(state),
      moveStatus,
      handleDrop,
      moveWidget,
    };
  },
};
</script>

<style lang="scss" scoped>
.widgets {
  .widgets-item {
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
</style>