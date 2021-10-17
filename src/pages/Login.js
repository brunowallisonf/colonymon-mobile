import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from "react-native";
import Input from "../components/Input"
const logo2 = require("../assets/logo2.png");
import api from "../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage";
import LabeledButton from "../components/LabeledButton";
import SubmitButton from "../components/SubmitButton";
import Container from "../components/Container";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  useEffect(() => {
    const verifyToken = async () => {
      const token = await AsyncStorage.getItem("@token_key")
      if (token) {
        navigation.navigate("BroodInfo")
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
      navigation.navigate("BroodInfo")
    }
  }
  return (

    <ScrollView>
      <Container>
        <Image style={styles.image} source={logo2} />
        <StatusBar backgroundColor="#FFD700"></StatusBar>
        <Input placeholder="Email" keyboardType="email-address" placeholderTextColor="#000000" autoCapitalize='none' onChangeText={(value) => setEmail(value)}></Input>
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
