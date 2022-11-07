<template>
  <telegram-login/>
  <calendar/>
</template>

<script>

import TelegramLogin from '@/components/TelegramLogin.vue'
import Calendar from '@/components/Calendar.vue'

import { mapActions } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    TelegramLogin,
    Calendar
  },
  mounted(){
    this.CHECK_LOGIN()
  },
  methods:{
    ...mapActions('user',[
      'CHECK_LOGIN'
    ])
  }
}
</script>
