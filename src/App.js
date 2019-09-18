import React from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import General from "./components/generalpage";
import EditBook from "./components/editpage"

function App() {
  return  <BrowserRouter >
    <div className="App">
      <Header />
      <Switch >
        <Route  path="/" component={General} exact={true} />
        <Route path="/add" component={General} />
        <Route path="/book/:id" component=  {EditBook}/>

      </Switch>

    </div>
  </BrowserRouter>

}
export default App;
