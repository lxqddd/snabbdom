import {
  init,
  classModule,
  styleModule,
  eventListenersModule,
  h,
} from "../../build/index.js";

debugger;

const patch = init([classModule, styleModule, eventListenersModule]);

const root = document.getElementById("app");

const vNode = h("div", "hello world");
patch(root, vNode);
