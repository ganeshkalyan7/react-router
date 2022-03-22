import React from 'react';
import {AppBar,Box ,Toolbar ,Typography ,IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Admin() {
  return (
    <div className='container-fluid'>
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ mr: 50}}>
            details
          </Typography>
          <Typography variant="h3" color="inherit" component="div">
             ADMIN PAGE
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <br/>

      <input type='text' placeholder="enter your name" class="form-label"/> &nbsp;
      <button type="submit" class="btn btn-primary">Submit</button>
      <br/>
      <table className="table table-success table-striped table-hover ">
     <tr> 
          <th>NAME</th>
          <th>EMAIL</th>
          <th>AGE</th>
          <th>DESIGNATION</th>
    </tr>
    <tr> 
          <td>GANESH</td>
          <td>GANESHCRISTIANO@gmail.com</td>
          <td>22</td>
          <td>FULL STACK WEB-DEVELOPER</td>
          <td><button className='btn btn-primary'>edit</button></td>
          <td><button className='btn btn-danger'>delete</button></td>
    </tr>

     <tr> 
          <td>SANJAY KHAN</td>
          <td>SANJAY@GMAIL.COM</td>
          <td>21</td>
          <td>SOFTWARE TRAINEE</td>
          <td><button className='btn btn-primary'>edit</button></td>
          <td><button className='btn btn-danger'>delete</button></td>
    </tr>
    <tr> 
          <td>JAI CHANDHRA</td>
          <td>JAI-CHANDHRA@gmail.com</td>
          <td>23</td>
          <td>TESTING</td>
          <td><button className='btn btn-primary'>edit</button></td>
          <td><button className='btn btn-danger'>delete</button></td>
    </tr>
    <tr> 
          <td>SIVA</td>
          <td>SIVAJILLA@gmail.com</td>
          <td>23</td>
          <td>TESTING</td>
          <td><button className='btn btn-primary'>edit</button></td>
          <td><button className='btn btn-danger'>delete</button></td>
    </tr>
    <tr> 
          <td>VICKY</td>
          <td>VICKY@gmail.com</td>
          <td>24</td>
          <td>SOFTWARE ENGINEER</td>
          <td><button className='btn btn-primary'>edit</button></td>
          <td><button className='btn btn-danger'>delete</button></td>
    </tr>
    <tr> 
          <td>VENKATESH</td>
          <td>VENKATESH@gmail.com</td>
          <td>25</td>
          <td>DATA ANALYST</td>
          <td><button className='btn btn-primary'>edit</button></td>
          <td><button className='btn btn-danger'>delete</button></td>
    </tr>
    <tr> 
          <td>YUGENDHAR</td>
          <td>YUGENDHAR@gmail.com</td>
          <td>30</td>
          <td>FRONT-END DEVELOPER</td>
          <td><button className='btn btn-primary'>edit</button></td>
          <td><button className='btn btn-danger'>delete</button></td>
    </tr>
   
      </table>
    
    </div>
  )
}

export default Admin