// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import { StrictMode } from "react";
// import ReactDom from "react-dom";
// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

// reactを使うときの準備として、Reactを読み込む処理が最初に必要
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Reactでは関数の中でHTMLタグを書く
// 出力する内容はreturnの先でHTMLとほぼ同じ構造で記述する
// 複数のHTMLタグを表示する場合は（）を使って記述する
// divタグで囲むとHTMLの入れ子構造が変わってしまうので
// <React.Fragment>もしくは<>で囲む
// const App = () => {
//   return (
//     // <div>
//     // <React.Fragment>
//     <>
//       <h1>こんにちは</h1>
//       <p>お元気ですか</p>
//     </>
//     // </React.Fragment>
//     // </div>
//   );
// };

// Render関数
ReactDom.render(<App />, document.getElementById("root"));

// コンポーネント命名規則
// 正しい例
// App
// SomeComponent
// ⇒頭文字を大文字にする

// 正しくない例
// app
// somecomponent
// ⇒頭文字を小文字にする

// エラーにはならないが推奨されない例
// Some_component
// some_Component

// 頭文字が大文字で始まり、単語の区切りを大文字とする変数名の付け方を
// 「パスカルケース」と呼ぶ
// Reactのコンポーネントはパスカルケースで命名する事
