import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import DateComponent from "../MiniComponents/DateComponent";

const Footer = () => {
  return (
    <View
      style={{
        padding: SIZES.medium,
        alignItems: "center",
        backgroundColor: COLORS.offwhite,
      }}
    >
      <Text style={{ fontFamily: FONTS.helvetica, letterSpacing: 1 }}>
        © Copyright Theo Sphikas {<DateComponent />}
      </Text>
    </View>
  );
};

export default Footer;
