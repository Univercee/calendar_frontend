<template>
  <div class="navbar-my">
    <div class="logo">EVENTER</div>
    <active-button color="#D9534F" text="LOGOUT" class="btn-logout" @click="LOGOUT" v-if="is_auth"></active-button>
  </div>
</template>

<script>
import ActiveButton from './ActiveButton.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'navbar',
    components:{
        ActiveButton
    },
    computed:{
      ...mapGetters('user', [
         'is_auth'
      ])
    },
    methods:{
      ...mapActions('user', [
         'LOGOUT'
      ])
    }
}
</script>

<style scoped>
 .navbar-my{
    background: linear-gradient(90deg, #A36DAC 0%, #229ED9 100%);
    height: 10vh;
    min-height: 70px;
    min-width: max-content;
    display: flex;
    padding: 0 2%;
 }
 .logo{
    font-family: 'Iceland';
    font-style: normal;
    font-size: 60px;
    display: flex;
    align-self: center;
    color: whitesmoke;
 }
 .btn-logout{
    display: flex;
    align-self: center;
    margin-left: auto;
 }
</style>