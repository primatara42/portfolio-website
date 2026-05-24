import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import scrollReveal from "./directives/scrollReveal";

const app = createApp(App);

app.use(router);
app.directive("scroll-reveal", scrollReveal);

app.mount("#app");
