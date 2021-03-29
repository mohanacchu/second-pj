
/*************************reduce *************************/
let initail = [1,2,3,4,5,6,7,8,9,0];

// array reduce
// sum of all in the array
var result = initail.reduce(sum)
function sum(acc, val, init){
    return acc + val;
}
console.log(result);

// get maximun in a array

var maximun = initail.reduce(validate, -Infinity)
function validate(acc, val){
    if(acc > val){
        return acc;
    }else{
        return val;
    }
}

console.log(maximun);

// example 3
const store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3
    },
    {
        product: 'desktop',
        value: 1500,
        count: 4
    },
    {
        product: 'mobile',
        value: 500,
        count: 10
    }
]

var total = store.reduce((acc, item)=>{
    return acc + (item.value * item.count)
}, 0)

console.log(total);


/*************************reduce *************************/
