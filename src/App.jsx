import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


class App extends React.Component {

  render() {
    return (
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    )
  }
}

export default App