<template>
  <div>
    <h2>Available Slots</h2>
    <div v-if="slots.length">
      <div
          v-for="slot in slots"
          :key="slot"
          class="slot"
          @click="handleBook(slot)"
      >
        {{ slot }}
      </div>
    </div>
    <div v-else>No free slots available.</div>
  </div>
</template>

<script>
export default {
  props: {
    slots: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleBook(slot) {
      this.$emit("book", slot);
    }
  }
};
</script>

<style scoped>
.slot {
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
