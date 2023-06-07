import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
//import useFetch from "./hooks/useFetch";

function App() {
  //const marvelApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=68bc3c997df8b9480da196ebdc97bd56&hash=f3ac4be189468336ccea74b21bb34113')
  //console.log(marvelApi);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route component={() => <Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;