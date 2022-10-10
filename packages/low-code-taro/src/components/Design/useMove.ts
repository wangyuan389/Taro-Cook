/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-10 15:57:42
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-10 16:40:49
 */
import { ref, toRefs, reactive, computed } from "vue";

let moveStatus = ref<any>({
  id: "",
  location: "",
});

const setMoveStatus = (status) => {
  moveStatus.value = status;
  console.log("setMoveStatus", moveStatus);
};

const clearMoveStatus = () => {
  moveStatus = { id: "", location: "" };
};

export const useMove = () => ({
  moveStatus,
  setMoveStatus,
});
