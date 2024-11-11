import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/scss/_reset.scss";
import router from "./router";

const app = createApp(App);

app.use(router).mount("#app");
