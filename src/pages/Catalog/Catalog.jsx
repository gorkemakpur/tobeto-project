import React from "react";
import "./Catalog.css";
import { Card, ListGroup, Row } from "react-bootstrap";
import {BsClock,BsPerson,BsPlayCircleFill} from "react-icons/bs";

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

      {/*sağdaki eğitim listesi*/}
      <div className="col-8">
        <Row>
          <div className="col-3">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
                className="edubox-img"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height:"100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65.5)",
                  backdropFilter:"blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <div
                    className="col-12"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text className="pro" style={{ marginLeft: "5px" }}>
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      4s 14dk
                    </Card.Text>
                  </div>
                  <div className="col-12">
                    <Card.Title
                      className="name"
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu
                    </Card.Title>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_365670_08eb2bab1a.jpg"
                className="edubox-img"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height:"100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65,.5)",
                  backdropFilter:"blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <div
                    className="col-12"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text className="pro" style={{ marginLeft: "5px" }}>
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      40dk
                    </Card.Text>
                  </div>
                  <div className="col-12">
                    <Card.Title
                      className="name"
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Sürdürülebilir Bir Dünya için Bireysel Farkındalık
                    </Card.Title>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_365693_fd2d22fa3a.jpg"
                className="edubox-img"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height:"100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65,.5)",
                  backdropFilter:"blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <div
                    className="col-12"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text className="pro" style={{ marginLeft: "5px" }}>
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      53dk
                    </Card.Text>
                  </div>
                  <div className="col-12">
                    <Card.Title
                      className="name"
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Hibrit Yaşamda Duyguyu Düzenleme
                    </Card.Title>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3"></div>
          
        </Row>
      </div>
      {/*sağdaki eğitim listesi bitiş*/}
    </Row>
  );
}
