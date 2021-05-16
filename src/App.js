import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import PrivateContent from "./pages/PrivateContent/PrivateContent";
import Login from "./pages/Login/Login";
import AuthRoute from "./auth/AuthRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <AuthRoute path="/private" component={PrivateContent} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
