import { View, StyleSheet, Text, Pressable } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddButton = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const DeleteButton = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={handlePress}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );
};

export { AddButton, DeleteButton };

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    right: "-88%",
    //bottom: -17,
    backgroundColor: COLORS.blueDark,
    borderRadius: 50,
    width: 36,
    height: 36,
    boxShadow: SHADOWS.dark,
    zIndex: 150,
  },

  text: {
    right: -11,
    bottom: -1,
    fontSize: SIZES.extraLarge,
    color: COLORS.blueHighlight,
  },

  deleteButton: {
    //position: "absolute",
    right: "-83%",
    bottom: -10,
    margin: 10,
    marginRight: 10,
  },

  deleteText: {
    color: "red",
    fontSize: SIZES.font,
  },
});
