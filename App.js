import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import TeamDetails from "./Components/TeamDetails/TeamDetails";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/team/:teamId">
          <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
