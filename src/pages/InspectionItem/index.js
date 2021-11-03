import { Container, ScrollView } from "./styles"

import React, { useState } from "react"

import { Label } from "./styles"
import RadioGroup from "../../components/RadioGroup"
import TextArea from "../../components/TextArea"
import StepButton from "../../components/StepButton"
import { Alert } from "react-native"
import RadioButton from "../../components/RadioButton"
import StepIndicator from '../../components/StepIndicator'
export default function (props) {
    const [metConditions, setMetCondition] = useState("yes")
    const handleStepButton = () => {
        if (props.isLastItem) {
            Alert.alert(
                'Confirmação',
                'Deseja salvar a inspeção?',
                [
                    { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'Sim', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        } else {
            props.navigation.navigate(`inspectionItem-${props.itemIndex + 1}`)
        }
    }

    return (
        <ScrollView>
            <Container>
                <Label>{props.question}</Label>

                <RadioGroup><RadioButton checked={metConditions === "yes"} label="Sim"
                    onPress={() => setMetCondition("yes")}></RadioButton><RadioButton checked={metConditions === "no"} label="Não" onPress={() => setMetCondition("no")}>
                    </RadioButton><RadioButton checked={metConditions === "non-applicable"} label="N/A" onPress={() => setMetCondition("non-applicable")}>
                    </RadioButton></RadioGroup>
                <TextArea placeholder="Observações" placeholderTextColor="#000000"></TextArea>
                <StepButton value={props.isLastItem ? "Finalizar inspeção" : "Próximo item"} onPress={handleStepButton}></StepButton>
            </Container >
        </ScrollView >)
}