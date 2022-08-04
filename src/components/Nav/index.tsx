import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { IoMenuOutline } from "react-icons/io5";

export const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWith, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <h1>Logo</h1>
      </div>
      <IoMenuOutline onClick={toggleNav} className={styles.btnMobile} />
      <nav className={styles.navigation}>
        {(toggleMenu || screenWith > 980) && (
          <>
            <ul className={styles.navList}>
              <li>
                {/* eslint-disable-next-line */}
                <a href="#">Home</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="#">Encomenda</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="#">Contato</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="#">Sobre</a>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};
