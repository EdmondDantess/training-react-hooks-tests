import React, {useEffect} from 'react';
import style from './Clock.module.css';


const digitsString = (num: number) => num < 10 ? '0' + num : num

export type DigitalClockPropsType = {
    date: Date
    setDate: (Date: Date) => void
}


const DigitalClock: React.FC<DigitalClockPropsType> = ({date, setDate}) => {

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(id)
        }

    }, [])

    return (
        <div className={style.digitalClock}>
            <span>{digitsString(date.getHours())}</span>
            :
            <span>{digitsString(date.getMinutes())}</span>
            :
            <span>{digitsString(date.getSeconds())}</span>
        </div>
    );
};

export default DigitalClock;