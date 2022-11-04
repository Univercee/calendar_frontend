<template>
  <div ref="telegramWrapper"></div>
</template>

<script>

export default {
  name: 'TelegramLogin',
  mounted(){
    this.init()
  },
  methods:{
    onTelegramAuth(user){
      alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
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
