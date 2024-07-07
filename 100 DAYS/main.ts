// function  makeAdder(valueToAdd : number ) : (x)  => number {
//     return function (number :number ) : number {
//         return number + valueToAdd;

//     };
// }
// let addfive = makeAdder(5);
// console.log(addfive(6));

// let userprofile = ( function() {
//     let name = "Ali";
//     let age =55;


//     return {
//         plyinfo: function (){
//             console.log(`Name : ${name}  ,age : ${age}.`);
//         }
// //     };
// // })();


// let obj = {
//     languages : ["javascript"," Typscript" ," python"],
//     framework : ["Rect " , "Angular"],
//     Tools :["Git","webpack","docker"],
// };
//     let { languages, framework ,Tools } = obj;
//     // console.log`languages : ${languages[2]} , framework: : ${framework[2] } , Tools :${Tools[2]}`

//     console.log(obj)



// enum vType {
//     car,
//     truck,
//     cycle,
// }

// console.log("vType.vType[car]");

// interface stdnt {
//     name : string;
//  age : number;
// course : string[];
// }

// let stdnt : stdnt = {
// name : "ALI",
// age :34,
// course:["MAth" ,"English","Sci","s.st"],

// }
// console.log(stdnt)

// type shape ={
//     kind : "circle" | "rectangle";
//     radius ?: number;
//     width ?:number;
//     height? : number;
// };

// let circle : shape ={
//     kind: "circle",
//     radius : 5
// };

// let reactangle : shape ={
//     kind : "reactangle",

//     width : 5,
//     height : 3
// };

// console.log(circle);
// console.log(reactangle);


// function mixnumber (text : "string" , number : number) : string {

//     return text + number;


// }

// console.log(mixnumber("Age :" , 30));


// function remnder ( num1: number , num2 : number){
// return num1 %num2;
// }

// console.log(remnder (5,2))

// function chckboolean (val1 : boolean, val2 : boolean) : boolean{
//     return val1 && val2 

// }
// console.log(chckboolean(true ,false));

// function cool( num1 : number, numberstring : string) : number{
//     return num1 + Number(numberstring);

// }

// console.log(cool(10 , "5"))

// function mutplydeci (num1 : number , num2 : number) : number{
//     return Math.round((num1 * num2) * 100) / 100;

// }
// console.log(mutplydeci(0.2,0.3))


// function dividreminder (dividend : number , divisor : number ):{quo : number, reminder : number}{
// let quo = Math.floor(dividend / divisor);
// let reminder = dividend % divisor
// return {quo ,reminder};
// }

// console.log(dividreminder(10,3));

// function vool (){
//     for (let i = 1 ; i <= 5 ; i++)
// console.log(i);
// }
// vool();




// try {} catch(){}

// console.log("a")
// try{
// // let b= "ALI";
// console.log(b)
// }
// catch(error){
//     console.log("Error")
// }

// console.log("c");


// function f1 (){
//     try{
//     for (let i = 0 ; i < 5 ; i++){
//     console.log(a);
//     }
// } catch (error){
//     console.log("Error in loop");
// }
// }
// f1();


// let age  =25;
// age = 26;
// console.log(age);

// const name1 = "ALi";
// try{
//     name1 ="bob";
// }
// catch(error){
//     console.log("Error in system")
// }
// {
//  let blockLet = "visible inside the block";
// const blockConst = "also only inside the block";

// console.log(blockLet);
// console.log(blockConst);
// }


// try {
//     console.log("blockwww");
// }
// catch(error){
//     console .log("blockLet is not acesseible outside the block.")
// }
// try{
//     console.log("blockConst");
// }
// catch (error){
//     console.log("'blockConst' is not accessesble outside the block.");
// }



// function swap(){
//     let a =5, b=10;
//     console.log("Befor swap: a =",a, "b=",b);

//     let temp =a;
//     a = b;
//     b = temp;

//     console.log("after swap :a =",a ,"b=",b);
// }
// // swap();

// function update(){
//     let number =10
//     console.log("initial value :",number);
//     number =20
//     console.log("UPdatedvalue :", number);
// }
// update();

// function compund (){
//     let x =4;
//     console.log("initial x:", x);

//     x +=2;
//     console.log(" after  addition:" , x);

//     x -=1;
//     console.log("after subtraction :" , x);
//     x *= 3;
//     console.log("after Multipilication:" ,x);

//     x /= 2;
//     console.log("After Division:", x);
// }
// compund();


// function cool (num1 : number , num2: number) : number{
//     return num1 + num2;
// }

// console.log(cool(5,5));
// cool();

// function greet ( name : string ="Anomous"){
//     console.log( `Hello, ${name}!.`);
// }
// console.log(greet("ALI"));
// greet();

// function sqrdeceleration(number : number) : number{
//     return number * number;
// }

// const sqrExpress= function(number : number): number{
//     return number* number;
// };
// sqrdeceleration();

// let obj ={
//     make : "Toyota",
//     model: "Corrola",
//     year:"2020",
// };

// console.log(obj.model);

// let car ={
//     make : "Toyota",
//     model: "Corrola",
//     year: "2020"
// };

// car.color = "blue";
// car.year = 2021;

// // console.log(car);

// function objproprty(obj :object){
//     for (let proprty in obj) {
//         console.log(`${proprty}: ${obj[proprty]}`);
//     }
// }
// // objproprty({make :"TOYOTA",model:"CROLLA",year:2021,color:"BLUE"});

// function stringLength(str : string) : number{
//     return str.length;
// }
// console.log(stringLength("ALI"));

// function convrtcase (str : string){
//     let upstr = str.toUpperCase();
//     let lowstr = str.toLowerCase();

//     console.log("upcase:",upstr , "Lowercase:", lowstr);


// }
// //  convrtcase("Hello World");

// function replacejavascriptwithtyp(sentence : string) : string{

//     return sentence.replace(/javascript/g , "typ");

// }
// console.log(replacejavascriptwithtyp("I  LOVE typ AND typ IS AWESOME!"));



// function findcode (str : string): number{
//     return str.indexOf("Code");
    
// }
// console.log(findcode("LEARN TO CODE WITH JAVASCRIPT."));

// function cool (str : string): boolean {
//     return str.includes ("javascript");

// }
// console.log(cool("I LOVE CODING IN javascript."));

// function tenchar(str : string) : string {
//     return str.substring(0,10);

// }
// console.log(tenchar("Hello , Javascript World!."))

// function roundnum (num : number) : number{
//     return Math.round(num);
// }
// console.log(roundnum(4.7));
// // console.log(roundnum(4.4));

// function convrtstr (str : string) : number{
//     return parseFloat(str);
// }
// console.log(convrtstr("123.45"));
// console.log(convrtstr("98"))

// function nanvalue (value : any) : boolean{
//     return isNaN(value);

// }
// console.log(nanvalue("hello"));
// console.log(nanvalue(123))

// let arr: string [] = ["Apple", "Orange", "Banana"];
// arr.push("Mango");

// console.log(arr)

// function  replace ( fruits : string[]):void {
//     const index = fruits.indexOf("Apple");
//     if (index !== -1) fruits[index] = "cherry";
// }

// const fruits: string[] = ["Apple", "Banana", "Orange"];
// replace(fruits);
// console.log(fruits);

// const x : string[] = [ "TYpscript", "WOrd", " HEllo"];
// const lengths: number[] = x.map (x => x.length)

// // console.log(lengths);

// function greater (number : number[]): number [] {
//     return  number.filter(x => x > 10)

// }

// const numbers : number[ ] = [ 5,10,15,20,25];

// console.log(greater(numbers));

// function reduce (numbers : number[]) : number{
// return numbers.reduce((accumulate , current) => accumulate+ current,0);
// }

// const numbers :number[] = [1,2,3,4,5,6];
// console.log(reduce (numbers));

// let  myDate  = new Date()

// console.log(myDate.toString());
// console.log(myDate. toDateString());
// console.log(typeof myDate);


// const sqrt : number = Math.sqrt(144);

// // console.log(sqrt);

// function random() : number{
//     return Math.floor(Math.random() * 10) + 1 ;
// }
// // console.log(random());

// const diff : number = Math.abs(-5-5);
// console.log(diff);

// function boolean () : boolean{
//     return Math.random() > 0.5;
// }
// console.log(boolean());


// function code () : string {
//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF) . toString(16).padStart(6, '0');

//     return color;
// }
// //     console.log(code());

// function dice () : number{
//     return Math.floor(Math.random() *6) +1;

// function fight (str1 : string , str2 : string) : boolean {
//     return str1.toLowerCase() === str2.toLowerCase();""
// }
// console.log(fight("hello" , "Hello"));
// console.log(fight("world" , "word"));

// const currentTime = new Date();
// if (currentTime.getHours() < 12){
//     console.log("GOOD MORNING");
// }

// function grade (score : number) : string {
//     if(score >=90){
//         return "A";
    
//  } else if(score >= 80){
//             return "B";
        
//  }else if (score >= 70 ){
//                 return "C";
            
//   } else if (score >= 60 ){
//                     return "D";
                

//                 } else {
//                     return "F";
//                 }
//             }

//             console.log(grade (85));
//             console.log(grade (55));


// function age (age :number) : string{
//     if (age < 13){
//         return "Child";
//     }else if (age <= 19){
//         return "Teen "
//     }else{
//         return "adult";
//     }
// }

// console.log(age(12));
// console.log(age(18));
// console.log(age(25));

// const countries = new Map <string ,string> ();

// countries .set("USA", "Washing ,DC" );
// countries.set("France", "Paris");
// countries.set("JAPAN" ,"Tokoyo");

// console.log(countries);
            
// function capital(countries : Map <string , string>) : void{
//     if (countries.has("Canada")){
//         console.log(`the capital of canada is {countries.get("Canada))}`)
//     }else{
//         console.log("Canada is not in the map.");
//     }
// }
// capital(countries);

// const students = new Map<number ,string>();
// students.set(1,"ALI");
// students.set(2,"BOb");
// students.set(3,"ZAIN");

// students.forEach (name , id) => {
//     console.log(`studentID: ${id} , ${name}`);
// }


// function logdyweeek(dayNumber : number) : void{
//     switch(dayNumber){
//         case 1:  case 2: 

        
//         console.log("Monday")
//         console.log("SUNDAY")
//         break;

        // case 3:
        
        // console.log("TUesday")
        // break;

        // case 4 :
            
        // console.log("Wednesday")
        // break;

        // case 5 :
        
        // console.log("Thrusday")
        // break;

        // case 6 :

        
        // console.log("FRIDAY")
        // break;

        // case 7 :
            
//         // console.log("Saturday")
//         // break;

//         default :
//         console.log("invalid day number");
//         break;


//     }

// }

// logdyweeek(2)


// function season (month : number): void {
//     switch (month) {
//         case 12:
//         case 1 :
//         case 2 :
//         console.log("winter");
//         break;

//         case 3 :
//         case 4 :
//         case 5 :
//         console.log("spring");
        // break;

        // case 6 :
        // case 7 :
        // case 8 :
        // console.log("summer");
        // break;

        // case 9 :
        // case 10 :
        // case 12 :
        // console.log("Fall");
        // break;

        // default :
        // console.log("invalid Input");
        // break;




//     }

// }
//    season(1)     
    

    // for (let i = 1 ; i <= 10 ;i ++){
    //     console.log(i)
//     // }

//  let count : number = 0;

//  while(count < 5){
//     console.log("Hello , World!");
//     count++
//  }

// for (let i = 1 ;i <= 10 ; i++){
//     if (i===5 ){
//         continue;
// }
// console.log(i);
// }

// let counter : number =10;

// while(counter > 0){
//     if(counter === 5){
//         break;
    

// }
// console.log(counter);
// counter --;
// }

// function vowels (str :string): void {
//     const vowels = "aeiouAEIOu";
//     for (const char of str){
//         if(vowels .includes(char)){
//             console.log(`First vowel found : ${char}`);
//             break;
//         }
//         console.log(char);
//     }

// }

// vowels("syzygy");

// const person ={
//     name : "ALI",
//     getName : function(){
//         return this.name;
//     },
// };
// // console.log(person.getName());

// const angle ={
//     lentgh : 4,
//     width:5,
//     area : function(){
//         return this.lentgh * this .width;
//     },
// };

// console.log(angle. area());


// const myobj ={
//         property :"value",
//         outerMethod :function(){
//                 console.log(this.property);
//                 const innermethod=() =>{

//                 console.log(this.property);
//         };
//         innermethod();
// },
// };

// // myobj.outerMethod();

// const trad = function (a,b){
//         return a + b ;

// };
// const arrow = (a , b) => a+b;

// // console.log(trad(5,3));
// console.log(arrow(5,3));

// const multipl = (...numbers :number[]) =>
//         numbers.reduce((total ,number) => total *number,1);

// console.log(multipl(2,3,4));

// const vs = {
//         value : "traditionalvsarrow value",


// trad : function () {
//         console.log("trad :"  ,this.value);
// },
// arrowfunction: () => {
//         console.log("arrow function: ", this.value);
// },
// };
// vs .trad function();
// vs.arrow function();

// import { add } from "./mathFunction";

// // console.log(add(2,3));

// import {person } from "./person";

// const ali = new person ("aLi");
// // ali.greet();


// const person ={
//         name : "ALI",
//         age : 30
//         city: "karachi",
// }

// const jsonstring = JSON.stringify(person);
// console.log(jsonstring);

// const jsonString = `{"name": "ALICE","Age": 30, "CIty": "KArachi}`;

// const person = JSON.parse(jsonString);

// // console.log(person);

// const person = {
//         name : "ALI",
//         age: 30
//         city:"KARAchi",
// };

// const jsonString = JSON.stringify(person, null ,2);

// // console.log(jsonString);

// try {
//         // let a= "e"
//         console.log(a)
// }catch (error) {
//         console.log(error);

// // }

// try {
//         lett  a = "e"
//         console.log(a)

// }catch(error){
//         console.log(error);
// // }

// let count = 5;
// if (count > 0){
//         console.log("count is greater than 0");
// }

// let if  =5 
// console.log( " using reserve word  as a variable name causes a syntax error i javascript.");

// async function  fetchData() {
//         const  data = await fetchSomething();
//         // console.log(data);
// }
// //    console.log(data);

// const helloPromise  = new Promise<string>((resolve) =>{
//         setTimeout(() => {
//                 resolve("hello, World!");
//         },2000);

// });
// helloPromise.then((message) =>console.log(message));

// const condPromise = new Promise ((resolve,reject) =>{
//         const success = Math.random() > 0.5;
//         if (success){
//                 resolve("Success!");
//         }else{
//                 reject(new Error("Failur"));
//         }
// });

// condPromise
// .then((result) =>console.log(result))

// .catch((error) =>console.log(error. message));

// const Promise1 = Promise.resolve(3);
// const Promise2 = 42;
// const Promise3 = new Promise((resolve) =>{
//         setTimeout(resolve , 100, "foo");
// });
// Promise.all([Promise1, Promise2, Promise3]).then((values) => {

// console.log(values);
// });

// setTimeout(() => {
//         console.log("This meassage is shown after a 2 -second delay.");
// }, 2000);

// console.log("strat");

// setTimeout(() =>{
//         console.log("callback");
// },0);

// console.log("End");


// function executecallback (
//         callback: (arg1 : number , arg2: number) => void,
//         arg1 :number,
//         arg2:number
// ):void{
//         callback(arg1,arg2);
// }

// const add  =(a :number , b:number)=>{
//         console.log(a+b)
// }
// executecallback(add,5,3)

// const numbers : number[] = [1,2,3,4,5,6,7,8,9,10];

// const filterNumbers: number[]= numbers.filter    
// ((number) => number> 5);

// // console.log(filterNumbers);

// function fetchData(
//         callback:(error: Error|null,data?: string)=> void
// ):void{
//         const error = new Error("failed to fetch data");
//         const data = "some data";

//         if(Math.random()>0.5){
//                 callback(null,data);
//         }else{
//                 callback(error);
//         }

// }
// fetchData ((error,data) =>{
//         if(error){
//                 console.error(error.message)
        
//         }else{
// //                 console.log(data);
// //         }
// // })

// let a= 1
// let b= 2

// setTimeout(() {
//         console.log("ALI")
// },2000)

// console.log("sync")
// console.log(a)
// console.log(b)

// console.log("Before");
// for(let i =0 ;i<1e9; i++){
//         console.log("After")
// }

// console.log("BEfore asy");
// setTimeout(()=>{
//         console.log("after achornous")
// // }, 1000)

// let a = "Wajeeha"
// // console.log("Wajeeha")

// function cool( name1 : string) : string{
//       return name1
      
// }

//   let name1= cool("wajeeha");
// console.log(name1); 



// let mynumber : number = 42
// let mystring: string= "ALI";

// console.log("My number is :", mynumber);
// // // console.log("My string is :",mystring);

// // let mynumber :number
// // let mystring:string

// // mynumber = 43
// // mystring= "HEllo Typscript"

// // console.log("My Number is:" mynumber);
// // console.log("MYstring is: ", mystring)

// // let greet = "Hello, World!";
// // console.log(greet);

// // let myvar : any =43
// // myvar= "Hello Tyscript";
// // console.log(myvar)

// let person1 :{
//         name:string;
//         age:number;
//         jobTitle?: string;
//         address:{
//                 street:string;
                
//                 };
//         };


// person1 = {
//         name:"ALI",
//         age:23,
//         jobTitle: "Engr",
//         address :{
//                 street:"123 pkak", 
                
//         },
// };

// function rectarea (long: number, width :number): number{
//         return long* width

// }
// const long = 5;
// const width = 3;

// const area = rectarea(long ,width);
// console.log(`The area of the reactangle is : ${area} `)

// function opt (name : string, age?: number){
//         if (age !== undefined){
//                 console.log(`Hello ,${name}! you are ${age} years old .`);
//         }else{
//         console.log(`HEllo , ${name}!`);
//         }
// }
//         opt("ALI");
//         opt("BOB", 30)

// function vool(name : string, age:number = 25){
//         console.log(`HEllo , ${name}! u r ${age } years old.`);
// }
// vool("ALI");
// vool("BOB", 30);
// vool("ZAIN")

// function all (...nums: number[]): number{
//         let result =0;
//         for (let i = 0; i< nums.length; i++){
//                 result+= nums[i];
//         }
//         return result;
// }

// console.log(all(10,20,30,40,50,60,70, +true));


// const arrow = (num1 : number,num2:number) :number =>num1+num2
// console.log(arrow(10,20));

// const add = function(num1 :number,num2 :number):number{
//         return num1 + num2
// };
// console.log(add(10,20));

// function greet (name :string):void {
//         console.log(`Hello, ${name}!`);
// }

// function no(): void{

// // }
      
// function error (messge : string): never{
//         throw new Error(messge);
// }

// function loop(): never{
//         while(true){

//         }
// // }

// let myvar :string|number;

// // myvar= "Hello";
// // console.log(myvar)

// myvar= 42;
// console.log(myvar)

// let dir : "left"|"Right"|"up"|"down"

// let user :string |null = "ALI"
// let age : number|null;

// function user (userName : string |null){
//         if (userName ===null){
//                 console.log("HEllo,Guest!");
//         }else{
//                 console.log(`Hello, ${userName}!`)
//         }
        
// }

// user("ALi");
// user(null)

// type FirstType = {
//         name :string;
//         age: number;
// };

// type SecondType ={
//         address : string;
//         phone: number
// };

// type CombineType = FirstType & SecondType;

// const Person: CombineType = {
//         name: "ALi",
//         age:33
//         address:"123 Main",
// //         phone: 12334566,

// // }
// console.log(Person.age)

// let Fruits: string[] = ["Apple", "Mango", "Orange"];
// for(let i =0 ; i< Fruits.length; i++){
// //         console.log(`x:${Fruits[i].toUpperCase()}`);
// // }

// let arrone : number[] = [1,2,3,4,5];
// let arrtwo :string[] =["a"," B" , "c"];
// let arrthree :(string| number)[] = [1,2,3,4,5,"A","B","C"]

// let art : readonly [number , string,boolean ] = [11, "ALI", true]

// art = [12,"zain",false];

// art.push(100);
// console.log(art);

// enum Days {
//         SUNDAY,
//         Monday,
//         TUesday,
//         Wednesday,
//         Thrusday,
//         FRIDAY,
//         Saturday,
        
// }

// const today : Days = Days.Wednesday;
// console.log(`TOday is ${Days[today]}`);

// console.log(Days[5]);

// type mystring = string;
// let myName :Mystring = "ALI";

// type mystringornumber = string|number;
// let myvalue : MystringorNumber = 10;


// type Person ={
//         name :string;
//         age:number;
//         email?:String;
// };
// const alice : Person={
//         name : "ALI",
//         age:30,
//         email: "aLI@gmail.com",
// };
// const bob : Person ={
//         name:"Bob",
//         age:25,
// };
// console.log(alice);
// console.log(bob)

// type employee ={
//         name : string
//         age:number
//         email?:string
// };
// const alice :employee={


// name: "ALI",
// age:30,
// email:"ali@gmail.com"
// };

// const bob:employee ={
//         name:"BOB",
//         age:30
// };
// console.log(alice);
// console.log(bob)


// interface person2{
//         name: string;
//         age: number;
//         greet(message :string) : void;
// }

// const ALI : person2 = {
//         name: "ALI",
//         age:34,
//         greet(message : string){
//                 console.log(`${this.name} says : ${message}`);
//         },
// };

// ALI.greet("HELLO, TYPScript!");

// interface settings {
//         readonly theme :boolean;
//         font:string;
// }

// interface settings{
//         sidebar : boolean;
// }

// interface settings{
//         external : boolean;
// }

// let user : settings = {
//         theme : true,
//         font: "Open Sans",
//         sidebar: false,
//         external : true
// };

// console.log(user.font)












        





