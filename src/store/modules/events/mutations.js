export default {
  fetch(state, events) {
    state.events = events
    
  },
  add(state, event) {
    state.events.push(event)
  },
  edit(state, event) {
    state.events.forEach((el)=>{
      if(event.id === el.id){
        event = el
        return
      }
    })
  },
  delete(state, event) {
    const index = state.events.indexOf(event)
    if (index > -1) {
      state.events.splice(index, 1);
    }
  }
}