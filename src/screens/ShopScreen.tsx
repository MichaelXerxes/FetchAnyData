import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { shop, shop2 } from "../assets/exports";

const screenWIdth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const items = Array.from({ length: 10 }, (_, i) => i + 1);
interface IState {}

class ShopScreen extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={shop}
        style={styles.container}
        resizeMode="stretch"
      >
        <Text style={styles.title}>Hello Shop</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.text}>{`Item ${item}`}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    // width: screenWIdth,
    // height: screenHeight,

    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "red",
    marginTop: 5,
  },

  item: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 20,
  },
});

export default ShopScreen;
