
import React from "react"
import { View } from "react-native";
import Checkbox from "react-native-bouncy-checkbox"
import RadioButton from "../RadioButton";


import { Container, Label } from "./styles";
export default function () {

    return (<Container>
        <Label>Satisfaz as condições?</Label>
        <Checkbox unfillColor="#FFFFFF" fillColor="red" size={40}></Checkbox>
        <RadioButton></RadioButton>
    </Container>)
}