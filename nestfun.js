var showProduct = function(name,brand,cost){
    console.log(`name of Product is ${name}`)
    console.log(`name of Product is ${brand}`)
    return function(disc){
        console.log(`Price with Discount of product is ${cost-disc}`);
    }
}

console.log(showProduct('Mobile','LG',5000)(500))