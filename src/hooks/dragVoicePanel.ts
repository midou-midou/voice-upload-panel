export function useDragVoicePanel(el: Ref<HTMLElement>) {
    const dom = unref(el)
    dom.draggable = false
    const voiceStore = useVoiceStore()

    dom.ondragenter = (e) => {
        // 添加拖拽按钮进入后panel的效果
        dom.classList.add('dragged-panel')
    }

    dom.ondragover = (e) => {e.preventDefault()}

    dom.ondragleave = (e) => {
        // 拖拽的按钮移出panel
        dom.classList.remove('dragged-panel')
    }

}