import { VueHeadMixin, createHead } from "@unhead/vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);

app.mixin(VueHeadMixin);

app.mount("#app");
