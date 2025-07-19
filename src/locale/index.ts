import { createI18n } from "vue-i18n";
import messages from "./messages";
import zh from "./messages/zh";

// const locale: keyof typeof messages = 'zh'
type messageSchema = typeof zh
type localeType = keyof typeof messages

const i18n = createI18n<[messageSchema], localeType>({
  legacy: false,
  locale: 'zh',
  messages: {
    zh: messages.zh,
    en: messages.en,
    jp: messages.jp
  }
})

export default i18n