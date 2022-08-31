import React, {KeyboardEvent, MouseEvent, useEffect, useMemo, useState} from 'react';
import {Paper} from "@mui/material";
import s from './InputSelect.module.css'

type titleOptionsType = {
    title: string
    value: number
    population: number
}

type SelectPropsType = {
    titleOptions: titleOptionsType[]
}

const InputSelect = (props: SelectPropsType) => {
    const [justCounter, setJustCounter] = useState<number>(0)

    const [valueSelect, setValueSelect] = useState<number>(1)
    const [collapsed, setCollapsed] = useState<boolean>(false)


    const enteredMouse = (value: any) => {
        setValueSelect(value)
    }

    const mappedTitles = useMemo(()=> {
        console.log('rendrmap')
      return    props.titleOptions.map(el => {
            return (
                <div
                    className={
                        valueSelect === el.value ? s.item && s.selected : s.item}
                    key={el.value}
                    onClick={() => {
                        setCollapsed(!collapsed)
                        setValueSelect(el.value)
                    }}
                    onMouseEnter={() => enteredMouse(el.value)}
                >
                    {el.title}
                </div>)
        })
    }, [valueSelect])

    const showH3title = (valueSelect: number) => {
        console.log('rendered Title h3')
        const showText = props.titleOptions.filter(el => el.value === valueSelect)
        return showText[0].title
    }

 let showH3= useMemo(
     ()=> {
         return showH3title(valueSelect)
     }, [valueSelect]
 )

       console.log(valueSelect)
    return (
        <Paper elevation={3} style={{height: '200px'}}>
            <div>
            <button onClick={()=>setJustCounter(justCounter+1)}>+1</button>
                {justCounter}
            </div>
            <h3 onClick={() => setCollapsed(!collapsed)}>{showH3}</h3>
            <div>
                {collapsed && mappedTitles}
            </div>
        </Paper>
    )
};

export default InputSelect;