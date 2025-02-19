import { useTheme } from "../context/ThemeContext";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      color: theme.text,
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
      <Text style={styles.text}>Bem-vindo!</Text>
      <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace("/login")}
            >
              <Text style={[styles.text, { color: theme.secondary }]}>Voltar</Text>
            </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
