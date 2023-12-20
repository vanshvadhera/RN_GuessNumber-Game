import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import Colors from "../Constants/Colors";
import Title from "../Components/Title";
import Card from "../Components/UI/Card";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberInput = (enteredText) => {
    setEnteredNumber(parseInt(enteredText));
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber)) {
      Alert.alert("Invalid Number", "Please enter a valid number", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      // alert("Please enter a valid number");
      return;
    }
    if (chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    }

    props.userPickNumber(chosenNumber);
    console.log(enteredNumber, typeof enteredNumber);
    setEnteredNumber("");
  };

  const handleReset = () => {
    setEnteredNumber("");
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number </Title>
      {/* <View style={styles.inputContainer}> */}
      <Card>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber.toString()}
          onChangeText={handleNumberInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
      {/* </View> */}
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 20,
  },
//   inputContainer: {
//     alignItems: "center",
//     marginTop: 35,
//     padding: 20,
//     marginHorizontal: 15,
//     borderRadius: 8,
//     backgroundColor: Colors.primary800,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
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
    marginBottom: 8,
  },
});
