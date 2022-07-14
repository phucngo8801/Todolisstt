import React from 'react'
import "../../src/index.css"
import {Link} from "react-router-dom"

const Topbar = () => {
  return (
    <div className="container">
        <div className="container-right">
            <h1>NTP</h1>
             </div>
        <div className="container-left"> 
            <ul>
                <li><Link to="/"><h2>ToDoList</h2></Link></li>
                <li><Link to="/from"><h2>From</h2></Link></li>
            </ul>
         
        </div>
    </div>
  ) 
}

export default Topbar