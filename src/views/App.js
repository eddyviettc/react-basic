import logo from './logo.svg';
import './App.scss';
import './example/MyComponent'
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Nav from './Nav/Nav';
import MyComponent from './example/MyComponent';
import Home from './example/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";






function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          {/* <ListTodo /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
