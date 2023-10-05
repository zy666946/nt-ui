// ../../../../uni-app/nt-ui/node_modules/vue-demi/lib/index.mjs
import * as Vue from "vue";
export * from "vue";
var isVue2 = false;
var isVue3 = true;
var Vue2 = void 0;
function install() {
}
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
export {
  Vue,
  Vue2,
  del,
  install,
  isVue2,
  isVue3,
  set
};
//# sourceMappingURL=vue-demi.js.map
