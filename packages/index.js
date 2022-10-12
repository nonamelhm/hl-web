import HlBreadCrumbs from './breadCrumbs/index.js'
const components = [
  HlBreadCrumbs
];
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HlBreadCrumbs
}
