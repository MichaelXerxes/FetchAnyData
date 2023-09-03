export interface ProductX {
  id: number;
  productName: string;
  productValue: string | number;
  productDescription: string;
  productWeight: number;
  productHeight: number;
  productWidth: number;
}

export interface ProductIDStockX {
  productID: ProductX["id"];
  productName: ProductX["productName"];
  currentStock: number;
  stockID: number;
}

export const productShopDatabase: ProductX[] = [
  {
    id: 1,
    productName: "Laptop",
    productValue: 1000,
    productDescription: "High-performance laptop",
    productWeight: 2,
    productHeight: 25,
    productWidth: 35,
  },
  {
    id: 2,
    productName: "Phone",
    productValue: 500,
    productDescription: "Latest model smartphone",
    productWeight: 0.2,
    productHeight: 15,
    productWidth: 7,
  },
  {
    id: 3,
    productName: "TV",
    productValue: 1200,
    productDescription: "4K Smart TV",
    productWeight: 15,
    productHeight: 110,
    productWidth: 70,
  },
  {
    id: 4,
    productName: "TVCurve",
    productValue: 1800,
    productDescription: "4K Curve Smart TV",
    productWeight: 12,
    productHeight: 70,
    productWidth: 90,
  },
];

export const shopStockDatabase: ProductIDStockX[] = [
  {
    productID: 1,
    productName: "Laptop",
    currentStock: 20,
    stockID: 101,
  },
  {
    productID: 2,
    productName: "Phone",
    currentStock: 50,
    stockID: 102,
  },
  {
    productID: 3,
    productName: "TV",
    currentStock: 10,
    stockID: 103,
  },
  {
    productID: 4,
    productName: "TVCurve",
    currentStock: 24,
    stockID: 104,
  },
];

const getProductById = (id: number): ProductX | undefined => {
  return productShopDatabase.find((product) => product.id === id);
};

const getStockById = (id: number): ProductIDStockX | undefined => {
  return shopStockDatabase.find((stock) => stock.productID === id);
};
