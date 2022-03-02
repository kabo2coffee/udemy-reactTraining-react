import React from "react";
import ReactDom from "react-dom";

//exportしたjs郡をimportする
//.jsは省略可能
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
