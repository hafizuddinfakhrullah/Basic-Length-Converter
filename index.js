let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');

let inputTypeValue, resultTypeValue;

//add listener
input.addEventListener('keyup', myResult);
inputType.addEventListener('change', myResult);
resultType.addEventListener('change', myResult);

//taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){

  //The inputTypeValue and resultTypeValue will updated, when the input and output value change.

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  //now compare the input and resultType value and add formula

    //***METER***
    //meter > kilometer
  if(inputTypeValue === "Meter" && resultTypeValue==="Kilometer"){    
    result.value = Number(input.value) * 0.001;

    //meter > centimeter
  } else if(inputTypeValue === "Meter" && resultTypeValue==="Centimeter"){
    result.value = Number(input.value) * 100;

    //meter = meter
  }else if(inputTypeValue === "Meter" && resultTypeValue==="Meter"){
    result.value = input.value
  }

    //***Kilometer***
    //KM > M
  if(inputTypeValue === "Kilometer" && resultTypeValue==="Meter"){
    result.value = Number(input.value) * 1000;

    //KM > CM    
  }else if(inputTypeValue === "Kilometer" && resultTypeValue==="Centimeter"){
    result.value = Number(input.value) * 100000;

    //KM = KM
  }else if(inputTypeValue === "Kilometer" && resultTypeValue==="Kilometer"){
    result.value = input.value
  }


    //***Centimeter***
    //CM > KM
  if(inputTypeValue === "Centimeter" && resultTypeValue==="Kilometer"){
    result.value = Number(input.value) * 0.00001;

    //CM > M
  }else if(inputTypeValue === "Centimeter" && resultTypeValue==="Meter"){
    result.value = Number(input.value) * 0.01;

    //CM = CM
  }else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
    result.value = input.value
  }

}