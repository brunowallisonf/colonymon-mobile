import React from "react"
import { View, Text, } from "./styles"
import { parse, parseISO, format } from "date-fns"
export default function ({ item }) {
    return <View>
        <Text>ID: {item.id}</Text>
        <Text>Data da inspeção: {format(parseISO(item.inspectionDate), "dd/MM/yyyy")}</Text>
        <Text>ID Apiário: {item.apiaryId}</Text>
        <Text>ID do Enxame: {item.hiveId}</Text>
        <Text>Observador: {item.observer}</Text>
        <Text>Frames na caixa 1: {item.framesNumberBox1}</Text>
        <Text>Frames na caixa 1: {item.framesNumberBox2}</Text>
    </View>
}