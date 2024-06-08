const myNums = [1, 2, 3]
// initial value 0 is add to acc,cur=1 =>acc=acc+curr=0+1=1 , acc=acc+curr=1+2=3 ,acc=3+3=6;
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
//output:-6

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)//6 initial value 0 is add to acc,cur=1 =>acc=acc+curr=0+1=1 , acc=acc+curr=1+2=3 ,acc=3+3=6;
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);