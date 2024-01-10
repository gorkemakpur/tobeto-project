import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Image, Nav, NavDropdown, Navbar} from "react-bootstrap";
import '../../../src/wwwroot/Navi.css';

export default function Navi() {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand href="#home">
         <Image src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" width={"100px"}></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mx-auto" expand="sm">
          <Nav.Link href="#home" >Anasayfa</Nav.Link>
          <Nav.Link href="#link">Profilim</Nav.Link>
          <Nav.Link href="#home">Değerlendirmeler</Nav.Link>
          <Nav.Link href="#link">Katalog</Nav.Link>
          <Nav.Link href="#home">Takvim</Nav.Link>
          <Nav.Link href="#link">İstanbul Kodluyor</Nav.Link>

        </Nav>

        <Nav className="d-flex align-items-center">
          <Nav.Link className="text-white me-3">
            <FontAwesomeIcon icon={faSave} style={{ color: 'purple' }} />
          </Nav.Link>
          <NavDropdown title="İsim Soyisim" id="profile-dropdown">
            <NavDropdown.Item>Profil Bilgileri</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Oturumu Kapat</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}