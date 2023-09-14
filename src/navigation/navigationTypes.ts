import { NavigationProp, RouteProp } from "@react-navigation/native";
import { ProductX, ProductIDStockX } from "../database/db-products-stock";
import { StackScreenProps } from "@react-navigation/stack";
export type RootStackParamList = {
  Home: undefined;
  DetailsScreen: { product: ProductX; stock: number };
  Manager: undefined;
  NewUserScreen: undefined;
  ShopScreen: undefined;
};

export interface NavigationProps<T extends keyof RootStackParamList> {
  navigation: NavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}
export type ShopScreenNavigationProps = {
  navigation: NavigationProp<RootStackParamList, "ShopScreen">;
  route: RouteProp<RootStackParamList, "ShopScreen">;
};
export type DetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "DetailsScreen"
>;
