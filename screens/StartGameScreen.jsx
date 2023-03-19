import { View, Text, StyleSheet } from "react-native";
import Title from "../components/shared/Title";
import InputNumber from "../components/start-screen/InputNumber";
import Colors from "../utils/constants/colors.js";

export default function StartGameScreen({ changeState }) {
  function handleStartGame(enteredNumber) {
    changeState("game", enteredNumber);
  }

  return (
    <View style={styles.startScreenWrapper}>
      <Title style={styles.titleContainer}>Guess My Number</Title>

      <InputNumber startGame={handleStartGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  startScreenWrapper: {
    flex: 1,
    paddingTop: 50,
    width: "100%",
  },

  titleContainer: {
    padding: 10,
    marginVertical: 40,
    marginHorizontal: 80,
    borderWidth: 2,
    // borderColor: Colors.accent500,
    // color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
