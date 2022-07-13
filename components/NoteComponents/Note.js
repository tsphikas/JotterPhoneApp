import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { DeleteButton } from "../MiniComponents/Buttons";

const Note = (props) => {
  function handleClick() {
    props.onDelete();
  }

  return (
    <View style={styles.noteBackground}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.noteTitle}>{props.title}</Text>
      </View>

      <View>
        <Text style={styles.noteText}>{props.info}</Text>
      </View>

      <View>
        <DeleteButton handlePress={() => handleClick()} />
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  noteBackground: {
    backgroundColor: COLORS.white,
    padding: SIZES.base,
    borderRadius: 7,
    boxShadow: SHADOWS.medium,
    width: "100%",
    marginBottom: SIZES.font,
  },

  noteTitle: { fontSize: SIZES.medium, marginBottom: SIZES.margin },

  noteText: {
    fontSize: SIZES.font,
    marginBottom: SIZES.margin,
  },
});

/*  whiteSpace: "pre-wrap",
    wordWrap: "break-word", */
