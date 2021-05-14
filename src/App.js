import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import PrivateContent from "./pages/PrivateContent/PrivateContent";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
    <AuthProvider>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/private" exact component={PrivateContent} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </AuthProvider>
      
    </div>
  );
}

export default App;
