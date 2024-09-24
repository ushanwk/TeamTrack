import logo from './logo.svg';
import './App.css';
import {Header} from "./views/common/Header";
import {Footer} from "./views/common/Footer";
import {AllEmployeesPage} from "./views/pages/AllEmployeesPage";
import {AddEmployeesPage} from "./views/pages/AddEmployeesPage";
import {EditEmployeesPage} from "./views/pages/EditEmployeesPage";
import {DeleteEmployeesPage} from "./views/pages/DeleteEmployeesPage";
import {SearchEmployeesPage} from "./views/pages/SearchEmployeesPage";
import {useState} from "react";


function App() {

  const [ selectedTab, setSelectedTab ] = useState(0);

  return (
    <div className="App">
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {
        selectedTab == 0 ? <AllEmployeesPage /> : null
      }

      {
        selectedTab == 1 ? <AddEmployeesPage /> : null
      }

      {
        selectedTab == 2 ? <EditEmployeesPage /> : null
      }

      {
        selectedTab == 3 ? <DeleteEmployeesPage /> : null
      }

      {
        selectedTab == 4 ? <SearchEmployeesPage /> : null
      }



      <Footer />
    </div>
  );
}

export default App;
