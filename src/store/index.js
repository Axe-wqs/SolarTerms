// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    solarTerms: [
      { id: 1, name: '立春', description: '立春是二十四节气中的第一个节气...' },
      { id: 2, name: '雨水', description: '雨水标志着降雨开始增多...' },
      // 添加更多节气信息
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});