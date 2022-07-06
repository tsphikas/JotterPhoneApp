import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

const Header = ({ headerText }) => {
  return (
    <View
      style={{
        padding: SIZES.font,
        backgroundColor: COLORS.blueDark,
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: SIZES.extraLarge,
            letterSpacing: SIZES.letter,
            color: COLORS.white,
            fontFamily: FONTS.helvetica,
          }}
        >
          {headerText}
        </Text>
      </View>
    </View>
  );
};

export default Header;
