import React from "react"
import PageTitle from "../../components/PageTitle"
import Input from "../../components/Input"
import SubmitButton from "../../components/SubmitButton"

import { useState } from "react"
import api from "../../services/api"
import Container from "../../components/Container"


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
        <Container>

            <PageTitle value={"Cadastro"}></PageTitle>
            <Input placeholder="Nome" placeholderTextColor="#000000" onChangeText={(value) => setName(value)}></Input>
            <Input placeholder="Email" placeholderTextColor="#000000" onChangeText={(value) => setEmail(value)}></Input>
            <Input placeholder="Senha" placeholderTextColor="#000000" secureTextEntry={true} onChangeText={(value) => setPassword(value)}></Input>
            <SubmitButton value={"Cadastrar"} onPress={() => handleSumbit()}></SubmitButton>

        </Container >
    )

}


