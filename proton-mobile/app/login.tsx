import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function LoginScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: theme.primary,
      color: theme.text,
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
    },
    text: {
      fontSize: 20,
      color: theme.primary,
    },
    button: {
      backgroundColor: theme.primary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginVertical: 10,
      borderRadius: 10,
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.text}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => router.push("/home")} >
        <Text style={[styles.text, { color: theme.secondary }]}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button}
       onPress={() => router.push("/register")} >
        <Text style={[styles.text, { color: theme.secondary }]}>Cadastrar</Text>
       </TouchableOpacity>
    </View>
  );
}

