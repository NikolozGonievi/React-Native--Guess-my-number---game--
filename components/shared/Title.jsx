import { Text, StyleSheet } from "react-native";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}> {children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "white",
  },
});
