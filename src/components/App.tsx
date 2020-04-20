import React, { Fragment } from "react";
import AddTodo from "../containers/AddTodo";
import VisibleToDoList from "../containers/VisibleToDoList";
import Footer from './Footer';
import RevealExampleMoveRight from './Rotate';

const App = () => (
  <Fragment>
    <RevealExampleMoveRight/>
    <AddTodo />
    <VisibleToDoList />
    <Footer />
  </Fragment>
);

export default App;
