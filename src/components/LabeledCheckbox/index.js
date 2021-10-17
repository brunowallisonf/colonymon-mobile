
import React from "react"
import Checkbox from "react-native-bouncy-checkbox"
import { Text, View } from "react-native";
import { Container, Label } from "./styles";
export default function () {
    return (<Container>
        <Label>Satisfaz as condições?</Label>
        <Checkbox unfillColor="#FFFFFF" fillColor="red" size={40}></Checkbox>
    </Container>)
}