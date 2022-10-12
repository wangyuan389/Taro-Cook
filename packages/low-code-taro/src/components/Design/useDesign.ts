/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-10 15:57:42
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-12 10:38:52
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

  console.log('拖拽物料');
  

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

  let node: any = getTargerNode(e.target);
  console.log("node", node);

  if (node) {
    let type = node.getAttribute("type");

    moveStatus.type = type;
    moveStatus.id = node.getAttribute("id");

    if (type == "widget") {
      console.log("e", e);
      console.log("拖拽位于组件位置x", e.offsetX);
      console.log("拖拽位于组件位置", e.offsetY);
      console.log("拖拽位于容器位置", e.pageY);
      console.log("物料高度", node.offsetHeight);
      moveStatus.location = e.offsetY >= node.offsetHeight / 2 ? "downn" : "up";
    }
  }
};

function getTargerNode(node) {
  let targetNode = null;

  const isTargerNode = (node) => {
    if (!node) return;

    if (node.getAttribute("type")) {
      targetNode = node;
    } else {
      isTargerNode(node.parentNode);
    }
  };

  isTargerNode(node);

  return targetNode;
}

export const useDesign = () => ({
  moveStatus,
  moveWidget,
});
