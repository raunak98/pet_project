import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from './components/header.component';
import Datagrid from './components/grid/datagrid.component';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route exact path="/" element={<Datagrid/>}/>        
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
