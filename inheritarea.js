function Shape(height,base){
    this.height=height;
    this.base=base;
  
};

function Rectangle(height,base){
    Shape.call(this,height,base);
    this.area=function(){
        console.log("Area of Rectangle is ",height*base);
    }

    this.perimeter=function(){
        console.log("Area of Rectangle is ",2*height+2*base);
    }
}

function Triangle(height,base){
    Shape.call(this,height,base);
    this.area=function(){
        console.log("Area of triangle is ",0.5*height*base);
    }

    this.perimeter=function(){
        console.log("Area of triangle is ",3*height);
    }
}

var R1 = new Rectangle(10 , 20);
R1.area();
R1.perimeter();

var T1 = new Triangle(10 , 20);
T1.area();
T1.perimeter();

