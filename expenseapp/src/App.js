import logo from './logo.svg';
import './App.css';
import {Button} from 'antd'
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Test from './Pages/Test';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Navigate } from 'react-router-dom';
// import './index.css';
// import DefaultLayout from './Components/DefaultLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/test" element={<ProtectedRoute><Test/></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          
        </Routes>
        
      </BrowserRouter>

    
    </div>
  );
}


export function ProtectedRoute(props){
  if(localStorage.getItem('dema-user')){
    return props.children
  }
  else{
    return <Navigate to='/login'/>
  }
}

export default App;
