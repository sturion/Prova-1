function firstValue(firstValue){
    x=firstValue;
 }
function secondValue(secondValue){
    y=secondValue;
 }
 function thirdValue(thirdValue){
     z=thirdValue;
 }
 function tolerance(tolerance){
     tol = tolerance;
 }
 function mostraResult(){
    res = x+y;
    resFin = res*z;
    if(resFin >= 1000 && resFin < 1000000){
        resFin = resFin/1000;
        tolMax = ((resFin/100)*tol)+resFin;
    tolMin = resFin-((resFin/100)*tol);
        document.getElementById("resultado").innerHTML = ("Resistor é "+ resFin+ "kΩ com tolerancia de entre " +tolMin+ "kΩ e "+tolMax+"kΩ");
    }
    else if (resFin >= 1000000){
        resFin = resFin/1000000; 
        tolMax = ((resFin/100)*tol)+resFin;
    tolMin = resFin-((resFin/100)*tol);
        document.getElementById("resultado").innerHTML = ("Resistor é "+ resFin+ "MΩ com tolerancia de entre " +tolMin+ "MΩ e "+tolMax+"MΩ");
    }
    else{
        resFin = resFin;
        tolMax = ((resFin/100)*tol)+resFin;
    tolMin = resFin-((resFin/100)*tol);
        document.getElementById("resultado").innerHTML = ("Resistor é "+ resFin+ "Ω com tolerancia de entre " +tolMin+ "Ω e "+tolMax+"Ω");
    }
 }