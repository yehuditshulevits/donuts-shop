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
import img15 from '../../images/15.png';
import img16 from '../../images/16.png';
import img17 from '../../images/17.png';
import img18 from '../../images/18.png';
import img19 from '../../images/19.png';
import img20 from '../../images/20.png';
import img21 from '../../images/21.png';
import img22 from '../../images/22.png';
import img23 from '../../images/23.png';
import img24 from '../../images/24.png';
import img25 from '../../images/25.png';
import img26 from '../../images/26.png';
import img27 from '../../images/27.png';
import img28 from '../../images/28.png';
import img29 from '../../images/29.png';
import img30 from '../../images/30.png';
import img31 from '../../images/31.png';
import img32 from '../../images/32.png';
import img33 from '../../images/33.png';
import img34 from '../../images/34.png';
import img35 from '../../images/35.png';

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
        image: img3,
        description: "מצופה קרם חלבה",
        price: 14
    },
    {
        id: 4,
        name: ' דונאט קרם פיסטוק',
        qty: 12,
        image: img4,
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
        image: img7,
        description: 'דונאט עוגיות לוטוס',
        price: 14.0,
    },
    {
        id: 8,
        name: 'דונאט שוקולד מריר',
        qty: 10,
        image: img8,
        description: 'דונאט שוקולד מריר',
        price: 14.0
    },
    {
        id: 9,
        name: 'דונאט קרם אוכמניות',
        qty: 13,
        image: img9,
        description: 'דונאט קרם אוכמניות',
        price: 14.0
    },
    {
        id: 10,
        name: 'דונאט שוקולד עדשים',
        qty: 25,
        image: img10,
        description: 'דונאט שוקולד עדשים',
        price: 14.0,
    },
    {
        id: 11,
        name: 'דונאט תות קלאסי',
        qty: 20,
        image: img24,
        description: 'עם סוכריות',
        price: 14.0,
    },
    {
        id: 12,
        name: 'דונאט שוקולד קרם וניל',
        qty: 20,
        image: img25,
        description: 'מושלם',
        price: 14.0,
    },
    {
        id: 13,
        name: 'דונאט שוקולד לבן',
        qty: 7,
        image: img26,
        description: 'וסוכריות שחור לבן',
        price: 14.0,
    },
    {
        id: 14,
        name: 'דונאט רול קינמון',
        qty: 4,
        image: img27,
        description: 'ללא חור',
        price: 14.0,
    },
    {
        id: 15,
        name: 'דונאט קרם קפה',
        qty: 12,
        image: img28,
        description: 'מבריק',
        price: 14.0,
    },
    {
        id: 16,
        name: 'דונאט קוקוס קלוי',
        qty: 14,
        image: img29,
        description: 'עם קרם וניל',
        price: 14.0,
    },
    {
        id: 17,
        name: 'דונאט גלייז',
        qty: 7,
        image: img30,
        description: 'מיוחד',
        price: 14.0,
    },
    {
        id: 18,
        name: 'דונאט גלייז קרם וניל',
        qty: 12,
        image: img31,
        description: 'מתוק',
        price: 14.0,
    },
    {
        id: 19,
        name: 'דונאט קרם בוואירה',
        qty: 5,
        image: img32,
        description: 'לבן',
        price: 14.0,
    },
    {
        id: 20,
        name: 'דונאט אבקת סוכר',
        qty: 7,
        image: img33,
        description: 'אבקת סוכר',
        price: 14.0,
    },
    {
        id: 21,
        name: 'בייטס לוטוס',
        qty: 10,
        image: img15,
        price: 3
    },
    {
        id: 22,
        name: 'בייטס אבקת סוכר',
        qty: 10,
        image: img16,
        price: 3
    },
    {
        id: 23,
        name: 'בייטס עוגיות אוראו',
        qty: 10,
        image: img17,
        price: 3
    },
    {
        id: 24,
        name: 'בייטס גלייז',
        qty: 10,
        image: img18,
        price: 3
    },
    {
        id: 25,
        name: 'בייטס תות',
        qty: 10,
        image: img19,
        price: 3
    },
    {
        id: 26,
        name: 'סטיק קרם בוואריה',
        qty: 10,
        image: img20,
        price: 3
    },
    {
        id: 27,
        name: 'סטיק קרם וניל',
        qty: 10,
        image: img21,
        price: 3
    },
    {
        id: 28,
        name: 'סטיק קרם שוקולד',
        qty: 10,
        image: img22,
        price: 3
    },
    {
        id: 29,
        name: 'סטיק שוקולד חלב',
        qty: 10,
        image: img23,
        price: 3
    },
    {
        id: 30,
        name: 'מארז 3 דונאטס',
        qty: 10,
        image: img11,
        description: "3 דונאטים לבחירה",
        price: 33
    },
    {
        id: 31,
        name: 'מארז 18 דונאטים',
        qty: 5,
        image: img12,
        description: "18 דונאטים לבחירה",
        price: 140
    },
    {
        id: 32,
        name: 'מארז 9 דונאטס',
        qty: 7,
        image: img13,
        description: "9 דונאטים לבחירה",
        price: 75
    },
    {
        id: 33,
        name: 'מארז 6 דונאטים',
        qty: 10,
        image: img14,
        description: "6 דונאטים לבחירה",
        price: 55
    },
    {
        id: 34,
        name: 'מארז 4 סטיקים',
        qty: 10,
        image: img34,
        description: "לבחירה 4",
        price: 25
    },
    {
        id: 35,
        name: 'מארז 20 בייטס ',
        qty: 10,
        image: img35,
        description: "לבחירה 20",
        price: 30
    },
    


];

const productsReducers = (state = products, action) => {
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