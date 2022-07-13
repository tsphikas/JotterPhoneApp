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

/* Add Following when time permits */
/*  1. Pull storage info into separate file
        import notes from "../info/notes";
    2.  Use Hashing function instead of Math Random for Key
        function hashGenerator() {}
    3.  Add tick box complete function 
    4.  Prevent adding empty notes
    5.  Add Icons
    6.  Add delete all button (AlertBox)
    */

const Home = () => {
  const [noteArr, setNoteArr] = useState([]);

  React.useEffect(() => {
    getMe();
  }, []);

  React.useEffect(() => {
    storeMe(noteArr);
  }, [noteArr]);

  function addNote(note, content, id, key) {
    setNoteArr((prevNotes) => {
      return [...prevNotes, { note, content, id, key }];
    });
    storeMe();
  }

  const storeMe = async (noteArr) => {
    try {
      if (noteArr != null) {
        const jsonValue = JSON.stringify(noteArr);
        await AsyncStorage.setItem("appData", jsonValue);
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const getMe = async () => {
    try {
      const value = await AsyncStorage.getItem("appData");
      if (value != null) {
        setNoteArr(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  function deleteNote() {
    const newArr = [];
    for (let i = 0; i < noteArr.length; i++) {
      if (noteArr[i].id != this.id) {
        newArr.push(noteArr[i]);
      }
      setNoteArr(newArr);
    }
  }

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
                ></Note>
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
