import { defineStore } from 'pinia';



export const userStore = defineStore('userStore', {
  // 對應data
  state: () => ({
    token: '',
    confirm: '已成功引入 pinia',
    login: false, // 是否是登入狀態
  }),
  getters: {

  },
  actions: {

  }
})
