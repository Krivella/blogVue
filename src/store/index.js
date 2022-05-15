import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]' ),
    comments: JSON.parse(localStorage.getItem('comments') || '[]' )
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id),
    comments: st => st.comments,
    commentsById: st => id => st.comments.find(t => t.id ===id)
  },
  mutations: {
    createTask(state, task){
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, task) {
      // const tasks = state.tasks.concat()

      const idx = state.tasks.findIndex(t => t.id === task.id)
      // const task = tasks[idx]

      state.tasks[idx] = task;
      
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id)
    {
      state.tasks = state.tasks.filter((el) => el.id != id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    addComment(state, comment){
      state.comments.push(comment)
      localStorage.setItem('comments', JSON.stringify(state.comments))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
    addComment({commit}, comment) {
      commit('addComment', comment)
    },
  },
  modules: {
  }
})
