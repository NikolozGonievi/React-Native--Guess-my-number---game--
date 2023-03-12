import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        imageStyle={styles.backgroundImage}
      >
        {gameState === "start" && (
          <StartGameScreen changeState={stageChangeHandler} />
        )}
        {gameState === "game" && (
          <GameScreen changeState={stageChangeHandler} number={enteredNumber} />
        )}
        {gameState === "result" && (
          <GameOverScreen changeState={stageChangeHandler} />
        )}
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
