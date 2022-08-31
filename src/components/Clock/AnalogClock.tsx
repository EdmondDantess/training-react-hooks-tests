import React, {useEffect, useState} from 'react';
import style from './Clock.module.css';


export type AnalogClockPropsType = {
    date: Date
    setDate: (Date: Date) => void
}


export const AnalogClock: React.FC<AnalogClockPropsType> = ({date, setDate}) => {

    const deg = 6;

    let [hrStyle, setHrStyle] = useState('')
    let [mnStyle, setMnStyle] = useState('')
    let [scStyle, setScStyle] = useState('')


    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
            let hh = date.getHours() * 30;
            let mm = date.getMinutes() * deg;
            let ss = date.getSeconds() * deg;

            setHrStyle(`rotateZ(${(hh) + (mm / 12)}deg)`)
            setMnStyle(`rotateZ(${mm}deg)`)
            setScStyle(`rotateZ(${ss}deg)`)

        }, 1000)
        return () => clearInterval(id)
    }, [hrStyle, mnStyle, scStyle])


    return (
        <div className={style.clock}>
            <div className={style.hour}>
                <div style={{transform: hrStyle}} className={style.hr}></div>
            </div>
            <div className={style.min}>
                <div style={{transform: mnStyle}} className={style.mn}></div>
            </div>
            <div className={style.sec}>
                <div style={{transform: `${scStyle}`}} className={style.sc}></div>
            </div>
        </div>
    );
};
