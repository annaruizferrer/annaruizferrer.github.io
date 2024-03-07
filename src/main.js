import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as BiIcons from "oh-vue-icons/icons/bi";
import * as CoIcons from "oh-vue-icons/icons/co";
import * as RiIcons from "oh-vue-icons/icons/ri";

const Bi = Object.values({ ...BiIcons });
const Co = Object.values({ ...CoIcons });
const Ri = Object.values({ ...RiIcons });
addIcons(...Bi, ...Co, ...Ri);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");