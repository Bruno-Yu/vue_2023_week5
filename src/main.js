import { createApp } from 'vue';
import 'tw-elements';


import App from './App.vue';
import router from './router';
import store from './stores';
import { library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import StarRating from 'vue-star-rating'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "./assets/main.css";

const app = createApp(App);
library.add(faStar, farStar, faStarHalfStroke);

app.use(router);
app.use(store);
app.component('star-rating', StarRating);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
