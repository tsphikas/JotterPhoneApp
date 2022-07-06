import { View, Text } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { DeleteButton } from "../MiniComponents/Buttons";

const Note = (props) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: SIZES.base,
        borderRadius: 7,
        boxShadow: SHADOWS.medium,
        width: "100%",
        marginBottom: SIZES.font,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: SIZES.medium,
            marginBottom: SIZES.margin,
          }}
        >
          {props.title}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: SIZES.font,
            marginBottom: SIZES.margin,
          }}
        >
          {props.info}
        </Text>
      </View>

      <View>
        <DeleteButton />
      </View>
    </View>
  );
};

export default Note;

/*  whiteSpace: "pre-wrap",
    wordWrap: "break-word", */
