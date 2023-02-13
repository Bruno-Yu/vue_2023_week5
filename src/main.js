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

import "./assets/main.css";

const app = createApp(App);
library.add(faStar, farStar, faStarHalfStroke,  faTrashCan,  faAngleDown, faAngleUp);

app.use(router);
app.use(store);
// app.use(dayjs);
app.component('star-rating', StarRating);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('info-modal', infoModal);
app.mount('#app');
