import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom' // added
import store from './store'
import { router } from './router' // added
import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
     domain="piwakwaka-2023-james.au.auth0.com"
     clientId="bAnHhH8RPCnaNsSRbi6jr3GXOAosPxnR"
     redirectUri={window.location.origin}
     audience="https://listit/api"
    >

    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>

    </Auth0Provider>
  )
})


// took out <app /> and replaced with router provider