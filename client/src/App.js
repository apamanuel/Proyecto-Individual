import './App.css';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import {Routes,Route} from 'react-router-dom';
import Detail from './views/detail/Detail';
import Form from './views/form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element = {<Landing/>}/>
        <Route path ='/home' element = {<Home/>}/>
        <Route path ='/detail' element = {<Detail/>}/>
        <Route path = '/form' element = {<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
