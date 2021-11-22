import React from "react"
import { TouchableOpacity, Text } from "./styles"
export default function (props) {
    return <TouchableOpacity {...props}><Text>{props.value}</Text></TouchableOpacity>
}