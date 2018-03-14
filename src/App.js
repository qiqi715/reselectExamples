import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import {
  ButtonGroup,
  Button,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import ReselectPage from './containers/reselectPage';
import TodoList from './containers/todoList';
import TodoListByArray from './containers/todoListByArray';
import TodoListByArrayAndEqual from './containers/todoListByArrayAndEqual';
import TodoListNew from './containers/todoListNew';


class App extends Component {
  handleSelect = (selectedKey) => 1

  render() {

    return (
      <div >
        <Grid>
          <Row className="show-grid">
            <Col xs={1} md={1}>

            </Col>
            <Col xs={11} md={10}>
              <ButtonGroup>
                <Button><Link to="/">reselect</Link></Button>
                <Button><Link to="/todoList">todoListByString</Link></Button>
                <Button><Link to="/todoListByArray">todoListByArray</Link></Button>
                <Button><Link to="/todoListByArrayAndEqual">todoListByArrayAndEqual</Link></Button>
                <Button><Link to="/todoListNew">todoListNew</Link></Button>
              </ButtonGroup>
            </Col>
            <Col xsHidden md={1}>

            </Col>
          </Row>
        </Grid>


        <Route path="/" exact component={ReselectPage}></Route>
        <Route path="/todoList" component={TodoList}></Route>
        <Route path="/todoListByArray" component={TodoListByArray}></Route>
        <Route path="/todoListByArrayAndEqual" component={TodoListByArrayAndEqual}></Route>
        <Route path="/todoListNew" component={TodoListNew}></Route>
      </div>
    );
  }
}

export default App;
