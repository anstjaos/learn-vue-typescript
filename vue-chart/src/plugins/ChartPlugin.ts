import { Chart } from "chart.js";
import { VueConstructor } from "vue/types/umd";

export default {
  install(Vue: VueConstructor): void {
    Vue.prototype.$_Chart = Chart;
  },
};
