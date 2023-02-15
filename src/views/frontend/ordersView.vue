<template>
  <main class="px-10 py-10 mx-auto max-w-5xl">
    <!-- headings -->
    <!-- <div class="block rounded-lg shadow-lg bg-white">
    <div class="mb-2 p-2 flex"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">

      <p>訂購人資料</p>
    </div>
  <div class="collapse" id="collapseExample">
    <div class="block p-6 rounded-t-lg shadow-lg bg-white">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
  </div>
  </div> -->
    <div class="accordion mb-5" id="personalInfo">
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingOne">
          <button class="
        accordion-button
        relative
        text-gray-600
        flex
        items-center
        w-full
        py-3
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            <font-awesome-icon class="w-5 h-5 text-gray-600 mr-2" icon="fa-solid fa-angle-down"></font-awesome-icon>
            訂購人資訊
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show " aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <form>
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                  <label for="name" class="form-label inline-block mb-2 text-sm font-bold text-gray-700">姓名</label>
                  <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none" id="name" placeholder="請輸入姓名">
                </div>
                <div class="form-group mb-6">
                  <label for="phone" class="form-label inline-block mb-2 text-sm font-bold text-gray-700">手機</label>
                  <input type="number" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone"
                    placeholder="請輸入手機號碼">
                </div>
              </div>
              <div class="form-group mb-6">
                <label for="email" class="form-label inline-block mb-2  text-sm font-bold text-gray-700">電子信箱</label>
                <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="請輸入信箱地址">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion mb-5" id="orderDetail">
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="header">
          <button class="
        accordion-button
        relative
        text-gray-600
        flex
        items-center
        w-full
        py-3
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            <font-awesome-icon class="w-5 h-5 text-gray-600 mr-2" icon="fa-solid fa-angle-down"></font-awesome-icon>
            購買明細
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show " aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <ul class="border rounded p-2">
              <li v-for="(item) in cartProducts" :key="item.id" class="flex justify-center w-full">
                <div class="grid grid-cols-4 gap-4 rounded-lg bg-white shadow  w-full">
                  <div class="p-1  col-span-2">
                    <img class="w-full h-28 object-cover rounded " :src="item.product.imageUrl"
                      :alt="item.product_id" />
                  </div>
                  <div class="p-2 col-span-2 justify-start w-full relative">
                    <div class="grid grid-cols-2 items-center">
                      <div>
                        <h5 class="text-gray-900 font-medium mb-2">{{ item.product.title }}</h5>
                        <p class="text-gray-600 text-xs">購買日期: {{ dayjs(new Date()).format('YYYY-MM-DD') }}</p>
                        <div class="flex justify-between items-center border-b border-gray-300 mt-1">
                          <p class="text-gray-600 text-xs">成人 x{{ item.qty }} </p>
                          <p class="text-gray-600 text-xs">TWD {{ helper.numberWithCommas(item.total) }}</p>
                        </div>
                        <div class="flex justify-between items-center mt-1">
                          <p class="font-bold text-sm">總金額</p>
                          <p class="text-gray-600 text-xs">TWD {{ helper.numberWithCommas(finalTotal) }}</p>
                        </div>
                      </div>
                      <div class="flex flex-col items-center">
                        <p class="font-bold text-sm items-center">預定日期</p>
                        <div class="rounded bg-gray-300">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion bg-white border border-gray-200 py-4 px-5 mb-5" id="totalPrice">
      <div class="flex justify-end items-center gap-4">
        <p class="text-gray-600">{{ totalQty }} 件商品共 <span class="text-gray-700 text-lg"> TWD {{ finalTotal }}</span>
        </p>
        <button type="button"
          class=" inline-block px-6 py-2.5 bg-black text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none transition duration-150 ease-in-out">確認付款</button>
      </div>
    </div>
    <info-modal class="infoModal" ref="infoModal" :content="messageContent" @hide-modal="hideInfoModal" />
  </main>
</template>

<script>
import atrApi from '@/api/atrAPI';
import dayjs from 'dayjs/esm/index.js';
import helper from '@/assets/js/helper';
import { ref, onMounted } from 'vue';
import { useApiModal } from '@/hooks/useApiModal';
import { userStore } from '@/stores';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = userStore();
    const { messageContent } = storeToRefs(store);
    const { hideInfoModal, infoModal } = useApiModal();

    const cartProducts = ref([]);
    const finalTotal = ref(0);
    const totalQty = ref(0);
    async function getCart() {
      const res = await atrApi.getCart();
      if (res.success) {
        cartProducts.value = JSON.parse(JSON.stringify(res.data.carts));
        finalTotal.value = res.data.final_total;
        totalQty.value = checkQty(res.data.carts);
      } else {
        if (typeof res.response.data.message === 'string') {
          store.$patch((state) => { state.messageContent.message = res.response.data.message })
        } else {
          store.$patch((state) => { state.messageContent.message = res.response.data.message.join(', ') })
        }
      }
    }
    function checkQty(carts) {
      let qty = 0;
      carts.forEach(item => { qty += item.qty });
      return qty;
    }
    // async function deleteCartProduct(id) {
    //   const res = await atrApi.deleteCartProduct(id);
    //   if (res.success) {
    //     getCart();
    //   }
    // }


    onMounted(() => {
      getCart();
    });

    return {
      messageContent,
      hideInfoModal,
      infoModal,
      cartProducts,
      finalTotal,
      dayjs,
      helper,
      totalQty
    }

  },
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  color: rgb(51, 51, 51);
}

.accordion-button:not(.collapsed)::after {
  display: none;
}
</style>