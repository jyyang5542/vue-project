import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/reset.scss";

const app = createApp(App);

document.title = ":: HatiHo ::";
app.use(router);
app.mount("#app");
