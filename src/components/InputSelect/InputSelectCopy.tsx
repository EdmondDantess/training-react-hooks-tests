import React, {ChangeEvent, useEffect, useState, MouseEvent} from 'react';
import {dividerClasses, Paper} from "@mui/material";

type titleOptionsType = {
    title: string
    value: number
}

type SelectPropsType = {
    titleOptions: titleOptionsType[]
}

const InputSelect = (props: SelectPropsType) => {
    const [valueSelect, setValueSelect] = useState<number>(2)

    const ChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setValueSelect(+(e.currentTarget.value))
    }

    function textUnderSelect(valueSelect: number) {
        let text = props.titleOptions.filter(el => el.value === valueSelect)
        return text[0].title
    }

    let valueText = textUnderSelect(valueSelect)


    console.log(valueSelect)
    return (
        <Paper
            style={{
                padding: "40px",
            }}>
            <select

                value={valueSelect}
                onChange={ChangeValue}
                onBlur={ChangeValue}

                style={{
                    marginLeft: "30%",
                }}>

                {
                    props.titleOptions.map((el, index) => {
                        return (

                            <option
                           value={el.value}
                                key={index}
                                                   >     {el.title}</option>


                        )
                    })
                }
            </select>
            <span
                style={{
                    color: 'red',
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginLeft: "10px"
                }
                }> {valueText}</span>
        </Paper>
    );
};

export default InputSelect;