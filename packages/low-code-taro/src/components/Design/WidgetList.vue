<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-09 19:04:30
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-10 16:32:08
-->
<template>
  <div class="widgets">
    <draggable
      group="itxst"
      v-model="list"
      item-key="id"
      animation="300"
      ghostClass="ghost"
      :class="list.length ? '' : 'area-empty'"
    >
      <template #item="{ element }">
        <WidgetShape :widgetId="element.id">
          <component
            class="widgets-item"
            :is="element.component"
            v-bind="element"
            @dragover="handleDragOver"
            @drop="handleDrop"
          >
            <WidgetList v-if="element.children" :list="element.children" />
          </component>
        </WidgetShape>
      </template>
    </draggable>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import draggable from "vuedraggable";
import WidgetShape from "./WidgetShape.vue";
import TextWidget from "../../widgets/TextWidget.vue";
import BoxWidget from "../../widgets/BoxWidget.vue";
import { useMove } from "./useMove";

export default {
  components: { WidgetShape, TextWidget, BoxWidget, draggable },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    const { moveStatus, setMoveStatus } = useMove();

    const state = reactive({
      msg2: "你成功了～",
    });

    function handleDragOver(e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.offsetY) {
        setMoveStatus({
          id: e.currentTarget.getAttribute("id"),
          location: e.offsetY >= e.currentTarget.offsetHeight / 2 ? "downn" : "up",
        });
      }

      console.log("handleDragOver", e);
      console.log("组件高度", e.currentTarget.offsetHeight);
      console.log("拖拽位于组件位置", e.currentTarget.offsetY);
      console.log(" e.currentTarget", e.currentTarget);
      console.log(
        "e.currentTarget.getAttribute",
        e.currentTarget.getAttribute("id")
      );
      // console.log("moveStatus", moveStatus);
    }

    function handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("拖拽完成", e);
    }

    return {
      ...toRefs(state),
      handleDragOver,
      handleDrop,
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