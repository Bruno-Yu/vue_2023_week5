import atrApi from '@/api/atrAPI';
// import {  onMounted } from 'vue';
import { userStore } from '@/stores';
import { useRouter } from 'vue-router';
import { useModal } from '@/hooks/useModal';
// import { useAdmin } from '@/hooks/useAdmin';

export const useApi = () => { 
  // const { infoModal, hideInfoModal , hideModal } = useModal();
  const { showInfoModal, showEditModal } = useModal();

    // const { products } = useAdmin();
  // api 對應的訊息視窗
  const store = userStore();
  const router = useRouter();

    //  六角 api 相關程式碼

    // 登入
    async function login(username, password, path='./admin' ) {
      const params = {
        username,
        password,
      }
      const res = await atrApi.login(params);
      if (res.success) {
        const { token, expired } = res;
        store.$patch({ token: token, login: true, });
        document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
        // axios.defaults.headers.common.Authorization = token;
        router.push(path)
      } else {
        // messageContent.value.message = res.response.data.message;
        store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        // infoModal.value.openModal();
        showInfoModal.value=true;
      }
    }

    // 確認是否是登入狀態
    async function checkLoginStatus(path='/') {
      const res = await atrApi.checkLoginStatus();
      if (!res.success) {
        router.push(path);
      }
    }
    // 使用者登出
    async function logOut(path='/') {
      const res = await atrApi.logOut();
      if (res.success) {
        router.push(path);
      } else {
        store.$patch((state)=>{state.messageContent.message  = res.response.data.message});
        // messageContent.value.message = res.response.data.message;
        // infoModal.value.openModal();

      }
      store.$patch({ token: '', login: false, });
    }

    // 管理員取得產品資料
        async function getAdminProducts() {
      const res = await atrApi.getAdminProducts();
      if (res.success) {
        store.$patch((state)=>{state.adminProducts  = res.products});
        // store.$patch({ adminProducts: res.products });
        // products.value = res.products;
      } else {
        if (typeof res.response.data.message === 'string') {
          //  store.$patch({ messageContent: res.response.data.message });
            store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
          // messageContent.value.message = res.response.data.message;
        } else {
          // messageContent.value.message = res.response.data.message.join(', ');
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
        }
        showInfoModal.value=true;
      }
    }

    // 新增產品
        async function addAdminProduct(data) {
      const res = await atrApi.addAdminProduct(data);
      if (res.success) {
        // modal.value.hideModal();
        showEditModal.value=false;
        // messageContent.value.message = res.message;
        store.$patch((state)=>{state.messageContent.message  = res.message})
        // infoModal.value.openModal();
        showInfoModal.value=true;
        getAdminProducts();
      } else {
        if (typeof res.response.data.message === 'string') {
          // messageContent.value.message = res.response.data.message;
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        } else {
          // messageContent.value.message = res.response.data.message.join(', ');
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
        }
        // infoModal.value.openModal();
        showInfoModal.value=true;
      }
    }
    // 編輯產品
        async function editAdminProduct(data) {
      const { id } = data;
      const res = await atrApi.editAdminProduct(id, data);
      // console.log('infoModal', infoModal);
      if (res.success) {
        // modal.value.hideModal();
        showEditModal.value=false;
        // messageContent.value.message = res.message;
        store.$patch((state)=>{state.messageContent.message  = res.message})
        // infoModal.openModal();
         showInfoModal.value=true;
        getAdminProducts();
      } else {
        if (typeof res.response.data.message === 'string') {
          // messageContent.value.message = res.response.data.message;
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        } else {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
          // messageContent.value.message = res.response.data.message.join(', ');
        }
        // infoModal.value.openModal();
         showInfoModal.value=true;
      }
    }
    // 刪除產品
        async function deleteAdminProduct(id) {
      // infoModal.value.hideModal();
      showInfoModal.value=false;
      const res = await atrApi.deleteAdminProduct(id);
      if (res.success) {
        // messageContent.value.message = res.message;
        store.$patch((state)=>{state.messageContent.message  = res.message})
      } else {
        if (typeof res.response.data.message === 'string') {
          // messageContent.value.message = res.response.data.message;
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        } else {
          // messageContent.value.message = res.response.data.message.join(', ');
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
        }
      }
      // infoModal.value.openModal();
      showInfoModal.value=true;
      getAdminProducts();
    }

  return { login, checkLoginStatus, logOut, getAdminProducts, addAdminProduct, editAdminProduct, deleteAdminProduct };
};
