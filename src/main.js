import { createApp } from "vue";
import App from "./App.vue";
import ClButton from "@/components/ClButton.vue";
import ClCard from "@/components/ClCard.vue";

const app = createApp(App);
app.component("ClButton", ClButton);
app.component("ClCard", ClCard);
app.mount("#app");
