import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './Test.jsx'
import './index.css'
import LowPoly from './LowPoly.jsx'
import MyScene from './MyScene.jsx'
import PacingCardioGuy from './PacingCardioGuy.jsx'
import Bar from './Bar.jsx';
import PApp from './ParkApp/PApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PacingCardioGuy/> */}
    <PApp/>
  </React.StrictMode>,
)
