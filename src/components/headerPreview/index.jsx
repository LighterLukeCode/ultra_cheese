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
      <div className={styles.header__block}>
        <div className={styles.container}>
          <div className={styles.header__content}>
            <h1 className={styles.header__title}>Нам 40 лет — вам подарки</h1>
            <ul className={styles.header__content_list}>
              <li className={styles.header__content_item}>
                <img className="header__content-icon" src={cart} alt="cart" />
                <p className={styles.header__content_text}>Покупайте сыр Oltermanni</p>
              </li>
              <li className={styles.header__content_item}>
                <img className="header__content-icon" src={computer} alt="computer" />
                <p className={styles.header__content_text}>
                  Регистрируйте чеки на сайте в период с 1 сентября по 30 ноября 2020 года
                </p>
              </li>
              <li className={styles.header__content_item}>
                <img className="header__content-icon" src={phone} alt="phone" />
                <p className={styles.header__content_text}>Получайте гарантированные призы — деньги на телефон</p>
              </li>
              <li className={styles.header__content_item}>
                <img className="header__content-icon" src={placement} alt="placement" />
                <p className={styles.header__content_text}>Участвуйте в еженедельных розыгрышах</p>
              </li>
              <li className={styles.header__content_item}>
                <img className="header__content-icon" src={ticket} alt="ticket" />
                <p className={styles.header__content_text}>Получите возможность выиграть 400 000 ₽ на новый интерьер</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPreview;
