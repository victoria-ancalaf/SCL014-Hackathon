import React from "react";
import HeaderMisiones from "../Components/Missions/HeaderMisiones";
import Permanentes from "../Components/Missions/Permanentes";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Misiones = () => {
  return (
    <div>
      <HeaderMisiones />
      {/* <section className="buttons-saldo-container">
        <button className="saldo-btn">Misiones Temporales</button>
        <button className="saldo-btn">Misiones permanentes</button>
      </section>
      <Permanentes /> */}
     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h1>olo</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <h1>chau</h1>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    </div>
  );
};

export default Misiones;
