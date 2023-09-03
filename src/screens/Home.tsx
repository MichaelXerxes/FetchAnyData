import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import FakeTwo from "../serwers/fakeServerOne/DisplayFakeData";
const HomeScreen = ({ navigation }: any) => {
  const openItem = (item: any, navigation: any) => {
    navigation.navigate("Details");
  };
  const goToAnyScreen = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <CustomButton
          onPress={() => goToAnyScreen("Details")}
          title="Go to Details"
        />
        <CustomButton
          onPress={() => goToAnyScreen("Manager")}
          title="Go to Manager"
        />
        <CustomButton
          onPress={() => goToAnyScreen("NewUserScreen")}
          title="Go to New User"
        />
        <CustomButton
          onPress={() => goToAnyScreen("ShopScreen")}
          title="Go to Shop Screen"
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
