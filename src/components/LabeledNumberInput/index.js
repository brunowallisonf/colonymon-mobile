import React, { useState } from "react"
import { Input } from "../Input/styles"
import { TextLabel, LabeledInputView } from "./styles"


export default function LabeledInput({ labelValue, keyboardType }) {

    return (<LabeledInputView>
        <TextLabel >{labelValue}</TextLabel>
        <Input keyboardType={keyboardType}></Input>
    </LabeledInputView>)
}