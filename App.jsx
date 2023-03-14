import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/constants/colors";

export default function App() {
  const [gameState, setGameState] = useState("start");
  const [enteredNumber, setEnteredNumber] = useState(null);

  function stageChangeHandler(nextState, number) {
    setGameState(nextState);
    if (number) {
      setEnteredNumber(number);
    }
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {gameState === "start" && (
            <StartGameScreen changeState={stageChangeHandler} />
          )}
          {gameState === "game" && (
            <GameScreen
              changeState={stageChangeHandler}
              userNumber={enteredNumber}
            />
          )}
          {gameState === "result" && (
            <GameOverScreen changeState={stageChangeHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.45,
  },
});
