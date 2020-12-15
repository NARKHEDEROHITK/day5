function checkPalindrome(string) {
    flag=true
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] != string[len - 1 - i]) {
            console.log("String is not Palidrome")
            flag=false;
            break;
        }
    }
    if(flag){
        console.log("String is palidrome")
    }
}
checkPalindrome("mamamamam");