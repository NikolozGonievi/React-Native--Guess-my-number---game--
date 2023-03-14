import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/shared/PrimaryButton";
import Title from "../components/shared/Title";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ changeState, userNumber }) {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      changeState("result");
    }
  }, [currentGuess, userNumber, changeState]);

  function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie to the oponent!",
        "You know that this is wrong...",
        [{ text: "I'm sorry", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      //greater
      minBoundary = currentGuess;
    }
    const newRNDNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    if (newRNDNumber === userNumber) {
      Alert.alert("Congrats!", "", [{ text: "Wuhuu", style: "default" }]);
    }
    setCurrentGuess(newRNDNumber);
  }

  return (
    <View style={styles.gameContainer}>
      <Title>Oponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Title>Higher or lower ?</Title>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
    marginVertical: 25,
  },
  buttonContainer: {
    // height: 60,
    marginVertical: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
