import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { shop } from "../assets/exports";
import {
  endpointsNewShop,
  endpointsNewStock,
} from "../serwers/fakeServerOne/fakeSerwerShop";
import { ProductIDStockX, ProductX } from "../database/db-products-stock";
import { ShopScreenNavigationProps } from "../navigation/navigationTypes";
import { DetailsItemData } from "./DetailsScreen";
import { ShopContext } from "../mobX/ShopStore";

const screenWIdth = Dimensions.get("window").width;

interface State {
  totalPrice: number;
  products: ProductX[] | null;
  stocks: ProductIDStockX[] | null;
  receivedData?: DetailsItemData;
  userShopingItems: DetailsItemData[];
}

interface Props extends ShopScreenNavigationProps {}

const ShopScreen: React.FC<Props> = ({ navigation, route }) => {
  const context = useContext(ShopContext);

  const [state, setState] = useState<State>({
    totalPrice: 0,
    products: null,
    stocks: null,
    userShopingItems: [],
  });

  useEffect(() => {
    endpointsNewShop["/productShopDatabases"]["GET"]().then((data) => {
      setState((prevState) => ({ ...prevState, products: data }));
    });
    endpointsNewStock["/shopStockDatabases"]["GET"]().then((data) => {
      setState((prevState) => ({ ...prevState, stocks: data }));
    });

    const unsubscribeFocus = navigation.addListener("focus", handleFocus);

    return () => {
      unsubscribeFocus();
    };
  }, [navigation, route.params]);

  const handleFocus = () => {
    if (route.params && route.params.dataFromDetails) {
      const receivedData = route.params.dataFromDetails;
      setState((prevState) => ({
        ...prevState,
        receivedData: receivedData,
        userShopingItems: [...prevState.userShopingItems, receivedData],
      }));
      if (context && receivedData) {
        context.addToShoppingList(receivedData);
      }
    }
  };

  const findCurrentProductStock = (id: number): number => {
    const stockItem = state.stocks?.find(
      (product: ProductIDStockX) => id === product.productID
    );
    return stockItem ? stockItem.currentStock : 0;
  };

  const renderItem = (receivedData: DetailsItemData) => (
    <View>
      <View style={styles.flatList}>
        <Text>Name : {receivedData.itemName}</Text>

        <Text>Stock: {receivedData.itemtoBuy}</Text>
        {/* <Text>Price :{receivedData.totalPrice}</Text> */}
        <View style={styles.details}>
          <Text>Total price: {receivedData.totalPrice}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={shop}
      style={styles.container}
      resizeMode="stretch"
    >
      <Text style={styles.title}>Hello Shop</Text>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {state.products &&
            state.products.map((product, index) => (
              <View key={index} style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetailsScreen", {
                      product,
                      stock: findCurrentProductStock(product.id),
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
      <View style={styles.flatList}>
        <FlatList
          data={state.userShopingItems}
          renderItem={({ item, index }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
};

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
    //height: 200,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  details: {
    // width: "100%",
    // height: 100,
    // marginTop: 20,
  },
});

export default ShopScreen;
