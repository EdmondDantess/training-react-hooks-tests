import React, {ChangeEvent, HTMLInputTypeAttribute, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: "UseState demka",
}


export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)

    return <>
    <button onClick={()=>setCounter(counter+1)}>+</button>
        {counter}
    </>
    }