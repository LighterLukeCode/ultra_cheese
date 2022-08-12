import cart from "../../assets/cart.svg";
import computer from "../../assets/computer.svg";
import phone from "../../assets/phone.svg";
import placement from "../../assets/placement.svg";
import ticket from "../../assets/ticket.svg";
import arrow from "../../assets/arrow.svg";
import styles from "./headerPreview.module.scss";

const HeaderPreview = () => {
  return (
    <>
      <div className={styles.header__preview}>
        <div className={styles.container}>
          <div className={styles.header__inner}>
            <button className={styles.header__btn_load}>Загрузить чек</button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <h1 className={styles.header__title}>Нам 40 лет — вам подарки</h1>
          <ul className="header__content-list">
            <li className="header__content-item">
              <img className="header__content-icon" src={cart} alt="cart" />
              <p className="header__content-text">Покупайте сыр Oltermanni</p>
              <img className="header__content-arrow" src={arrow} alt="arrow" />
            </li>
            <li className="header__content-item">
              <img className="header__content-icon" src={computer} alt="computer" />
              <p className="header__content-text">
                Регистрируйте чеки на сайте в период с 1 сентября по 30 ноября 2020 года
              </p>
              <img className="header__content-arrow" src={arrow} alt="arrow" />
            </li>
            <li className="header__content-item">
              <img className="header__content-icon" src={phone} alt="phone" />
              <p className="header__content-text">Получайте гарантированные призы — деньги на телефон</p>
              <img className="header__content-arrow" src={arrow} alt="arrow" />
            </li>
            <li className="header__content-item">
              <img className="header__content-icon" src={placement} alt="placement" />
              <p className="header__content-text">Участвуйте в еженедельных розыгрышах</p>
              <img className="header__content-arrow" src={arrow} alt="arrow" />
            </li>
            <li className="header__content-item">
              <img className="header__content-icon" src={ticket} alt="ticket" />
              <p className="header__content-text">Получите возможность выиграть 400 000 ₽ на новый интерьер</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderPreview;
