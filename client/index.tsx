import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom' // added
import store from './store'
import { router } from './router' // added

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>
  )
})


// took out <app /> and replaced with router provider