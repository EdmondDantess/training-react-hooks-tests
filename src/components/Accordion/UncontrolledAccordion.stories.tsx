import {useState,} from "@storybook/addons";
import React from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: "Accordion stories",
    component: UncontrolledAccordion
}

export const UncontrolledAccordionStories = () => <UncontrolledAccordion/>



