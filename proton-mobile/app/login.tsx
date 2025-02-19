import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function LoginScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Email:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: theme.primary,
          color: theme.text,
          padding: 10,
          marginBottom: 10,
        }}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{ color: theme.text }}>Senha:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: theme.primary,
          color: theme.text,
          padding: 10,
          marginBottom: 10,
        }}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button color={theme.primary} title="Entrar" onPress={() => router.push("/home")} />
      <Button color={theme.secondary} title="Cadastrar" onPress={() => router.push("/register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
