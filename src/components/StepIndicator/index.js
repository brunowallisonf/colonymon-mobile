import React, { userEffect } from "react";
import { View } from "../Container/styles";
import { StepItem } from "../StepItem"
export default function ({ actualStep, numberOfSteps }) {
    return <View>{Array(5).keys().map(value, index => (<StepItem label={index + 1}></StepItem>))}</View>
}