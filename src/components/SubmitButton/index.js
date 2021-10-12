import React from "react";
import { SubmitButton, SubmitButtonLabel } from "./styles"


export default function (props) {
    return (<SubmitButton {...props}><SubmitButtonLabel>{props.value}</SubmitButtonLabel></SubmitButton>)
}