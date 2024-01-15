import React from "react";
import "./Catalog.css";
import { Card, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlay, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Catalog() {
  return (
    <Row className="mt-3">
      {/*katalog sol menü */}
      <div className="col-4">
        <Row>
          <div className="col-4"></div>
          <div className="col-8">
            <Card style={{ width: "18rem" }}>
              <Card.Header>Filtrele</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Kategori</ListGroup.Item>
                <ListGroup.Item>Eğitimler</ListGroup.Item>
                <ListGroup.Item>Seviye</ListGroup.Item>
                <ListGroup.Item>Konu</ListGroup.Item>
                <ListGroup.Item>Yazılım Dili</ListGroup.Item>
                <ListGroup.Item>Eğitmen</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </Row>
      </div>
      {/*katalog sol menü bitiş*/}

      <div className="col-8">
        <Row>
          <div className="col-4 sm">
            <Row>
              <Card style={{ width: "300px", height: "300px" }}>
              
                <Card.Img
                  variant="top"
                  src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
                  width={"50px"}
                  height={"150px"}
                  
                />
                <Card.Text>Tobeto Eğitmen</Card.Text>
                <Card.Text>4 saat 14 dakika</Card.Text>
                <Card.Body className="text-white">
                  
                  <Card.Text>Dinle Anla İfade Et</Card.Text>
                </Card.Body>
                <Link to="#">Go somewhere</Link>
                
              </Card>
            </Row>
          </div>
          <div className="col-4"></div>

          <div className="col-4"></div>
        </Row>
      </div>
    </Row>
  );
}
