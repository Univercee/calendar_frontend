<template>
  <div ref="telegramWrapper"></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TelegramLogin',
  mounted(){
    this.init()
  },
  methods:{
    ...mapActions('user', [
      'LOGIN'
    ]),
    onTelegramAuth(user){
      this.LOGIN(user);
    },
    init(){
      window.onTelegramAuth = this.onTelegramAuth
      const script = document.createElement('script')
      script.setAttribute("src", "https://telegram.org/js/telegram-widget.js?21")
      script.setAttribute("data-telegram-login", "CalendarEventerBot")
      script.setAttribute("data-size", "large")
      script.setAttribute("data-onauth", "onTelegramAuth(user)")
      script.setAttribute("data-request-access", "write")
      script.setAttribute("async", "true")
      this.$refs.telegramWrapper.appendChild(script)
    }
  }
}
</script>

<style scoped>
</style>
