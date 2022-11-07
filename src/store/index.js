import { createStore } from 'vuex'
import user from './modules/user'
import events from './modules/events'


export default createStore({
  modules: {
    user,
    events
  }
})
