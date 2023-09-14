import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { space, spacman } from "../assets/exports";
const HomeScreen = ({ navigation }: any) => {
  const openItem = (item: any, navigation: any) => {
    navigation.navigate("DetailsScreen");
  };
  const goToAnyScreen = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ImageBackground
      source={spacman}
      style={styles.container}
      resizeMode="stretch"
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.titleView}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
      <View style={{ marginTop: 200 }} />
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
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 80 },
  viewFakeTwo: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 36,
    color: "white",
  },
  titleView: { justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;
