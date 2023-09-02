import React from "react";
import { View, Text } from "react-native";
import FakeTwo from "../serwers/fakeServerOne/DisplayFakeData";
const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <FakeTwo />
    </View>
  );
};

export default DetailsScreen;
