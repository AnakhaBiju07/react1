
import ApiGet from './components/ApiGet';
import First from './components/First';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Tableab from './components/Tableab';
import { Route, Routes } from 'react-router-dom';

function App() {
  <ApiGet/>
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<StateBasics/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Tableab/>}/>
        <Route path='/axios' element={<ApiGet/>}/>
      </Routes>
    </div>
  );
}

export default App;
