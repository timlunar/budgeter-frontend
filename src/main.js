import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
// import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueScrollTo from "vue-scrollto";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faSpinner, faTwitter, faFacebook, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon)

import PaperDashboard from "./plugins/paperDashboard";

Vue.use(PaperDashboard);

import { VueperSlides, VueperSlide } from "vueperslides";
Vue.component("vueper-slides", VueperSlides);
Vue.component("vueper-slide", VueperSlide);

Vue.use(VueScrollTo);

Vue.use(BootstrapVue);
// Vue.use(axios);
Vue.config.productionTip = false;

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 180, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
});

new Vue({
  router,
  store,
  created () {
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
    axios.interceptors.response.use(
        response => response,
        error => {
          if(error.response.status === 401) {
            this.$store.dispatch('logout')
          }
          return Promise.reject(error)
        }
    )
  },
  render: h => h(App)
}).$mount("#app");
