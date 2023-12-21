import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Title from "../Components/Title";
import Colors from "../Constants/Colors";
import PrimaryButton from "../Components/PrimaryButton";

const GameOverScreen = ({ newGameHandler }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 200;
  }
  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderWidth: 2,
  };
  return (
    <View style={styles.outerContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/images.jpeg")}
        />
      </View>
      <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
        Your phone guessed your number!
      </Text>
      <View style={{ marginTop: 20 }}>
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
    // borderRadius: windowWidth < 400 ? 150 : 200,
    // width: windowWidth < 400 ? 300 : 400,
    // height: windowWidth < 400 ? 300 : 400,
    // borderWidth: windowWidth < 400 ? 2 : 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
