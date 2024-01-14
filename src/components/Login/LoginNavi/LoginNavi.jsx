import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './LoginNavi.css';
export default function LoginNavi() {
  return (
  <>
<div>
      <div className="ik-banner">
        <div className="container">
          <div className="ik-banner-top">
            <div>
                <span className="ik-logo-platform"></span>
            </div>
            <div className="mobile-none">
              <span className="text-ik fw-bold">
                Aradığın <span style={{ color: 'rgb(0, 176, 120)' }}>"</span>İş<span style={{ color: 'rgb(0, 176, 120)' }}>"</span> Burada!
              </span>
            </div>
            <div>
              <button className="ik-btn">Başvur</button>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="row">
    <Navbar expand="sm" className="bg-dark">
    <Container>
      <Navbar.Brand href="#home">
        <Image src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75" width={"100px"} className="m-3" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto" expand="sm">
          <Nav.Link to="#home" className="p-4 text-white">Biz Kimiz</Nav.Link>
          <Nav.Link to="#link" className="p-4 text-white">Neler Sunuyoruz? </Nav.Link>
          <Nav.Link to="#home" className="p-4 text-white">Katalog</Nav.Link>
          <Nav.Link to="#link" className="p-4 text-white">Codecademy</Nav.Link>
          <Nav.Link to="#home" className="p-4 text-white">Tobeto'da Bu Ay</Nav.Link>
        </Nav>
  
        <Nav className="profile d-flex align-items-center">
          <Nav.Link className="text-white me-3">
            <FontAwesomeIcon icon={faSave} style={{ color: 'purple' }} />
          </Nav.Link>
          <NavDropdown title="İsim Soyisim" id="profile-dropdown" className="text-white">
            <NavDropdown.Item>Profil Bilgileri</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Oturumu Kapat</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  </>
  )
}
