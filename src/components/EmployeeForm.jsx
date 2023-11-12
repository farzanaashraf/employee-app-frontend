import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system'
import React from 'react'

const EmployeeForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={3}></Grid>
      <Grid xs={6} md={6}>
        <Box component="form"
          sx={{
            m:'0 auto',
            '& .MuiTextField-root': { m: 1, width: '25ch'},
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              
              id="outlined-basic"
              label="Field Name"
              color="secondary"
              
              // defaultValue="fields-name"
            />
            <TextField
              
              id="outlined-basic"
              label="Designation"
              color="secondary"
              
              // defaultValue="Designation"
            />
          </div>
          <div>
            <TextField
              
              id="outlined-basic"
              label="Location"
              color="secondary"
              
              // defaultValue="Location"
              // variant="outlined"
            />
            <TextField
              
              id="outlined-basic"
              label="Salary"
              color="secondary"
              
              // defaultValue="Salary"
              
            />
          </div>
          <Box sx={{ mt: 2, pl: 1  }}>
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} md={3}></Grid>      
    </Grid>
  )
}

export default EmployeeForm
