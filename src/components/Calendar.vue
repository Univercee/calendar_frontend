<template>
  <div class="calendar-wrapper">
    <v-date-picker
      :attributes="attributes"
      @dayclick="onDayClick"
      :minute-increment="15"
      mode="dateTime"
      class="calendar" 
    />
    <day-events :date="date"></day-events>
  </div>
</template>

<script>
import DayEvents from './DayEvents.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'calendar',
  components:{
    DayEvents
  },
  data() {
      return {
        date: null
      }
  },
  mounted(){
    this.FETCH()
  },
  computed: {
    ...mapGetters('events', [
      'events',
    ]),
    ...mapGetters('user', [
      'is_auth',
    ]),
    attributes() {
      return this.events.map(event => ({
        dot: true,
        dates: event.date
      }));
    }
  },
  watch:{
    is_auth: function(val){
      if(val){
        this.FETCH()
      }
    }
  },
  methods: {
    ...mapActions('events', [
      'FETCH'
    ]),
    onDayClick(day){
      this.date = day.id
    }
  }
}
</script>

<style>
    .vc-day-content{
    }
    .vc-day{
    }
    .calendar{
    }
    .calendar-wrapper{
    }
</style>