var Student = function(name,city){
    this.name=name;
    this.city=city;
    this.greet =  function(){
        console.log("welcome "+this.name +" From "+this.city);
    }
}

var student1= new Student("Rohit" , "Jalgaon");
student1.greet();


Student.prototype.department="CS";
console.log(student1.department)

Student.prototype.showdep=function(){
    console.log("department = "+this.department)
};
student1.showdep()