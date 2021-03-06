/**
 * 数组去重1
*/
let arr = [2,3,4,4,2,2];
let result = [];

arr.forEach( function(item){
    if(!result.includes(item)){
        result.push(item);
    }
})


/**
 * 数组去重问题。解决方法：数组塌陷问题
 * 
*/

let _arr = [2,3,4,4,2,2];
for (let i = 0; i < _arr.length; i++) {
    const element = _arr[i];
    for (let j = i+1; j < _arr.length; j++) {
        const compare = _arr[j];
        if(compare == element){
            _arr.splice(j,1);
            j--; //防止数组塌陷问题，所有的下标都往前提前了一位
        }
    }
}


/**
 * 数组去重问题。解决方法：数组塌陷问题
 * 
*/
let ary = [1,2,3,4,4,4,3,1];
ary.sort( (a,b)=>a-b);
let str = ary.join("@")+"@";
let reg = /\(\d+@)\1*/g;
let arr = [];
str.replace( reg,(n,m)=>{
    m = Number( m.slice(0, m.length-1));
    arr.push(m);
})

/**
 * ES6 数组去重
*/
let array = [1,2,3,3,2,1];
array = [...new Set(array)];

