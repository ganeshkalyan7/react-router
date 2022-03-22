import React from 'react';



function Admin() {
  return (
    <div className="container">
      <h1>CONTACTPAGE</h1>
      
     <div  id="contact" className='col-sm-12 col-md-6 '> 
   
            <input type="text" className="form-control"  placeholder="First Name" />  
            <br/>
            <input type="text" className="form-control"  placeholder="last Name" aria-describedby="emailHelp"/>
            <br/>
            <input type="text" className="form-control"  placeholder="email" aria-describedby="emailHelp"/>
            <br/>
            <input type="text" className="form-control"  placeholder="phone number" aria-describedby="emailHelp"/>
            <br/>
            <textarea row="70" col='50'  placeholder="further deatils can be txeted here" > </textarea> 
            <br/>
            <button className='btn btn-primary'>Submit</button>
           
    </div>
    
    

    
    
  </div>
  )
}

export default Admin