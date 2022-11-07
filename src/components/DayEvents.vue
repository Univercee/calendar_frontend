<template>
    <div ref="DayEvents" v-if="date">
        Date: {{date}}
        <div v-for="event in eventsByDate" :key="event">
          Title: <input type="text" v-model="event.title" :disabled="!editMode">
          Description: <input type="text" v-model="event.description" :disabled="!editMode">
          <button v-if="editMode" class="btn btn-success" @click="saveEvent(event)">Save</button>
          <button v-else class="btn btn-primary" @click="editEvent()">Edit</button>
          <button class="btn btn-danger" @click="deleteEvent(event)">Delete</button>
        </div> 
        <div>
          <p>Add event: </p> 
          Title: <input type="text" v-model="newEvent.title">
          Description: <input type="text" v-model="newEvent.description">
          <button class="btn btn-success" @click="addEvent()">Add event</button>
        </div>
      </div> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'DayEvents',
    props:{
        date: Date
    },
    data() {
        return {
            newEvent: {
                date: null,
                title: "",
                description: ""
            },
            editMode: false
        }
    },
    computed:{
        ...mapGetters('events', [
            'events'
        ]),
        eventsByDate(){
            return this.events.filter((el)=>{
                const date = new Date(el.date)
                const date_string = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
                return date_string == this.date
            });
        }
    },
    methods:{
        ...mapActions('events', [
            'ADD', 'EDIT', 'DELETE'
        ]),
        addEvent(){
            console.log("add");
            this.newEvent.date = this.date
            this.ADD(this.newEvent)
            this.newEvent = { date: null, title: "", description: "" }
            console.log(this.events);
        },
        editEvent(){
            this.editMode = true
        },
        saveEvent(event){
            this.EDIT(event)
            this.editMode = false
        },
        deleteEvent(event){
            this.DELETE(event)
        }
    }

}
</script>

<style>

</style>