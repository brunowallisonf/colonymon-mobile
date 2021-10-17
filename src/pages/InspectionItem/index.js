import Container from "../../components/Container"

import React from "react"
import LabeledCheckbox from "../../components/LabeledCheckbox"
import { Label } from "./styles"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
export default function ({ answer }) {
    return (<Container>
        <Label>{answer || "Todas as fases do enxame"}</Label>
        <LabeledCheckbox></LabeledCheckbox>
        <TextArea placeholder="Observações" placeholderTextColor="#000000"></TextArea>
    </Container>)
}