export function useDragVoicePanel(el: Ref<HTMLElement>, panelId: string) {
    const dom = unref(el)
    dom.draggable = false
    const voiceStore = useVoiceStore()

    dom.ondragenter = (e) => {
        // 添加拖拽按钮进入后panel的效果
        dom.classList.add('dragged-panel')
    }

    dom.ondragover = (e) => {e.preventDefault()}

    // 拖拽的按钮移出panel
    dom.ondragleave = (e) => {
        // 移出panel上的样式、动画
        dom.classList.remove('dragged-panel')
    }

    // 音声按钮拖拽落入panel
    dom.ondrop = (e) => {
        // 移出panel上的样式、动画
        dom.classList.remove('dragged-panel')

        // 音声移动
        let dragVoice: any = {}
        for (const clfy of voiceStore.allVoice!) {
            // 删除拖拽过来的音声的老位置
            for (let index = 0;  index < clfy.voice.length; index++) {
                if (clfy.voice[index].id === voiceStore.dragingVocieId){
                    dragVoice = clfy.voice[index]
                    clfy.voice.splice(index, 1)
                }
            }
        }

        // 插入新的音声到拖拽的位置
        for (const clfy of voiceStore.allVoice!) {
            if (clfy.clfy.id === panelId) {
                clfy.voice.push(dragVoice)
            }
        }
    }

}