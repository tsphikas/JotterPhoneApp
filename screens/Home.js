import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import {
  Header,
  Footer,
  Note,
  FocusedStatusBar,
  CreateArea,
} from "../components";

import { COLORS, SIZES } from "../constants";

import notes from "../info/notes";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />

      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.09 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <Header headerText="JOTTER" />}
          />
        </View>

        <View
          style={{
            flex: 1,
            padding: SIZES.font,
            backgroundColor: COLORS.offwhite,
          }}
        >
          <ScrollView>
            <CreateArea />
            {notes.map((notes) => (
              <Note key={notes.id} title={notes.title} info={notes.info} />
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 0.09 }}>
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
