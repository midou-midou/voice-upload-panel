import { login } from "../api"
import Popup from "../components/Popup"
import Input from "../components/Popup/types/input.vue"
import i18n from "../locale"

const useAuth = () => {
  const store = useSiteStore()
  const voiceStore = useVoiceStore()

  onMounted(() => {
    if (!store.user) {
      Popup.open(
        {
          popTitle: i18n.global.t('popup.auth.model.title')
        },
        {
          childrenComponent: Input,
          childProps: {
            'onInputEnter': async (value: string) => {
              if (!value) return
              store.setUser(value)
              await login(value)
              await voiceStore.refreshVupVoice()
            }
          }
        }
      )
    }
  })
}

export default useAuth;
