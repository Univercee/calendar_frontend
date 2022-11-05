export default {
    login(state, token) {
      state.is_auth = true
      sessionStorage.setItem("sessionKey", token)
      axios.defaults.headers.common.Authorization = 'Bearer '+sessionStorage.getItem('sessionKey')  
    },
    logout(state) {
      state.is_auth = false
      sessionStorage.removeItem("sessionKey")
      delete axios.defaults.headers.common["Authorization"]
    }
}