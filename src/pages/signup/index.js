import React from "react"
import { View as InputContainer } from "./styles"
import PageTitle from "../../components/PageTitle"
import Input from "../../components/Input"
import SubmitButton from "../../components/SubmitButton"
import { View, StyleSheet } from "react-native"
import { useState } from "react/cjs/react.development"
import api from "../../services/api"


export default function Signup({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSumbit = async () => {
        try {
            const result = await api.post("/users", {
                fullname: name,
                email: email,
                password: password,
            })
            if (result.status === 200) {
                alert("Usuário criado com sucesso, por favor, faça seu login");
                navigation.navigate("Login");
                return
            }
        } catch (error) {
            alert("O usuário já existe")
        }
    }
    return (
        <View style={styles.container}>
            <InputContainer>
                <PageTitle value={"Cadastro"}></PageTitle>

                <Input placeholder="Nome" placeholderTextColor="#000000" onChangeText={(value) => setName(value)}></Input>
                <Input placeholder="Email" placeholderTextColor="#000000" onChangeText={(value) => setEmail(value)}></Input>
                <Input placeholder="Senha" placeholderTextColor="#000000" secureTextEntry={true} onChangeText={(value) => setPassword(value)}></Input>
                <SubmitButton value={"Cadastrar"} onPress={handleSumbit}></SubmitButton>
            </InputContainer>
        </View >
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
        padding: 15
    }
})

