import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";

const AddButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container} onPress={""}>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const DeleteButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.deleteButton} onPress={""}>
        <Text style={styles.deleteText}>Delete</Text>
      </View>
    </TouchableOpacity>
  );
};

export { AddButton, DeleteButton };

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    bottom: -10,
    backgroundColor: COLORS.blueDark,
    borderRadius: 50,
    width: 36,
    height: 36,
    boxShadow: SHADOWS.dark,
  },

  text: {
    right: -11,
    bottom: -1,
    fontSize: SIZES.extraLarge,
    color: COLORS.blueHighlight,
  },

  deleteButton: {
    position: "absolute",
    right: 0,
    bottom: -10,
    margin: 10,
    marginRight: 10,
  },

  deleteText: {
    color: COLORS.blueDark,
    fontSize: SIZES.font,
  },
});
