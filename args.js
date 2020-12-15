function sumofnums(...arr){
    sum=0
    for (let index = 0; index < arr.length; index++) {
      sum=sum+arr[index];
       
    }
    console.log(sum)
}

sumofnums(102,303,300);
sumofnums(102,303,300,122,2343,45);

console.log(...'javascipt');
arr1=[1,2,3]
arr2=[4,5,6]
console.log(...arr1,...arr2)