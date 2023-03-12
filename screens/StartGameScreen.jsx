import { View, Text, StyleSheet } from "react-native";
import InputNumber from "../components/start-screen/InputNumber";

export default function StartGameScreen({ changeState }) {
  function handleStartGame(enteredNumber) {
    changeState("game", enteredNumber);
  }

  return (
    <View style={styles.startScreenWrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Guess My Number</Text>
      </View>
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
    borderColor: "black",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
