// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this file exists
    import store from '../src/assets/store'; // Ensure this file exists
import './assets/styles.css'; // Import your CSS here

// Log router and store to check their values
console.log('Router:', router);
console.log('Store:', store);

// Create Vue app and mount it
createApp(App)
    .use(router) // Use router if defined
    .use(store) // Use store if defined
    .mount('#app');

