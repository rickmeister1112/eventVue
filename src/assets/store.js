// src/assets/store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        // Your state properties
        events: []
    },
    mutations: {
        addEvent(state, event) {
            state.events.push(event);
        }
    },
    actions: {
        async fetchEvents({ commit }) {
            const response = await fetch('/api/events'); // Replace with actual API endpoint
            const data = await response.json();
            data.forEach(event => commit('addEvent', event));
        }
    },
    modules: {
        // Any modules if necessary
    },
});

export default store;
