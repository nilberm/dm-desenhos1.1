import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "./style";
import { useEffect, useState } from "react";

import plusIcon from "../../assets/icons/plus.png";
import minusIcon from "../../assets/icons/minus-sign.png";

import json from "../../utils/businessRule.json";
import { useParams } from "react-router-dom";

const Product = (props: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const { id } = useParams();

  const [amountPeople, setAmountPeople] = useState(1);
  const [amountPet, setAmountPet] = useState(0);

  const [product, setProduct] = useState({} as any);

  const products = json.businessRule;

  const [radioValue, setRadioValue] = useState("");
  const [radioValueInt, setRadioValueInt] = useState(0);

  const [petPrice, setPetPrice] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (amountPet >= 1) {
      setPetPrice(product.petPrice);
      setTotalAmount(radioValueInt * amountPeople + petPrice * amountPet);
    } else {
      setTotalAmount(radioValueInt * amountPeople);
    }

    // eslint-disable-next-line
  }, [radioValue, radioValueInt, amountPet, amountPeople]);

  useEffect(() => {
    document.title = "Encomenda";

    if (id === "1") {
      setProduct(products[0]);
    }
    if (id === "2") {
      setProduct(products[2]);
    }
    if (id === "3") {
      setProduct(products[1]);
    }
  }, [id, products]);

  return (
    <Container>
      <Nav />
      <section id="Form">
        <div className="title">{product?.name}</div>

        <div className="containerForm">
          <img src={product?.image} alt="desenhos" />
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
                <span>Quantidade:</span>
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
                <p className="petText">Pets - R$ cada</p>
                <p className="infoPrice">
                  * Crianças e bebês são o mesmo valor de adulto
                </p>
              </div>
              <label className="sizeValue">
                <span>Quantidade:</span>
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
          </form>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Product;
