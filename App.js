import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{auaufy("teste")}</Text>
      <Text>{desauaufy(auaufy("teste"))}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const auaufy = (phrase) => {
  return phrase
    .split(" ")
    .map((word) => {
      const wordLetters = word.split("");
      return wordLetters
        .map((letter, index) => {
          const charCode = letter.charCodeAt(0);
          const binary = charCode.toString(2).padStart(8, 0);

          const auaus = binary
            .replace(/0/g, "auau, ")
            .replace(/1/g, "auau auau, ")
            .replace(/, $/, "");

          return auaus;
        })
        .join("-");
    })
    .join("~");
};

const desauaufy = (auauphrase) => {
  return auauphrase
    .split("~")
    .map((word) => {
      return word
        .split("-")
        .map((letter) => {
          const binary = letter
            .replace(/auau auau(, )*/g, "1")
            .replace(/auau(, )*/g, "0");

          return String.fromCharCode(parseInt(binary, 2));
        })
        .join("");
    })
    .join(" ");
};
