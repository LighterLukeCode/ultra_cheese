import logo from "../../logo.svg";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className="header">
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <a className="logo__link" href="#">
            <img src={logo} alt="logo" />
          </a>
          <ul className={styles.nav__menu}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                Правила
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                Призы
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                Победители
              </a>
            </li>
          </ul>
          <div className={styles.modal__items}>
            <button className={styles.modal__btn_login}>Вход</button>
            <button className={styles.modal__btn_register}>Регистрация</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
