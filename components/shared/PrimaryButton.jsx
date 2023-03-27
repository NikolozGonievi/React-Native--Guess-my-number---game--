import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../../utils/constants/colors";

export default function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={onPress}
        style={(pressData) =>
          pressData.pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 35,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
