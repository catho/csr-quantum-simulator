import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GlobalStyle, Container, Row, Col } from '@catho/quantum';
import Quantum from './quantum';
import CathoComponents from './cathocomponents';

const colsProps = {
  medium: 12,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Container>
              <Row>
                <Col {...colsProps}>
                  <h2>CSR simulator</h2>
                  <h3>Choose your test</h3>
                </Col>
              </Row>
              <Row>
                <Col {...colsProps}>
                  <span>&rarr;</span><Link to="/quantum">Quantum</Link>
                </Col>
              </Row>
              <Row>
                <Col {...colsProps}>
                  <span>&rarr;</span><Link to="/cathocomponents">Catho components</Link>
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path="/quantum">
            <Quantum />
          </Route>
          <Route path="/cathocomponents">
            <CathoComponents />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;