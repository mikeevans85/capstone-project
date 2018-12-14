import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import ToggleButton from "vue-js-toggle-button";
import Vue2Filters from "vue2-filters";
import FlagIcon from "vue-flag-icon";
Vue.use(FlagIcon);

Vue.use(Vue2Filters);

Vue.use(ToggleButton);

var jwt = localStorage.getItem("jwt");
if (jwt) {
	axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
