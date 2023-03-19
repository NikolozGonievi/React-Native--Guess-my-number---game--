import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/constants/colors";

export default function NumberContainer({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    marginVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
