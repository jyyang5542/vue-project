import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/layout.scss";
import "./assets/scss/pc.scss";
import "./assets/scss/tablet.scss";
import "./assets/scss/mobile.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
