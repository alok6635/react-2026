import React from 'react'
import { Header } from './component/header/Header'
import Overview from './component/overview/Overview'

const App = () => {
  return (
    <>
    <div className='wrapper'>
     <Header/>
     <Overview/>
    </div>
    </>
  )
}

export default App