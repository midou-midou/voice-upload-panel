import { defineStore } from "pinia";

export const useSiteStore = defineStore('site', () => {
  const user = ref('')

  const setUser = (name: string) => {
    // cookie

    // store
    user.value = name
  }

  return {
    user,
    setUser
  }
})