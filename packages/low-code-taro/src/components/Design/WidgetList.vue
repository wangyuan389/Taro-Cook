<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-09 19:04:30
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-09 19:17:35
-->
<template>
  <div class="widget-list">
    <draggable v-model="list" item-key="id">
      <template #item="{ element }">
        <div>
          <component :is="element.component" v-bind="element" />
          <component is="TextWidget" v-bind="element" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import draggable from "vuedraggable";
import TextWidget from "../../widgets/text.vue";

export default {
  name: "widget-list",

  components: { TextWidget, draggable },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    const state = reactive({
      msg: "欢迎使用 NutUI3.0 开发小程序",
      msg2: "你成功了～",
      type: "text",
      show: false,
      cover: false,
      cmp: "Hello",
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.widget-list {
}
</style>