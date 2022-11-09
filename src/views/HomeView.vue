<template>
  <navbar/>
  <div class="mask"/>
  <div class="promo-login">
    <telegram-login class="tg-login" v-if="!is_auth"/>
    <profile-link class="success-login" v-else></profile-link>
  </div>
  <calendar/>
</template>

<script>

import TelegramLogin from '@/components/TelegramLogin.vue'
import ProfileLink from '@/components/ProfileLink.vue';
import Calendar from '@/components/Calendar.vue'
import Navbar from '@/components/Navbar.vue';

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    TelegramLogin,
    Calendar,
    Navbar,
    ProfileLink
  },
  mounted(){
    this.CHECK_LOGIN()
  },
  computed:{
    ...mapGetters('user', [
      'is_auth'
    ])
  },
  methods:{
    ...mapActions('user',[
      'CHECK_LOGIN'
    ])
  }
}
</script>
<style scoped>
  .tg-login, .success-login{
    position: relative;
    margin-top: 25vh;
  }
  .promo-login{
    height: 90vh;
    display: flex;
    justify-content: center;
  }
  .mask{
    position: absolute;
    left: 0;
    top: 100px;
    background: linear-gradient(90deg, #A36DAC 0%, #229ED9 100%);
    height: 100vh;
    width: 100%;
    mask: url(@/assets/mask.png);  
    mask-size: auto 100%;
    mask-repeat: no-repeat;
    mask-position: center;
  }
</style>
