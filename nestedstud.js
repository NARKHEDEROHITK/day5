var showTotal = function(...marks){
    console.log(marks)
    var sum = function(){
        s=0
        marks.forEach((val)=>{
            console.log(val)
            s=s+val;
        })
        return s
    }
    return sum()/marks.length
}
console.log(showTotal(10,20,30,40))