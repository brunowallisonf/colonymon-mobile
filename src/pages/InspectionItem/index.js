import Container from "../../components/Container"

import React from "react"
import LabeledCheckbox from "../../components/LabeledCheckbox"
import { Text } from "react-native"
import { Label } from "./styles"
export default function ({ answer }) {
    return (<Container>
        <Label>{answer || "Todas as fases do enxame"}</Label>
        <LabeledCheckbox></LabeledCheckbox>
    </Container>)
}