import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Employeepage from './components/Employeepage';
import Employeedirectory from './components/Employeedirectory';
import Searchbar from './components/Searchbar';
import Employeelist from './components/Employeelist';
import Employeelistitem from './components/Employeelistitem';
import EmpItempic from './components/EmpItempic';
import empData from './models/data'
import Empoffcont from './components/Empoffcont';


function App() {
  console.log(empData)
  return (
    <div className="App">
      <div className='HomePage'>
        <Homepage />
        <div className='EmpDir'>
          <Employeedirectory content='Employee Directory' />
        </div>
        <div className='SearchBar'>
          <Searchbar />
        </div>
        <div className='EmployeeList'>
          <Employeelist />
          <div className='EmployeeListItem'>
            <div className='EmpPic'><EmpItempic EmpPic={empData[0].pic} /></div>
            <div className='EmpDetail'><Employeelistitem employeeName={empData[0].EmpName} employeePosition={empData[0].EmpPosition} /></div>
          </div>
          <div className='EmployeeListItem'>
            <div className='EmpPic'><EmpItempic EmpPic={empData[1].pic} /></div>
            <div className='EmpDetail'><Employeelistitem employeeName={empData[1].EmpName} employeePosition={empData[1].EmpPosition} /></div>
          </div>
          <div className='EmployeeListItem'>
            <div className='EmpPic'><EmpItempic EmpPic={empData[2].pic} /></div>
            <div className='EmpDetail'><Employeelistitem employeeName={empData[2].EmpName} employeePosition={empData[2].EmpPosition} /></div>
          </div>
          <div className='EmployeeListItem'>
            <div className='EmpPic'><EmpItempic EmpPic={empData[3].pic} /></div>
            <div className='EmpDetail'><Employeelistitem employeeName={empData[3].EmpName} employeePosition={empData[3].EmpPosition} /></div>
          </div>
          <div className='EmployeeListItem'>
            <div className='EmpPic'><EmpItempic EmpPic={empData[4].pic} /></div>
            <div className='EmpDetail'><Employeelistitem employeeName={empData[4].EmpName} employeePosition={empData[4].EmpPosition} /></div>
          </div>
          <div className='EmployeeListItem'>
            <div className='EmpPic'><EmpItempic EmpPic={empData[5].pic} /></div>
            <div className='EmpDetail'><Employeelistitem employeeName={empData[5].EmpName} employeePosition={empData[5].EmpPosition} /></div>
          </div>
        </div>
      </div>
      <div className='EmployeePage'>
        <Employeepage />
        <div className='EmpDir'>
          <Employeedirectory content='Employee' />
        </div>
        <div className='EmployeeListItem'>
          <div className='EmpPic'><EmpItempic EmpPic={empData[0].pic} /></div>
          <div className='EmpDetail'><Employeelistitem employeeName={empData[0].EmpName} employeePosition={empData[0].EmpPosition} /></div>
        </div>
        <div className='ContInfoParent'>
          <div className='ContactInfo'>
            <Empoffcont contTitle='Call Office' contInfo={empData[0].offCont} />
          </div>
          <button><img id='button' src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Greater_than_symbol.jpg"/></button>
        </div>
        <div className='ContInfoParent'>
          <div className='ContactInfo'>
            <Empoffcont contTitle='Call Mobile' contInfo={empData[0].mobile} />
          </div>
          <button><img id='button' src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Greater_than_symbol.jpg"/></button>
        </div>
        <div className='ContInfoParent'>
          <div className='ContactInfo'>
            <Empoffcont contTitle='SMS' contInfo={empData[0].sms} />
          </div>
          <button><img id='button' src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Greater_than_symbol.jpg"/></button>
        </div>
        <div className='ContInfoParent'>
          <div className='ContactInfo'>
            <Empoffcont contTitle='Email' contInfo={empData[0].email} />
          </div>
          <button><img id='button' src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Greater_than_symbol.jpg"/></button>
        </div>

      </div>

    </div>
  );
}

export default App;
