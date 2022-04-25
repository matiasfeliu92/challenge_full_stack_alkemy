import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Componentes/SignUp';
import SignIn from './Componentes/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<SignUp/>}/>
          <Route path= '/signIn' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
