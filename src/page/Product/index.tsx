import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "./style";

import dmStyle from "../../assets/images/services/DM-style.png";

const Product = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Nav />
      <section id="Form">
        <div className="title">Desenhos---</div>

        <div className="containerForm">
          <img src={dmStyle} alt="DM-Style" />
          <form onSubmit={handleSubmit}>
            <div className="formHeader">
              <div className="finalPrice">R$123,23</div>
              <div className="serviceDescription">
                Desenho Realista, bla bla bla Desenho Realista, bla bla bla
                Desenho Realista, bla bla bla Desenho Realista, bla bla bla
              </div>
            </div>

            <div className="radioInput">
              <div className="sizeText">
                Tamanho:<span>Meio Corpo</span>
              </div>

              <div className="radioItems">
                <input type="radio" name="size" id="busto" />
                <label htmlFor="busto">Busto</label>
              </div>

              <div className="radioItems">
                <input type="radio" name="size" id="meioCorpo" />
                <label htmlFor="meioCorpo">Meio Corpo</label>
              </div>

              <div className="radioItems">
                <input type="radio" name="size" id="corpoInteiro" />
                <label htmlFor="corpoInteiro">Corpo Inteiro</label>
              </div>
            </div>

            <div className="amount"></div>
          </form>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Product;
