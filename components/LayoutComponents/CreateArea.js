import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { AddButton } from "../MiniComponents/Buttons";

const CreateArea = () => {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          onChangeText={onChangeText}
          value={text}
          placeholder="Title"
          keyboardType="default"
        />
        <TextInput
          styles={styles.inputDescription}
          multiline
          numberOfLines={4}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Make a note..."
          keyboardType="default"
        />
        <AddButton />
      </View>
    </View>
  );
};

export default CreateArea;

const styles = StyleSheet.create({
  form: {
    backgroundColor: COLORS.white,
    padding: SIZES.base,
    borderRadius: 7,
    boxShadow: SHADOWS.medium,
    width: "100%",
    marginBottom: SIZES.font,
  },

  inputTitle: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.margin,
  },

  inputDescription: {
    fontSize: SIZES.font,
    marginBottom: SIZES.margin,
  },
});
