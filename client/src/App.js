import './App.css';
import Landing from './components/Landing';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element = {<Landing/>}/>
        <Route path ='/home' element = {<h1>Soy el Home</h1>}/>
        <Route path ='/detail' element = {<h1>Soy el Detail</h1>}/>
        <Route path = '/form' element = {<h1>Soy el Formulario</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
