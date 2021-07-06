const validar = (arg) => {
    return !isNaN(parseFloat(arg)) && isFinite(arg);
}

const positivo = (n) =>{
    if(validar(n) && n>=0){
        return true;
    }else{
        return false;
    };
}

const getValueInput = () =>{
    let inputValue1 = parseInt(document.getElementById("num1").value);
    let inputValue2 = parseInt(document.getElementById("num2").value);
    
    if(validar(inputValue1)&&validar(inputValue2)){
        
        document.getElementById('resultado').innerHTML = `
        <h5 class="pb-3">Los números ingresados son ${ inputValue1 } y ${ inputValue2 }</h5>
        <p>La suma es ${ suma( inputValue1, inputValue2 ) }</p>
        <p>La resta es ${ resta( inputValue1, inputValue2 ) }</p>
        <p>La multiplicación es ${ multiplicacion( inputValue1, inputValue2 ) }</p>
        <p>La división es ${ division( inputValue1, inputValue2 ) }</p>
        <p>El módulo es ${ modulo( inputValue1, inputValue2 ) }</p>
        `
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
    } else{
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        alert('Los valores ingresados no son validos')
    }



}

const suma = (n1, n2) => {
    return n1 + n2;
};

const resta = (n1, n2) => {
    return n1 - n2;
};
const multiplicacion = (n1, n2) => {
    return n1 * n2;
};
const division = (n1, n2) => {
    return (n1 / n2).toFixed(2);
};
const modulo = (n1, n2) => {
    return n1 % n2;
}

//Conversor de temperatura

const conv = () => {
    let inputTemp = parseInt(document.getElementById("temp").value);

    if(validar(inputTemp)){
        const kelvin = inputTemp + 273.15;
        const fahrenheit = (inputTemp * (9/5) ) + 32;
        document.getElementById('conversor').innerHTML = `
        <h5 class="pb-3">La temperatura en grados Celcius es ${ inputTemp } grados</h5>
        <p>En grados Kelvin es ${ kelvin } </p>
        <p>En grados Fahrenheit es ${ fahrenheit }</p>
        `
        document.getElementById("temp").value = "";

    } else {
        document.getElementById("temp").value = "";
        alert('Los valores ingresados no son validos')
    }
};

//conversor días
const dia = 1;
const semana = 7;
const año = 365;
const op = (d, m) => Math.floor(d/m);
const mod = (d, m) => d%m;

const cv = () => {
    let idDias = parseInt(document.getElementById("dias").value);
    let val = idDias
    let anios, semanas, dias;
    if(positivo(idDias)){
    ( mod(val, año) === 0) ? anios = op(val, año) : anios = op(val, año), val = mod(val, año);
    ( mod(val, semana) === 0) ? semanas = op(val, semana) : semanas = op(val, semana), val = mod(val, semana);
    ( mod(val, dia) === 0) ? dias = op(val, dia ) : anios, semanas, dias;
    document.getElementById('cvDias').innerHTML = `
        <h5 class="pb-3">La conversión para ${ idDias } días es:</h5>
        <p>${ anios } año/s </p>
        <p>${ semanas } semana/s</p>
        <p>${ dias } día/s</p>
        `
        document.getElementById("dias").value = "";
    } else {
        document.getElementById("dias").value = "";
        alert('Los valores ingresados no son validos')
    }
};

//Suma y promedio
const arr = [];
const sumYprom= () => {

    arr[0] = parseInt(document.getElementById("numero1").value);
    arr[1] = parseInt(document.getElementById("numero2").value);
    arr[2] = parseInt(document.getElementById("numero3").value);
    arr[3] = parseInt(document.getElementById("numero4").value);
    arr[4] = parseInt(document.getElementById("numero5").value);
    
    if ( validar(arr[0]) && validar(arr[1]) && validar(arr[2]) && validar(arr[3]) && validar(arr[4]) ){
        const sum = arr.reduce((a, b)=>a+b);
        const promed = sum/arr.length;

        document.getElementById('sumProm').innerHTML = `
        <h5 class="pb-3">La suma de los numeros y el promedio es:</h5>
        <p> La suma es: ${ sum }</p>
        <p> El promedio es: ${ promed }</p>
        `
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        document.getElementById("numero3").value = "";
        document.getElementById("numero4").value = "";
        document.getElementById("numero5").value = "";
       } else {
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        document.getElementById("numero3").value = "";
        document.getElementById("numero4").value = "";
        document.getElementById("numero5").value = "";
        alert('Los valores ingresados no son validos')
        }
        
}


