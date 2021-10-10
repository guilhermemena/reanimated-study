import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { Routes } from "../Routes";

export const examples = [
  {
    screen: "Opacity",
    title: "Playing with opacity",
  },
  {
    screen: "Translate",
    title: "Playing with translate",
  },
  {
    screen: "Scale",
    title: "Playing with scale",
  },
  {
    screen: "Dimensions",
    title: "Playing with dimensions",
  },

] as const;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: "white",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#f2f2f2',
  },
});

const Examples = () => {
  const { navigate } = useNavigation<StackNavigationProp<Routes, "Examples">>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {examples.map((thumbnail) => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigate(thumbnail.screen)}
        >
          <View style={styles.thumbnail}>
            <Text>{thumbnail.title}</Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
};

export default Examples;
