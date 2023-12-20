import { StyleSheet, View, Text } from "react-native";

const Title = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        padding: 12,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 12,
        marginBottom: 12,
    },
})

export default Title;
