import React, { useState} from 'react'
import Form from "./Component/Form"
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ShowData from './Component/ShowData'
const App = () => {
  //for store all data
  const[allData, setAllData] = useState([]);
  //store in array

  const formSubmit = (data) => {
   
    setAllData((allData) => {
      return [...allData, data];
    })  
    
  }

  return (
    <div>
      {/* header pard */}
      <div className='header'>
        <h1>HEADER</h1>
      </div>
      {/* Erollment Heading */}
      <div className="regheading">
        <p>Student Enrollment Form</p>
      </div>
      <div className="container">
        <div className="row">
          {/* form  */}
          <div className="col-12 col-lg-6">
            <Form formSubmit={formSubmit} />
          </div>
          {/* for show data */}
          <div className="col-12 col-lg-6 Maindiv">
            <div className='regheading'>Enrolled Students</div>
            {allData.map((val, index) => {
              return <ShowData key={index} name={val.name.toUpperCase()} radio={val.radio} email={val.email} website={val.website} skills={val.checkbox} image={val.image} />
            })}
          </div>
        </div>
      </div>



    </div>
  )
}

export default App