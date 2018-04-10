display=document.getElementById("display")
//no pude quitar el cero
display.innerHTML.substring(1, 8)

//numeros
document.getElementById('1').addEventListener("click", function() {
    console.log("1")
    display.textContent=display.textContent+"1";
    });
document.getElementById('2').addEventListener("click", function() {
    console.log("2")
    display.textContent=display.textContent+"2";
    });
document.getElementById('3').addEventListener("click", function() {
    console.log("3")
    display.textContent=display.textContent+"3";
    });
document.getElementById('4').addEventListener("click", function() {
    console.log("4")
    display.textContent=display.textContent+"4";
    });
document.getElementById('5').addEventListener("click", function() {
    console.log("5")
    display.textContent=display.textContent+"5";});
document.getElementById('6').addEventListener("click", function() {
    console.log("6")
    display.textContent=display.textContent+"6";
    });
document.getElementById('7').addEventListener("click", function() { 
    console.log("7")
    display.textContent=display.textContent+"7";
    });
document.getElementById('8').addEventListener("click", function() {
    console.log("8")
    display.textContent=display.textContent+"8";
    });
document.getElementById('9').addEventListener("click", function() {
  console.log("9")
  display.textContent=display.textContent+"9";
    });
document.getElementById('0').addEventListener("click", function() {
    console.log("0")
    display.textContent=display.textContent+"0";
    });


 //signos
document.getElementById('punto').addEventListener("click", function() {
    console.log(".")
    document.getElementById("display").innerHTML=+".";
    display.textContent=display.textContent+".";
    });
document.getElementById('on').addEventListener("click", function() {
        console.log(" ")
        document.getElementById("display").innerHTML=+" ";
       
        });

document.getElementById('mas').addEventListener("click", function() {
            console.log("+")
            operacion="+"
            valorUno=display.textContent;
            console.log("este es el valor1 de la suma " +valorUno);
         limpiar() 
});
document.getElementById('menos').addEventListener("click", function() {
    console.log("-")
    operacion="-"
    valorUno=display.textContent; 
    console.log(valorUno);
 limpiar() 
});
document.getElementById('por').addEventListener("click", function() {
    console.log("*")
    operacion="*"
    valorUno=display.textContent; 
    console.log(valorUno);
 limpiar() 
});
document.getElementById('dividido').addEventListener("click", function() {
    console.log("/")
    operacion="/"
    valorUno=display.textContent; 
    console.log(valorUno);
 limpiar() });





document.getElementById('igual').addEventListener("click", function() {
    console.log("=")
    valordos=display.textContent;
   operaciones();
});
  //operaciones*****************************************************************    
function operaciones(){
    if(operacion=="+"){
        resultado=(valorUno)+(valordos);
        console.log("el resultado de la suma es "+ resultado);
        document.getElementById("display").innerHTML=resultado; 
    } 
    else if (operacion=="-"){
        resultado=(valorUno)-(valordos);
        document.getElementById("display").innerHTML=resultado; 
        console.log(resultado);
    }
    else if (operacion=="*"){
        resultado=(valorUno)*(valordos);
        document.getElementById("display").innerHTML=resultado; 
        //display.innerHTML.substring(1, 8)
        console.log(resultado);
    }
    else if (operacion=="/"){
        resultado=(valorUno)/(valordos);
        document.getElementById("display").innerHTML=resultado; 
        console.log(resultado);
    }
}

function limpiar(){
        document.getElementById("display").innerHTML=+" ";}


  //eventos
//lo intente y lo intente pero  no me dio nunca...
 //mando asi porq fue hasta donde pudo y los tutores no dan mucha ayuda por ser la evaluacion final



 
































 
  

  