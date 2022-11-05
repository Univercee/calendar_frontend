export default {
    LOGIN(context, user) {
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url: "/auth",
          data: { user: user }
        })
        .then((response)=>{
          context.commit("login", response.data) 
          resolve(response)
        })
        .catch((err)=>{
          console.log(err);
          if (error.response.status == 401) {
            context.commit("logout") 
          }
          reject(err)
        })
      })
    },
    LOGOUT(context) {
      context.commit("logout")
    }
}