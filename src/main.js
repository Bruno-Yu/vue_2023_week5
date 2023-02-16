import { createApp } from 'vue';
import 'tw-elements';


import App from './App.vue';
import router from './router';
import store from './stores';
// import dayjs from 'dayjs/esm/index.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import StarRating from 'vue-star-rating';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import infoModal from '@/components/infoModal.vue';
// import Loading from 'vue-loading-overlay';
import {LoadingPlugin} from 'vue-loading-overlay';

import 'vue-loading-overlay/dist/vue-loading.css';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import "./assets/main.css";

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale('zh_TW');


const app = createApp(App);
library.add(faStar, farStar, faStarHalfStroke,  faTrashCan,  faAngleDown, faAngleUp);

app.use(router);
app.use(store);
// app.use(dayjs);
app.component('star-rating', StarRating);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('info-modal', infoModal);
app.component('v-form', Form);
// app.component('PageLoading', Loading);
app.use(LoadingPlugin, {
  color: '#FF0000'
})
app.component('v-field', Field);
app.component('error-message', ErrorMessage);
app.mount('#app');
