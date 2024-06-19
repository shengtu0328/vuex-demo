import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '吃饭', done: true },
      { id: 2, text: '睡觉', done: false }
    ]
  },
  //一般用来过滤
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state,n) {
      state.count +=n
    }
  }
})


export  default  store
