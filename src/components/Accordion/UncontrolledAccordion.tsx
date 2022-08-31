import React, {useReducer} from "react";
import {reducer, SET_OPPOSITION_BOOLEAN} from "./reducer";

type AccordionPropsType = {
  titleValue?: string;
};

function UncontrolledAccordion(props: AccordionPropsType) {

  // const [collapsed, setCollapsed] = useState<boolean>(true);
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

  return (
    <div>
      {/*<AccordionTitle title={"UnControlled accordion"} setCollapsed={setCollapsed} collapsed={collapsed}/> */}
      <AccordionTitle title={"UnControlled accordion"} setCollapsed={()=>dispatch({type: SET_OPPOSITION_BOOLEAN})} collapsed={state.collapsed}/>
      {state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  setCollapsed: (value: boolean)=>void;
  collapsed: boolean
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>;
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default UncontrolledAccordion;
