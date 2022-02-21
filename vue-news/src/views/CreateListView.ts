import ListView from "./ListView.vue";
import bus from "../utils/bus";
import { CreateElement } from "vue/types/umd";
import { ComponentOptions } from "vue";

export default function createListView(name: string): ComponentOptions<Vue> {
  return {
    name,
    mounted() {
      bus.$emit("off:progress");
    },
    render(h: CreateElement) {
      return h(ListView);
    },
  };
}
