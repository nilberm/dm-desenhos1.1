import style from "./style.module.scss";

interface Button {
  text: string;
  background?: string;
  color?: string;
}

const ButtonStyle = (props: Button) => {
  return (
    <>
      <button
        style={{ background: `${props.background}`, color: `${props.color}` }}
        className={style.button}
      >
        {props.text}
      </button>
    </>
  );
};

export default ButtonStyle;
