import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
  const [employee,setEmployee]=useState({eId:'1',eName:'akhil',eDept:'hr',eLocn:'tvm'})
  let fetchvalue=(e)=>{

    // console.log(e)
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  let sendData=(e)=>{
    console.log(employee)
  }
  return ( <div>
    <h2>NEW EMPLOYEE</h2>
    <TextField  id="standard-basic" label="Employee ID" name='eId'
    //  value={employee.eId} 
     variant="standard" onChange={fetchvalue} /><br />
    <TextField  id="standard-basic" label="Employee Name" variant="standard" name='eName' 
    // value={employee.eName} 
     onChange={fetchvalue} /><br />
    <TextField   id="standard-basic" label="Employee dept" variant="standard" name='eDept' 
    // value={employee.eDept} 
    onChange={fetchvalue}/><br />
    <TextField   id="standard-basic" label="Employee location" variant="standard" name='eLocn' 
    // value={employee.eLocn}
      onChange={fetchvalue}/> <br /><br />
    <Button onClick={sendData} variant="contained">submit</Button> <br /></div>
  )
}

export default Add