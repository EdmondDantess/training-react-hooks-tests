import {useState,} from "@storybook/addons";
import React from "react";
import InputSelect from "./InputSelect";

export default {
    title: "InputStories stories",
    component: InputSelect,
}

export const InputStories = () => <InputSelect
    titleOptions={
        [
            {title: 'Moscow', value: 1, population: 10000000},
            {title: 'Kiev', value: 2, population: 1900080},
            {title: 'Minsk', value: 3, population: 1990909},
            {title: 'Warsawa', value: 4, population: 9785063},
            {title: 'Berlin', value: 5, population: 88060554},
            {title: 'Viena', value: 6, population: 7800045}
        ]
    }/>