import './App.css';
import{useState} from 'react';

function App() {

  let [employeesList,setemployeeslist] = useState([]);
    
    let getEmployeeDatafromServer =async()=>{
      let reqOptions ={
        method:"GET",
      }
     let JSONData = await fetch("http://localhost:5678/EmployeesList",reqOptions);
     let JSOData = await JSONData.json();
     
     console.log(JSOData);
     setemployeeslist(JSOData);

    };
   
  return (
    <div className="App">
    <div>
       <button onClick={()=>{
        getEmployeeDatafromServer();
       }}>Employee List</button>
    </div>
    <div>
      {employeesList.map((ele,i)=>{
        return <div className='dv2' key={i}>
          <h2 className='dv1'><label>Name</label>:-{ele.Name}</h2>
          <h2 className='dv1'><label>Age</label>:-{ele.age}</h2>
          <h2 className='dv1'><label>Gender</label>:-{ele.gender}</h2>
          <h2 className='dv1'><label>Employee Id</label>:-{ele.employeeId}</h2>
          <h2 className='dv1'><label>email</label>:-{ele.email}</h2>
          <h2 className='dv1'><label>Department</label>:-{ele.deparment}</h2>
          <h2 className='dv1'><label>Mobile No</label>:-{ele.phone}</h2>
          
          </div>
      })}

    </div>
    </div>
  );
}

export default App;
