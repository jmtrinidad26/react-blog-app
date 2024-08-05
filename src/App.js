
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BlogDetails from './BlogDetails';
import Create from './Create';
import EditDetails from './EditDetails';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/create">
              <Create />
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path = "/edit/:id">
              <EditDetails/>
            </Route>
            <Route path = "*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
