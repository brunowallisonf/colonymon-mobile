
import React from 'react'
import { Text, StyleSheet, View, TextInput } from "react-native"
import DateTimePicker from "react-native-datepicker"
import LabeledNumberInput from '../../components/LabeledNumberInput'
import StepButton from '../../components/StepButton'

export default function BroodInfo() {

    return (<View style={styles.container}>

        <Text style={styles.title}>Informacões gerais</Text>

        <View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Data da inspeção: </Text><DateTimePicker style={styles.field} />
            </View>
            <View style={styles.fieldContainer}>
                <TextInput placeholder="Id do Apiário" style={styles.textInput} placeholderTextColor="#000000" place></TextInput>
            </View>
            <View style={styles.fieldContainer}>
                <TextInput placeholder="Id da colméia" style={styles.textInput} placeholderTextColor="#000000" place></TextInput>
            </View>
            <View style={styles.fieldContainer}>
                <TextInput placeholder="Obsevador" style={styles.textInput} placeholderTextColor="#000000" place></TextInput>
            </View>
            <View style={styles.fieldContainer}>
                <TextInput placeholder="Registrador" style={styles.textInput} placeholderTextColor="#000000" place></TextInput>
            </View>
            <LabeledNumberInput labelValue={"Numero de frames na caixa de enxames 1"} keyboardType="number"></LabeledNumberInput>
            <LabeledNumberInput labelValue={"Numero de frames na caixa de enxames 2"} keyboardType="number"></LabeledNumberInput>

        </View>

        <View style={styles.footerControls}><StepButton value="Continuar"></StepButton></View>

    </View >)


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
        alignItems: "center",
        justifyContent: "center"
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
        marginTop: 10,
    },

    scroll: {
        flex: 1,
        paddingBottom: 100,
    }
})