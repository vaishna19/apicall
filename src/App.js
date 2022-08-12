import './App.css';
import Login from './pages/Login';
import App1 from './App1';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App(){
  return(
    <div>
      <BrowserRouter/>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/Api" component={App1}></Route>
    </div>
  )
}

export default App
