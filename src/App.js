import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Women from './components/Women'
import Login from './components/Login';

import './App.css';

const App=()=>(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
        </Routes>
    </BrowserRouter>

)


export default App;
