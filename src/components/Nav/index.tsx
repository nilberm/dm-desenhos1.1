import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/icons/dm-logo3.png";

const Nav = () => {
  const navigate = useNavigate();

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
      <div
        className={styles.logo}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="logo dm-desenhos" />
      </div>
      <IoMenuOutline onClick={toggleNav} className={styles.btnMobile} />
      <nav className={styles.navigation}>
        {(toggleMenu || screenWith > 980) && (
          <>
            <ul className={styles.navList}>
              <li onClick={toggleNav}>
                <a href="/">Home</a>
              </li>
              {window.location.pathname === "/" ? (
                <li onClick={toggleNav}>
                  <a href="#services">Encomenda</a>
                </li>
              ) : (
                ""
              )}
              <li onClick={toggleNav}>
                <a href="#footer">Contato</a>
              </li>
              <li onClick={toggleNav}>
                <a href="#footer">Sobre</a>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Nav;
