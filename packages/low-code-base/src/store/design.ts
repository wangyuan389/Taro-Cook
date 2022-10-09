/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:57:45
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-08 16:00:05
 */
import { defineStore } from "pinia";

interface DesignState {}

export const useDesignStore = defineStore({
  id: "app-design",

  state: (): DesignState => {
    return {
      project: null, // 活动项目
      curPage: null, // 当前页面
      curWidgetList: null, // 当前物料列表
      curWidget: null, // 当前选中物料
    };
  },

  actions: {
    // 开始拖拽物料
    handleDragStart(e: any) {
      console.log("开始拖拽物料", e.target.dataset);
      e.dataTransfer.setData("component", e.target.dataset.component);
    },

    
  },
});
