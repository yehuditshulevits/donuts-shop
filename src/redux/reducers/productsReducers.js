import React from 'react';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';
import img9 from '../../images/9.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';
import img13 from '../../images/13.png';
import img14 from '../../images/14.png';

const products = [
{
    id: 1,
    name: 'דונאט ריבת חלב',
    qty: 13,
    image: img1,
    description: "שוקולד וקורקטים",
    price: 14
},
{
    id: 2,
    name: 'דונאט וניל קלאסי',
    qty: 15,
    image: img2,
    description: "מצופה וניל מעולה",
    price: 14
},
{
    id: 3,
    name: 'דונאט חלבה',
    qty: 12,
    image:img3,
    description: "מצופה קרם חלבה",
    price: 14
},
{
    id: 4,
    name: ' דונאט קרם פיסטוק',
    qty: 12,
    image:img4,
    description: "קרם פיסטוק מעודן",
    price: 14
},
{
    id: 5,
    name: 'דונאט קרם אוראו',
    qty: 17,
    image: img5,
    description: "מצופה קרם+עוגיות",
    price: 14
},
{
    id: 6,
    name: 'דונאט גלי תות',
    qty: 20,
    image: img6,
    description: 'דונאט גלי תות מיוחד',
    price: 14.0
},
{
    id: 7,
    name: 'דונאט עוגיות לוטוס',
    qty: 14,
    image:img7,
    description: 'דונאט עוגיות לוטוס',
    price: 14.0,
},
{
    id: 8,
    name: 'דונאט שוקולד מריר',
    qty: 10,
    image:img8,
    description: 'דונאט שוקולד מריר',
    price: 14.0
},
{
    id: 9,
    name: 'דונאט קרם אוכמניות',
    qty: 13,
    image:img9,
    description: 'דונאט קרם אוכמניות',
    price: 14.0
},
{
    id: 10,
    name: 'דונאט שוקולד עדשים',
    qty: 25,
    image:img10,
    description: 'דונאט שוקולד עדשים',
    price: 14.0,
},
{
    id: 11,
    name: 'מארז 3 דונאטס',
    qty: 10,
    image: img11,
    description: "3 דונאטים לבחירה",
    price:33
},
{
    id: 12,
    name: 'מארז 18 דונאטים',
    qty: 5,
    image: img12,
    description: "18 דונאטים לבחירה",
    price: 140
},
{
    id: 13,
    name: 'מארז 9 דונאטס',
    qty: 7,
    image: img13,
    description: "9 דונאטים לבחירה",
    price: 75
},
{
    id: 14,
    name: 'מארז 6 דונאטים',
    qty: 10,
    image: img14,
    description: "6 דונאטים לבחירה",
    price:  55
},
];

  const productsReducers=(state = products, action) =>{
    switch (action.type) {
      case 'ADDQTY':
        return state.map((product) =>
          product.id === action.productId ? { ...product, qty: product.qty + 1 } : product
        );
      case 'DECREASEQTY':
        return state.map((product) =>
          product.id === action.productId ? { ...product, qty: product.qty - 1 } : product
        );
      default:
        return state;
    }
  }
  export default productsReducers;