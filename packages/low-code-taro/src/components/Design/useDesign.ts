/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-10 15:57:42
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-11 17:11:36
 */
import { ref, toRefs, reactive, computed } from "vue";

let moveStatus = reactive<any>({
  type: "",
  id: "",
  location: "",
});

const moveWidget = (e) => {
  e.preventDefault();
  e.stopPropagation();

  // if (e.offsetY) {
  //   moveStatus.id = e.currentTarget.getAttribute("id");
  //   moveStatus.location =
  //     e.offsetY >= e.target.offsetHeight / 2 ? "downn" : "up";
  // }

  // console.log("handleDragOver", e);
  // console.log("组件高度", e.target.offsetHeight);
  // console.log("拖拽位于组件位置", e.target.offsetY);
  // console.log(" e.currentTarget", e.currentTarget);
  // console.log("e.target", e);
  // console.log(
  //   "e.currentTarget.getAttribute",
  //   e.currentTarget.getAttribute("id")
  // );
  console.log("查找物料：" + getTargerNode(e.target));
};

function getTargerNode(event) {
  let result = null;

  const isTargerNode = (event) => {
    console.log("event..", event);
    if (!event) return;

    let type = event.getAttribute("type");
    if (type) {
      moveStatus.type = type;
      moveStatus.id = event.getAttribute("id");
    } else {
      isTargerNode(event.parentNode);
    }
  };

  isTargerNode(event);

  return result;
}

export const useDesign = () => ({
  moveStatus,
  moveWidget,
});
