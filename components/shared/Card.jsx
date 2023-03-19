import { StyleSheet, View } from "react-native";
import Colors from "../../utils/constants/colors";

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
    card: {
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
