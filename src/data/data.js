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
