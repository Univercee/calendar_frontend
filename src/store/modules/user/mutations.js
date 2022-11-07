export default {
  success_check(state) {
    state.is_auth = true
  },
  login(state, token) {
    state.is_auth = true
    sessionStorage.setItem("token", token)
    axios.defaults.headers.common.Authorization = 'Bearer '+sessionStorage.getItem('token')  
  },
  logout(state) {
    state.is_auth = false
    sessionStorage.removeItem("token")
    delete axios.defaults.headers.common["Authorization"]
  }
}