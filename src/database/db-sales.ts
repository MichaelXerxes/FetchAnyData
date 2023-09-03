export interface Sale{
    id:number,
    date:Date,
    customName:string,
    totalAmount:string|number,
    vat:string|number,
    discount:number,
    numberItems:number,
    items:any[]
}
export const sales:Sale[] = [
    {
      id: 1,
      date: new Date('2023-01-15T12:00:00'),
      customName: 'Someone',
      totalAmount: 150.50,
      vat: 15,
      discount: 10,
      numberItems: 3,
      items: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 2 }
      ]
    },
    {
      id: 2,
      date: new Date('2023-02-20T15:30:00'),
      customName: 'Somewhere',
      totalAmount: 200.00,
      vat: 20,
      discount: 0,
      numberItems: 2,
      items: [
        { productId: 3, quantity: 1 },
        { productId: 4, quantity: 1 }
      ]
    }
  ];

 export const salesJSON = JSON.stringify(sales, null, 2);