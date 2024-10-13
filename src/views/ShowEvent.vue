<!-- src/views/ShowEvent.vue -->
<template>
  <div class="show-events">
    <h1>Show Events</h1>
    <label for="date-range">Select Date Range:</label>
    <datepicker v-model="dateRange" range />
    <button @click="fetchEvents">Show Events</button>
    <div v-if="events.length">
      <h2>Events</h2>
      <ul>
        <li v-for="event in events" :key="event.id">{{ event.time }} on {{ event.date }} ({{ event.timezone }})</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'; // Ensure you have this component

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      dateRange: [],
      events: [],
    };
  },
  methods: {
    async fetchEvents() {
      const response = await fetch(`/api/events?startDate=${this.dateRange[0]}&endDate=${this.dateRange[1]}`);
      this.events = await response.json();
    },
  },
};
</script>

<style scoped>
.show-events {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
