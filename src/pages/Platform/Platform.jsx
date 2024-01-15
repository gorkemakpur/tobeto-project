import React from "react";
import "./Platform.css";
import { Image } from "react-bootstrap";
export default function Platform() {
  return (
    <>
      <div>
        <div className="container">
          {/* tobetoya hoşgeldin kısmı başlangıç*/}
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 text-center mt-5 welcomeTobeto">
              <span>Tobeto</span>'ya hoş geldin
              <br /> Name Surname
            </div>
            <div className="col-4 d-flex justify-content-end p-4">
              <Image
                src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                style={{ width: "75px", height: "75px" }}
              />
            </div>
          </div>
          {/* tobetoya hoşgeldin kısmı son */}

          {/* tobetoya hoşgeldin alt açıklama kısmı başlangıç*/}
          <div className="row">
            <div className="col-12 text-center mt-4 descTobeto">
              Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
              yanında!
            </div>
          </div>
          {/* tobetoya hoşgeldin alt açıklama kısmı son */}
        </div>

        <section className="my-2">
          <div className="container">
            <div className="row d-flex">
              {/* istanbul kodluyor image başlangıç */}
              <div className="row d-flex justify-content-center mt-3">
                {/*<div className="ik-logo-platform"></div>*/}
                <Image
                src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                style={{ width: "250px", height: "250px" }}
              />
                <div className="col-12 text-center mt-0 ik-logo-platform-desc">
                  Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini
                  al.
                  <br />
                  <span className="bold-desc">Aradığın <span className="quote"> “</span>İş
                  <span className="quote">”</span>  Burada!</span>
                </div>
              </div>

              {/* istanbul kodluyor image Bitiş */}

              {/* */}
              <div className="row">
                <div className="col-12 mb-4 mt-3 ">
                  <ul
                    className="nav nav-tabs mainTablist justify-content-center p-3"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="apply-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#apply-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="apply-tab-pane"
                        aria-selected="true"
                      >
                        Başvurularım
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="lessons-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#lessons-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="lessons-tab-pane"
                        aria-selected="false"
                      >
                        Eğitimlerim
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div style={{ position: "relative" }} />
                      <button
                        className="nav-link"
                        id="notification-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#notification-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="notification-tab-pane"
                        aria-selected="false"
                      >
                        Duyuru ve Haberlerim
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <div style={{ position: "relative" }} />
                      <button
                        className="nav-link"
                        id="mySurvey-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mySurvey-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="mySurvey-tab-pane"
                        aria-selected="false"
                      >
                        Anketlerim
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* */}

              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="apply-tab-pane"
                    role="tabpanel"
                    aria-labelledby="apply-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-6 col-12 mt-2">
                        <div className="status-card status_accepted">
                          <span className="form_name">İstanbul Kodluyor</span>
                          <span className="form_status" />
                          <span className="pull_back" />
                          <span className="form_name">Bilgilendirme</span>
                          <div>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <i
                                  className="fa fa-check fa-sm"
                                  aria-hidden="true"
                                  style={{ color: "green", marginRight: 5 }}
                                />
                                <span className="form_date">
                                  {" "}
                                  İstanbul Kodluyor Başvuru Formu onaylandı.
                                </span>
                              </div>
                            </div>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <i
                                  className="fa fa-check fa-sm"
                                  aria-hidden="true"
                                  style={{ color: "green", marginRight: 5 }}
                                />
                                <span className="form_date">
                                  {" "}
                                  İstanbul Kodluyor Belge Yükleme Formu
                                  onaylandı.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="lessons-tab-pane"
                    role="tabpanel"
                    aria-labelledby="lessons-tab"
                    tabIndex={0}
                  >
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="all-lessons-tab-pane"
                            role="tabpanel"
                            aria-labelledby="all-lessons-tab"
                            tabIndex={0}
                          >
                            <div className="row">
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>
                                        Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                                      </span>
                                      <span className="platform-course-date">
                                        21 Eylül 2023 15:20
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>Eğitimlere Nasıl Katılırım?</span>
                                      <span className="platform-course-date">
                                        8 Eylül 2023 17:06
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_20232_097e57d641.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>Herkes İçin Kodlama - 1B</span>
                                      <span className="platform-course-date">
                                        18 Eylül 2023 03:00
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_IKP_b4846af652.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>
                                        İstanbul Kodluyor Proje Aşamaları
                                      </span>
                                      <span className="platform-course-date">
                                        31 Ağustos 2023 13:01
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade "
                            id="started-tab-pane"
                            role="tabpanel"
                            aria-labelledby="started-tab"
                            tabIndex={0}
                          >
                            <div className="row">
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>
                                        Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                                      </span>
                                      <span className="platform-course-date">
                                        21 Eylül 2023 15:20
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>Eğitimlere Nasıl Katılırım?</span>
                                      <span className="platform-course-date">
                                        8 Eylül 2023 17:06
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_20232_097e57d641.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>Herkes İçin Kodlama - 1B</span>
                                      <span className="platform-course-date">
                                        18 Eylül 2023 03:00
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_IKP_b4846af652.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>
                                        İstanbul Kodluyor Proje Aşamaları
                                      </span>
                                      <span className="platform-course-date">
                                        31 Ağustos 2023 13:01
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade "
                            id="done-lessons-tab-pane"
                            role="tabpanel"
                            aria-labelledby="done-lessons-tab"
                            tabIndex={0}
                          >
                            <div className="row">
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>
                                        Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                                      </span>
                                      <span className="platform-course-date">
                                        21 Eylül 2023 15:20
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>Eğitimlere Nasıl Katılırım?</span>
                                      <span className="platform-course-date">
                                        8 Eylül 2023 17:06
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_20232_097e57d641.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>Herkes İçin Kodlama - 1B</span>
                                      <span className="platform-course-date">
                                        18 Eylül 2023 03:00
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-12 mb-4">
                                <div className="corp-edu-card">
                                  <div
                                    className="card-img"
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_IKP_b4846af652.jpg")',
                                    }}
                                  ></div>
                                  <div className="card-content">
                                    <div className="d-flex flex-column">
                                      <span>
                                        İstanbul Kodluyor Proje Aşamaları
                                      </span>
                                      <span className="platform-course-date">
                                        31 Ağustos 2023 13:01
                                      </span>
                                    </div>
                                    <a className="apply-btn">Eğitime Git</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="showMoreBtn">Daha Fazla Göster</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="notification-tab-pane"
                    role="tabpanel"
                    aria-labelledby="notification-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-4 col-12 my-4">
                        <div className="notfy-card notify">
                          <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between mb-4">
                              <span className="type">Duyuru</span>
                              <span className="corp-names type">
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className="header ">
                              Ocak Ayı Tercih Formu Bilgilendirmesi
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="date">12.01.2024</span>
                            <span className="read-more">Devamını Oku</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 my-4">
                        <div className="notfy-card notify">
                          <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between mb-4">
                              <span className="type">Duyuru</span>
                              <span className="corp-names type">
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className="header ">
                              11 Ocak Kampüs Buluşması
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="date">06.01.2024</span>
                            <span className="read-more">Devamını Oku</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 my-4">
                        <div className="notfy-card notify">
                          <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between mb-4">
                              <span className="type">Duyuru</span>
                              <span className="corp-names type">
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className="header ">
                              30 Ocak Online Hoşgeldin Buluşması-5
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="date">03.01.2024</span>
                            <span className="read-more">Devamını Oku</span>
                          </div>
                        </div>
                      </div>
                      <div className="showMoreBtn">Daha Fazla Göster</div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="applications-tab-pane"
                    role="tabpanel"
                    aria-labelledby="applications-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-md-4 col-12 my-4">
                        <div className="notfy-card news">
                          <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between mb-4">
                              <span className="type">Mülakat</span>
                              <span className="corp-names type">
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className="header ">
                              Ocak Ayı Tercih Formu Bilgilendirmesi
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="date">12.01.2024</span>
                            <span className="read-more">
                              Mülakatı Değerlendir
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 my-4">
                        <div className="notfy-card news">
                          <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between mb-4">
                              <span className="type">Mülakat</span>
                              <span className="corp-names type">
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className="header ">
                              11 Ocak Kampüs Buluşması
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="date">06.01.2024</span>
                            <span className="read-more">
                              Mülakatı Değerlendir
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 my-4">
                        <div className="notfy-card news">
                          <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between mb-4">
                              <span className="type">Mülakat</span>
                              <span className="corp-names type">
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className="header ">
                              30 Ocak Online Hoşgeldin Buluşması-5
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="date">03.01.2024</span>
                            <span className="read-more">
                              Mülakatı Değerlendir
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="showMoreBtn">Daha Fazla Göster</div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mySurvey-tab-pane"
                    role="tabpanel"
                    aria-labelledby="mySurvey-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className=" noDataCard">
                        <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
