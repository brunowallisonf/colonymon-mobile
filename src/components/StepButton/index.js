import React from "react";
import { StepButton, StepButtonLabel } from "./styles"
import { Text } from "react-native"

export default function ({ value }) {
    return (<StepButton><StepButtonLabel>{value}</StepButtonLabel></StepButton>)
}