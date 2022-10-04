
let a1 ="1 hayder " ;
console.log( +a1 - +a1);
console.log(+a1 + a1 );
console.log(Number(a1)+Number(a1) );
console.log( parseFloat (a1))
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isInteger(a1))
let g = Math.PI;
console.log(a1)

for (let i = 0; i<=6; i++) {
   console.log(` ${i}`  )
    
}
console.log(`fini`)

// for( i = 0 ; i<=5; i++){
//     console.log(` ${i}`  )}


// let t = 0;
// while(t< nom.length){
//     console.log(`majus  ${nom[t]}`  );
//     console.log(`mini ${nom[t].toLowerCase()}`);
//     console.log(`---------------------------------`);
//     t++;
// }
// console.log(`fini`);

// let nom = ["Haydar","Biba","Asil"];
// for (let i = 0; i < nom.length; i++) {
//     console.log(`maj: ${nom[i]}`);
//     console.log(`mims:${nom[i].toLowerCase()}`);
//     console.log(`******************************`);
//     i++;
    
// }
// console.log(`fini`);

// if (condition) {
    
// } else {
    
// }
// var jab = document.getElementById("city");
// jab.addEventListener("change",function(){
// var zebi = document.getElementById("city").Value;
// document.getElementById("del").innerHTML= zebi;

// });


// object...

let person = {
    nam:'haydar        ',
    h : '25',
}
console.log(person);
document.write(`${person.nam}<br>`);
document.write(`${person.h}<hr>`);
// لتغير الخاصيه للاوبجكت
person.nam="ali"
console.log( `"gfbg" ${person.nam}`);
// document.write(`${person.nam}<br>`);
// Array
let selctcolor=['red ','blue',];
selctcolor[3]='blackl';
console.log(selctcolor[2]);

let contru = ['irak','najaf','basrha','belge'];
document.write(contru.join('\\\\'));
console.log(contru.join("===/////"));
// function

function haydat(){
    console.log('hello  hfhfzorkld');
}
haydat();

// // تمرير خاصيه للدالة
function haydat(nam,nom){

    console.log( `hi ${nam},${nom}`)
}
haydat('haydar','jaber');
haydat('kase;','ja');

// // دوال ترجع قيم   //نستطيع اعطاء قيمه مباشؤه او وضع الرتيرن داخل متغير
function multi(number){
return number +number/number;
}
let result = multi(5);
console.log(result);
console.log(multi(50));

// if statusbar;ent

let nam = 'haydar';
let pass = 12345;
if ( nam ==='haydar'&&pass===12345){
    console.log('wellcom zedi');
}
else{
    console.log('kus ahjtj');
}

// switch
// let yu='haydar.salman@yahoo.co';
// switch(yu){
//     case 'haydarsalman@yahoo.com' 
//     :ui.innerHTML = ('mets bien un dot svp');break;
//     case 'haydar.salmanyahoo.com'
//     : console.log('le mot de [asse doit etre avec @');break;
//     case 'Haydar.salman@yahoo.com' 
//     : console.log('il faut marque tou en min ');break;
//     case 'haydar.salman@yahoo.com'
//     :console.log('tu as reuisii ');break;
//     default:ui.innerHTML=('essye encore svp');break;
// }
// function gms(zeb,kus)
// {
//     let tez= zeb+kus;
//     return tez;
// }
// let po = gms('hay','jab')
// console.log(po);
function pric(t,r,e)
{
    let y = t*r*e;
    return y;

}

let nat = pric(10,564,500)
console.log(nat);
document.write(`i a  ${nat}`);
console.log('hayda javer \'seal;n\'');
console.log("haydar \nalhuasfgfd \n'hghghghg\' ");

let a = "الس الاخوﻻؤؤي";
let b = "طيةك ";
let c = "haydar "

document.write(a+" \n "+b + c);
console.log(a+" \n "+b + c);

let tetl = 'haydar jaber sal;an';
let pre = ' kjhh'
let spa = `
<div>
    <h1>${a} ${b}</h1>
    <p>${pre}</p>
   </div>

`;
// document.write(spa);
// let kus = "haydat    jaber sal;an";
// console.log(kus.charAt(1));
// console.log(kus.length);
// console.log(kus.trim());
// console.log(kus.trim().charAt(13).toUpperCase());
// ku.innerHTML ="cest moi en or"

console.log(  'ak' !== 'as');
console.log(!(10 ==='10'));
console.log(10=='10'&& 10>8 || 10==50);



let prix = 100;
let discout = false;
let valdis=10;
let vont="irak";
let stude = false;


if(discout == true ){
prix -= valdis;

}
else if(vont ==="irak"){
    if(stude===true ){
       prix-=valdis+30;

 }else{
    prix-= valdis+10;
 }
 }
// console.log(prix);
// ui.innerHTML= prix


// if (condition) {
    
// } else {
    
// }

// if المختصره

let age = 59;
age >20 
? console.log(20)
: age >20 && age <60
?console.log('20 to 60')
: age >60
?console.log('larger then 60')
:console.log('undefinu');


// arry
// let habia =['jasim','kasim','foize','worod','20',400];
// console.log(habia);
// // habia.unshift('kusi','tiwe');
// console.log(habia);
// // habia.push('haydar','allla');
// console.log(habia);
// let kk = habia.shift();
// let jj = habia.pop();
// document.write(`cet deriern nom en arrye: ${kk} `);
// mo.innerHTML = `cest mon : ${kk}`
// ui.innerHTML= `${jj},${habia} `;
// console.log(habia.lastIndexOf('kasim'));


// if (habia.lastIndexOf('kasim')===-1 ){
//     console.log('not fund');
// }
// console.log('wellcom');

// switch (habia.lastIndexOf===-1){
//     case 'kasim':document.write('zeellcom'); break;
//     case ' kasi;':document.write('not fund');break;
//     default :document.write('tre adinr');break;


// }
// console.log(habia.sort());
// console.log(habia.reverse());
// console.log(habia.slice(0,2));
// habia.splice(1,0,'oiuiui','hfyfytf');
// console.log(habia);



// loop

let hiba =['jasim','kasim',56464,true,'foize',5544,
          'worod',20,400,564,8578,'jaber','salman'];
let newhi = [];
for(let i = 0; i < hiba.length ; i++){
// console.log(hiba[i]);
if (typeof hiba[i]=== 'string'){
newhi.push(hiba[i]);
}
}
document.write(` *****mis a jour: ${newhi}`)
console.log(newhi);


let prodecte = ['bmw','volswacn','volvo',1212,546,'skoda','opel'];
let coloere =['blanc','noir','gry','red'];
let modele = [2020,2022,2021,'hggu','uytuyt',2050];
for( let i = 0; i< prodecte.length; i++){

    if (typeof  prodecte[i]==='number' ){
        continue;
    }

    console.log('#'.repeat(15));
    console.log(`** ${prodecte[i]}`);
    console.log('#'.repeat(15));
    console.log('   colore:');
    for (let j = 0 ; j<coloere.length; j++){
        
        console.log(`*** ${coloere[j]}`);
    }
    console.log('  moderl:');
    for (let k = 0 ; k<modele.length;k++){
        if(typeof modele[k] === 'string'){
            continue;
        }

        console.log(`*** ${modele[k]}`);

    }
}
// الكتابه داخل المتثفخ
let prodect = ['bmw','volswacn','volvo','skoda','opel'];
let coloer =['blanc','noir','gry','red'];
let compt = 5 ;

// document.write(`<button id = "bt"> clik her </button>`)
document.write(`<h1> je vous montre ${compt} article </h1>`);
for(let i = 0 ; i<compt; i++){
    document.write(`<div>`);
    document.write(`<h3>[${i+1}] ${prodect[i]}</h3>`);
  for ( let j= 0 ; j< coloer.length ;j++){
    document.write(`<p> ${coloer[j]}</p>`);
  }
    document.write(`</div>`);
}
// function
function hab(userNme = "invalid" , nom = 'UNCONU NOM' ){
// document.write(` <img src="/55.png" width="100" >`)
document.write(`<h1>  hello ${userNme} ${nom}  </h1> `)
}
hab('haydar' ,'jaber');
hab();


function bhyer(start , end , hy='unkon'  ){
    for(  let i = start ; i < end ; i++){

//  if (i=== 15 ){
//             return;
         
//         }
    
        document.write(`${i}<br> `)
    }
    
}
bhyer(10,20);
       

// reste parentmetre function areey

// function calc(...num){
// // console.log(Array.isArray(num));

// let reu=0;
// for(let i = 0 ; i <num.length ;i++){
// reu+= num[i];
// }
// return ` cest un resulta f ${reu}`;
// }

//  document.write(calc(2,8,5,6,654,6544,));

function calc(...num){
let x=0;
for(let i = 0 ; i <num.length;i++){
    x+= num[i];
}
return x;
}
console.log(calc(10 ,20 ,50,-50));


//********************************************* */
function showinf(us ="non",ag ="non",pri="non",show = 'yes',...skil){
    document.write(`<div>`);
    document.write(`<h2> helle, ${us} </h2>`);
    document.write(`<p>ton age:  ${ag} </p> `);
    document.write(`<p> prix un heure:  $${pri} </p>`);
    if (show==='yes'){
        if (skil.length >0){
            for(let i = 0 ; i < skil.length ;i++){
                document.write(`<p>ton skile: ${skil[i]} </p>`);
            }
            
        }else{
            
                 document.write(`<p> non le skil</p>`);
            
           
        }
       
    }else{
        if (skil.length !=0 || show ===" "){
              document.write(`<p> ton skil est invisible </p>`);

        }else{
            document.write(`<p> non de skil</p>`);
        } 
    }


    document.write(`</div>`);
}
showinf('haydar',50,20, 'yes')
showinf('fghfh',50,20, '',656464)
showinf('345345435435',50,20, 'yes',656464)


//************************** */
function showdetil(a,b,c){

    if(typeof a ==='string' && typeof b === 'number'&& typeof c === "boolean"){
         console.log(`hello ${a} your age is ${b} you are is avilable ${c}`)  
            }else{
             if (typeof a === 'number'&& typeof b ==='string'&& typeof c ==='boolean'){
                console.log(`hello ${b} your age is ${a} you are is avilable ${c}`)
             }else{
              if (typeof a === 'boolean' && typeof b ==='number'&& typeof c === 'string' ){
                console.log(`hello ${c} your age is ${b} you are is avilable ${a}`)
              }else{
                if (typeof a === 'boolean' && typeof b ==='string'&& typeof c === 'number' ){
                    console.log(`hello ${b} your age is ${c} you are is avilable ${a}`) 
                }else{
               if (typeof a === 'string' && typeof b ==='boolean'&& typeof c === 'number' ){
                console.log(`hello ${a} your age is ${c} you are is avilable ${b}`)
                    } else{
                 if (typeof a === 'number' && typeof b ==='boolean'&& typeof c === 'string' ) {
                    console.log(`hello ${c} your age is ${a} you are is avilable ${b}`)
                 } 
                    }
                }
              }
             }
            }
};

showdetil('haydar',20 , true)
showdetil(520 ,"haydar",true)
showdetil(true ,25,'hayder')
showdetil( true,"haydar",520)
showdetil( "haydarj", true,52)
showdetil( 55, true,'jasim')



//******************************* */
let hour = new Date().getHours()  ;
let min = new Date().getMinutes();
let greeting ;
  if (hour < 20) {
    greeting = `helle Good day ${hour}heure ` ;
  } else {
    greeting = `hello Good evening  il est : ${hour}heure : ${min}minute  ` ;
  }
// document.getElementById("demo").innerHTML = greeting;
// let j = new Date().getDay;


                //*************MAP**************** */

let mynum = [1,2,3,4,5,6];
let newarrey = [];
for(let i = 0 ; i < mynum.length ; i++){
newarrey.push(mynum[i]+ mynum[i]); 
}
console.log(mynum);
console.log(newarrey)

//// with map
let addself = mynum.map(function(ele){
    
    
    return ele+ele;});
// console.log(`ele  ${ele}`);
// console.log(`ind  ${ind}`);
// console.log(`err  ${err}`);
// console.log(`this  ${this}`);
console.log(addself);

// let addself = mynum.map((ele)=> ele + ele );//// نفس الطريقة الي فةك مختصره
//     console.log(addself);

////// الطريقى الثاله لاستح\امالماب

function addetion(ele){
   return  ele+ele;
}
let add= mynum.map(addetion);
console.log(add);

//// تمارين
let sewpcase= 'HAYdar';
let invrsnum = [1,2,5,-6,50,-10,66,33,150,10];
let ingre="hay526dar5488j";

let sw = sewpcase.split("").map(function(ele){ //  sewpcase.split("") تحوبل المتغير الى مصفةفه نستخزم سبليت
                      //condition    ? tru:false ;
return ele === ele.toUpperCase() ? ele.toLowerCase() :ele.toUpperCase();
   
}).join("");
console.log(sewpcase);
console.log(sw);

let inv = invrsnum.map(function(ele){
return -ele;
})
console.log(invrsnum);
console.log(inv);

let ing= ingre.split("").map(function(ele){

     //condition    ? tru:false ;
    return isNaN(parseInt(ele))? ele  :"" ; // لترجيع الاحرف \داله مهمه

}).join("");
console.log(ing);

// arrow function
let inve = invrsnum.map((ele)=> -ele );
console.log(inve);



function hay(yur){
    return yur >= 10 ?  "??" : yur
}
let u = invrsnum.map(hay);
console.log(u);


// function addetion(ele){
//     return  ele+ele;
//  }
//  let add= mynum.map(addetion);
//  console.log(add);

////////// fliter
let sentnce = "thqnkuyd i love my loverist habiba habi so much";
let sen = sentnce.split(" ").filter(function(el){
    return el.length <= 4;
}).join(" ");
    console.log(sen);
//********* */
let mix = "asd1254io";
let mixcunt = mix.split("").filter(function(elei){
    return !isNaN(parseInt(elei));/// لترجيع الارقام داله مهمه 
}).map(function(elei){
    return elei * elei;
}).join("");
console.log(mix);
console.log(mixcunt);


///////// reduce
let nus= [10,20,15,30];
let aa = nus.reduce(function( ac,cu){
    return ac+cu;
});
console.log(aa);

//// تمارين
let big = ['haydarkk','jabers','alhussini','ja','bib','biba','alhussinihaydar2'];
let chek = big.reduce(function(acc,cu){
    console.log(big);
    console.log(`acc=> ${acc}`);
    console.log(`cu=> ${cu}`);
    console.log(acc.length >cu.length ? acc : cu );
    console.log('==================' );
              //condition    ? tru:false ;
    return acc.length >cu.length ? acc : cu ;
});
console.log(big);
console.log(chek);

/*********** forEache */
// اضافه كلاس للعنصر مع اضافه خاصيه

let allil = document.querySelectorAll("ul li");
let divsec = document.querySelectorAll("div");
allil.forEach(function(ele){
 ele.onclick=function(){
    allil.forEach(function(eleo){
    eleo.classList.remove("active");
    }); 
    this.classList.add("active");
    divsec.forEach(function(elep){
    elep.style.display="none";
    });
 }
});

/////// object
let user={
    nam:'haydar',
    age :25,
    skil:['html','css','js'],
    avlab:true,
    adress:{
       irak:"bagdad",
       turk:{
        on:'istnubl',
        toux:"inkra",
       } ,
    },
    disbonjour:function(){
        if (user.avlab===true) {
     return `good`;
} else {
    return`bad`;
}
    },
};
console.log(user.adress);
///////
///////DOM docment objet model
let mydivid = document.getElementById("myid");
let mydivta = document.getElementsByTagName("div");
let mydivcls = document.getElementsByClassName("ll");
let mydivqury = document.querySelector(".ll");
let mydivquryal = document.querySelectorAll(".ll");
let opti = document.getElementById("ci")

console.log(mydivid);
console.log(mydivta[0]);
console.log(mydivcls);
console.log(mydivqury);
console.log(mydivquryal[1]);

console.log(document);
console.log(document.body);
console.log(opti);
// document.a[0].src="https://google.com";
// document.a.herf="https://www.google.com";



// let myele = document.querySelector(".js");
// console.log(myele.innerHTML);
// console.log(myele.textContent);

// myele.innerHTML=" text from <span> main.js </span> file ";
// myele.textContent=" text from <span> main.js </span> file ";
//  let mylink = document.querySelector(".link");
 

// console.log(mylink.getAttribute("class"));
// console.log( mylink.getAttribute("href"));

// mylink.setAttribute("href","https://www.coursera.org/");
// // mylink.setAttribute("title","twitter.com");



console.log(document.getElementsByTagName("p")[0].attributes); // لاستدعاء ال براكراق مجرد رويه

let myp = document.getElementsByTagName("p")[0];
if (myp.hasAttribute("data-src")){    // لمعرقه هل يىجد خاصيه 
    if(myp.getAttribute("data-src")===""){
myp.removeAttribute("data-src");
    }else{
        myp.setAttribute("data-src","neux valu");
    }
}else{
console.log("notfund");
}
if(myp.hasAttribute()){
console.log(`has intrubut`);
}
if(document.getElementsByTagName("div")[0].hasAttribute()){
    console.log(`has intrubut`);
}else{
    console.log(`has not div intrubut`);
}