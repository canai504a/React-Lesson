import React, { useEffect, useState } from "react";
import Message from "./components/message";

const App = () => {
  // const contentstyle = {
  //   color: "blue",
  //   Fontsize: "18px"
  //   // React上の記法としてfont-sizeをFontsizeにしている
  // };
  const onClickCountUp = () => {
    setNum(Num + 1);
  };
  const [Num, setNum] = useState(0);
  // 可変の状態
  // ⇒stateが変更されると再レンダリングされる
  // 動的に値が変化する時に用いる
  useEffect(() => {
    if (Num > 0) {
      if (Num % 3 === 0) {
        FaseShowFlag || setFaseShowFlag(true);
      } else {
        FaseShowFlag && setFaseShowFlag(false);
      }
    }
  }, [Num]);
  // ステートが最初から処理が走る
  // UseEffectを使い、[]の中の条件で処理のタイミングを制御可能
  //　第二引数を[]だけにすると最初の1回だけ実行という処理に変更できる

  const onClickSwithShowFlag = () => {
    setFaseShowFlag(!FaseShowFlag);
  };
  const [FaseShowFlag, setFaseShowFlag] = useState(false);

  // console.log("再レンダリング");
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <p style={contentstyle}>お元気ですか</p> */}
      <Message color="pink">お元気ですか</Message>
      <Message color="blue">元気です</Message>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwithShowFlag}>on/off</button>
      <p>{Num}</p>
      {/* && ⇒　左辺がTrueなら右辺を出力する */}
      {FaseShowFlag && <p>ON</p>}

      {/* || ⇒　左辺がFalseなら右辺を出力する */}
      {/* {FaseShowFlag || <p>OFF</p>} */}
    </>
  );
};

// このファイル以外でApp関数を利用できるよう指定
export default App;
