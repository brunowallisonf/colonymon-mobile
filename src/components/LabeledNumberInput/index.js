import React, { useState } from "react"
import { TextLabel, TextField, LabeledInputView } from "./styles"


export default function LabeledInput({ labelValue, keyboardType }) {

    return (<LabeledInputView>
        <TextLabel >{labelValue}</TextLabel>
        <TextField keyboardType={keyboardType}></TextField>
    </LabeledInputView>)
}