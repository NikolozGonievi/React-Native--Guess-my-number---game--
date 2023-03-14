import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/constants/colors";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}> {children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white" /* Colors.accent500 */,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "white" /* Colors.accent500 */,
  },
});
