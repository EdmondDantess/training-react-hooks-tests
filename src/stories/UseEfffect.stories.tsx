import React, {ChangeEvent, HTMLInputTypeAttribute, useEffect, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'UseEffect demka',
}


export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    console.log('Componenta')
    console.log(counter)

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        console.log('I render every time')
    })
    useEffect(() => {
        console.log('I render once')
        setInterval(() => {
            setCounter((start) => start - 1)
        }, 1000)
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    useEffect(() => {
        console.log('I render when counter changed')
    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <div>{time.toLocaleTimeString()}</div>
    </>
}