import React from "react";
import { StepItem, Text } from "./styles";

export default function ({ label, selected }) {

    return <StepItem selected={selected}><Text selected={selected}>{label}</Text></StepItem>
}