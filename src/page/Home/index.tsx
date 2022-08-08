import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

import { Container } from "./styles";

import bannerDesktop from "../../assets/images/home/home-debora.png";
import bannerMobile from "../../assets/images/home/home-debora-mobile.png";
import aboutMeDesktop from "../../assets/images/about/about-debora.png";

import dmStyle from "../../assets/images/services/DM-style.png";
import kawai from "../../assets/images/services/kawai.png";
import realistic from "../../assets/images/services/realistic.png";

import aboutMeMobile from "../../assets/images/about/about-debora-mobile.png";
import ButtonStyle from "../../components/Button";

const Home = () => {
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
            <div className="card">
              <img src={dmStyle} alt="Desenho no estilo Realista" />
              <ButtonStyle text="DM-Style"></ButtonStyle>
            </div>

            <div className="card">
              <img src={kawai} alt="Desenho no estilo DM Style" />
              <ButtonStyle text="Kawai"></ButtonStyle>
            </div>

            <div className="card">
              <img src={realistic} alt="Desenho no estilo Kawai" />
              <ButtonStyle text="Realistic"></ButtonStyle>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default Home;
