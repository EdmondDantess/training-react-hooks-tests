import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {Clock} from './components/Clock/Clock';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [tumb, setTumb] = useState<boolean>(false);
    console.log('App rendering');
    const messageConsole = (value: any) => {
        console.log(`user ${value} hello`)
    }

    return (
        <div className="App">
            {/*  <PageTitle title={'This is App component'}/>
             <PageTitle title={'My friends'}/>
            <Rating value={3}/> */}
            <UncontrolledAccordion/>

            <Accordion
                titleValue={'>>>>>>Controlled accordion<<<<<<<'}
                valueCollapsed={accordionCollapsed}
                collapsed={setAccordionCollapsed}
                items={[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"}]}
                onClick={messageConsole}
            />

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledRating/>

            <UncontrolledOnOff/>

            <OnOff tumb={tumb} setTumb={setTumb}/>

            <Clock/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered');
    return <h1>{props.title}</h1>;
}

export default App;
