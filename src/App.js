import LandingMenu from "./components/LandingMenu/LandingMenu"
import Typing from "./components/Typing/Typing"
import Phonics from "./components/Phonics/Phonics"
import WordsAndPhrases from "./components/WordsAndPhrases/WordsAndPhrases"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <div className="main-content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingMenu} />
            <Route path="/phonics" component={Phonics} />
            <Route path="/typing" component={Typing} />
            <Route path="/words-and-phrases" component={WordsAndPhrases} />
          </Switch>
      </BrowserRouter>
      </div>
      <footer>
        <span>
          © Learn Georgian 2021
        </span>
      </footer>
    </div>
  );
}

export default App;
