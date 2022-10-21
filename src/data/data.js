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
    {name: "verse muntthee", price: 2.5, warm: true},
    {name: "tonic", price: 2, warm: false},
    {name: "water", price: 1, note: "plat of bruisend"},
    {name: "limonade", price: 1, note: "geel of wit"},
    {name: "espresso", price: 2.5, warm: true},
    {name: "latte machiato", price: 3, warm: true},
    {name: "cola", price: 1 },
    {name: "gember-citroen", price: 2.5, warm: true},
    {name: "icetea", price: 1.5},
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
        note: "die ging altijd kapot"
    },
    {id: 3, name: "die van mijn pa", brand: "volvo", color: "zwart"},
    {id: 4, name: "geitje", brand: "citroën",},
    {id: 5, name: "auto1", brand: "Peugeot", type: "505", color: "grijs"},
    {id: 6, name: "auto2", brand: "Fiat", type: "Panda"},
    {id: 7, name: "auto3", brand: "Fiat", type: "Tipo", color: "groen"},
    {id: 8, name: "auto4", brand: "Citroën", type: "C4", color: "rood"},
    {id: 9, name: "auto5", brand: "Fiat", type: "Panda", color: "rood"}
];

export const PERSON_DATA = [
    {id: 1, name: "Jan", age: 18, city: "Mechelen"},
    {id: 2, name: "Marie", age: 25, city: "Katelijne"},
    {id: 3, name: "Anton", age: 16, city: "Duffel"},
    {id: 4, name: "Yves", age: 24, city: "Mechelen"},
    {id: 5, name: "Marijke", age: 16, city: "Duffel"},
    {id: 6, name: "Karel", age: 16, city: "Mechelen"},
    {id: 7, name: "Bart", age: 18, city: "Mechelen"},
    {id: 8, name: "Marijke", age: 28, city: "Lier"},
    {id: 9, name: "Dirk", age: 20, city: "Mechelen"},
    {id: 10, name: "Bavo", age: 20, city: "Lint"},
    {id: 11, name: "Kris", age: 19, city: "Duffel"},
    {id: 12, name: "Leen", age: 21, city: "Katelijne"},
    {id: 13, name: "Lieve", age: 20, city: "Mechelen"},
];

