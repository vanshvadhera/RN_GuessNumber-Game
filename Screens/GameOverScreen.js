import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../Components/Title";
import Colors from "../Constants/Colors";
import PrimaryButton from "../Components/PrimaryButton";

const GameOverScreen = ({newGameHandler}) => {
  return (
    <View style={styles.outerContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/images.jpeg")}
        />
      </View>
      <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
        Your phone guessed your number!
      </Text>
      <View style={{ marginTop: 20}}>
        <PrimaryButton onPress={newGameHandler}>Play Again</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
