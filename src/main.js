import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import * as components from "./components";

import "./assets/scss/easca.scss";

Vue.use(BootstrapVue);

const ComponentLibrary = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  }
};

export default ComponentLibrary;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
