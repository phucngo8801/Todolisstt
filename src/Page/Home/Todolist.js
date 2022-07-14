import React from 'react'
import { DataProvider } from '../../components/DataProvider'
import Footer from '../../components/Footer'
import Forminput from '../../components/Forminput'
import List from '../../components/List'
import Topbar from '../../components/Topbar'




const Todolist = () => {
  return (
    <DataProvider>
    <Topbar/>
    <div className="App">
      <h1>To Do List</h1>
      <Forminput />
      <List />
      <Footer/>
    </div>
  </DataProvider>
  )
}

export default Todolist