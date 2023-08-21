import { createApp } from 'vue';
import App from './App.vue';
//             state.inCart.push(item);
import router from './router';
import { createStore } from "vuex";

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
    components,
    directives,
});

const store = createStore({
    state: {
        inCart: [],
        follow: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0],
    },
    mutations: {
        FOLLOW(state, payload) {
            state.follow[payload] += 1;
        },
        ADDTOCART(state, payload) {
            state.inCart.push(payload)
        },
        DELETETOCART(state, payload) {
            state.inCart.splice(payload, 1);x
        },
        DELETEALL(state, payload) {
            console.log(payload)
            state.inCart.splice(0, state.inCart.length);
        },
    },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');