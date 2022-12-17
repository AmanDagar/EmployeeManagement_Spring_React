
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import DeleteEmployeeComponent from './component/DeleteEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div>
          <div>
            <HeaderComponent />
          </div>
          <div className="container">
            <Routes>
              <Route exact path="/" element= {<ListEmployeeComponent />} /> 
              <Route  path="/employees" element= {<ListEmployeeComponent />}   /> 
              <Route  path="/addEmployee" element= {<CreateEmployeeComponent />}   /> 
              <Route  path="/updateEmployee/:id" element= {<UpdateEmployeeComponent />}   /> 
              <Route  path="/deleteEmployee/:id" element= {<DeleteEmployeeComponent />}   /> 
              </Routes>
                
            
          </div>
          <div>
            <FooterComponent />
          </div>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
