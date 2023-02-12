import atrApi from '@/api/atrAPI';
import { ref } from 'vue';
import { userStore } from '@/stores';
import { useRouter } from 'vue-router';


export const useApiModal = () => { 

  // api 對應的訊息視窗
  const store = userStore();
  const router = useRouter();

  // 訊息相關 Modal
  const infoModal = ref(null);
  const showInfoModal= ref(false);

  function hideInfoModal() {
      infoModal.value.hideModal();
          store.$patch((state) => { state.messageContent.title = '提示'; state.messageContent.message = ''; state.messageContent.status = ''; });
    }
//  判別是 新增還是編輯視窗
    const isNew = ref(false);
     // 刪除視窗
    function openDeleteModal(item) {
      store.$patch({currentItem:item});
      // currentItem.value = item;
      store.$patch((state) => { state.messageContent.title = '刪除提示'; state.messageContent.message = '請確認是否要刪除!';state.messageContent.status  = 'delete' });
      infoModal.value.openModal();
    }

        // 編輯 & 新增視窗 & 邏輯
    const editModal = ref(null);
    const showEditModal= ref(false);

    function openModal(item) {
      store.$patch({currentItem:item});
      // currentItem.value = item;
      isNew.value = false;
      console.log('useModal_1',editModal )
      editModal.value.openModal();
    }
    function hideModal() {
      editModal.value.hideModal();
      console.log('useModal_2',editModal )
    }
    function openNewModal() {
      isNew.value = true;
      editModal.value.openModal();
    }


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
        router.push(path)
      } else {
        store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
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
        store.$patch((state)=>{state.messageContent.message  = res.response.data.message});
        infoModal.value.openModal();

      }
      store.$patch({ token: '', login: false, });
    }

    // 管理員取得產品資料
        async function getAdminProducts() {
      const res = await atrApi.getAdminProducts();
      if (res.success) {
        store.$patch((state)=>{state.adminProducts  = res.products});
      } else {
        if (typeof res.response.data.message === 'string') {
            store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        } else {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
        }
      }
    }

    // 新增產品
        async function addAdminProduct(data) {
      const res = await atrApi.addAdminProduct(data);
      if (res.success) {
        editModal.value.hideModal();
        store.$patch((state)=>{state.messageContent.message  = res.message})
        infoModal.value.openModal();
        getAdminProducts();
      } else {
        if (typeof res.response.data.message === 'string') {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        } else {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
        }
        infoModal.value.openModal();
      }
    }
    // 編輯產品
        async function editAdminProduct(data) {
      const { id } = data;
      const res = await atrApi.editAdminProduct(id, data);
          if (res.success) {
        console.log('useApi editModal',editModal )
        editModal.value.hideModal();
        store.$patch((state)=>{state.messageContent.message  = res.message})
        infoModal.value.openModal();
        getAdminProducts();
      } else {
        if (typeof res.response.data.message === 'string') {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        } else {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
        }
        infoModal.value.openModal();
      }
    }
    // 刪除產品
        async function deleteAdminProduct() {
      infoModal.value.hideModal();
      const res = await atrApi.deleteAdminProduct(store.currentItem?.id);
      if (res.success) {
        store.$patch((state) => { state.messageContent.message = res.message });
        getAdminProducts();
      } else {
        if (typeof res.response.data.message === 'string') {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message})
        } else {
          store.$patch((state)=>{state.messageContent.message  = res.response.data.message.join(', ')})
        }
      }
      infoModal.value.openModal();
  }
  

  return { editModal ,infoModal, showEditModal ,showInfoModal, hideInfoModal, isNew , openDeleteModal, openModal,  hideModal, openNewModal ,login, checkLoginStatus, logOut, getAdminProducts, addAdminProduct, editAdminProduct, deleteAdminProduct };
};
