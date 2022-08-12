import style from "./style.module.scss";

import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer" className={style.footer}>
      <div className={style.infoFooter}>
        <div className={style.logo}>Logo</div>

        <div className={style.socialContact}>
          {/* eslint-disable-next-line */}
          <a href="">
            <BsFacebook className={style.socialIcon} />
            <p>fb.com/dmdesenhos</p>
          </a>
          {/* eslint-disable-next-line */}
          <a href="">
            <BsInstagram className={style.socialIcon} />
            <p>@dmdesenhos</p>
          </a>
          {/* eslint-disable-next-line */}
          <a href="">
            <BsWhatsapp className={style.socialIcon} />
            <p>+55 85 98888-8888</p>
          </a>
          {/* eslint-disable-next-line */}
          <a href="">
            <BsYoutube className={style.socialIcon} />
            <p>yt.com/dmdesenhos</p>
          </a>
        </div>
      </div>

      <div className={style.infoDev}>
        <p>
          Website developer and design by{" "}
          <a
            href="https://www.linkedin.com/in/nilberm/"
            target="_blank"
            rel="noreferrer"
          >
            @nilberm
          </a>
          . 2022 © - Nilber Mota Dev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
