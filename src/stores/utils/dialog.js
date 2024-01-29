import { defineStore } from "pinia"
import { ref } from "vue"

export const dialogStore = defineStore('dialogStore', () => {
  const dialogToggle = ref(false)

  const setDialogToggle = (value) => {
    dialogToggle.value = value
  }

  return {
    dialogToggle,

    setDialogToggle
  }
})