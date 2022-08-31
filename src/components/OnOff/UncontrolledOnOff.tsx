import React, { useState } from "react";
import obc from "./OnOff.module.css";

type OnOffTypeProps = {
  // tumb: boolean
};

export const UncontrolledOnOff = (props: OnOffTypeProps) => {

  const [tumb, setTumb] = useState<boolean>(false);

  const classValueButton = tumb ? obc.buttonOn : obc.buttonOff;

  return (
    <div className={classValueButton}>
      <button className={obc.on} onClick={() => {setTumb(true)}}>On</button>
      <button className={obc.off} onClick={() => {setTumb(false)}}>Off</button>
      <div className={obc.lampa}></div>
    </div>
  );
};