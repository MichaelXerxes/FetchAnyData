import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import FakeTwo from "../serwers/fakeServerOne/DisplayFakeData";
const HomeScreen = ({ navigation }: any) => {
  const openItem = (item: any, navigation: any) => {
    navigation.navigate("Details");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
        <Button
          title="Go to Manager"
          onPress={() => navigation.navigate("Manager")}
        />
        <Button
          title="Go to New User"
          onPress={() => navigation.navigate("NewUserScreen")}
        />
        <View style={styles.viewFakeTwo}></View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  viewFakeTwo: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
