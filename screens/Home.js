import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [noteArr, setNoteArr] = useState([]);

  function addNote(note, content, id, key) {
    setNoteArr((prevNotes) => {
      return [...prevNotes, { note, content, id, key }];
    });
  }

  function deleteNote() {
    const newArr = [];
    for (let i = 0; i < noteArr.length; i++) {
      if (noteArr[i].id != this.id) {
        newArr.push(noteArr[i]);
      }
      setNoteArr(newArr);
    }
  }

  function hashGenerator() {}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />

      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <CreateArea onAdd={addNote} />
            {noteArr.map((notes) => {
              return (
                <Note
                  key={notes.key}
                  id={notes.id}
                  title={notes.note}
                  info={notes.content}
                  onDelete={deleteNote}
                />
              );
            })}
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
