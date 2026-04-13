import { createApp } from "vue";
import "virtual:uno.css";
import "@fontsource-variable/victor-mono/wght.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router).mount("#app");
