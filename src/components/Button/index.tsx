import style from "./style.module.scss";

interface Button {
  text: string;
}

const ButtonStyle = (props: Button) => {
  return (
    <>
      <button className={style.button}>{props.text}</button>
    </>
  );
};

export default ButtonStyle;
