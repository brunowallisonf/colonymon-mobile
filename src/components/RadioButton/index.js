import React, { useState } from "react"
import { RadioButton, RadioCheckMarker, View, RadioLabel } from "./styles";

export default function (props) {


    return <View><RadioButton{...props}>{props.checked ? <RadioCheckMarker></RadioCheckMarker> : null}</RadioButton><RadioLabel>{props.label}</RadioLabel></View>
}