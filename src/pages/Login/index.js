import React, { useEffect, useState } from "react";
import {
  StyleSheet,

  Image,

  StatusBar,
  ScrollView
} from "react-native";
import Input from "../../components/Input"
const logo2 = require("../../assets/logo2.png");
import api from "../../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage";
import LabeledButton from "../../components/LabeledButton";
import SubmitButton from "../../components/SubmitButton";
import Container from "../../components/Container";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  useEffect(() => {
    const verifyToken = async () => {

      const token = await AsyncStorage.getItem("@token_key")
      if (!token) {
        return;
      }
      try {
        const { status } = await api.get("/sessions/verify", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (status === 200) {
          navigation.navigate("MyInspections")
        }
      } catch (error) {
        await AsyncStorage.removeItem("@token_key")

      }

    }
    verifyToken()

  }

    , [])
  const handleLogin = async () => {
    let data = {}
    try {
      data = await api.post("/sessions", { email, password: senha })
    } catch (error) {
      alert("Usuario ou senha inválidos")
    }
    if (data.status === 200) {
      await AsyncStorage.setItem("@token_key", data.data.token);
      navigation.navigate("MyInspections")
    }
  }
  return (

    <ScrollView>
      <Container>
        <Image style={styles.image} source={logo2} />
        <StatusBar backgroundColor="#FFD700"></StatusBar>
        <Input placeholder="Email" placeholderTextColor="#000000" autoCapitalize='none' onChangeText={(value) => setEmail(value)}></Input>
        <Input placeholder="Senha" placeholderTextColor="#000000" secureTextEntry={true} onChangeText={(value) => setPassword(value)}></Input>

        <LabeledButton value="Esqueceu a senha"></LabeledButton>

        <LabeledButton value="Cadastre-se" onPress={() => navigation.navigate("Signup")}>
        </LabeledButton>

        <SubmitButton value="Login" onPress={handleLogin}>

        </SubmitButton>
      </Container>
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  image: {
    marginBottom: 5,
  },

});
