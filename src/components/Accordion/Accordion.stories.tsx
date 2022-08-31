import {useState,} from "@storybook/addons";
import React from "react";
import AccordionContainer from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion stories",
    component: AccordionContainer,
}

const  Accordion = React.memo(AccordionContainer)

export const AccordionStories = () => {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return <Accordion titleValue={">>>>Click Me<<<<"}
                      collapsed={setAccordionCollapsed}
                      valueCollapsed={accordionCollapsed}
                      items={
                          [
                              {title: "Maks", value: 1},
                              {title: "Jhon", value: 2},
                              {title: "Abrab", value: 3},
                              {title: "Kir", value: 4}
                          ]}
                      onClick={(e)=>console.log(`hello ${e}`)}
    />
}