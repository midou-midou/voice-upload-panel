import { h, render, VNode, Component } from 'vue';
import PopupComponent from './index.vue';

type childrenComponent = {
  childrenComponent: Component
  childProps: object // 如果要用双向绑定，就再往里传入对应的事件和回调
}

class Popup {
  static popupVNode: any = null;
  
  static open = (
    popupProps: object,
    child?: childrenComponent,
  ) => {
    const container = document.getElementsByTagName('body')[0];
    if (child) {
      this.popupVNode = h(PopupComponent, popupProps, h(child.childrenComponent, child.childProps))
    } else {
      this.popupVNode = h(PopupComponent)
    }
    render(this.popupVNode, container??document.getElementsByTagName('body')[0])
  }

  static close = (cb?: Function) => {
    // callback
    cb&&cb()
    const element = document.getElementsByClassName('pop-container')[0];
    element.parentNode && element.parentNode.removeChild(element)
  }

}

export default Popup