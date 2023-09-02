import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import FakeTwo from "../serwers/fakeServerOne/DisplayFakeData";
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <View style={styles.viewFakeTwo}>
        <FakeTwo />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  viewFakeTwo: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
