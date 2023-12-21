import {
  View,
  Text,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from "react-native";
import Title from "../Components/Title";
import Colors from "../Constants/Colors";
import { useEffect, useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import Card from "../Components/UI/Card";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initalGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess == userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  let content = (
    <>
      <View style={styles.guessNumberConatiner}>
        <Text style={styles.guessNumberText}>{currentGuess}</Text>
      </View>
      {/* <View> */}
      {/* <View> */}
      <Card>
        <Text style={styles.instructionText}>Higher or Lower ?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500 && width < 800) {
    content = (
      <>
        <View style = {styles.buttonsContainerWidth}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.guessNumberConatiner}>
            <Text style={styles.guessNumberText}>{currentGuess}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  console.log(width,height);

  return (
    <View style={styles.outerGameScreeContainer}>
      <Title>Opponent's Guess</Title>
      {content}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
  },
  outerGameScreeContainer: {
    flex: 1,
    padding: 12,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  buttonsContainerWidth:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.accent500,
    marginBottom: 12,
  },
  guessNumberConatiner: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  guessNumberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.accent500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    fontSize: 18,
    color: Colors.accent500,
    textAlign: "center",
    marginBottom: 15,
  },
});
