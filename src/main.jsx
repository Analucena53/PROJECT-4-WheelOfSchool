import React from 'react'
import ReactDOM from 'react-dom/client'
// import HomePageView from './View/HomePageView'
//import ListView from './View/ListView'

import { BrowserRouter } from 'react-router-dom'
import App from './components/App'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
      <App/>
    {/* <ListView />  */}
    {/* <HomePageView/> */}
  </BrowserRouter>
  )