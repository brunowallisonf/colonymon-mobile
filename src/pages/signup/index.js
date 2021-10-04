import React from "react"
import { View as InputContainer } from "./styles"
import PageTitle from "../../components/PageTitle"
import Input from "../../components/Input"
import SubmitButton from "../../components/SubmitButton"
import { View, StyleSheet } from "react-native"


export default function Signup() {
    return (
        <View style={styles.container}>
            <InputContainer>
                <PageTitle value={"Cadastro"}></PageTitle>

                <Input placeholder="Nome" placeholderTextColor="#000000"></Input>
                <Input placeholder="Email" placeholderTextColor="#000000"></Input>
                <Input placeholder="Password" placeholderTextColor="#000000" secureTextEntry={true}></Input>
                <SubmitButton value={"Cadastrar"}></SubmitButton>
            </InputContainer>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
    }
})

