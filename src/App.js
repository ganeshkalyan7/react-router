import './App.css';
import Admin from './Admin';
import Sample from './Sample';
import LearnMore from './learnMore';
import ContactUs from './ContactUs';
import Login from './Login'

import { BrowserRouter,Routes,Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <h1>hello every one this is  ganesh</h1>
       <BrowserRouter>
         
         <Routes>
              <Route path="/" element={<Sample/>}></Route> 
              <Route path="/Admin" element={<Admin />}></Route> 
              <Route path="/LearnMore" element={<LearnMore />}></Route> 
              <Route path="/contactus" element={<ContactUs />}></Route> 
              <Route path="/login" element={<Login/>}></Route> 
         </Routes>
     </BrowserRouter>
      
  
     
     </div>
  );
}

export default App;
