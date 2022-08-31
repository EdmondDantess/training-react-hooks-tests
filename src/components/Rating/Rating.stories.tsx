import { useState } from "@storybook/addons";
import React from "react";
import { Rating } from "./Rating";
import { RatingValueType } from "./Rating";


export default {
    title: "Rating stories",
    component: Rating,
}

export const SomeRating = () => {
const [value, setValue] = useState<RatingValueType>(2);
return <Rating value={value} onClick={setValue}/>
}