// const tinderUser=new Object()//singleton
//console.log(tinderUser);//{}
const tinderUser={}//non singleton(literals)
console.log(tinderUser);//{}
tinderUser.id="123abc"
tinderUser.name="sammy";
tinderUser.isLoggedIn=false
//console.log(tinderUser)
// console.log(Object.keys(tinderUser));//datatype:array
//console.log(Object.values(tinderUser));//datatpye:array
// console.log(Object.entries(tinderUser));//datatype:array[key,value] pair
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true;
//object inside object
const regularUser={
    email:"vararaghuram002@gmail.com",
    fullname:{
        userfullname:{
                firstname:"ram",
                lastname:"raghu"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

//combine Object
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);// obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3=Object.assign(obj1,obj2)//first argument is taget,remaining argument are source and  all source object are copied in to target 
//const obj3=Object.assign({},obj1,obj2)//better notation since target is {}, obj1 ,obj2 are copied in to {}
// console.log(obj3);
//object assign mdn(documentation)

const obj3={...obj1,...obj2}//spread operator
//console.log(obj3);

const user =[
    {
    id:1,
    email:"vararaghuram"
    },
    {

    },
    {

    }
]
user[1].email
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course //otherway to acess

// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);//to make name short

//json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]