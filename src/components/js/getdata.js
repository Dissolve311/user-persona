
 function parseData(data){
    for(let i=0;i<data.length;i++){
        let painpoints = data[i].painpoints;
            let products = data[i].products;
            // console.log(painpoints,products)
            data[i].painpoints = painpoints.split(";");
            data[i].products = products.split(";");
              }
            return data;
 }
 
 module.exports = {parseData};
