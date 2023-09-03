import {
  ProductX,
  ProductIDStockX,
  productShopDatabase,
  shopStockDatabase,
} from "../../database/db-products-stock";

export const endpointsNewShop = {
  "/productShopDatabases": {
    GET: getProducts,
    POST: createProduct,
  },
  "/productShopDatabase/:id": {
    GET: getProduct,
    PUT: updateProduct,
    DELETE: deleteProduct,
  },
};
export const endpointsNewStock = {
  "/shopStockDatabases": {
    GET: getStocks,
    POST: createStock,
  },
  "/shopStockDatabase/:stockID": {
    GET: getStockByStockId,
    PUT: updateStock,
    DELETE: deleteStock,
  },
};

function getProducts(): Promise<ProductX[]> {
  return new Promise((resolve) => {
    resolve(productShopDatabase);
  });
}

function getProduct(id: number): Promise<ProductX | undefined> {
  return new Promise((resolve) => {
    const user = productShopDatabase.find((u) => u.id === id);
    resolve(user);
  });
}

function createProduct(user: ProductX): Promise<ProductX> {
  return new Promise((resolve) => {
    user.id = Date.now();
    productShopDatabase.push(user);
    resolve(user);
  });
}

function updateProduct(
  id: number,
  updatedUser: ProductX
): Promise<ProductX | undefined> {
  return new Promise((resolve) => {
    const index = productShopDatabase.findIndex((u) => u.id === id);
    if (index !== -1) {
      productShopDatabase[index] = {
        ...productShopDatabase[index],
        ...updatedUser,
      };
      resolve(productShopDatabase[index]);
    } else {
      resolve(undefined);
    }
  });
}

function deleteProduct(id: number): Promise<void> {
  return new Promise((resolve) => {
    const index = productShopDatabase.findIndex((u) => u.id === id);
    if (index !== -1) {
      productShopDatabase.splice(index, 1);
    }
    resolve();
  });
}

//// Stock DB

function getStocks(): Promise<ProductIDStockX[]> {
  return new Promise((resolve) => {
    resolve(shopStockDatabase);
  });
}

function getStockByStockId(
  stockID: number
): Promise<ProductIDStockX | undefined> {
  return new Promise((resolve) => {
    const stock = shopStockDatabase.find((s) => s.stockID === stockID);
    resolve(stock);
  });
}

function createStock(stock: ProductIDStockX): Promise<ProductIDStockX> {
  return new Promise((resolve) => {
    stock.stockID = Date.now();
    shopStockDatabase.push(stock);
    resolve(stock);
  });
}

function updateStock(
  stockID: number,
  updatedStock: ProductIDStockX
): Promise<ProductIDStockX | undefined> {
  return new Promise((resolve) => {
    const index = shopStockDatabase.findIndex((s) => s.stockID === stockID);
    if (index !== -1) {
      shopStockDatabase[index] = {
        ...shopStockDatabase[index],
        ...updatedStock,
      };
      resolve(shopStockDatabase[index]);
    } else {
      resolve(undefined);
    }
  });
}

function deleteStock(stockID: number): Promise<void> {
  return new Promise((resolve) => {
    const index = shopStockDatabase.findIndex((s) => s.stockID === stockID);
    if (index !== -1) {
      shopStockDatabase.splice(index, 1);
    }
    resolve();
  });
}
