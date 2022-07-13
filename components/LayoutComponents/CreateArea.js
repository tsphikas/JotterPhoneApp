import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { AddButton } from "../MiniComponents/Buttons";

const CreateArea = (props) => {
  const [note, setNote] = useState("");
  const [content, setContent] = useState("");

  function submitNote() {
    const id = Math.random();
    const key = id;
    props.onAdd(note, content, id, key);
    setContent("");
    setNote("");
  }

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          name="title"
          style={styles.inputTitle}
          onChangeText={setNote}
          value={note}
          placeholder="Title"
          keyboardType="default"
        />
        <TextInput
          name="content"
          styles={styles.inputDescription}
          onChangeText={setContent}
          value={content}
          placeholder="Make a note..."
          keyboardType="default"
          multiline
          numberOfLines={4}
        />
        <AddButton handlePress={() => submitNote()} />
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
