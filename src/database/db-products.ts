export interface Product{
    id:number,
    productName:string,
    productValue:string|number,
    productDescription:string,
    productWeight:number
    productHeight:number,
    productWidth:number

}

export interface ProductsAll {
    [id: number]: Product[];
  }

export  const products: ProductsAll = {
    1: [
      {
        id: 1,
        productName: 'Apple',
        productValue: 2,
        productDescription: 'A delicious apple',
        productWeight: 0.2,
        productHeight: 3,
        productWidth: 3
      },
      {
        id: 1,
        productName: 'Apple',
        productValue: 2,
        productDescription: 'A delicious apple',
        productWeight: 0.2,
        productHeight: 3,
        productWidth: 3
      },
      {
        id: 1,
        productName: 'Apple',
        productValue: 2,
        productDescription: 'A delicious apple',
        productWeight: 0.2,
        productHeight: 3,
        productWidth: 3
      },
      {
        id: 1,
        productName: 'Apple',
        productValue: 2,
        productDescription: 'A delicious apple',
        productWeight: 0.2,
        productHeight: 3,
        productWidth: 3
      },
      
    ],
    2: [
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
      {
        id: 2,
        productName: 'Banana',
        productValue: 1,
        productDescription: 'A tasty banana',
        productWeight: 0.1,
        productHeight: 5,
        productWidth: 1
      },
    
    ],
    3: [
        {
          id: 3,
          productName: 'Orange',
          productValue: 1,
          productDescription: 'A tasty Orange',
          productWeight: 0.1,
          productHeight: 2,
          productWidth: 2
        },
        {
          id: 3,
          productName: 'Orange',
          productValue: 1,
          productDescription: 'A tasty Orange',
          productWeight: 0.1,
          productHeight: 2,
          productWidth: 2
        },
      
      ],
      4: [
        {
          id: 4,
          productName: 'Melon',
          productValue: 1,
          productDescription: 'A tasty Melon',
          productWeight: 0.1,
          productHeight: 4,
          productWidth: 4
        },
        {
          id: 4,
          productName: 'Melon',
          productValue: 1,
          productDescription: 'A tasty Melon',
          productWeight: 0.1,
          productHeight: 4,
          productWidth: 4
        },
        {
            id: 4,
            productName: 'Melon',
            productValue: 1,
            productDescription: 'A tasty Melon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 4,
            productName: 'Melon',
            productValue: 1,
            productDescription: 'A tasty Melon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 4,
            productName: 'Melon',
            productValue: 1,
            productDescription: 'A tasty Melon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 4,
            productName: 'Melon',
            productValue: 1,
            productDescription: 'A tasty Melon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 4,
            productName: 'Melon',
            productValue: 1,
            productDescription: 'A tasty Melon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 4,
            productName: 'Melon',
            productValue: 1,
            productDescription: 'A tasty Melon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
      
      ],
      5: [
        {
          id: 5,
          productName: 'WaterMelon',
          productValue: 1,
          productDescription: 'A tasty WaterMelon',
          productWeight: 0.1,
          productHeight: 4,
          productWidth: 4
        },
        {
          id: 5,
          productName: 'WaterMelon',
          productValue: 1,
          productDescription: 'A tasty WaterMelon',
          productWeight: 0.1,
          productHeight: 4,
          productWidth: 4
        },
        {
            id: 5,
            productName: 'WaterMelon',
            productValue: 1,
            productDescription: 'A tasty WaterMelon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 5,
            productName: 'WaterMelon',
            productValue: 1,
            productDescription: 'A tasty WaterMelon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 5,
            productName: 'WaterMelon',
            productValue: 1,
            productDescription: 'A tasty WaterMelon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },
          {
            id: 5,
            productName: 'WaterMelon',
            productValue: 1,
            productDescription: 'A tasty WaterMelon',
            productWeight: 0.1,
            productHeight: 4,
            productWidth: 4
          },  
      ],
  };
  