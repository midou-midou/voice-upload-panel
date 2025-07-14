import { defineStore } from "pinia";

export const useSiteStore = defineStore('site', () => {
  const authKey = 'XYSBTN_UPLOAD_KEY'
  const user = ref(localStorage.getItem(authKey))

  const setUser = (name: string) => {
    // db
    localStorage.setItem(authKey, name)

    // store
    user.value = name
  }

  return {
    user,
    setUser
  }
})