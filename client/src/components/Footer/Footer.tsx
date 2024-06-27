import React from 'react';
import './Footer.css'; // Подключаем стили CSS модуля

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        {/* Первая колонка */}
        <div className="footerSection">
            <a href="/">
          <img src='../public/logo/чисто.net.png' alt='чисто.net' className='logo-img'/>
          </a>
        </div>

        {/* Вторая колонка */}
        <div className="footerSection">
          <h4>Информация</h4>
          <ul className="quickLinks">
            <li>
              <a href="/policy">Политика обработки данных</a>
            </li>
            <li>
              <a href="/rules">Правила и условия</a>
            </li>
            <li>
              <a href="offer">Оферта</a>
            </li>
            <li>
            </li>
          </ul>
        </div>

        {/* Третья колонка */}
        <div className="footerSection">
          <h4>Контакты</h4>
          <div className="contact">
            <span>
              <i className="fas fa-envelope"></i> support@чисто.net
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">&copy; 2023 Все права защищены компанией ЧИСТО.NET</div>
    </div>
  );
};

export default Footer;
