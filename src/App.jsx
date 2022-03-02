import React, { useState } from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  //JSX記法ではreturn内は1つの要素しか返却できない
  //複数のタグをネストする場合はreturn () で書く
  //react内でjs記法を利用する時は{}で囲う
  return (
    //1つのdomで囲う必要があるが、不要なdivタグを作らないように<>で書く
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <ColorfulMessage color="blue">元気です</ColorfulMessage>
      {/* onCkickなどはcamel記法 */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

//exportは対象の変数の生成後に記載する
export default App;
