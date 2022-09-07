import React, {ChangeEvent, HTMLInputTypeAttribute, useEffect, useRef, useState} from 'react';


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
            setCounter((start) => start + 1)
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

export const KeyTrackerExapmle = () => {
    const [text, setText] = useState('')
    console.log('Component KeyTracker Rendered ' + text)
    useEffect(() => {
        const handlerPress = (e: KeyboardEvent) => {
            console.log(e.key)
              setText( text + e.key)
        }
        window.addEventListener('keypress', handlerPress)
        return () => {
            window.removeEventListener('keypress', handlerPress)
        }
    }, [text])
    return <div>Pressed keys: {text}</div>
}