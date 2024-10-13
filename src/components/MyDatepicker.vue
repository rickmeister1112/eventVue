<template>
  <div>
    <datepicker
        v-model="selectedDateRange"
        :startDate="minDate"
        :endDate="maxDate"
        :interval="dateInterval"
        :format="dateFormat"
        @change="onDateChange"
    />
  </div>
</template>

<script>
// Import the necessary libraries
import Datepicker from 'vue3-datepicker';
import { eachYearOfInterval, isValid } from 'date-fns'; // Import date-fns for date handling

export default {
  components: { Datepicker }, // Register the Datepicker component
  data() {
    return {
      selectedDateRange: null,  // Holds the selected date range from the datepicker
      minDate: new Date('2020-01-01'),  // Define the minimum selectable date
      maxDate: new Date(),               // Define the maximum selectable date as today
      dateFormat: 'yyyy-MM-dd',          // Date format to be used
    };
  },
  computed: {
    // Computed property to ensure the date interval is valid
    dateInterval() {
      const start = this.minDate;  // Assign minDate to start
      const end = this.maxDate;    // Assign maxDate to end

      // Check if the start and end dates are valid
      if (isValid(start) && isValid(end) && start <= end) {
        try {
          // If valid, return the interval
          return { start, end };
        } catch (error) {
          console.error('Error processing interval:', error.message);
          return { start: new Date(), end: new Date() }; // Fallback to today if an error occurs
        }
      } else {
        console.error('Invalid date interval:', { start, end });
        // Return an empty or fallback interval if dates are invalid
        return { start: new Date(), end: new Date() };
      }
    },
  },
  methods: {
    // Method triggered on date selection change
    onDateChange(selected) {
      console.log('Selected date range:', selected);

      // Validate the selected date range using eachYearOfInterval
      try {
        const years = eachYearOfInterval({
          start: selected[0],
          end: selected[1]
        });
        console.log('Years within interval:', years);
      } catch (error) {
        console.error('Invalid interval selected:', error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Optional CSS styling for the datepicker */
.datepicker {
  margin: 20px;
}
</style>
