import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    file: null
  },
  mutations: {
    setFile (state, arrBuf) {
      const clampedBuffer = new Uint8ClampedArray(arrBuf)
      state.file = clampedBuffer
    }
  },
  actions: {
  },
  modules: {
  }
})
