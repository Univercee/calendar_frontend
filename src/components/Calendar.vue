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
    attributes() {
      return this.events.map(event => ({
        dot: true,
        dates: event.date
      }));
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