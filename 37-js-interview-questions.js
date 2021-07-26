'use strict'

function isPalindrome(s){
    let s2 = s.toLowerCase()
    let i = 0;
    let j = s2.length - 1;

    while(j > i){
        if(s.charAt(i) !== s.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
}

function sum(a, b){
    return a + b;
}

// 4 [j, o , h, n]
//  9, nhojjones

// 122
// error
// 1-12
// 112

// console.log("0 || 1 = "+(0 || 1)); 
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

function getAllDesc(el){
    let arr = [];
    for (let child in el){
        arr.push(child);
        if(child.children){
            arr.push(child)
        }
    }

}