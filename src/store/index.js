import Vue from 'vue'
import Vuex from 'vuex'
import commonActions from "./actions/actions";
import apiRequests from "./actions/apiRequests";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

Vue.use(Vuex)

const actions = {...commonActions, ...apiRequests}

export default new Vuex.Store({
  state: {
    books: [],
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
