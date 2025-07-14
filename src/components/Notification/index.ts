import { render } from 'vue'
import NotaficationComponent from './index.vue'

export type NotaficationInstanceArgs = {
  Content: string
  NotafyTime: string
}

class Notafication {
  static #cache: VNode | null

  static #renderNotaficationInstance(arg: NotaficationInstanceArgs) {
    // cache存在，上一个通知没完成，直接强制unrender
    if (this.#cache) {
      this.close()
    }
    this.#cache = h(NotaficationComponent, { ...arg })
    render(this.#cache, document.body)
  }

  static send = (msg: string|NotaficationInstanceArgs) => {
    if (!msg) return
    let arg: NotaficationInstanceArgs = {
      Content: '',
      NotafyTime: '5s'
    }
    if (typeof msg === 'object') {
      arg = {...msg}
    } else if (typeof msg === 'string') {
      arg.Content = msg
    }
    this.#renderNotaficationInstance(arg)
  }

  static close = () => {
    let node = document.getElementsByClassName('notafication-container')[0];
    if (node && node.parentNode && node.parentNode instanceof Element){
      render(null, node.parentNode)
    }
    this.#cache = null
  }

}

export default Notafication