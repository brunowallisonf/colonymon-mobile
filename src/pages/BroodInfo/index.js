
import React from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native"
import DateTimePicker from "react-native-datepicker"
import { useState } from 'react/cjs/react.development'
import { Input } from '../../components/Input/styles'
import LabeledNumberInput from '../../components/LabeledNumberInput'
import StepButton from '../../components/StepButton'

export default function BroodInfo({ navigation }) {
    const [inspectionDate, setInspectionDate] = useState("")

    const handleDateChange = (value) => {
        const newDate = value.replace(/[^0-9|\/]/, "").slice(0, 10).replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
        setInspectionDate(newDate)

    }
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.title}>Informacões gerais</Text>
                <Input placeholder="Data da inspeção" placeholderTextColor="#000000" onChangeText={handleDateChange} value={inspectionDate}></Input>
                <Input placeholder="Id do Apiário" placeholderTextColor="#000000" place></Input>
                <Input placeholder="Id da colméia" placeholderTextColor="#000000" place></Input>
                <Input placeholder="Obsevador" placeholderTextColor="#000000" place></Input>
                <Input placeholder="Registrador" placeholderTextColor="#000000" place></Input>
                <LabeledNumberInput labelValue={"Numero de frames na caixa de enxames 1"} keyboardType="numeric"></LabeledNumberInput>
                <LabeledNumberInput labelValue={"Numero de frames na caixa de enxames 2"} keyboardType="numeric"></LabeledNumberInput>
                <View style={styles.footerControls}><StepButton value="Continuar" onPress={() => navigation.navigate("InspectionItem")}></StepButton></View>

            </View >
        </ScrollView>)

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
        alignItems: "center",

    },
    title: {
        fontSize: 25
    },
    fieldLabel: {
        fontSize: 20,
        fontWeight: "bold"
    },
    fieldContainer: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",

    },
    field: {
        width: "40%",
        height: "50%"
    },
    textInput: {
        height: "100%",
        flex: 1,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        fontSize: 25
    },
    footerControls: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 80
    },
    scroll: {
        flex: 1,
        backgroundColor: "#FFD700"
    }

})