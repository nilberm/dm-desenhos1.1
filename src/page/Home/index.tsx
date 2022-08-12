import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import bannerDesktop from "../../assets/images/home/home-debora.png";
import bannerMobile from "../../assets/images/home/home-debora-mobile.png";
import aboutMeDesktop from "../../assets/images/about/about-debora.png";

import dmStyleImg from "../../assets/images/services/DM-style.png";
import kawaiImg from "../../assets/images/services/kawai.png";
import realisticImg from "../../assets/images/services/realistic.png";

import aboutMeMobile from "../../assets/images/about/about-debora-mobile.png";
import ButtonStyle from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const dmStyle = 1;
  const realistic = 2;
  const kawai = 3;

  return (
    <Container>
      <Nav />
      <main className="mainContainer">
        <section id="homeBanner">
          <div className="carouselSection">
            <picture>
              <source media="(min-width:750px)" srcSet={bannerDesktop} />
              <img src={bannerMobile} alt="" />
            </picture>
          </div>
        </section>

        <section id="aboutMe">
          <div className="textInformation">
            <h2>Sobre Min</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              magnam inventore sed veritatis quas sapiente accusamus nisi
              aliquam explicabo, nesciunt sequi! Iure, soluta illum. Veritatis
              inventore nisi doloribus sapiente natus.
            </p>
          </div>

          <div className="imageAboutMe">
            <picture>
              <source media="(min-width:750px)" srcSet={aboutMeDesktop} />
              <img src={aboutMeMobile} alt="" />
            </picture>
          </div>
        </section>

        <section id="services">
          <div className="textTitle">
            <h2>Faça sua encomenda</h2>
            <p>Escolha o estilo do desenho</p>
          </div>

          <div className="servicesCards">
            <div
              className="card"
              onClick={() => {
                navigate(`encomendas/${dmStyle}`);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <img src={dmStyleImg} alt="Desenho no estilo Realista" />
              <ButtonStyle background="#fadbcf" text="DM-Style"></ButtonStyle>
            </div>

            <div
              className="card"
              onClick={() => {
                navigate(`encomendas/${realistic}`);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <img src={realisticImg} alt="Desenho no estilo Kawai" />
              <ButtonStyle background="#fadbcf" text="Realistic"></ButtonStyle>
            </div>

            <div
              className="card"
              onClick={() => {
                navigate(`encomendas/${kawai}`);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <img src={kawaiImg} alt="Desenho no estilo DM Style" />
              <ButtonStyle background="#fadbcf" text="Kawai"></ButtonStyle>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default Home;
