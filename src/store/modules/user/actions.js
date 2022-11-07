export default {
    LOGIN(context, user) {
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url: "/auth",
          data: { user: user }
        })
        .then((response)=>{
          context.commit("login", response.data.original.token) 
          resolve(response)
        })
        .catch((err)=>{
          if (err.response.status == 401) {
            context.commit("logout") 
          }
          reject(err)
        })
      })
    },
    CHECK_LOGIN(context){
      return new Promise((resolve, reject)=>{
        axios({
          method: 'get',
          url: "/auth"
        })
        .then((response)=>{
          context.commit("success_check")
          resolve(response)
        })
        .catch((err)=>{
          if (err.response.status == 401) {
            context.commit("logout") 
          }
        })
      })
    },
    LOGOUT(context) {
      context.commit("logout")
    }
}