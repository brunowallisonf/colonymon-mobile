import React from "react";
import { StepButton, StepButtonLabel } from "./styles"


export default function ({ value, ...props }) {
    return (<StepButton {...props}><StepButtonLabel>{value}</StepButtonLabel></StepButton>)
}