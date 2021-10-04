import React from "react";
import { StepButton, StepButtonLabel } from "./styles"


export default function ({ value }) {
    return (<StepButton><StepButtonLabel>{value}</StepButtonLabel></StepButton>)
}