<template>
  <div class="book-event">
    <h1>Book an Event</h1>
    <vue3-datepicker v-model="date" :format="dateFormat" />
    <button @click="submitBooking">Book Event</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import Vue3Datepicker from 'vue3-datepicker'; // Import the date picker component
import '@/assets/vue3-datepicker.css'; // Use @ to refer to the src directory

export default {
  components: {
    Vue3Datepicker,
  },
  setup() {
    const date = ref(new Date());
    const dateFormat = 'YYYY-MM-DD';

    const submitBooking = () => {
      alert(`Event booked for: ${date.value.toLocaleDateString()}`);
    };

    return {
      date,
      dateFormat,
      submitBooking,
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
