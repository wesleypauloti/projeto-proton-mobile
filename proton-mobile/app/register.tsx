import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function RegisterScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      borderColor: theme.primary,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 20,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginVertical: 10,
      borderRadius: 8,
      alignItems: "center",
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Nome:</Text>
      <TextInput
      style={[styles.button, { borderColor: theme.primary }]}
        value={name}
        onChangeText={setName}
      />
      <Text style={[styles.text, { color: theme.text }]}>Email:</Text>
      <TextInput
      style={[styles.button, { borderColor: theme.primary }]}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={[styles.text, { color: theme.text }]}>Senha:</Text>
      <TextInput
      style={[styles.button, { borderColor: theme.primary }]}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => router.replace("/home")}
      >
        <Text style={[styles.text, { color: theme.secondary }]}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => router.back()}
      >
        <Text style={[styles.text, { color: theme.secondary }]}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


