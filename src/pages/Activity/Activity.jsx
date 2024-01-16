import React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Image,
  ListGroup,
  Nav,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { FaChevronLeft, FaHeart } from "react-icons/fa6";
import { SiBigcartel } from "react-icons/si";

export default function Activity() {
  return (
    <Container fluid>
      {/* Sol üstteki geri git oku */}
      <Button
        variant="primary"
        style={{
          backgroundColor: "#9933ff",
          position: "absolute",
          top: "20px",
          left: "20px",
          borderRadius: "20px",
        }}
      >
        <FaChevronLeft />
      </Button>

      {/* Orta kısımdaki card */}
      <Row className="mt-5">
        <Col lg={2}></Col> {/* Sol taraftan 2 column boşluk */}
        <Col lg={8}>
          <Card>
            <Row>
              <Col lg={1}>
                <Image
                  src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOEUbbR02pyqjg%3d%3d"
                  width={"100px"}
                  height={"100px"}
                />
              </Col>
              <Col lg={8}>
                <div style={{ marginLeft: "10px" }}>
                  <p>Dr. Ecmel Ayral'dan Hoşgeldin Mesajı</p>
                  <p style={{ marginBottom: "0" }}>tamamladın</p>
                </div>
              </Col>
              <Col lg={3}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: "10px", marginTop: "25px" }}>
                    <FaHeart
                      style={{
                        float: "left",
                        color: "red",
                        fontSize: "2em",
                      }}
                    />
                    <p
                      style={{
                        float: "left",
                        fontSize: "1.5em",
                        color: "red",
                      }}
                    >
                      256
                    </p>
                  </div>

                  <div style={{ marginRight: "10px", marginTop: "10px" }}>
                    <Badge
                      bg="#"
                      style={{
                        fontSize: "1.5em",
                        marginRight: "5px",
                        backgroundColor: "#3DCB79",
                        fontWeight: "200",
                      }}
                    >
                      100 Puan
                    </Badge>
                  </div>
                  <div style={{ marginRight: "10px", marginTop: "10px" }}>
                    <SiBigcartel
                      style={{
                        marginLeft: "5px",
                        color: "green",
                        backgroundColor: "black",
                        fontSize: "2em",
                      }}
                    />
                  </div>
                </div>
                <ProgressBar now={50} label={`50%`} />
              </Col>
              
            </Row>

            <Col lg={12} style={{marginTop:"30px"}}>
              <div className="activity-content-menu LXP-Collapse">
                <Nav variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/home">İçerik</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Hakkında</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <CardBody style={{ backgroundColor: "white" }}>
              <Col lg={4}>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Porta ac consectetur ac
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={1}></Col>
              <Col lg={7}>
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/mbl4BjQMX78?si=Hcqpk8gpb5p0Gvv0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Col>
            </CardBody>
          </Card>
        </Col>
        <Col lg={2}></Col> {/* Sağ taraftan 2 column boşluk */}
      </Row>
    </Container>
  );
}
