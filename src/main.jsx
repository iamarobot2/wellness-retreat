import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/fonts.css'
import Home from './pages/Home'

/* We can use React-Router-Dom for client side routing along with the errorelement */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
