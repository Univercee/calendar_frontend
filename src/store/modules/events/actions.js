export default {
  FETCH(context) {
    return new Promise((resolve, reject)=>{
      axios({
        method: 'get',
        url: "/events"
      })
      .then((response)=>{
        context.commit("fetch", response.data) 
        resolve(response)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  },
  ADD(context, event) {
    return new Promise((resolve, reject)=>{
      axios({
        method: 'post',
        url: "/events",
        data: { event: event }
      })
      .then((response)=>{
        context.commit("add", event) 
        resolve(response)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  },
  EDIT(context, event) {
    return new Promise((resolve, reject)=>{
      axios({
        method: 'patch',
        url: "/events",
        data: { event: event }
      })
      .then((response)=>{
        context.commit("edit", event) 
        resolve(response)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  },
  DELETE(context, event) {
    return new Promise((resolve, reject)=>{
      axios({
        method: 'delete',
        url: "/events",
        data: { event: event }
      })
      .then((response)=>{
        context.commit("delete", event) 
        resolve(response)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  },
}