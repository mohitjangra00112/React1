import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter';
import { Forms } from './components/Forms';
import { Forms2 } from './components/Forms2';
import { Router } from './components/Router'; 
import { Api } from './components/Api';

function App() {

  return(
    <>
    {/* <Counter /> */}
    {/* <Forms /> */}
    {/* <Forms2 /> */}
    {/* <Router /> */}
    <Api/>
    </>
  )

}

export default App;




