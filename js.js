// var MyOldePrice = 10000,
//     MayNewPrice = 500,
//     Discount = MyOldePrice - MayNewPrice ,
//     myage = " vid " ;
//     document.getElementById("he").innerHTML = Discount + myage;

//     var hayd = "haydar",
//         ageo = 50;
//     if (hayd == "haydar1" && ageo == 150){
//         alert("good");
//     }else{
//           alert("bad");
//     }
      
    function calcpric(){

        var detil = document.getElementById("doll").value;
            val  = detil * 1480,50;
            
        
        if (detil === "" || detil <=0 || detil >10000000){
            document.getElementById("res").innerHTML = "pas de zero , pas de vide , pas de negative SVP "

        }else if (isNaN(detil)) {
            document.getElementById("res").innerHTML = "on accpet juste numreo "

        }else{
            document.getElementById("res").innerHTML = detil +"  dollar  = " + val +" in iraki denar" ;

        }
        
        }


        var myinput = document.getElementById("input"),
            mydiv = document.getElementById("res"),
            myselc =document.getElementById("selc"),
            rest = document.getElementById("rest");
                    
     myselc.onchange = function(){
        mydiv.innerHTML = "cest plus moin" + myinput.value * myselc.value  ;
     };   



// switch

// var lamour = prompt("quel est la miree facon de fair");
//      fl = document.getElementById("res");

//   switch(lamour){

// case "verticll":
//     fl.innerHTML = "goood job";
//     break;
// case "hore": 
//     fl.innerHTML = "no goood job";
//     break;
// default:
//     fl.innerHTML = "trs agiane";
//   }

//   function changcolor(){
        
//   }

var paye = document.getElementById("payes"), 
     najf =document.getElementById("najf"),
     bagdad = document.getElementById("bagdad"),
     babel =document.getElementById("babel"),
     basrah = document.getElementById("basrah"),
     kwut = document.getElementById("kwut"),
     k = document.getElementById("k"),
    result = document.getElementById("result");

    paye.onchange = function(){
        if (paye.value == najf.value){
           result.innerHTML = "cest un ton provence  " + najf.value; 
        }else{
            if (paye.value ==bagdad.value ){
                 result.innerHTML= "tu vis en   " + bagdad.value;
            }else{
               if(paye.value == babel.value){
                result.innerHTML= "cest un ton provence  " + babel.value;
               }else{
                if (paye.value ==basrah.value ){
                    result.innerHTML= "vive basrah seud d irke  " + basrah.value;
                }else{
                    if (paye.value ==kwut.value ){
                        result.innerHTML= "vive kwut east d irke  " + kwut.value;
                    }else{
                        if (paye.value ==k.value ){
                            result.innerHTML=  "   essye encor un fois stp"; 
                        }
                    }
                       
                    
                }
               }
            } 
           
        } 

        
        
        
    };

