import styles from "./footer.module.scss";
import facebook from "../../assets/facebook.svg";
import vk from "../../assets/vk.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import pinterest from "../../assets/pinterest.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className={styles.container}>
        <div className={styles.footer__inner}>
          <div className={styles.phone}>
            <span className={styles.information}>Информационная Линия</span>
            <a className={styles.number} href="tel:+78003331525">
              8 800 333-15-25
            </a>
            <span className={styles.copyright}>© 2020 ООО «Валио»</span>
          </div>
          <div className={styles.contacts}>
            <ul className={styles.contacts__list}>
              <li className={styles.contacts__item}>
                <a className={styles.contacts__link} href="#">
                  Обратная связь
                </a>
              </li>
              <li className={styles.contacts__item}>
                <a className={styles.contacts__link} href="#">
                  Правила акции
                </a>
              </li>
              <li className={styles.contacts__item}>
                <a className={styles.faq} href="#">
                  faq
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <span className={styles.social_title}>Присоединяйтесь к нам</span>
            <ul className={styles.social__list}>
              <li className={styles.social__item}>
                <a className={styles.social__link} href="#">
                  <img src={facebook} alt="facebook" className={styles.social__icon} />
                </a>
              </li>
              <li className={styles.social__item}>
                <a className={styles.social__link} href="#">
                  <img src={vk} alt="vk" className={styles.social__icon} />
                </a>
              </li>
              <li className={styles.social__item}>
                <a className={styles.social__link} href="#">
                  <img src={linkedin} alt="LinkendIn" className={styles.social__icon} />
                </a>
              </li>
              <li className={styles.social__item}>
                <a className={styles.social__link} href="#">
                  <img src={twitter} alt="twitter" className={styles.social__icon} />
                </a>
              </li>
              <li className={styles.social__item}>
                <a className={styles.social__link} href="#">
                  <img src={instagram} alt="instagram" className={styles.social__icon} />
                </a>
              </li>
              <li className={styles.social__item}>
                <a className={styles.social__link} href="#">
                  <img src={pinterest} alt="pininterest" className={styles.social__icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
