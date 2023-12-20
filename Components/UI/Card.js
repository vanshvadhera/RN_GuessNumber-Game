import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 35,
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
