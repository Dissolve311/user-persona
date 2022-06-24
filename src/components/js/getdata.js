'use strict';
const excelToJson = require('convert-excel-to-json');
// import fs from "fs
 
module.exports = excelToJson({
    sourceFile: './data/user-persona.xlsx',
    header:{
        rows: 2
    },
    columnToKey: {
        A: 'name',
        B: 'job',
        C:'pic',
        D:'quote',
        E:'age',
        F:'location',
        G:'experience',
        H:'education',
        I:'skills',
        J:'goals',
        K:'painpoints',
        L:'products',
        M:'responsibilities',
        N:'software',
        O:'description'

    }
});



// // result will be an Object like:
// {
//     sheet1: [{
//         id: 'data of cell A1',
//         firstName: 'data of cell B1'
//     }],
//     sheet2: [{
//         id: 'data of cell A1',
//         firstName: 'data of cell B1'
//     }]
// }