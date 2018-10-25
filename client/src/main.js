import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';


export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // 包含认证token的请求
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    // 如果没有 token 在本地存储，添加一个
    if (!localStorage.token) {
      localStorage.setItem('token', '');
    }

    // 添加 token 到发送给后端的认证头中，
    operation.setContext({
      headers: {
        authorization: localStorage.getItem('token')
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log('[networkError]', networkError);
    }

    if (graphQLErrors) {
      for ( let err of graphQLErrors ){
        console.dir(err);
      }
    }
  }
});


const apolloProvider = new VueApollo({ defaultClient });
Vue.use(VueApollo);


Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  created() {
    // 执行 getCurrentUser 查询
    this.$store.dispatch('getCurrentUser');
  }
}).$mount('#app')
