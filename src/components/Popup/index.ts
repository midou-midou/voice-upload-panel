import { h, render, VNode, Component } from 'vue';
import PopupComponent from './index.vue';

type ChildrenComponent = {
  childrenComponent: Component
  childProps: object // 如果要用双向绑定，就再往里传入对应的事件和回调
}

type PopupProps = {
  popTitle: String
  vup?: String
}

class Popup {
  static #popupVNode: VNode;
  
  static open = (
    popupProps: PopupProps,
    child?: ChildrenComponent,
  ) => {
    const container = document.body;
    if (child) {
      this.#popupVNode = h(PopupComponent, popupProps as object, h(child.childrenComponent, child.childProps))
    } else {
      this.#popupVNode = h(PopupComponent)
    }
    render(this.#popupVNode, container)
  }

  static close = (cb?: Function) => {
    // callback
    cb&&cb()
    const element = document.getElementsByClassName('pop-container')[0];
    if (element && element.parentNode && element.parentNode instanceof Element) {
      render(null, element.parentNode);
    }
  }

}

export default Popup