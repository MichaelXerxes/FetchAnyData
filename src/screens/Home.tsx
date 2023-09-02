import React from "react";
import { View, Text, Button } from "react-native";
import FakeTwo from "../serwers/fakeServerOne/DisplayFakeData";
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <FakeTwo />
    </View>
  );
};

export default HomeScreen;
