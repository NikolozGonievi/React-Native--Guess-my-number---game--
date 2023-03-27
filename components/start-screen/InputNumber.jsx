import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Colors from "../../utils/constants/colors";
import Card from "../shared/Card";
import InstructionText from "../shared/InstructionText";
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
    setEnteredNumber(enteredNumber);
  }

  return (
    <Card>
      <InstructionText>Enter a Number</InstructionText>
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
        <PrimaryButton onPress={resetHandler} style={{ flex: 1 }}>
          Reset
        </PrimaryButton>
        <PrimaryButton onPress={confirmHandler} style={{ flex: 1 }}>
          Confirm
        </PrimaryButton>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
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
