import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { faCartShopping } from '@fortawesome/free-regular-svg-icons'
// import { faCartShopping } from '@fortawesome/free-light-svg-icons'


/* add icons to the library */
library.add(faCartShopping)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
