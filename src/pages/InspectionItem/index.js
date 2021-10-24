import { Container, ScrollView } from "./styles"

import React from "react"
import LabeledCheckbox from "../../components/LabeledCheckbox"
import { Label } from "./styles"

import TextArea from "../../components/TextArea"
import StepButton from "../../components/StepButton"
import { Alert } from "react-native"
export default function (props) {
    const handleStepButton = () => {
        if (props.isLastItem) {
            Alert.alert(
                '',
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
                <LabeledCheckbox></LabeledCheckbox>
                <TextArea placeholder="Observações" placeholderTextColor="#000000"></TextArea>
                <StepButton value={props.isLastItem ? "Finalizar inspeção" : "Próximo item"} onPress={handleStepButton}></StepButton>
            </Container >
        </ScrollView>)
}