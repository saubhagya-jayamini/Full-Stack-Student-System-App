import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper , Button} from '@mui/material';
import {useState, useEffect} from 'react';

export default function Student() {

    const paperStyle={padding:'50px 20px' , width:600, margin:"20px auto"}
    const[name,setName]=useState('') 
    const[address,setAddress]=useState('') 
    const[marks,setMarks]=useState('') 
    const[students,setStudents]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const Student={name,address,marks}
        console.log(Student)
        fetch('http://localhost:8080/student/add',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Student)
        }).then(()=>{
            console.log("New student added")
        })
    
    }

    useEffect(()=>{
        fetch('http://localhost:8080/student/getAll')
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        }
    )    
    },[])

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Marks" variant="outlined" fullWidth
      value={marks}
      onChange={(e)=>setMarks(e.target.value)}
      />
      <Button variant="outlined" onClick={handleClick}>Submit</Button>
    </Box>

    </Paper>

    

    <Paper elevation={3} style={paperStyle}>
    <h2>Student List</h2>

        {students.map(Student=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={Student.id}>
                Id:{Student.id}<br/>
                Name:{Student.name}<br/>
                Address:{Student.address}<br/>
                Marks: {Student.marks}
            </Paper>
        ))}

    </Paper>
    </Container>
  );
}
