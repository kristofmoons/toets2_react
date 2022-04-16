/*
ATTENTION!!!!
    all data in this example application is static
    please do not make the mistake to use this data everywhere in the code!
    you should use it only in the root component App.js and pass it down to the components that use it

    for a larger application it is important to make a distinction between
       * components that own data
       * visual components
    for a real application the data will probably not be hard-coded but will come from a database or an API call
    we learn that in the 2nd part of this course....
*/

export const PRODUCTS_DATA = [
    {name: "cola", price: 1 },
    {name: "water", price: 1, note: "plat of bruisend"},
    {name: "bier", price: 1, size: 25},
    {name: "bier groot", price: 1, size: 33},
    {name: "wijn", price: 2, note:"rood, wit of rosé"},
    {name: "cava", price: 3},
];


export const NUMBER_DATA = [1, 3, 5, 2, 6, 7, 34, 12, 66, 98, 11, 2];

export const CAR_DATA = [
    {
        id: 1,
        name: "mijn eerste auto",
        brand: "peugeot",
        type: "204",
        color: "blauw",
    },
    {
        id: 2,
        name: "auto van mijn zus",
        brand: "fiat",
        type: "punto",
        color: "geel",
    },
    {id: 3, name: "die van mijn pa", brand: "volvo", color: "zwart"},
    {id: 4, name: "geitje", brand: "citroën",},
];
