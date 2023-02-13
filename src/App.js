import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";
import EmpAllEdit from "./EmpAllEdit";

function App() {
  return (
    <div className="App">
      <h1 className="head">React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/users/create" element={<EmpCreate />}></Route>
          <Route path="/users/detail/:empid" element={<EmpDetails />}></Route>
          <Route path="/users/edit/:empid" element={<EmpEdit />}></Route>
          <Route path="/users/alledit/:empid" element={<EmpAllEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
