import React, { useState} from 'react';
import style from './Clock.module.css'
import DigitalClock from './DigitalClock';
import {AnalogClock} from './AnalogClock';

export type ClockPropsType = {}


export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState<Date>(new Date())
    const [analogMode, setAnalogMode] = useState<boolean>(false)


    return (
        <div className={style.clockBody}>
            {analogMode ?    <AnalogClock date={date} setDate={setDate}/> :  <DigitalClock date={date} setDate={setDate}/>  }
            <button className={style.ButtonClock} onClick={() => setAnalogMode(!analogMode)}>Change Mode</button>

        </div>
    );
};

