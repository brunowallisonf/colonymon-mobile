import React, { userEffect } from "react";
import { StepGroup } from "./styles";
import StepItem from "../StepItem"

export default function ({ actualStep, numberOfSteps }) {

    return <StepGroup>{[...Array(5).keys()].map((val, idx) => <StepItem label={idx + 1} selected={idx === actualStep}></StepItem>)}</StepGroup>
}