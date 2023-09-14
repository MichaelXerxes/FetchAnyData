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
import {
  endpointsNewShop,
  endpointsNewStock,
} from "../serwers/fakeServerOne/fakeSerwerShop";
import { ProductIDStockX, ProductX } from "../database/db-products-stock";
import { ShopScreenNavigationProps } from "../navigation/navigationTypes";
import { DetailsItemData } from "./DetailsScreen";
const screenWIdth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const items = Array.from({ length: 10 }, (_, i) => i + 1);
interface State {
  totalPrice: number;
  products: any;
  stocks: any;
  receivedData?: DetailsItemData;
}
interface Props extends ShopScreenNavigationProps {}
class ShopScreen extends Component<Props, State> {
  _unsubscribeFocus: any;
  constructor(props: Props) {
    super(props);

    this.state = {
      totalPrice: 0,
      products: null,
      stocks: null,
    };
  }
  componentDidMount() {
    endpointsNewShop["/productShopDatabases"]["GET"]().then((data) => {
      this.setState({ products: data });
    });
    endpointsNewStock["/shopStockDatabases"]["GET"]().then((data) => {
      this.setState({ stocks: data });
    });
    this._unsubscribeFocus = this.props.navigation.addListener(
      "focus",
      this.handleFocus
    );
  }

  handleFocus = () => {
    if (this.props.route.params && this.props.route.params.dataFromDetails) {
      this.setState(
        { receivedData: this.props.route.params.dataFromDetails },
        () => {
          console.log("recive", this.state.receivedData);
        }
      );
    }
  };
  findCurrentProductStock(id: number): number {
    const stockItem = this.state.stocks.find(
      (product: ProductIDStockX) => id === product.productID
    );
    return stockItem ? stockItem.currentStock : 0;
  }

  render() {
    const { navigation } = this.props;
    const { receivedData } = this.state;
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
                      navigation.navigate("DetailsScreen", {
                        product,
                        stock: this.findCurrentProductStock(product.id),
                      });
                    }}
                  >
                    <View style={styles.firstRow}>
                      <Text style={styles.name}>{product.productName}</Text>

                      <Text style={styles.text}>
                        Size:
                        {product.productWidth}x{product.productHeight}
                      </Text>
                      <Text style={styles.value}>
                        Value: {product.productValue}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </View>
        <ScrollView>
          <View style={styles.flatList}>
            <Text>Name : {receivedData?.itemName}</Text>
            <Text>Id : {receivedData?.itemId}</Text>
            <Text>{receivedData?.itemtoBuy}</Text>
            <Text>Price :{receivedData?.totalPrice}</Text>
          </View>
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
    marginTop: 5,
  },
  name: { fontSize: 18, color: "orange", fontWeight: "700", marginTop: 5 },
  value: { fontSize: 14, color: "red", fontWeight: "700", marginTop: 5 },
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
