import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Componentes/SignUp';
import SignIn from './Componentes/SignIn';
import ShowOperations from './Componentes/ShowOperations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<SignIn/>}/>
          <Route path= '/users/signUp' element={<SignUp/>}/>
          <Route path= '/operaciones' element={<ShowOperations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
