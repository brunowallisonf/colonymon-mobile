import { Container, ScrollView, SubTextLabel } from "./styles"

import React, { useState } from "react"

import { Label } from "./styles"
import RadioGroup from "../../components/RadioGroup"
import TextArea from "../../components/TextArea"
import StepButton from "../../components/StepButton"
import { Alert } from "react-native"
import RadioButton from "../../components/RadioButton"
import StepIndicator from '../../components/StepIndicator'
import api from "../../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
export default function (props) {
    const [metConditions, setMetCondition] = useState("yes")
    const [observations, setObservations] = useState("")

    const handleStepButton = () => {
        if (props.isLastItem) {
            Alert.alert(
                'Confirmação',
                'Deseja salvar a inspeção?',
                [
                    { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'Sim', onPress: async () => {
                            try {
                                await api.post("/inspections", {
                                    ...props.route.params, items: [...(props.route.params.items || []), {
                                        question: props.question,
                                        observations: observations,
                                        metConditions: metConditions
                                    }]
                                }, {
                                    headers: {
                                        Authorization: `Bearer ${await AsyncStorage.getItem("@token_key")}`
                                    }
                                })
                                props.navigation.navigate("MyInspections")
                            } catch (error) {
                                console.log(error.response)
                            }


                        }
                    },
                ],
                { cancelable: false }
            )
        } else {
            props.navigation.navigate(`inspectionItem-${props.itemIndex + 1}`, {
                ...props.route.params, items: [...(props.route.params.items || []), {
                    question: props.question,
                    observations: observations,
                    metConditions: metConditions
                }]
            })
        }
    }

    return (
        <ScrollView>
            <Container>
                <Label>{props.question}</Label>
                {props.subText && <SubTextLabel>{props.subText}</SubTextLabel>}
                <RadioGroup><RadioButton checked={metConditions === "yes"} label="Sim"
                    onPress={() => setMetCondition("yes")}></RadioButton><RadioButton checked={metConditions === "no"} label="Não" onPress={() => setMetCondition("no")}>
                    </RadioButton><RadioButton checked={metConditions === "non-applicable"} label="N/A" onPress={() => setMetCondition("non-applicable")}>
                    </RadioButton></RadioGroup>
                <TextArea placeholder="Observações" placeholderTextColor="#000000" onChangeText={setObservations} value={observations}></TextArea>
                <StepButton value={props.isLastItem ? "Finalizar inspeção" : "Próximo item"} onPress={handleStepButton}></StepButton>
            </Container >
        </ScrollView >)
}