var details=function(name , city){
    console.log("Roll no",this.name, "Roll no" ,this.rollno)
}

var showTotal = function(marks){
    arr=this.marks
    var sum = function(){
        s=0
        arr.forEach((val)=>{
          
            s=s+val;
        })
        return s
    }
    return sum()/arr.length
}

var showHobby = function(hobby){
    arr=this.hobby
        arr.forEach((val)=>{
            console.log(val)
        })
}

user1={
    name:"ROhit",
    rollno:10,
    marks:[10,20,30,30,15],
    hobby:['cricket','chess','reading']
}
user2={
    name:"Lily",
    rollno:11,
    marks:[10,20,30,30,15],
    hobby:['chess','reading']
}

details.call(user1);
console.log(showTotal.call(user1))
showHobby.call(user1);


details.call(user2);
console.log(showTotal.call(user2))
showHobby.call(user2);