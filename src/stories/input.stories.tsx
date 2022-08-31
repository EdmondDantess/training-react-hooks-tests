import React, {ChangeEvent, HTMLInputTypeAttribute, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: "inputTitle",
}

export const UncontroledInput = () => <input/>

export const TrackedUncontrollValueInput = () => {
    const [value, setValue] = useState("")
    const onChangedInput = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)}

        return <><input onChange={onChangedInput}/> --{value}-- </>
    }

export const GetValueInputFromUncontrolledButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const saveInputValue = () => {
        let el = inputRef.current as HTMLInputElement
        console.log(inputRef)
        console.log(inputRef.current)
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={saveInputValue}>Save</button>
        --{value}--
    </>
}

export const ControlledInputFixedVAlue = () => < input value={"heyheyhyeh"} />

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    return <input value={parentValue} onChange={action('key pressed')} />
}

// export const ControlledCheckBox=()=> {
//
// }
// export const ControlledSelect=()=> {
//
// }