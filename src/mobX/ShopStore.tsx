import { createContext, useContext, useState, ReactNode } from "react";
import { DetailsItemData } from "../screens/DetailsScreen";
import { action, makeObservable, observable } from "mobx";
interface ShopContextProps {
  userCurrentShopingList: DetailsItemData[];
  addToShoppingList: (item: DetailsItemData) => void;
}

export const ShopContext = createContext<ShopContextProps | undefined>(
  undefined
);

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};
interface ShopProviderProps {
  children: ReactNode;
}
class ShopStore {
  userCurrentShopingList: DetailsItemData[] = [];

  constructor() {
    makeObservable(this, {
      userCurrentShopingList: observable,
      addItem: action.bound,
    });
  }

  addItem(item: DetailsItemData) {
    this.userCurrentShopingList.push(item);
  }
}
export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const store = new ShopStore();
  const value: ShopContextProps = {
    userCurrentShopingList: store.userCurrentShopingList,
    addToShoppingList: store.addItem,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
