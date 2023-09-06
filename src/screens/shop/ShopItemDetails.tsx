import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { shop } from "../../assets/exports";

const screenWIdth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface State {}
interface Props {}

class ShopItemDetails extends Component<Props, State> {
  constructor(props: Props) {
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
        <Text style={styles.title}>Item Details</Text>

        <View></View>
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
});

export default ShopItemDetails;
