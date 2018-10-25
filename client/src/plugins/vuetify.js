import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import zhHans from 'vuetify/es5/locale/zh-Hans';


Vue.use(Vuetify, {
  lang: {
    locales: { zhHans },
    current: 'zh-Hans'
  },
  theme: {
    primary: "#541388",
    secondary: "#9E2C61",
    accent: "#8E20E8",
    error: "#CDC5B4",
    warning: "#7067CF",
    info: "#D9F0FF",
    success: "A3D5FF"
}
});
