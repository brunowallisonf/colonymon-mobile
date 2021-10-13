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
const logo2 = require("../assets/logo2.png");
import api from "../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage";
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
      <View style={styles.container}>
        <Image style={styles.image} source={logo2} />
        <StatusBar backgroundColor="#FFD700"></StatusBar>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000000"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#000000"
            secureTextEntry={true}
            onChangeText={(senha) => setSenha(senha)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.esqueci_button}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.new_button} >Inscreva-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD700",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  image: {
    marginBottom: 5,
  },

  inputView: {
    backgroundColor: "#FFF8DC",
    borderRadius: 15,
    width: "70%",
    height: 35,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#FFF8DC",
  },
});
