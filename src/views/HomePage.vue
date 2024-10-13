<!-- src/views/HomePage.vue -->
<template>
  <div class="home">
    <h1>Welcome to the Calendar App</h1>
    <p>This application allows you to book appointments with doctors and manage your schedule efficiently.</p>

    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>View available slots</li>
        <li>Book appointments</li>
        <li>Manage your bookings</li>
      </ul>
    </div>

    <router-link to="/book-event" class="btn">Book Event</router-link>
    <router-link to="/show-event" class="btn">Show Events</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  text-align: center;
  margin: 20px;
}
.features {
  margin-top: 20px;
}
.features ul {
  list-style-type: none;
  padding: 0;
}
.features li {
  margin: 10px 0;
}
.btn {
  display: inline-block;
  padding: 10px 15px;
  margin-top: 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn:hover {
  background-color: #0056b3;
}
</style>
