<template>
  <div class="book-event">
    <h1>Book an Event</h1>
    <vue3-datepicker
        v-model="date"
        :format="dateFormat"
        :min-date="startDate"
        :max-date="endDate"
        :disabled-date="disableDates"
    />
    <input type="number" v-model="duration" placeholder="Duration in minutes" />
    <select v-model="timezone">
      <option value="GMT">GMT</option>
      <option value="IST">IST</option>
      <option value="CST">CST</option>
      <option value="EST">EST</option>
      <option value="PST">PST</option>
    </select>
    <button @click="fetchFreeSlots">Get Free Slots</button>
    <FreeSlot v-if="slots.length" :slots="slots" @book="handleBooking" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Vue3Datepicker from 'vue3-datepicker';
import FreeSlot from '../components/FreeSlots.vue';
import '@/assets/vue3-datepicker.css';

export default {
  components: {
    Vue3Datepicker,
    FreeSlot,
  },
  setup() {
    const date = ref(new Date());
    const duration = ref(30);
    const timezone = ref('GMT');
    const slots = ref([]);
    const dateFormat = 'YYYY-MM-DD';

    const startDate = ref(new Date()); // Current date
    const endDate = ref(new Date(new Date().setFullYear(new Date().getFullYear() + 1))); // One year from now

    console.log("Selected Date:", date.value);
    console.log("Start Date:", startDate.value);
    console.log("End Date:", endDate.value);

    const disableDates = (date) => {
      return date < new Date(); // Disable past dates
    };

    const fetchFreeSlots = async () => {
      const formattedDate = date.value.toISOString(); // Adjust as needed
      const response = await fetch(`/api/free-slots?date=${formattedDate}&duration=${duration.value}&timezone=${timezone.value}`);
      slots.value = await response.json();
    };

    const handleBooking = async (slot) => {
      await fetch('/api/book-event', {
        method: 'POST',
        body: JSON.stringify({date: slot, duration: duration.value, timezone: timezone.value}),
        headers: {'Content-Type': 'application/json'},
      });
      alert(`Event booked for: ${slot}`);
      slots.value = []; // Clear slots after booking
    };

    return {
      date,
      duration,
      timezone,
      slots,
      dateFormat,
      fetchFreeSlots,
      handleBooking,
      disableDates,
      startDate,
      endDate,
    };
  },
};
</script>

<style scoped>
.book-event {
  max-width: 400px;
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

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
