import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DetailsScreenProps } from "../navigation/navigationTypes";
export interface DetailsItemData {
  itemtoBuy: number;
  totalPrice: number;
  itemId: number;
  itemName: string;
}
const DetailsScreen: React.FC<DetailsScreenProps> = ({ route, navigation }) => {
  const { product, stock } = route.params;
  const [currentStock, setCurrentStock] = useState<number>(stock);
  const [itemToBuy, setItemsToBuy] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(itemToBuy * (product.productValue as number));
  }, [itemToBuy]);
  function addItems() {
    let items = itemToBuy;
    let currentStockItem = currentStock;
    if (itemToBuy < stock) {
      setItemsToBuy((items += 1));
      setCurrentStock(currentStockItem - 1);
    } else {
      setItemsToBuy(stock);
    }
  }
  function reduceItems() {
    let items = itemToBuy;
    let currentStockItem = currentStock;
    if (itemToBuy > 0) {
      setItemsToBuy((items -= 1));
      setCurrentStock(currentStockItem + 1);
    } else {
      setItemsToBuy(0);
    }
  }
  async function setAndSendData() {
    const newData = {
      itemtoBuy: itemToBuy,
      totalPrice: total,
      itemId: product.id,
      itemName: product.productName,
    };

    navigation.navigate("ShopScreen", {
      dataFromDetails: newData,
    });
    console.log(newData);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Product Name: {product.productName}</Text>
      <Text style={styles.description}>
        Description: {product.productDescription}
      </Text>
      <Text style={styles.weight}>Weight: {product.productWeight}</Text>
      <Text style={styles.size}>
        Size: {product.productWidth}x{product.productHeight}
      </Text>
      <Text style={styles.value}>Value: {product.productValue}</Text>
      <Text style={styles.value}>Stock: {currentStock}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => addItems()}>
          <View style={styles.buttonView}>
            <Text style={styles.button}>+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => reduceItems()}>
          <View style={styles.buttonView}>
            <Text style={styles.button}>-</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.size}>Items : {itemToBuy}</Text>
        <Text style={styles.size}>Total Price : {total}</Text>
      </View>
      <TouchableOpacity onPress={() => setAndSendData()}>
        <View style={styles.acceptView}>
          <Text style={styles.accept}>Accept</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  name: { fontSize: 22, fontWeight: "800", color: "black", marginTop: 120 },
  description: { marginTop: 30, fontSize: 16, color: "grey" },
  weight: { fontSize: 18, color: "red", fontWeight: "700", marginTop: 20 },
  size: { fontSize: 16, color: "grey", fontWeight: "700", marginTop: 20 },
  value: { fontSize: 18, color: "red", fontWeight: "700", marginTop: 20 },
  row: {
    flexDirection: "row",
  },
  buttonView: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBlockColor: "grey",
    borderRadius: 5,
    margin: 10,
  },
  button: {
    fontSize: 22,
    fontWeight: "bold",

    color: "black",
    alignItems: "center",
  },
  acceptView: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 10,
    marginTop: 50,
  },
  accept: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
export default DetailsScreen;
