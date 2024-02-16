import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/style.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes } from "react-router-dom";

import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Player from "./components/Player";
import CustomNavBar from "./components/CustomNavBar";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <SideBar></SideBar>
          <Col className="col-12 col-md-9 offset-md-3">
            <CustomNavBar></CustomNavBar>
            <Main genere="relax"></Main>
            <Main genere="sanremo"></Main>
            <Main genere="italiane"></Main>
          </Col>
        </Row>
      </Container>
      <footer>
        <Player></Player>
      </footer>
    </BrowserRouter>
  );
}

export default App;
