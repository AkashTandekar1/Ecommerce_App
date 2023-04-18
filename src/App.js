import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/Cards';
import CardDetails from './Components/CardDetails';


function App() {
  return (
    <div>
       <Header/>
       <Routes>
          <Route path='/' element={<Cards/>}></Route>
          <Route path='/cartdetails' element={<CardDetails/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
