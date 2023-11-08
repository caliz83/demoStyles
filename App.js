import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./components/AppText";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="email" size={125} color="hotpink" />
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "skyblue",
          borderRadius: 50,
        }}
      />
      <View
        style={{
          backgroundColor: "orange",
          width: 100,
          height: 100,
          shadowColor: "gray",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 60,
        }}
      />

      {/* text does not inherit properties from its parent */}
      <AppText
        style={{
          fontSize: 40,
          fontFamily: "Chalkboard SE",
          fontWeight: 600,
          color: "tomato",
          textTransform: 'capitalize',
          textDecoration: 'line-through underline',
          textAlign: 'center',
          lineHeight: 50
        }}
      >
        I love React Native! /s My first React Native app; here is some more text.
      </AppText>

      <View
        style={{
          backgroundColor: "skyblue",
          width: 100,
          height: 100,
          padding: 25, //padding is *inside* the container
        }}
      >
        <View style={{ backgroundColor: "gold", height: 50, width: 50 }} />
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20, // margin is *outside/around* the container
        }}
      ></View>
    </View>
  );
}
