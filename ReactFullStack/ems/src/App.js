import React from 'react'
import EmployeeListComponent from './components/EmployeeListComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostEmployeeComponent from './components/PostEmployeeComponent'


const App = () => {
  return (
    <div>
      <Router>

        <HeaderComponent />
        <div className='container'>

          <Routes>
            <Route path='/' exact element={<EmployeeListComponent />}></Route>
            <Route path='/employee' element={<EmployeeListComponent />}></Route>
            <Route path='/add-employee' element={<PostEmployeeComponent />}></Route>
            <Route path='employee/edit-employee/:id' element={<PostEmployeeComponent />}></Route>
          </Routes>

        </div>
        <FooterComponent />

      </Router>
    </div>
  )
}

export default App
