import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Tableab = () => {
    var [names,setNames] = useState(["Anakha","Mariya","Joshua"])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"30px"}}>Name</TableCell>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"30px"}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value}</TableCell>
                            </TableRow>
                        )


                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tableab