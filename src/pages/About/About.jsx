import React from "react";
import "./About.css";
import { Container,Row,Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <Container className="d-flex flex-column align-items-center">
      {/* Header */}
      <Row className="mt-5 ">
        <Col>
          <h1 className="aboutUs" >HAKKIMIZDA</h1>
        </Col>
      </Row>

      {/* Content */}
      <Row className="mt-5 pl-1">
        {/* Image */}
        <Col md={6} lg={4}>
          <Image src="https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg" alt="About Us" fluid style={{ maxWidth: '100%', height: 'auto' }}/>
        </Col>

        {/* Text */}
        <Col md={6} lg={4}>
          <p>Tobeto, <br />
              "headhunting" yaklaşımını <br />
              <span style={{ color: "#93f" }}> "headfarming" </span> olarak
              değiştirmeyi <br />
              hedefleyen, eğitim ve gelişim odaklı <br />
              dijital bir platformdur
            </p>
        </Col>

        {/* Video */}
        <Col md={12} lg={4}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
              title="About Us Video"
              typeof="video/mp4"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>

      {/* Paragraphs */}
      <Row className="mt-3">
        <Col >
          <div >
            <p className="aboutus-p1">Geleceğin mesleklerindeki yetenek açığını, geleneksel
              "headhunting" yaklaşımının "<b>headfarming</b>" olarak
              değişmesiyle çözülebileceğine inanarak yola çıktık.</p>

            <p className="aboutus-p2">Tobeto, "headfarming" yaklaşımıyla yeteneği potansiyel olarak
              değerlendirir, en kıymetli olacağı alanda yetiştirir, değer
              yaratacağı projeler ve kurumlarla eşleştirir. Bu fırsata
              <b>Y.E.S. (Yetiş-Eşleş-Sürdür)</b> diyen herkesi Tobeto’lu olmaya
              çağırıyoruz.</p>

              <p className="aboutus-p3"> Günümüzde iş bulmak, bir projeye dahil olmak veya kariyerinde
              yükselmek gibi değer yaratma yolları için en önemli unsurların
              başında <b>dijital beceri</b> sahibi olmak geliyor. Tam da bu
              ihtiyaçları kapsamak üzere, Tobeto'da eğitim içeriklerimizi hem
              dijital beceri sahibi olmak isteyen yeteneklerin teknik beceri
              kazanması hem de genç profesyonellerin, ihtiyaçlarına uygun olarak
              yenilenmeleri ve yetkinliklerini geliştirmelerini kapsayacak
              şekilde tek platformda birleştirdik.</p>
            {/* Add more paragraphs as needed */}
          </div>
        </Col>
      </Row>
    </Container>
  );

}
