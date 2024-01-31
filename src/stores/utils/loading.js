import { defineStore } from "pinia";
import { ref } from "vue";

export const loadingStore = defineStore("loadingStore", () => {
  const loadingBtn = ref(false)

  const setLoadingBtn = (value) => {
    loadingBtn.value = value
  }

  return {
    loadingBtn,

    setLoadingBtn
  }
})