import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationProps } from "../navigation/navigationTypes";
import { DetailsScreenProps } from "../navigation/navigationTypes";
interface Props extends DetailsScreenProps {}
const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { product, stock } = route.params;

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
      <Text style={styles.value}>Stock: {stock}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center"
    paddingHorizontal: 12,
  },
  name: { fontSize: 22, fontWeight: "800", color: "black", marginTop: 40 },
  description: { marginTop: 30, fontSize: 16, color: "grey" },
  weight: { fontSize: 18, color: "red", fontWeight: "700", marginTop: 20 },
  size: { fontSize: 16, color: "grey", fontWeight: "700", marginTop: 20 },
  value: { fontSize: 18, color: "red", fontWeight: "700", marginTop: 20 },
});
export default DetailsScreen;
