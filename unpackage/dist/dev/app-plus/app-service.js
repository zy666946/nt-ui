if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {
    __name: "nt-view",
    props: ["type", "isActive", "width", "height", "borderRadius"],
    setup(__props) {
      const props = __props;
      const style = vue.computed(() => "width:" + props.width + ";height:" + props.height + ";border-radius:" + props.borderRadius + ";");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            style: vue.normalizeStyle(vue.unref(style)),
            class: vue.normalizeClass([__props.type, "nt-view-area"])
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  };
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8d7f3d00"], ["__file", "D:/uni-app/nt-ui/components/nt-view/nt-view.vue"]]);
  const _sfc_main$3 = {
    __name: "nt-input",
    props: [
      "type",
      "value",
      "password",
      "maxlength",
      "width",
      "height",
      "borderRadius",
      "placeholder",
      "modelValue"
    ],
    emits: ["update:modelValue"],
    setup(__props) {
      const props = __props;
      const style = vue.computed(() => "width:" + props.width + ";height:" + props.height + ";border-radius:" + props.borderRadius + ";");
      return (_ctx, _cache) => {
        const _component_nt_view = resolveEasycom(vue.resolveDynamicComponent("nt-view"), __easycom_0);
        return vue.openBlock(), vue.createBlock(_component_nt_view, {
          style: vue.normalizeStyle(vue.unref(style)),
          type: "active"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("input", {
              style: { "height": "100%", "padding": "0 5%" },
              type: props.type,
              value: __props.modelValue,
              onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.detail.value)),
              password: props.password,
              maxlength: props.maxlength,
              placeholder: props.placeholder
            }, null, 40, ["type", "value", "password", "maxlength", "placeholder"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["style"]);
      };
    }
  };
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/uni-app/nt-ui/components/nt-input/nt-input.vue"]]);
  const _sfc_main$2 = {
    __name: "nt-switch",
    props: [
      "width",
      "height",
      "modelValue"
    ],
    emits: ["update:modelValue"],
    setup(__props) {
      const props = __props;
      const height = vue.computed(() => {
        let regex = /(\-?\d*\.?\d+)(.*)/;
        let match = props.height.match(regex);
        if (match)
          return parseFloat(match[1]);
        else
          return 0;
      });
      const width = vue.computed(() => {
        let regex = /(\-?\d*\.?\d+)(.*)/;
        let match = props.width.match(regex);
        if (match)
          return parseFloat(match[1]);
        else
          return 0;
      });
      const borderRadius = vue.computed(() => {
        let regex = /(\-?\d*\.?\d+)(.*)/;
        let match = props.height.match(regex);
        if (match)
          return parseFloat(match[1]) / 2 + match[2];
        else
          return 0;
      });
      const toRight = vue.computed(() => {
        if (props.modelValue) {
          return `margin-left: ${width.value - height.value}rpx;`;
        } else
          return "";
      });
      return (_ctx, _cache) => {
        const _component_nt_view = resolveEasycom(vue.resolveDynamicComponent("nt-view"), __easycom_0);
        return vue.openBlock(), vue.createBlock(_component_nt_view, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", !props.modelValue)),
          style: { "cursor": "pointer" },
          class: "switchArea",
          width: props.width,
          height: props.height,
          type: props.modelValue ? "active" : "",
          borderRadius: vue.unref(borderRadius)
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_nt_view, {
              class: "switchItem",
              style: vue.normalizeStyle([{ "display": "flex", "justify-content": "center", "align-items": "center" }, vue.unref(toRight)]),
              width: props.height,
              height: props.height,
              borderRadius: "50%"
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["style", "width", "height"])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["width", "height", "type", "borderRadius"]);
      };
    }
  };
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a31ec5e3"], ["__file", "D:/uni-app/nt-ui/components/nt-switch/nt-switch.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props) {
      const btn1 = () => {
        formatAppLog("log", "at pages/index/index.vue:38", 123);
      };
      const value1 = vue.ref("");
      const value2 = vue.ref(false);
      return (_ctx, _cache) => {
        const _component_nt_view = resolveEasycom(vue.resolveDynamicComponent("nt-view"), __easycom_0);
        const _component_nt_input = resolveEasycom(vue.resolveDynamicComponent("nt-input"), __easycom_1);
        const _component_nt_switch = resolveEasycom(vue.resolveDynamicComponent("nt-switch"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "",
          style: { "width": "80vw", "margin": "50rpx auto" }
        }, [
          vue.createElementVNode("text", null, "拟态突出块"),
          vue.createVNode(_component_nt_view, {
            style: { "overflow": "hidden", "display": "flex", "flex-direction": "column", "align-items": "center" },
            width: "100%",
            borderRadius: "10px"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("text", null, "拟态凹陷块"),
              vue.createVNode(_component_nt_view, {
                style: { "margin": "20rpx", "display": "flex", "justify-content": "center", "align-items": "center" },
                type: "active",
                width: "60%",
                height: "200rpx",
                borderRadius: "10px"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_nt_view, {
                    onClick: btn1,
                    type: "btn",
                    width: "80rpx",
                    height: "80rpx",
                    borderRadius: "10px"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("text", null, "按钮")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("text", null, "普通输入框"),
              vue.createVNode(_component_nt_input, {
                style: { "margin": "20rpx" },
                maxlength: 10,
                width: "300rpx",
                height: "60rpx",
                borderRadius: "10px",
                placeholder: "请输入账号",
                password: false,
                modelValue: value1.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event)
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("text", null, "靠右输入框"),
              vue.createVNode(_component_nt_input, {
                style: { "margin": "20rpx", "text-align": "right" },
                maxlength: 10,
                width: "300rpx",
                height: "60rpx",
                borderRadius: "10px",
                placeholder: "请输入账号",
                password: false,
                modelValue: value1.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value1.value = $event)
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("text", null, "居中输入框"),
              vue.createVNode(_component_nt_input, {
                style: { "margin": "20rpx", "text-align": "center" },
                maxlength: 10,
                width: "300rpx",
                height: "60rpx",
                borderRadius: "10px",
                placeholder: "请输入密码",
                password: true,
                modelValue: value1.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value1.value = $event)
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_nt_switch, {
                style: { "margin": "20rpx" },
                width: "200rpx",
                height: "60rpx",
                modelValue: value2.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value2.value = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(value2.value ? "🌙" : "☀️"),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/uni-app/nt-ui/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    // onLaunch: function() {
    // 	__f__('warn','at App.vue:4','当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
    // 	__f__('log','at App.vue:5','App Launch')
    // },
    // onShow: function() {
    // 	__f__('log','at App.vue:8','App Show')
    // },
    // onHide: function() {
    // 	__f__('log','at App.vue:11','App Hide')
    // }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/uni-app/nt-ui/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
