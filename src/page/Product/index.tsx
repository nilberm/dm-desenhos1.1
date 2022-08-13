import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "./style";
import { useEffect, useState } from "react";

import plusIcon from "../../assets/icons/plus.png";
import minusIcon from "../../assets/icons/minus-sign.png";

import json from "../../utils/businessRule.json";
import { useParams } from "react-router-dom";
import {
  BsCash,
  BsFillCreditCardFill,
  BsFillFileEarmarkTextFill,
  BsPaypal,
} from "react-icons/bs";
import ButtonStyle from "../../components/Button";

const Product = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const { id } = useParams();

  const [amountPeople, setAmountPeople] = useState(1);
  const [amountPet, setAmountPet] = useState(0);

  const [product, setProduct] = useState({} as any);
  const [productMayLikeOne, setProductMayLikeOne] = useState({} as any);
  const [productMayLikeTwo, setProductMayLikeTwo] = useState({} as any);

  const products = json.businessRule;

  const [radioValue, setRadioValue] = useState("");
  const [radioValueInt, setRadioValueInt] = useState(0);

  const [petPrice, setPetPrice] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  const [submitOrderText, setSubmitOrderText] = useState("");

  useEffect(() => {
    document.title = "Encomenda";
  }, []);

  useEffect(() => {
    if (id === "1") {
      setProduct(products[0]);
      setProductMayLikeOne(products[1]);
      setProductMayLikeTwo(products[2]);
    }
    if (id === "2") {
      setProduct(products[1]);
      setProductMayLikeOne(products[0]);
      setProductMayLikeTwo(products[2]);
    }
    if (id === "3") {
      setProduct(products[2]);
      setProductMayLikeOne(products[0]);
      setProductMayLikeTwo(products[1]);
    }
  }, [id, products]);

  useEffect(() => {
    if (amountPet >= 1) {
      setPetPrice(product.petPrice);
      setTotalAmount(radioValueInt * amountPeople + petPrice * amountPet);
    } else {
      setTotalAmount(radioValueInt * amountPeople);
    }

    if (amountPet === 0) {
      setSubmitOrderText(
        `Olá, Gostaria de solicitar um Desenho Tamanho ${radioValue} com ${amountPeople} Pessoa(s) no estilo ${product.name}, totalizando o valor de R$${totalAmount}`
      );
    } else {
      setSubmitOrderText(
        `Olá, Gostaria de solicitar um Desenho Tamanho ${radioValue} com ${amountPeople} Pessoa(s) e ${amountPet} Pet no estilo ${product.name}, totalizando o valor de R$${totalAmount}`
      );
    }
  }, [
    radioValue,
    radioValueInt,
    amountPet,
    amountPeople,
    petPrice,
    product.petPrice,
    product.name,
    totalAmount,
  ]);

  return (
    <Container>
      <Nav />
      <section id="Form">
        <div className="title">
          {product?.name}
          <img src={product?.image} alt="desenhos" />
          <img className="imageDesktop" src={product?.image} alt="desenhos" />
        </div>

        <div className="containerForm">
          <form onSubmit={handleSubmit}>
            <div className="formHeader">
              <div className="finalPrice">R${totalAmount}</div>
              <div className="serviceDescription">{product?.description}</div>
            </div>

            <div className="sizeText">
              Tamanho:<span>{radioValue}</span>
            </div>

            <fieldset>
              <div className="radioInput">
                <div className="radioItems">
                  <input
                    type="radio"
                    name="size"
                    id="busto"
                    value="Busto"
                    required
                    onChange={(e) => {
                      setRadioValue(e.target.value);
                      setRadioValueInt(parseInt(product.price.busto));
                    }}
                  />
                  <label htmlFor="busto">Busto</label>
                </div>

                <div className="radioItems">
                  <input
                    type="radio"
                    name="size"
                    id="meioCorpo"
                    required
                    value="Meio Corpo"
                    onChange={(e) => {
                      setRadioValue(e.target.value);
                      setRadioValueInt(parseInt(product.price.meioCorpo));
                    }}
                  />
                  <label htmlFor="meioCorpo">Meio Corpo</label>
                </div>

                <div className="radioItems">
                  <input
                    type="radio"
                    name="size"
                    required
                    id="corpoInteiro"
                    value="Corpo Inteiro"
                    onChange={(e) => {
                      setRadioValue(e.target.value);
                      setRadioValueInt(parseInt(product.price.corpoInteiro));
                    }}
                  />
                  <label htmlFor="corpoInteiro">Corpo Inteiro</label>
                </div>
              </div>
            </fieldset>

            <div className="amount">
              <label className="sizeValue">
                <span>Quantidade:</span> Pessoa
              </label>

              <div className="btnContainer">
                <button
                  className="decreaseAmount"
                  onClick={() => {
                    if (amountPeople > 1) {
                      setAmountPeople(amountPeople - 1);
                    }
                  }}
                >
                  <img src={minusIcon} alt="" />
                </button>
                <p className="amountValue">{amountPeople}</p>
                <button
                  className="increaseAmount"
                  onClick={() => {
                    setAmountPeople(amountPeople + 1);
                  }}
                >
                  <img src={plusIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="amountPet">
              <div className="petInfo">
                <p className="petText">Pets - R${product.petPrice} cada</p>
                <p className="infoPrice">
                  * Crianças e bebês são o mesmo valor de adulto
                </p>
              </div>
              <label className="sizeValue">
                <span>Quantidade:</span> Pet
              </label>
              <div className="btnContainer">
                <button
                  className="decreaseAmountPet"
                  onClick={() => {
                    if (amountPet > 0) {
                      setAmountPet(amountPet - 1);
                    }
                  }}
                >
                  <img src={minusIcon} alt="" />
                </button>
                <p id="amountPetValue">{amountPet}</p>
                <button
                  className="increaseAmountPet"
                  onClick={() => setAmountPet(amountPet + 1)}
                >
                  <img src={plusIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="btnSubmit">
              <button type="submit">
                <a
                  href={`https://api.whatsapp.com/send?phone=5585989493607&text=${submitOrderText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enviar Encomenda
                </a>
              </button>
            </div>
          </form>

          <div className="deadline">
            <h3>Prazo de entrega</h3>
            <p>O prazo de entrega é de 10 a 15 dias.</p>
            <p>Ao finalizar a ilustração é enviada por driver em PNG e PDF.</p>
          </div>

          <div className="paymentMethod">
            <h3>Formas de pagamento</h3>
            <p>
              É cobrado no mínimo 50% do valor total da ilustração antes de
              começa-la
            </p>
            <div className="iconsPayment">
              <div className="icons">
                <BsFillCreditCardFill />
                <p>Cartão de Credito</p>
              </div>

              <div className="icons">
                <BsFillFileEarmarkTextFill />

                <p>Boleto</p>
              </div>

              <div className="icons">
                <BsCash />

                <p>Pix</p>
              </div>

              <div className="icons">
                <BsPaypal />
                <p>(Internacional)</p>
              </div>
            </div>
          </div>
          <div className="mayLike">
            <a href={`/encomendas/${productMayLikeOne.id}`}>
              <div
                className="card"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={productMayLikeOne.image}
                  alt="Desenho no estilo Realista"
                />
                <ButtonStyle
                  background="#e15b50"
                  color="#fff"
                  text={productMayLikeOne.name}
                ></ButtonStyle>
              </div>
            </a>

            <a href={`/encomendas/${productMayLikeTwo.id}`}>
              <div
                className="card"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={productMayLikeTwo.image}
                  alt="Desenho no estilo DM Style"
                />
                <ButtonStyle
                  background="#e15b50"
                  color="#fff"
                  text={productMayLikeTwo.name}
                ></ButtonStyle>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Product;
