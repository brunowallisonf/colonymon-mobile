import React from "react"
import { Input } from "../Input/styles"
import { TextLabel, LabeledInputView } from "./styles"


export default function LabeledInput(props) {

    return (<LabeledInputView>
        <TextLabel>{props.labelValue}</TextLabel>
        <Input {...props} ></Input>
    </LabeledInputView>)
}