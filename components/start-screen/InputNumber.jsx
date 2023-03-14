import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Colors from "../../utils/constants/colors";
import PrimaryButton from "../shared/PrimaryButton";

export default function InputNumber({ startGame }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function resetHandler() {
    setEnteredNumber("");
  }

  function confirmHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: () => resetHandler() }]
      );
    } else {
      startGame(enteredNumber);
    }
  }

  function textChangeHandler(enteredNumber) {
    // if (enteredNumber === "") {
    //   setEnteredNumber("");
    // } else if (enteredNumber > 0) {
    setEnteredNumber(enteredNumber);
    // }
  }

  return (
    <View style={styles.numberInputContrainer}>
      <Text style={styles.numberInputTitle}>Enter a Number</Text>
      <View>
        <TextInput
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.numberInput}
          onChangeText={textChangeHandler}
          maxLength={2}
          value={enteredNumber}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  numberInputContrainer: {
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
  numberInputTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    fontSize: 32,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
});
