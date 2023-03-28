import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/shared/Card";
import InstructionText from "../components/shared/InstructionText";
import PrimaryButton from "../components/shared/PrimaryButton";
import Title from "../components/shared/Title";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ changeState, userNumber, getRoundsNumber }) {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      getRoundsNumber(guessRounds.length);
      changeState("result");
    }
  }, [currentGuess, userNumber, changeState]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessRounds) => [newRNDNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.gameContainer}>
      <Title style={styles.w_90}>Oponent's Guess</Title>

      <NumberContainer style={styles.w_90}>{currentGuess}</NumberContainer>
      <Card style={[styles.card, styles.w_90]}>
        <View>
          <InstructionText>Higher or lower ?</InstructionText>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={[styles.w_90, styles.flatListContainer]}>
        {/* {guessRounds.map((guessRound, index) => (
          <Text key={index}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
    marginVertical: 20,
    alignItems: "center",
  },
  buttonContainer: {
    height: 60,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
  },
  w_90: {
    width: "90%",
  },
  card: {
    paddingTop: 40,
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  },
});
