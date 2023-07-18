import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  
  import App from './components/App'
  import HomePage from './components/HomePage'
  import List from './components/List'
 
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/list" element={<List />}></Route>
        
      </Route>
    )
  )