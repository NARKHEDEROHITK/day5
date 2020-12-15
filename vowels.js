var str="The quick brown fox jumps over the lazy dog";

function countvowels(args){
    console.log(args)    
    count=0
    str1=[...args]
    for(key in str1){
        if(args[key]=='a' || args[key]=='e' || args[key]=='i' || args[key]=='o' || args[key]=='u'){
            count=count+1
        }
    }
    console.log(count)
}

countvowels(str)
