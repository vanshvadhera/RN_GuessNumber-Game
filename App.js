import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./Constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  const handlePickedNumber = (pickedNumber) => {
    console.log("PickedNumber", pickedNumber);
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const newGameHandler = () => {
    setGameIsOver(false);
    setUserNumber(null);
  };

  let screen = <StartGameScreen userPickNumber={handlePickedNumber} />;
  if (userNumber) {
    screen = (
      <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
    );
  }
  if (gameIsOver) {
    screen = <GameOverScreen newGameHandler={newGameHandler} />;
  }

  return (
    <>
      <StatusBar style="inverted" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootContainer}
      >
        <ImageBackground
          source={require("./assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={{ opacity: 0.15 }}
        >
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
