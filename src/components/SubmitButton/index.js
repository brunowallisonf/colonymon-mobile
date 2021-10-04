import React from "react";
import { SubmitButton, SubmitButtonLabel } from "./styles"


export default function ({ value }) {
    return (<SubmitButton><SubmitButtonLabel>{value}</SubmitButtonLabel></SubmitButton>)
}