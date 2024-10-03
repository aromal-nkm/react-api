import React, { useEffect, useState } from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



const Home = () => {
// const arr_obj=[{ID:1,Name:"Bean",Username:"Mr.bean",Email:"mrbean@gmail.com"},{ID:2,Name:"Dean",Username:"Mr.Dean",Email:"mrdean@gmail.com"}]
const [rows,setRows]=useState([]);
 useEffect( ()=>{
  axios.get('https://dummyjson.com/users').then((res)=>{
    setRows(res.data.users);
  })
  // axios.get('https://dummyjson.com/users').then((res)=>{
  //  setRows(res.data.users);
  // })
 }, []) 
return (

    <>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </>

  )

}




export default Home
