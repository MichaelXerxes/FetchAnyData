import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { shop, shop2 } from "../assets/exports";
import { endpointsNewShop } from "../serwers/fakeServerOne/fakeSerwerShop";
import { ProductX } from "../database/db-products-stock";
import { ShopScreenNavigationProps } from "../navigation/navigationTypes";
const screenWIdth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const items = Array.from({ length: 10 }, (_, i) => i + 1);
interface State {
  totalPrice: number;
  products: any;
}
interface Props extends ShopScreenNavigationProps {}
class ShopScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      totalPrice: 0,
      products: null,
    };
  }
  componentDidMount() {
    endpointsNewShop["/productShopDatabases"]["GET"]().then((data) => {
      this.setState({ products: data });
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={shop}
        style={styles.container}
        resizeMode="stretch"
      >
        <Text style={styles.title}>Hello Shop</Text>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.products &&
              this.state.products.map((product: ProductX, index: number) => (
                <View key={index} style={styles.item}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Details", { product });
                    }}
                  >
                    <View style={styles.firstRow}>
                      <Text style={styles.text}>{product.productName}</Text>
                      <Text style={styles.text}>{product.productWeight}</Text>
                      <Text style={styles.text}>
                        {product.productWidth}x{product.productHeight}
                      </Text>
                      <Text style={styles.text}>{product.productValue}</Text>
                    </View>
                    <Text style={[styles.text, { fontSize: 10 }]}>
                      {product.productDescription}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </View>
        <ScrollView>
          <View style={styles.flatList}></View>
          <View style={styles.details}>
            <Text>Total price: {this.state.totalPrice}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWIdth,
    height: "100%",
    paddingHorizontal: 20,
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

    margin: 5,
    backgroundColor: "lightblue",
    paddingHorizontal: 2,
  },
  firstRow: { justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 12,
    color: "black",
  },
  flatList: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
  },
  details: {
    width: "100%",
    height: 100,
    marginTop: 20,
  },
});

export default ShopScreen;
