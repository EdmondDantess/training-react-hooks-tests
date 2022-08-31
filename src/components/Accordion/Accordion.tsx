import React, {memo} from "react";

type ItemType = {
    title: string
    value: any
   }

type AccordionPropsType = {
    titleValue: string
    collapsed: (value: boolean) => void
    valueCollapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionContainer(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle title={props.titleValue} clicked={() => props.collapsed(!props.valueCollapsed)}/>
            {props.valueCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    clicked: () => void
}

const AccordionTitle = React.memo(AccordionTitleContainer)


function AccordionTitleContainer(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.clicked}>{props.title}</h3>
}

type AccordionBodyProps = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo(AccordionBodyContainer)

function AccordionBodyContainer(props: AccordionBodyProps) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {
                props.items.map((el, index) => {
                        return (
                            <li key={index} onClick = {() => {props.onClick(el.value)}}>{el.title}</li>
                        )
                    }
                )
            }
        </ul>
    );
}

export default AccordionContainer;