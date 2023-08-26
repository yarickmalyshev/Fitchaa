import ficon from '../assets/footer-bcg.png';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
        <div className="footer__text">
          <div className="footer__logo">TAG.TOUR</div>
          <div className="footer__list">
            <a href='#about' className="footer__item">О приложении</a>
            <div href='#tour' className="footer__item">TOUR +</div>
            <div href='#auth' className="footer__item">Авторизация</div>
            <div href='#auth' className="footer__item">Личный кабинет</div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;