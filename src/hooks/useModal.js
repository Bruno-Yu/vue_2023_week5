import { ref, watch } from 'vue'
// import { useAdmin } from '@/hooks/useAdmin';
import { userStore } from '@/stores'

export const useModal = () => { 
  // const { currentItem } = useAdmin();
  const store = userStore();

  // 訊息視窗
  const infoModal = ref(null);
  const showInfoModal= ref(false);
  // const infoModal = ref(null);
    //   const messageContent = ref({
    //   title: '提示',
    //   message: '',
    //   status: '',
    // });
        function hideInfoModal() {
      infoModal.value.hideModal();
      store.$patch((state)=>{state.messageContent.title  = '提示'});
      store.$patch((state)=>{state.messageContent.message  = ''});
      store.$patch((state)=>{state.messageContent.state  = ''});
      // messageContent.value.title = '提示';
      // messageContent.value.message = '';
      // messageContent.value.status = '';
    }

//  判別是 新增還是編輯視窗
    const isNew = ref(false);


     // 刪除視窗
    function openDeleteModal(item) {
      store.$patch({currentItem:item});
      // currentItem.value = item;
      store.$patch((state)=>{state.messageContent.title  = '刪除提示'});
      store.$patch((state)=>{state.messageContent.message  = '請確認是否要刪除!'});
      store.$patch((state)=>{state.messageContent.state  = 'delete'});
      // messageContent.value.title = '刪除提示';
      // messageContent.value.message = '請確認是否要刪除!';
      // messageContent.value.status = 'delete';
      infoModal.value.openModal();
    }

        // 編輯 & 新增視窗 & 邏輯
    const editModal = ref(null);
    const showEditModal= ref(false);
    // const modal = ref(null);
    function openModal(item) {
      store.$patch({currentItem:item});
      // currentItem.value = item;
      isNew.value = false;
      editModal.value.openModal();
    }
    function hideModal() {
      editModal.value.hideModal();
    }
    function openNewModal() {
      isNew.value = true;
      editModal.value.openModal();
    }
    // onMounted(() => {
    //   infoModal.value = document.querySelector('.infoModal');
    //   modal.value = document.querySelector('.editModal');
    // })
    // watchEffect(() => {
    //       if(showInfoModal.value){

    //       }else if(!showInfoModal.value){
    //         hideInfoModal()
    //       };
    // })
    watch([showInfoModal, showEditModal], (val)=>{
        if(val[0]){
          infoModal.value.openModal();
        }else if(!val[0]){
          infoModal.value.hideModal();
        }
        if(!val[1]){
          hideModal();
        }
      })

  return { editModal ,infoModal, showEditModal ,showInfoModal, hideInfoModal, isNew , openDeleteModal, openModal,  hideModal, openNewModal  };
};
