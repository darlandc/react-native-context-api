import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
 
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  function handleLogin() {
    signIn(mail, password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <TextInput
        style={styles.input}
        value={mail}
        onChangeText={(text) => setMail(text)}
        placeholder="Your mail"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Your password"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 14,
    fontSize: 20,
  },
  input: {
    width: "90%",
    height: 45,
    backgroundColor: "#A7A7A7",
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button: {
    width: "90%",
    height: 45,
    backgroundColor: "#B0060E",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
});
