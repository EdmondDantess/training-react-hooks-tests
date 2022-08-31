import React from "react";
import obc from "./OnOff.module.css";

type OnOffTypeProps = {
  tumb: boolean;
  setTumb: (value: boolean) => void;
};

export const OnOff = (props: OnOffTypeProps) => {
  const classValueButton = props.tumb ? obc.buttonOn : obc.buttonOff;
    console.log(('rendered'))
  return (
    <div className={classValueButton}>
         <button className={obc.on} onClick={() => {props.setTumb(true)}}>On</button>
      <button className={obc.off} onClick={() => {props.setTumb(false)}}>Off</button>
      <div className={obc.lampa}></div>
    </div>
  );
};
