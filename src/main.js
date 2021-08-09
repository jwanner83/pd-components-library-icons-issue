import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@lambda-it/parlamentsdienste-component-library/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
