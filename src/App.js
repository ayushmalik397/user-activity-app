import React from "react";
import "./App.css";
import { Navbar} from "react-bootstrap";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="nav-head" href="/">
          Activity App
        </Navbar.Brand>
      </Navbar>
      <UsersList />
    </div>
  );
}

export default App;
