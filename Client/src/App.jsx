import React from 'react'
import Header from './Components/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddTodo from './Components/AddTodo';
import Update from './Components/Update';
const App = () => {
  return (
    <div>
    <Header/>
    <AddTodo/>
    <Update/>
    <ToastContainer/>
    </div>
  )
}

export default App  
