import React from 'react'
import './LoginFooter.css';


export default function LoginFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Site Haritası</h4>
          <ul>
            <li>Hakkımızda</li>
            <li>Bireyler İçin</li>
            <li>Kurumlar İçin</li>
            <li>Kurumsal Kimlik</li>
            <li>S.S.S.</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Kaynaklar</h4>
          <ul>
            <li>Üyelik Sözleşmesi ve Kullanım Koşulları</li>
            <li>KVKK Aydınlatma Metni</li>
            <li>İlgili Kişi Başvuru Formu</li>
            <li>Çerez Politikası</li>
            <li>Çayma Formu</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Eğitim Yolculukları</h4>
          <ul>
            <li>Front End</li>
            <li>Full Stack</li>
            <li>Web & Mobile</li>
            <li>Veri Bilimi</li>
            <li>Siber Güvenlik</li>
            <li>UI / UX</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Blog</h4>
          <ul>
            <li>Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?</li>
            <li>Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!</li>
            <li>Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale Getirin!</li>
            <li>Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili Kılavuz</li>
            <li>Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Tobeto | Her Hakkı Saklıdır</p>
      </div>
    </footer>
  );
  
}
