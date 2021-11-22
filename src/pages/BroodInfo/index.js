
import React from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native"

import { useState } from 'react'
import { Input } from '../../components/Input/styles'
import LabeledNumberInput from '../../components/LabeledNumberInput'
import PageTitle from '../../components/PageTitle'
import StepButton from '../../components/StepButton'


export default function BroodInfo({ navigation, }) {
    const [inspectionDate, setInspectionDate] = useState("")
    const [apiaryId, setApiaryId] = useState("")
    const [hiveId, setHiveId] = useState("")
    const [observer, setObserver] = useState("")
    const [recorder, setRecorder] = useState("")
    const [nframesBox1, setNFramesBox1] = useState("0")
    const [nframesBox2, setNFramesBox2] = useState("0")
    const handleDateChange = (value) => {
        const newDate = value.replace(/[^0-9|\/]/, "")
            .slice(0, 10)
            .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
        setInspectionDate(newDate)
    }
    const handleContinueButton = () => {
        const [day, month, year] = inspectionDate.split("/");
        navigation.navigate("inspectionItem-0", {
            inspectionDate: new Date(Number(year), Number(month) - 1, Number(day)).toString(), apiaryId, hiveId,
            observer, recorderId: recorder,
            framesNumberBox1: Number(nframesBox1),
            framesNumberBox2: Number(nframesBox2)
        })
    }
    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>

                <PageTitle value="Informações Gerais"></PageTitle>
                <Input placeholder="Data da inspeção" placeholderTextColor="#000000" onChangeText={handleDateChange} value={inspectionDate}></Input>
                <Input placeholder="Id do Apiário" placeholderTextColor="#000000" place onChangeText={setApiaryId} value={apiaryId}></Input>
                <Input placeholder="Id da colméia" placeholderTextColor="#000000" place onChangeText={setHiveId} value={hiveId}></Input>
                <Input placeholder="Obsevador" placeholderTextColor="#000000" place onChangeText={setObserver} value={observer}></Input>
                <Input placeholder="Registrador" placeholderTextColor="#000000" place onChangeText={setRecorder} value={recorder}></Input>
                <LabeledNumberInput labelValue={"Numero de frames na caixa de enxames 1"} keyboardType="numeric" onChangeText={setNFramesBox1} value={nframesBox1}></LabeledNumberInput>
                <LabeledNumberInput labelValue={"Numero de frames na caixa de enxames 2"} keyboardType="numeric" onChangeText={setNFramesBox2} value={nframesBox2}></LabeledNumberInput>

                <View style={styles.footerControls}><StepButton value="Continuar" onPress={handleContinueButton}></StepButton></View>

            </View >
        </ScrollView >)

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