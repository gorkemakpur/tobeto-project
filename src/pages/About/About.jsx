import React from "react";
import "./About.css";
export default function About() {
  return (
    <main className="container" >
      <div className="row">
        <div className="col-md-7 col-12 my-10 flex-row">
          <div className="flex-col">
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "108%",
                overflow: "hidden",
              }}
            >
              <img
                alt="Resim"
                src="https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg"
                decoding="async"
                data-nimg="responsive"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  boxSizing: "border-box",
                  padding: "0",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0",
                  height: "0",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="flex-col">
            <p className="aboutus-text">
              Tobeto, <br />
              "headhunting" yaklaşımını <br />
              <span style={{ color: "#93f" }}> "headfarming" </span> olarak
              değiştirmeyi <br />
              hedefleyen, eğitim ve gelişim odaklı <br />
              dijital bir platformdur
            </p>
            <p className="aboutus-text"></p>
          </div>
        </div>
        <div className="col-md-5 col-12 my-10 d-flex">
          <video
            width="100%"
            className="modal-height youtube-video img-fluid"
            controls
          >
            <source
              src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="row">
            <div className="col-12">
            <p className="about-paragraph">
              Geleceğin mesleklerindeki yetenek açığını, geleneksel
              "headhunting" yaklaşımının "<b>headfarming</b>" olarak
              değişmesiyle çözülebileceğine inanarak yola çıktık.
            </p>
            <p className="about-paragraph">
              Tobeto, "headfarming" yaklaşımıyla yeteneği potansiyel olarak
              değerlendirir, en kıymetli olacağı alanda yetiştirir, değer
              yaratacağı projeler ve kurumlarla eşleştirir. Bu fırsata
              <b>Y.E.S. (Yetiş-Eşleş-Sürdür)</b> diyen herkesi Tobeto’lu olmaya
              çağırıyoruz.
            </p>
            <p className="about-paragraph">
              Günümüzde iş bulmak, bir projeye dahil olmak veya kariyerinde
              yükselmek gibi değer yaratma yolları için en önemli unsurların
              başında <b>dijital beceri</b> sahibi olmak geliyor. Tam da bu
              ihtiyaçları kapsamak üzere, Tobeto'da eğitim içeriklerimizi hem
              dijital beceri sahibi olmak isteyen yeteneklerin teknik beceri
              kazanması hem de genç profesyonellerin, ihtiyaçlarına uygun olarak
              yenilenmeleri ve yetkinliklerini geliştirmelerini kapsayacak
              şekilde tek platformda birleştirdik.
            </p>
            <p className="about-paragraph">
              Tobeto’da <b>hem bireylere hem de kurumlara</b> hizmet eden
              yapımızla, doğru yetenekle doğru pozisyonun sürdürülebilir bir
              şekilde eşleşmesine ve birlikte gelişmelerine alan açıyoruz. Kurum
              içi çözümlere destek veriyor, eğitim ve istihdam arasında köprü
              görevini üstleniyoruz.
            </p>
          </div>

            </div>
          </div>
          
        </div>
        
      </div>
    </main>
  );
}
