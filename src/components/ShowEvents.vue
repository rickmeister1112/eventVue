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
export default {
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
/* Add your styles here */
</style>
