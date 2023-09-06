import { NavigationProp, RouteProp } from "@react-navigation/native";
import { ProductX } from "../database/db-products-stock";

export type RootStackParamList = {
  Home: undefined;
  Details: { product: ProductX };
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
