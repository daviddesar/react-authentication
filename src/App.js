import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import PrivateContent from "./pages/PrivateContent/PrivateContent";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import authRoute from "./hoc/AuthRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/private" exact 
          component={authRoute(PrivateContent)}
        />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
