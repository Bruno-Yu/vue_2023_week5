import { createApp } from 'vue';
import 'tw-elements';


import App from './App.vue';
import router from './router';
import store from './stores';
// import { library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "./assets/main.css";

const app = createApp(App);
// library.add(faTwitter, faUserSceret, faBicycle, faCoffee, faFeather, faHorseSaddle, faAlien)

app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
