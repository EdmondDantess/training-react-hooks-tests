import { useState } from "@storybook/addons";

import React from "react";
import { OnOff } from "./OnOff";

export default {
    title: "OnOff stories",
    component: OnOff,
}

const OnOffMem=React.memo(OnOff)

export const SomeRating = () => {
    const [tumb, setTumb] = useState<boolean>(false);
return <OnOffMem tumb={tumb} setTumb={setTumb}/>
}