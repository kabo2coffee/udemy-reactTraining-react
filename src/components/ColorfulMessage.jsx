import React from "react";

const ColorfulMessage = (props) => {
  //毎回props.hogeで記述するのは大変なので分割代入で切り出す
  const { color, children } = props;

  const contentLedyStyle = {
    //jsは定義変数名（jsの予約語）と代入値変数が同じであれば記述省略できる（color: color)
    color,
    fontSize: "18px"
  };

  //DOM要素の中身をpropsとして受け取る場合はchildren変数に格納される
  return <p style={contentLedyStyle}>{children}</p>;
};

export default ColorfulMessage;
