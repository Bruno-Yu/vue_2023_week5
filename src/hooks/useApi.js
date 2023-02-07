import atrApi from '@/api/atrAPI';
import { userStore } from '@/stores';
import { useRouter } from 'vue-router';
import { useModal } from '@/hooks/useModal';

export const useApi = () => { 
  const {  messageContent,infoModal, hideInfoModal,   hideModal } = useModal();
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
        messageContent.value.message = res.response.data.message;
        infoModal.value.openModal();
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
        messageContent.value.message = res.response.data.message;
        infoModal.value.openModal();
      }
      store.$patch({ token: '', login: false, });
    }

    // 管理員取得產品資料
        async function getAdminProducts() {
      const res = await atrApi.getAdminProducts();
      if (res.success) {
        store.$patch({ adminProducts: res.products });
      } else {
        if (typeof res.response.data.message === 'string') {
          messageContent.value.message = res.response.data.message;
        } else {
          messageContent.value.message = res.response.data.message.join(', ');
        }
        infoModal.value.openModal();
      }
    }

    // 新增產品
        async function addAdminProduct(data) {
      const res = await atrApi.addAdminProduct(data);
      if (res.success) {
        hideModal();
        messageContent.value.message = res.message;
        infoModal.value.openModal();
        getAdminProducts();
      } else {
        if (typeof res.response.data.message === 'string') {
          messageContent.value.message = res.response.data.message;
        } else {
          messageContent.value.message = res.response.data.message.join(', ');
        }
        infoModal.value.openModal();
      }
    }
    // 編輯產品
        async function editAdminProduct(data) {
      const { id } = data;
      const res = await atrApi.editAdminProduct(id, data);
      if (res.success) {
        hideModal();
        messageContent.value.message = res.message;
        infoModal.value.openModal();
        getAdminProducts();
      } else {
        if (typeof res.response.data.message === 'string') {
          messageContent.value.message = res.response.data.message;
        } else {
          messageContent.value.message = res.response.data.message.join(', ');
        }
        infoModal.value.openModal();
      }
    }
    // 刪除產品
        async function deleteAdminProduct(id) {
      hideInfoModal();
      const res = await atrApi.deleteAdminProduct(id);
      if (res.success) {
        messageContent.value.message = res.message;
      } else {
        if (typeof res.response.data.message === 'string') {
          messageContent.value.message = res.response.data.message;
        } else {
          messageContent.value.message = res.response.data.message.join(', ');
        }
      }
      infoModal.value.openModal();
      getAdminProducts();
    }

  return { infoModal, hideInfoModal, login, checkLoginStatus, logOut, getAdminProducts, addAdminProduct, editAdminProduct, deleteAdminProduct };
};
