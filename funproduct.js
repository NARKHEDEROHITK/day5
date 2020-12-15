var Product = function(name,price){
    this.name=name;
    this.price=price;
    this.printDetails =  function(){
        console.log("Name of product= "+this.name +"& Price= "+this.price);
    }
}

var product1= new Product("smartTv" , "54990");
// product1.greet();


Product.prototype.brand="LG";

Product.prototype.discountedPrice=function(discount){
    console.log("Discounted price = "+this.price*(100-discount)/100)
};

product1.discountedPrice(20)