import { StyleSheet, Text, View } from "react-native";
import Title from "../components/shared/Title";

export default function GameScreen({ changeState, number }) {
  return (
    <View style={styles.gameContainer}>
      <Title>Oponent's Guess</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
    marginVertical: 25,
  },
});
