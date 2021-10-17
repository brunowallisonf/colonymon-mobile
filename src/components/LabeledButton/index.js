import React from "react"

import { Text, TouchableOpacity } from "./styles"
export default function LabeledButton({ value, ...props }) {
    return (<TouchableOpacity><Text {...props}>{value}</Text></TouchableOpacity>)
}